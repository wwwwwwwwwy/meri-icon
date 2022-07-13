
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
      <path d="M3.53 21.208a.962.962 0 010-1.36L19.849 3.532a.962.962 0 111.36 1.36L4.89 21.207a.962.962 0 01-1.36 0z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.86 20.813a1 1 0 01-1.414 0L3.863 5.229a1 1 0 111.414-1.414L20.86 19.398a1 1 0 010 1.415z" fill="#1B2129" class="fill_color"></path>
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
