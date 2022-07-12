<template>
  <div>
    <h1 class="banner">Meri Icon</h1>
    <div class="code">
      <div>
        <h3>Installation</h3>
        <pre><code>npm install meri-icon --save<br/>yarn add meri-icon</code></pre>
      </div>
      <div>
        <h3>Usage</h3>
        <pre><code>import { IconHome } from 'meri-icon'<br/>&lt;IconHome :size="36" color="#009C22" &gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.banner {
  padding-top: 30px;
  text-align: center;
}
.code {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 720px;
}
.code div {
  width: 48%;
}
pre {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  color: #476391;
  background-color: #e7ecf3;
  overflow: auto;
}
h3 {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 10px 0;
}
</style>
