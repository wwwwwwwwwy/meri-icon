#!/usr/bin/env node
/*
 * bin/figma-sync.js
 *
 * Self-contained Figma API sync script (no third-party deps, uses only Node core https).
 * Replaces primer/figma-action@v1.0.0-alpha.2 which silently fails to download SVGs.
 *
 * Reads:
 *   FIGMA_TOKEN     - Personal access token
 *   FIGMA_FILE_URL  - e.g. https://www.figma.com/file/Q4kJRItOmRyZ3WgrU5qcgj/...
 *
 * Writes:
 *   src/data.json           - components metadata
 *   src/svg/<name>.svg      - one file per COMPONENT
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_URL = process.env.FIGMA_FILE_URL;

if (!FIGMA_TOKEN) {
  console.error('FIGMA_TOKEN env var is missing');
  process.exit(1);
}
if (!FIGMA_FILE_URL) {
  console.error('FIGMA_FILE_URL env var is missing');
  process.exit(1);
}

const m = FIGMA_FILE_URL.match(/(?:file|design)\/([A-Za-z0-9]+)/);
if (!m) {
  console.error('Cannot extract file id from FIGMA_FILE_URL:', FIGMA_FILE_URL);
  process.exit(1);
}
const FILE_ID = m[1];

const rootDir = path.join(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const svgDir = path.join(srcDir, 'svg');

function httpGet(urlStr, headers) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const opts = {
      method: 'GET',
      hostname: u.hostname,
      path: u.pathname + u.search,
      headers: headers || {},
      port: u.port || 443,
    };
    const req = https.request(opts, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return httpGet(res.headers.location, headers).then(resolve, reject);
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        resolve({ statusCode: res.statusCode, headers: res.headers, body: buf });
      });
    });
    req.on('error', reject);
    req.setTimeout(60000, () => req.destroy(new Error('request timeout')));
    req.end();
  });
}

async function getJson(url) {
  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await httpGet(url, { 'X-Figma-Token': FIGMA_TOKEN, 'Accept': 'application/json' });
      if (res.statusCode !== 200) {
        throw new Error('HTTP ' + res.statusCode + ' for ' + url + ' body=' + res.body.toString().slice(0, 300));
      }
      return JSON.parse(res.body.toString('utf8'));
    } catch (e) {
      lastErr = e;
      console.warn('  retry ' + attempt + '/3 for ' + url.slice(0, 80) + ' -> ' + e.message);
      await new Promise(r => setTimeout(r, 1500 * attempt));
    }
  }
  throw lastErr;
}

function collectComponents(node, fileComponents, out) {
  if (node.type === 'COMPONENT') {
    const meta = fileComponents[node.id] || {};
    const box = node.absoluteBoundingBox || { width: 24, height: 24 };
    out[node.id] = {
      name: node.name,
      id: node.id,
      key: meta.key || '',
      file: FILE_ID,
      description: meta.description || '',
      width: box.width,
      height: box.height,
    };
  }
  if (node.children) {
    for (const ch of node.children) collectComponents(ch, fileComponents, out);
  }
}

async function chunkIds(ids, size) {
  const out = [];
  for (let i = 0; i < ids.length; i += size) out.push(ids.slice(i, i + size));
  return out;
}

async function downloadSvg(url, dest) {
  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await httpGet(url, {});
      if (res.statusCode !== 200) {
        throw new Error('HTTP ' + res.statusCode);
      }
      fs.writeFileSync(dest, res.body);
      return;
    } catch (e) {
      lastErr = e;
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
  throw lastErr;
}

async function runWithConcurrency(items, concurrency, worker) {
  const results = [];
  let idx = 0;
  let done = 0;
  const total = items.length;
  await Promise.all(new Array(concurrency).fill(0).map(async () => {
    while (true) {
      const i = idx++;
      if (i >= total) return;
      try {
        results[i] = await worker(items[i], i);
      } catch (e) {
        results[i] = { error: e };
      }
      done++;
      if (done % 10 === 0 || done === total) {
        console.log('  progress: ' + done + '/' + total);
      }
    }
  }));
  return results;
}

(async () => {
  console.log('Figma sync starting for file ' + FILE_ID);
  fs.mkdirSync(srcDir, { recursive: true });
  fs.mkdirSync(svgDir, { recursive: true });

  // 1. Fetch file tree
  console.log('Fetching file tree...');
  const fileResp = await getJson('https://api.figma.com/v1/files/' + FILE_ID);
  const fileComponents = fileResp.components || {};
  const components = {};
  for (const page of fileResp.document.children) {
    collectComponents(page, fileComponents, components);
  }
  const ids = Object.keys(components);
  console.log('Found ' + ids.length + ' COMPONENT nodes');
  if (ids.length === 0) {
    console.error('No components found, aborting.');
    process.exit(1);
  }

  // 2. Resolve SVG image URLs (batch to avoid URL too long)
  console.log('Resolving SVG image URLs...');
  const batches = await chunkIds(ids, 50);
  for (const batch of batches) {
    const u = 'https://api.figma.com/v1/images/' + FILE_ID + '?ids=' + encodeURIComponent(batch.join(',')) + '&format=svg';
    const r = await getJson(u);
    if (!r.images) {
      console.error('No images field in response:', JSON.stringify(r).slice(0, 300));
      process.exit(1);
    }
    for (const id of Object.keys(r.images)) {
      components[id].image = r.images[id];
    }
  }

  // 3. Write data.json
  fs.writeFileSync(path.join(srcDir, 'data.json'), JSON.stringify(components), 'utf8');
  console.log('Wrote src/data.json');

  // 4. Download SVGs concurrently
  console.log('Downloading SVGs to src/svg/ ...');
  const list = Object.values(components);
  const results = await runWithConcurrency(list, 8, async (c) => {
    if (!c.image) {
      return { skipped: true, reason: 'no image url', name: c.name };
    }
    const safeName = c.name.replace(/[\\/:*?"<>|]/g, '_');
    const dest = path.join(svgDir, safeName + '.svg');
    await downloadSvg(c.image, dest);
    return { name: safeName };
  });

  const ok = results.filter(r => r && !r.error && !r.skipped).length;
  const failed = results.filter(r => r && r.error);
  const skipped = results.filter(r => r && r.skipped);
  console.log('Done. ok=' + ok + ' failed=' + failed.length + ' skipped=' + skipped.length);
  if (failed.length) {
    failed.slice(0, 10).forEach((r, i) => console.warn('  fail[' + i + ']: ' + r.error.message));
  }
  if (skipped.length) {
    skipped.slice(0, 10).forEach((r, i) => console.warn('  skip[' + i + ']: ' + r.name + ' (' + r.reason + ')'));
  }
  // Only fail the step if everything failed; partial failures should still let the build try to proceed.
  if (ok === 0) {
    console.error('No SVGs were downloaded successfully.');
    process.exit(1);
  }
})().catch(err => {
  console.error('figma-sync failed:', err && err.stack ? err.stack : err);
  process.exit(1);
});
