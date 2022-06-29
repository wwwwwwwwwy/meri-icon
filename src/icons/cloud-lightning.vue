
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
      <g clip-path="url(#clip0_1_139)" fill="#000" class="fill_color"><path d="M19 17.9c-.5 0-.9-.3-1-.8-.1-.5.2-1.1.8-1.2 2.2-.4 3.6-2.6 3.1-4.7-.4-1.9-2-3.2-3.9-3.2h-1.3c-.5 0-.9-.3-1-.8-1-3.7-4.8-6-8.5-5-1.8.5-3.3 1.6-4.2 3.2-1 1.7-1.3 3.5-.8 5.4.5 1.9 1.7 3.4 3.4 4.4.5.2.7.8.4 1.3-.3.5-.9.7-1.4.4C2.4 15.7.9 13.7.2 11.3c-.6-2.3-.3-4.8 1-6.8C2.4 2.4 4.4 1 6.7.4c4.5-1.2 9.2 1.4 10.7 5.7h.6c2.8 0 5.3 2 5.9 4.8.7 3.2-1.4 6.4-4.7 7.1-.1-.1-.1-.1-.2-.1z"></path><path d="M11 24c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l3-4.4H9c-.4 0-.7-.2-.9-.5-.2-.3-.2-.7 0-1l4-6c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-3 4.4H15c.4 0 .7.2.9.5.2.3.2.7 0 1l-4 6c-.3.3-.6.5-.9.5z"></path></g><defs><clipPath id="clip0_1_139"><rect width="24" height="24" fill="#fff" class="fill_color"></rect></clipPath></defs>
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
