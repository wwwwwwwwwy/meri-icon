
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5a1 1 0 00-1 1v2a1 1 0 01-2 0V6a3 3 0 013-3h16a3 3 0 013 3v12a3 3 0 01-3 3h-6a1 1 0 110-2h6a1 1 0 001-1V6a1 1 0 00-1-1H4zm-2.994 6.94a1 1 0 011.105-.884 10 10 0 018.833 8.834 1 1 0 01-1.988.22 8 8 0 00-7.067-7.066 1 1 0 01-.883-1.104zm.014 3.96a1 1 0 011.18-.78 6 6 0 014.68 4.68 1 1 0 11-1.96.4 4 4 0 00-3.12-3.12 1 1 0 01-.78-1.18z" fill="#000" class="fill_color"></path>
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
