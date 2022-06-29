
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" fill="#000" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 9a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z" fill="#000" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 8a1 1 0 011-1h9.17a1 1 0 110 2H12a1 1 0 01-1-1z" fill="#000" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.45 5.194a1 1 0 011.366.366l4.59 7.94a1 1 0 01-1.732 1l-4.59-7.94a1 1 0 01.366-1.366z" fill="#000" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.96 13.134a1 1 0 01.366 1.366l-4.58 7.94a1 1 0 11-1.732-1l4.58-7.94a1 1 0 011.366-.366z" fill="#000" class="fill_color"></path>
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
