
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 22a1 1 0 11-2 0V7a1 1 0 112 0v15z" fill="#1B2129" class="fill_color"></path><path d="M12.153 7.41l-6.458 6.236a1 1 0 11-1.39-1.44l7.175-6.925a.997.997 0 011.41.02l6.826 7a1 1 0 11-1.432 1.397l-6.131-6.287z" fill="#1B2129" class="fill_color"></path><path d="M2 2a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" fill="#8B949E" class="fill_color"></path>
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
