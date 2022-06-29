
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3a1 1 0 011-1h6a5 5 0 015 5v14a1 1 0 11-2 0 2 2 0 00-2-2H2a1 1 0 01-1-1V3zm10 14.536V7a3 3 0 00-3-3H3v13h6a4 4 0 012 .536z" fill="#000" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.464 3.464A5 5 0 0116 2h6a1 1 0 011 1v15a1 1 0 01-1 1h-7a2 2 0 00-2 2 1 1 0 11-2 0V7a5 5 0 011.464-3.536zM13 17.536A4 4 0 0115 17h6V4h-5a3 3 0 00-3 3v10.536z" fill="#000" class="fill_color"></path>
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
