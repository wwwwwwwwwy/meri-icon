
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.26 16.365a.794.794 0 001.118 0 .723.723 0 000-1.076l-2.636-2.535h7.67c.48 0 .799-.307.799-.768 0-.46-.32-.768-.799-.768h-7.67l2.636-2.535a.723.723 0 000-1.075.739.739 0 00-.56-.23.74.74 0 00-.559.23l-3.995 3.917s0 .077-.08.077c-.24.23-.24.691.08.922l3.996 3.84z" fill="#8B949E" class="fill_color"></path><path d="M3.818 7.307V4.562c0-.41.333-.744.744-.744h14.876c.41 0 .744.333.744.744v14.876c0 .41-.333.744-.744.744H4.562a.744.744 0 01-.744-.744v-2.243a.91.91 0 00-1.818 0v2.243A2.562 2.562 0 004.562 22h14.876A2.562 2.562 0 0022 19.438V4.562A2.562 2.562 0 0019.438 2H4.562A2.562 2.562 0 002 4.562v2.745a.91.91 0 101.818 0z" fill="#1B2129" class="fill_color"></path>
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
