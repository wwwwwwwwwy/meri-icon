
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
      <path d="M11.191 7.93a1 1 0 112 0v5.876a1 1 0 01-2 0V7.93z" fill="#1B2129" class="fill_color"></path><path d="M13.396 16.858a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill="#1B2129" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.731 11.446a1 1 0 00.822-1.151C22.63 4.777 17.78.68 12.063.68 6.36.68 1.52 4.757.582 10.257a1 1 0 001.971.337c.775-4.538 4.782-7.913 9.512-7.913 4.74 0 8.755 3.391 9.516 7.944a1 1 0 001.151.821zM1.403 13.008a1 1 0 00-.811 1.159c.964 5.47 5.792 9.514 11.472 9.514 5.668 0 10.489-4.028 11.466-9.484a1 1 0 10-1.968-.353c-.807 4.502-4.798 7.837-9.498 7.837-4.71 0-8.707-3.348-9.503-7.862a1 1 0 00-1.158-.811z" fill="#8B949E" class="fill_color"></path>
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
