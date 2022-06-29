
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.707 3.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L12 12.586l9.293-9.293a1 1 0 011.414 0z" fill="#000" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-7a1 1 0 112 0v7a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h11a1 1 0 110 2H5z" fill="#000" class="fill_color"></path>
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
