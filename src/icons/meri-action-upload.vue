
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.027 16.987a1 1 0 11-2 0v-14a1 1 0 012 0v14z" fill="#1B2129" class="fill_color"></path><path d="M5.722 9.633a1 1 0 11-1.39-1.439l7.175-6.926a.997.997 0 011.41.021l6.826 7a1 1 0 11-1.432 1.396l-6.13-6.287-6.46 6.235z" fill="#1B2129" class="fill_color"></path><path d="M1.027 14.987v5a3 3 0 003 3h16a3 3 0 003-3v-5a1 1 0 10-2 0v5a1 1 0 01-1 1h-16a1 1 0 01-1-1v-5a1 1 0 10-2 0z" fill="#8B949E" class="fill_color"></path>
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
