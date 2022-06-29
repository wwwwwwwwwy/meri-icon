
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
      <g clip-path="url(#clip0_1_141)" fill="#000" class="fill_color"><path d="M8.9 21c-3.3 0-6.3-1.8-7.9-4.6-1.2-2.1-1.4-4.5-.8-6.8.7-2.3 2.2-4.2 4.3-5.4.5-.3 1.1-.2 1.4.3.2.5.1 1.1-.4 1.4-1.6.9-2.8 2.4-3.3 4.2-.5 1.8-.3 3.7.6 5.3C4 17.7 6.4 19.1 9 19h9c.5 0 .9-.1 1.4-.2.5-.2 1.1.1 1.3.6.2.5-.1 1.1-.6 1.3-.7.2-1.3.4-2 .4H9c0-.1-.1-.1-.1-.1zm13.7-3c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.5-1.3.9-2-.1-4.4-2.1-5.2-.5-.2-1-.3-1.6-.3h-1.3c-.5 0-.9-.3-1-.8-.7-2.9-3.1-5-6.1-5.3-.6 0-1-.5-.9-1.1 0-.5.5-1 1.1-.9 3.5.3 6.5 2.7 7.7 6h.5c.8 0 1.6.2 2.3.5 3 1.3 4.5 4.8 3.2 7.9-.1.3-.5.6-.9.6z"></path><path d="M23 24c-.3 0-.5-.1-.7-.3l-22-22C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0l22 22c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path></g><defs><clipPath id="clip0_1_141"><rect width="24" height="24" fill="#fff" class="fill_color"></rect></clipPath></defs>
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
