
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
      <path d="M16.694 18.193l4.75 4.617a1 1 0 101.394-1.435l-4.75-4.616a1 1 0 10-1.394 1.434z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.659 10.782c0 5.403-4.402 9.782-9.83 9.782C5.402 20.564 1 16.185 1 10.782 1 5.378 5.402 1 10.83 1c5.427 0 9.829 4.378 9.829 9.782zM3 10.782c0 4.296 3.504 7.782 7.83 7.782 4.325 0 7.829-3.486 7.829-7.782 0-4.297-3.504-7.782-7.83-7.782C6.504 3 3 6.485 3 10.782z" fill="#1B2129" class="fill_color"></path>
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
