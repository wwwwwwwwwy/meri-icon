
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
      <path d="M2 1.91A.91.91 0 012.91 1h18.18a.91.91 0 01.91.91v.18a.91.91 0 01-.91.91H2.91A.91.91 0 012 2.09v-.18z" fill="#1B2129" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.91 4.667H5.094a2 2 0 00-1.992 2.177l1.271 14.333A2 2 0 006.365 23H17.67a2 2 0 001.992-1.827l1.24-14.334a2 2 0 00-1.992-2.172zM6.365 21L5.094 6.667H18.91L17.67 21H6.364z" fill="#1B2129" class="fill_color"></path><path d="M11.092 10.25a1 1 0 112 0v8.083a1 1 0 11-2 0V10.25z" fill="#8B949E" class="fill_color"></path>
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
