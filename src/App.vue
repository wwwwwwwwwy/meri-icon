<template>
  <div class="container">
    <h1 class="banner">Meri Icon</h1>
    <ul class="wrapper">
      <li
        class="item"
        v-for="iconComponentName in names"
        :key="iconComponentName"
        :title="iconComponentName"
        @click="copyName(iconComponentName)"
      >
        <component :is="iconComponentName" :size="36" />
        <div class="name">{{ iconComponentName }}</div>
      </li>
    </ul>
    <Banner />

    <!-- 切换主题按钮 -->
    <div class="theme" @click="toggle">主题</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Message from "vue-m-message";
import "vue-m-message/dist/style.css";
import Banner from "./components/Banner.vue";

import * as icons from "./index";

export default defineComponent({
  components: {
    Banner,
    ...icons,
  },
  setup() {
    const names = Object.keys(icons);

    const copyName = (name: string) => {
      const input = document.createElement("input");
      input.setAttribute("readonly", "readonly");
      input.setAttribute("value", name);
      document.body.appendChild(input);
      input.setSelectionRange(0, 9999);
      input.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
      }
      document.body.removeChild(input);
      console.log(this);

      Message.success("复制成功 !");
    };

    const toggle = () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    };

    return { names, copyName, toggle };
  },
});
</script>

<style lang="less">
html {
  background: var(--gray-0);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--gray-900);
  margin-top: 60px;
}
.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}
.wrapper {
  list-style: none;
  display: flex;
  flex-flow: wrap;
  margin: 0;
  padding: 15px 0;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  padding: 20px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--gray-900);
  transition: background-color 0.2s;

  .name {
    color: var(--gray-900);
  }
}
.item:hover {
  background-color: var(--alpha-30);
}
.item svg {
  margin-bottom: 12px;
}

.theme {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 80px;
  border-radius: 4px;
  background: var(--blue-500);
  color: var(--gray-0);
  padding: 8px;
  cursor: pointer;
  user-select: none;
}
</style>
