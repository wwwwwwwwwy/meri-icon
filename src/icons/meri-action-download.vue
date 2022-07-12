
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.025 1.982a1 1 0 112 0v14a1 1 0 11-2 0v-14z" fill="#1B2129" class="fill_color"></path><path d="M11.873 15.572l6.458-6.235a1 1 0 011.389 1.438l-7.174 6.927a.997.997 0 01-1.41-.021l-6.827-7a1 1 0 011.432-1.397l6.132 6.288z" fill="#1B2129" class="fill_color"></path><path d="M1.025 14.982v5a3 3 0 003 3h16a3 3 0 003-3v-5a1 1 0 10-2 0v5a1 1 0 01-1 1h-16a1 1 0 01-1-1v-5a1 1 0 10-2 0z" fill="#8B949E" class="fill_color"></path>
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
