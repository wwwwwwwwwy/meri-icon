
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
        <div>{{ iconComponentName }}</div>
      </li>
    </ul>
     <Banner />
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

    return { names, copyName };
  },
});
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  color: #486491;
  transition: background-color 0.2s;
}
.item:hover {
  background-color: #e7ecf3;
}
.item svg {
  margin-bottom: 12px;
}
</style>
