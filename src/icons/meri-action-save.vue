
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
      <path d="M16.5 2.833v7.334c0 .491-.293.833-.571.833H8.07c-.278 0-.571-.342-.571-.833V2.833h-2v7.334C5.5 11.7 6.614 13 8.071 13h7.858c1.457 0 2.571-1.3 2.571-2.833V2.833h-2z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.48 1H3a2 2 0 00-2 2v18a2 2 0 002 2h18a2 2 0 002-2V8.178a2 2 0 00-.493-1.315l-4.52-5.178A2 2 0 0016.478 1zM3 21V3h13.48L21 8.178V21H3z" fill="#1B2129" class="fill_color"></path>
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
