<template>
  <chevrons width="50" height="50" />
  <chevrons :size="30" />
  <chevrons :size="60" :color="'red'" />
  <chevrons :size="60" :color="'currentColor'" :hoverColor="'blue'" />
  <chevrons :size="60" :hoverColor="'#FF11FF'" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import filterIcon from "./icons_back/filter.vue";
import chevrons from "./icons/chevrons-down.vue";

export default defineComponent({
  components: {
    filterIcon,
    chevrons,
  },
  setup() {},
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
