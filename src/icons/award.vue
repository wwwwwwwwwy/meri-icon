
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
      <g clip-path="url(#clip0_1_38)" fill-rule="evenodd" clip-rule="evenodd" fill="#000" class="fill_color"><path d="M12 2a6 6 0 100 12 6 6 0 000-12zM4 8a8 8 0 1116 0A8 8 0 014 8z"></path><path d="M15.659 12.889a1 1 0 011.122.86l1.21 9.12a1 1 0 01-1.506.989L12 21.166l-4.486 2.692a1 1 0 01-1.505-.99l1.21-9.11a1 1 0 011.982.264l-.937 7.053 3.222-1.933a1 1 0 011.028 0l3.222 1.933-.937-7.063a1 1 0 01.86-1.123z"></path></g><defs><clipPath id="clip0_1_38"><rect width="24" height="24" fill="#fff" class="fill_color"></rect></clipPath></defs>
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
