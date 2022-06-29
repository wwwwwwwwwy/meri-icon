
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 8a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1H4zM1 9a3 3 0 013-3h16a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V9z" fill="#000" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.879 2.879A3 3 0 0110 2h4a3 3 0 013 3v16a1 1 0 11-2 0V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v16a1 1 0 11-2 0V5a3 3 0 01.879-2.121z" fill="#000" class="fill_color"></path>
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
