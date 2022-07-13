
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
      <path d="M1.433 0C1.075 0 .693.143.43.43.167.717 0 1.075 0 1.433v26.134c0 .358.143.74.43 1.003.287.287.645.43 1.003.43h21.02c.358 0 .74-.143 1.002-.43.287-.287.43-.645.43-1.003V8.12L15.765 0H1.432z" fill="#FFBA6B" class="fill_color"></path><path d="M23.886 8.121h-6.688c-.358 0-.74-.143-1.003-.43a1.375 1.375 0 01-.43-1.003V0l8.12 8.121z" fill="#fff" class="fill_color" fill-opacity=".5"></path><path d="M15.565 15.196l-5.509 3.626c-.58.38-1.056.13-1.056-.559v-7.526c0-.69.476-.941 1.056-.557l5.509 3.627c.58.38.58 1.007 0 1.39z" fill="#fff" class="fill_color"></path>
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
