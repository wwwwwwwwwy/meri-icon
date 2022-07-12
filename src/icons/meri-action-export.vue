
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" :class="{
      m_svg_class: !!color,
      m_svg_class_hover: !!hoverColor,
    }" :style="{
      '--svg-color': color,
      '--svg-hover-color': hoverColor || color,
    }" :stroke="color" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.008 1c.274 0 .507.097.7.295a.95.95 0 01.292.703v5.975a.962.962 0 01-.291.706.952.952 0 01-.701.292.952.952 0 01-.702-.292.962.962 0 01-.29-.706v-3.57l-8.23 8.263a.946.946 0 01-.697.289.963.963 0 01-.709-.283.975.975 0 01-.282-.713c0-.277.095-.508.286-.703l8.229-8.262h-3.557a.956.956 0 01-.701-.293.964.964 0 01-.29-.703c0-.277.097-.511.29-.706A.955.955 0 0115.056 1h5.952z" fill="#1B2129" class="fill_color"></path><path d="M21 11.274v9.052a.67.67 0 01-.667.674H3.667A.67.67 0 013 20.326V3.586c0-.372.3-.673.667-.673h8.45a1 1 0 100-2h-8.45A2.67 2.67 0 001 3.587v16.74A2.67 2.67 0 003.667 23h16.666A2.67 2.67 0 0023 20.326v-9.052a1 1 0 10-2 0z" fill="#8B949E" class="fill_color"></path>
    </svg>
  </template>
  <script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  props: {
    size: {
      type: Number as PropType<number>,
      default: 16,
    },
    color: {
      type: String as PropType<string | undefined>,
    },
    hoverColor: {
      type: String as PropType<string | undefined>,
    },
  },
  setup(props, { attrs }) {
    const { size, color } = toRefs(props);
    return { size, color, attrs };
  },
});
</script>


<style lang="less" scoped>
.m_svg_class {
  .fill_color {
    fill: var(--svg-color);
  }

  &:hover {
    .fill_color {
      fill: var(--svg-hover-color);
    }
  }
}

.m_svg_class_hover:hover {
  .fill_color {
    fill: var(--svg-hover-color);
  }
}
</style>
