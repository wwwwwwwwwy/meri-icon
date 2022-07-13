
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
      <path d="M10.64 17.87L21.209 4.898a1 1 0 00-1.55-1.263L8.64 17.16v5.21a1 1 0 102 0V17.87z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23 1.902A.905.905 0 0022.098 1a.875.875 0 00-.451.124L1.485 11.764a.917.917 0 00-.485.81c0 .339.192.643.496.801l5.232 2.863c.136.056.282.09.406.09.35 0 .654-.192.812-.496a.927.927 0 00-.406-1.217l-3.653-2.063 14.636-7.754L20.9 3.592l-2.082 16.557-5.503-2.626a.756.756 0 00-.395-.09.908.908 0 00-.857 1.195.86.86 0 00.451.517l6.642 3.134c.113.067.248.09.394.09a.946.946 0 00.418-.102.877.877 0 00.473-.665L23 2.014v-.112z" fill="#1B2129" class="fill_color"></path>
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
