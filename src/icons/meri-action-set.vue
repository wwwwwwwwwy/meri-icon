
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" :class="{
      m_svg_class: !!color,
      m_svg_class_hover: !!hoverColor,
    }" :style="{
      '--svg-color': color,
      '--svg-hover-color': hoverColor || color,
    }" :stroke="color" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.116 2.395L.57 10.659a2.692 2.692 0 00-.005 2.586l4.55 8.351A2.692 2.692 0 007.48 23h9.016c.984 0 1.89-.537 2.362-1.4l4.568-8.344a2.692 2.692 0 00-.014-2.61l-4.644-8.272A2.692 2.692 0 0016.42 1H7.476c-.982 0-1.886.534-2.359 1.395zm-2.795 9.893a.692.692 0 01.001-.665L6.87 3.359A.692.692 0 017.475 3h8.946c.25 0 .48.135.603.353l4.644 8.271a.692.692 0 01.004.672l-4.568 8.344a.692.692 0 01-.608.36H7.48a.692.692 0 01-.608-.361L2.32 12.288z" fill="#1B2129" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.922 11.957a5 5 0 11-10 0 5 5 0 0110 0zm-8 0a3 3 0 106 0 3 3 0 00-6 0z" fill="#8B949E" class="fill_color"></path>
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


<style lang="less" scoped>
.m_svg_class {
  .fill_color {
    fill: var(--svg-color);
  }

  &:hover {
    .fill_color {
      fill: var(--svg-hover-color);
    }
  }
}

.m_svg_class_hover:hover {
  .fill_color {
    fill: var(--svg-hover-color);
  }
}
</style>
