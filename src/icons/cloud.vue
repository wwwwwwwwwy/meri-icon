
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
      <g clip-path="url(#clip0_1_121)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.873 3.559A9 9 0 0117.479 9H18a6 6 0 010 12H9A9 9 0 01.01 12.518L0 12.5l.007-.011a8.999 8.999 0 015.862-8.93h.004zm.69 1.876a7.007 7.007 0 00-3.105 2.28A7 7 0 008.977 19H18a4 4 0 100-8h-1.26a1 1 0 01-.968-.75 7 7 0 00-9.208-4.815z" fill="#000" class="fill_color"></path></g><defs><clipPath id="clip0_1_121"><rect width="24" height="24" fill="#fff" class="fill_color"></rect></clipPath></defs>
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
