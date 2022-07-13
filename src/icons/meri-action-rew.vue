
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" :class="{
      m_svg_class: !!color,
      m_svg_class_hover: !!hoverColor,
    }" :style="{
      '--svg-color': color,
      '--svg-hover-color': hoverColor || color,
    }" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    >
      <path d="M10.066 12.314l10.053-8.226a1 1 0 10-1.266-1.548l-10.16 8.313a1.887 1.887 0 000 2.921l10.16 8.314a1 1 0 001.266-1.548l-10.053-8.226z" fill="#1B2129" class="fill_color"></path><path d="M4 3.201c0-.49.397-.887.887-.887h.226c.49 0 .887.397.887.887v18.226c0 .49-.397.887-.887.887h-.226A.887.887 0 014 21.427V3.2z" fill="#8B949E" class="fill_color"></path>
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
