
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
      <g clip-path="url(#clip0_1_61)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.617.076a1 1 0 011.09.217l5.5 5.5a1 1 0 010 1.414L13.414 12l4.793 4.793a1 1 0 010 1.414l-5.5 5.5A1 1 0 0111 23v-8.586l-3.793 3.793a1 1 0 01-1.414-1.414L10.586 12 5.793 7.207a1 1 0 011.414-1.414L11 9.586V1a1 1 0 01.617-.924zM13 14.414l3.086 3.086L13 20.586v-6.172zm0-4.828V3.414L16.086 6.5 13 9.586z" fill="#000" class="fill_color"></path></g><defs><clipPath id="clip0_1_61"><rect width="24" height="24" fill="#fff" class="fill_color"></rect></clipPath></defs>
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
