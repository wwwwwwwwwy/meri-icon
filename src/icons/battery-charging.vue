
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.832 6.555a1 1 0 00-1.664-1.11l-4 6A1 1 0 007 13h4.132l-2.964 4.445a1 1 0 101.664 1.11l4-6A1 1 0 0013 11H8.869l2.963-4.445zM3 7a1 1 0 00-1 1v8a1 1 0 001 1h2a1 1 0 110 2H3a3 3 0 01-3-3V8a3 3 0 013-3h3.19a1 1 0 010 2H3zm11-1a1 1 0 011-1h2a3 3 0 013 3v8a3 3 0 01-3 3h-3.19a1 1 0 110-2H17a1 1 0 001-1V8a1 1 0 00-1-1h-2a1 1 0 01-1-1zm9 4a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" fill="#000" class="fill_color"></path>
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
