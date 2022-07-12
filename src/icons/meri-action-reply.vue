
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.17 1H3a2 2 0 00-2 2v16.943a1.83 1.83 0 002.806 1.548l4.55-2.87a.92.92 0 01.49-.141H21.17c1.01 0 1.83-.82 1.83-1.83V2.83C23 1.82 22.18 1 21.17 1zM3 3h18v13.48H8.847a2.92 2.92 0 00-1.558.45L3 19.634V3z" fill="#8B949E" class="fill_color"></path><path d="M5.584 7.52a1 1 0 011-1h10.833a1 1 0 110 2H6.584a1 1 0 01-1-1z" fill="#1B2129" class="fill_color"></path><path d="M5.584 12.12a1 1 0 011-1h7.167a1 1 0 010 2H6.584a1 1 0 01-1-1z" fill="#1B2129" class="fill_color"></path>
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
