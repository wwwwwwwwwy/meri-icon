
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M.293.293a1 1 0 011.414 0l4.779 4.779h.001l17.22 17.22a1 1 0 01-1.414 1.415L16.586 18H2a1 1 0 110-2 2 2 0 002-2V9c0-1.038.202-2.057.584-3.001L.293 1.707a1 1 0 010-1.414zm5.877 7.29L14.586 16H5.464A4 4 0 006 14V9c0-.481.058-.956.17-1.416z" fill="#000" class="fill_color"></path><path d="M12.045 2.997a6 6 0 00-2.994.774 1 1 0 01-.982-1.742A8 8 0 0120 9.001V13a1 1 0 11-2 0V9a6.003 6.003 0 00-5.955-6.003z" fill="#000" class="fill_color"></path><path d="M9.768 20.135a1 1 0 011.367.363 1 1 0 001.73 0 1 1 0 011.73 1.004 3 3 0 01-5.19 0 1 1 0 01.363-1.367z" fill="#000" class="fill_color"></path>
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
