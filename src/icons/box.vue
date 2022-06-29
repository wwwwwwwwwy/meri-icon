
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.556 2.345h-.001l-7.998 4h-.002A1 1 0 003 7.24v9.527a1 1 0 00.55.9l7.997 3.999a1.002 1.002 0 00.896 0l8-4 .002-.002A1 1 0 0021 16.77V7.242a1 1 0 00-.555-.895l-.002-.002-7.998-3.998a1 1 0 00-.89 0zm1.334-.895l.445-.896a3 3 0 00-2.67 0l-.002.002-7.998 3.998-.001.001A3 3 0 001 7.24v9.518a3 3 0 001.65 2.696l.003.001 8 4a3 3 0 002.684 0l7.998-3.998.001-.001A3 3 0 0023 16.771V7.24a3.002 3.002 0 00-1.664-2.685h-.001l-7.998-4-.447.895z" fill="#000" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.426 5.713a1 1 0 011.341-.447L12 9.882l9.233-4.616a1 1 0 11.894 1.788l-9.68 4.84a1 1 0 01-.894 0l-9.68-4.84a1 1 0 01-.447-1.341z" fill="#000" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 10a1 1 0 011 1v11.76a1 1 0 11-2 0V11a1 1 0 011-1z" fill="#000" class="fill_color"></path>
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
