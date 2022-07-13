
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21 2.833H3a2 2 0 00-2 2V21a2 2 0 002 2h18a2 2 0 002-2V4.834a2 2 0 00-2-2zM3 21V4.834h18V21H3z" fill="#1B2129" class="fill_color"></path><path d="M5.584 2a1 1 0 012 0v3.5a1 1 0 11-2 0V2z" fill="#1B2129" class="fill_color"></path><path d="M16.584 2a1 1 0 112 0v3.5a1 1 0 11-2 0V2z" fill="#1B2129" class="fill_color"></path><path d="M4.666 11.166a1 1 0 011-1h4.417a1 1 0 110 2H5.666a1 1 0 01-1-1z" fill="#8B949E" class="fill_color"></path><path d="M4.666 15.75a1 1 0 011-1h4.417a1 1 0 110 2H5.666a1 1 0 01-1-1z" fill="#8B949E" class="fill_color"></path><path d="M12.916 11.166a1 1 0 011-1h4.417a1 1 0 110 2h-4.417a1 1 0 01-1-1z" fill="#8B949E" class="fill_color"></path>
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
