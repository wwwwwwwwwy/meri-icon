
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3 11.933c0 2.424-1.92 4.4-4.3 4.4-2.382 0-4.3-1.976-4.3-4.4 0-2.423 1.918-4.4 4.3-4.4 2.38 0 4.3 1.977 4.3 4.4zm-6.6 0c0 1.332 1.036 2.4 2.3 2.4 1.263 0 2.3-1.068 2.3-2.4 0-1.332-1.037-2.4-2.3-2.4-1.264 0-2.3 1.068-2.3 2.4z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.257 13.41C20.045 19.08 16.254 22 11.886 22 7.507 22 3.772 19.069.688 13.38a1.846 1.846 0 010-1.76C3.772 5.931 7.508 3 11.886 3c4.368 0 8.16 2.919 11.371 8.59.32.565.32 1.255 0 1.82zm-1.783-.91C18.594 7.446 15.399 5 11.886 5c-3.51 0-6.641 2.443-9.4 7.5 2.759 5.057 5.89 7.5 9.4 7.5 3.513 0 6.708-2.446 9.588-7.5z" fill="#1B2129" class="fill_color"></path>
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
