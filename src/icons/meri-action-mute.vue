
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
      <g clip-path="url(#clip0_642_457)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.688 18.518h2.07l4.268 3.257a1.864 1.864 0 002.994-1.48V2.014A1.864 1.864 0 008.85.685l-3.912 3.85h-2.25A2.707 2.707 0 00-.02 7.243v8.567a2.707 2.707 0 002.708 2.708zM5.773 6.575L9.98 2.434v17.505l-4.533-3.46h-2.76a.668.668 0 01-.667-.669V7.243c0-.369.299-.668.668-.668h3.085z" fill="#1B2129" class="fill_color"></path><path d="M14.563 16.134a1 1 0 010-1.414l5.608-5.608a1 1 0 111.414 1.414l-5.608 5.608a1 1 0 01-1.414 0z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.643 16.172a1 1 0 01-1.415 0l-5.713-5.713a1 1 0 011.414-1.414l5.714 5.713a1 1 0 010 1.414z" fill="#8B949E" class="fill_color"></path></g><defs><clipPath id="clip0_642_457"><rect width="24" height="24" fill="#fff" class="fill_color"></rect></clipPath></defs>
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
