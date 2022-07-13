
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.298 11.514l3.914 4.125-.462 4.862A1.846 1.846 0 007.3 22.38l4.894-2.044 4.899 2.045a1.846 1.846 0 002.549-1.88l-.465-4.884 3.649-4.155a1.847 1.847 0 00-.957-3.013l-5.045-1.21-3.086-4.707a1.847 1.847 0 00-3.088.001l-3.079 4.7L2.23 8.443a1.846 1.846 0 00-.931 3.071zm5.991 3.409l-4.353-4.59 5.866-1.33 3.393-5.179 3.392 5.173 5.568 1.336-4.05 4.613.522 5.49-5.433-2.268-5.428 2.267.523-5.512z" fill="#1B2129" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.323 9.493a.977.977 0 111.623-1.088l.595.887a.977.977 0 11-1.623 1.088l-.595-.887z" fill="#8B949E" class="fill_color"></path>
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
