
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
      <path d="M21.31 5.76A11.164 11.164 0 0012.138 1C5.99 1 1 5.922 1 12s4.99 11 11.137 11c5.183 0 9.65-3.525 10.835-8.443a1 1 0 10-1.944-.469c-.97 4.02-4.633 6.912-8.89 6.912C7.087 21 3 16.968 3 12c0-4.967 4.088-9 9.137-9a9.165 9.165 0 017.534 3.906 1 1 0 001.64-1.146z" fill="#1B2129" class="fill_color"></path><path d="M20.166 5.94h-4a1 1 0 100 2h6V2a1 1 0 10-2 0v3.94z" fill="#8B949E" class="fill_color"></path>
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
