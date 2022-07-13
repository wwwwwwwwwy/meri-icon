
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9.686a1 1 0 11-2 0V3.818A2.818 2.818 0 013.818 1h6.309a1 1 0 010 2H3.818A.818.818 0 003 3.818v5.868zM11.172 22a1 1 0 00-1-1H3.818A.818.818 0 013 20.182v-5.858a1 1 0 10-2 0v5.858A2.818 2.818 0 003.818 23h6.354a1 1 0 001-1zM22 13.328a1 1 0 00-1 1v5.854a.818.818 0 01-.818.818h-6.37a1 1 0 100 2h6.37A2.818 2.818 0 0023 20.182v-5.854a1 1 0 00-1-1zM12.812 2a1 1 0 001 1h6.37c.452 0 .818.366.818.818V9.7a1 1 0 102 0V3.82A2.818 2.818 0 0020.182 1h-6.37a1 1 0 00-1 1z" fill="#8B949E" class="fill_color"></path><path d="M1 12a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1z" fill="#1B2129" class="fill_color"></path>
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
