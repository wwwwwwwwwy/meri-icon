
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.154 1H3a2 2 0 00-2 2v6.154a2 2 0 002 2h6.154a2 2 0 002-2V3a2 2 0 00-2-2zM3 9.154V3h6.154v6.154H3z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21 1h-6.154a2 2 0 00-2 2v6.154a2 2 0 002 2H21a2 2 0 002-2V3a2 2 0 00-2-2zm-6.154 8.154V3H21v6.154h-6.154z" fill="#1B2129" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.154 12.846H3a2 2 0 00-2 2V21a2 2 0 002 2h6.154a2 2 0 002-2v-6.154a2 2 0 00-2-2zM3 21v-6.154h6.154V21H3z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12.846h-6.154a2 2 0 00-2 2V21a2 2 0 002 2H21a2 2 0 002-2v-6.154a2 2 0 00-2-2zM14.846 21v-6.154H21V21h-6.154z" fill="#8B949E" class="fill_color"></path>
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
