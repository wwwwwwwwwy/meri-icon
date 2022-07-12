
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.402 23a2.156 2.156 0 01-1.032-.258l-2.84-1.566a2.146 2.146 0 01-1.12-1.89v-8.992a.429.429 0 00-.171-.344L1.676 4.713l-.086-.086a2.1 2.1 0 01-.409-2.318A2.11 2.11 0 013.14 1.021h17.686c.861 0 1.636.494 1.98 1.288a2.14 2.14 0 01-.387 2.318l-.087.086-6.626 5.302a.429.429 0 00-.15.343v10.496A2.149 2.149 0 0113.402 23zM2.796 3.425l6.52 5.194c.516.403.817 1.02.817 1.674v8.994a.43.43 0 00.215.386l2.84 1.545a.431.431 0 00.646-.386V10.358c-.003-.65.29-1.265.796-1.674l6.54-5.259a.428.428 0 00-.344-.687H3.14a.43.43 0 00-.344.687z" fill="#1B2129" class="fill_color"></path><path d="M17 12a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" fill="#8B949E" class="fill_color"></path><path d="M17 16a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" fill="#8B949E" class="fill_color"></path><path d="M17 20a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" fill="#8B949E" class="fill_color"></path>
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
