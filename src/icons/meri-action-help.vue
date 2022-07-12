
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
      <path d="M12.086 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 2c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z" fill="#1B2129" class="fill_color"></path><path d="M12.309 4.8c-1.547 0-2.777.415-3.667 1.266-.91.83-1.356 1.958-1.356 3.402h2.246c0-.87.191-1.563.573-2.037.423-.554 1.123-.831 2.076-.831.763 0 1.357.198 1.78.593.403.396.615.93.615 1.622 0 .515-.19.99-.572 1.444l-.36.376c-1.314 1.088-2.12 1.9-2.416 2.453-.276.514-.403 1.147-.403 1.879v.336h2.268v-.336c0-.495.106-.93.339-1.325.19-.356.487-.692.869-1.009 1.017-.811 1.61-1.325 1.801-1.543.509-.633.784-1.444.784-2.413 0-1.187-.424-2.136-1.25-2.829-.848-.712-1.95-1.048-3.327-1.048zm-.36 11.571c-.446 0-.806.12-1.081.396-.318.257-.467.593-.467 1.009 0 .395.149.732.467 1.009.275.276.635.415 1.08.415.424 0 .806-.139 1.124-.396a1.34 1.34 0 00.445-1.028c0-.416-.149-.752-.445-1.009-.297-.277-.679-.396-1.124-.396z" fill="#8B949E" class="fill_color"></path>
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
