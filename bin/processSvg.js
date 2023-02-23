const Svgo = require('svgo');
const cheerio = require('cheerio')
const framework = process.env.npm_package_config_framework || 'react'

/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase())
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimize(svg) {
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      // { removeAttrs: { attrs: '(fill|stroke.*)' } },
      { removeTitle: true },
    ],
  });

  return new Promise(resolve => {
    svgo.optimize(svg).then(({ data }) => resolve(data));
  });
}

// const colorMap = new Map();

// function queryColorByKey(key) {
//   // 如果不存在则进行添加
//   if (!colorMap.has(key)) {
//     const color = /fill=\"(.*?)\"/.exec(key)[1];
//     console.log(++num)
//     colorMap.set(key, {
//       color,
//       className:filter
//     });
//   }

//   return colorMap.get(key);
// }

function addClassForPath(svg) {
  return svg.replace(/fill=".*?"/g, function (attr) {
    return `${attr} class="fill_color"`
  })
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $('body').children().html();
}

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg) {
  const optimized = await optimize(svg)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then(svg => svg.replace(/;/g, ''))
    // .then(removeSVGElement)
    .then(svg => {
      // console.log(svg)
      return addClassForPath(svg);
    })
  return optimized;
}

module.exports = processSvg;