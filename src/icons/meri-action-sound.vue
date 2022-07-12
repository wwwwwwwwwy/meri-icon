
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
      <path d="M16.582 17.622c1.13-1.61 1.75-3.35 1.75-5.25 0-1.847-.622-3.687-1.66-5.231a1 1 0 10-1.66 1.115c.826 1.23 1.32 2.689 1.32 4.117 0 1.46-.481 2.81-1.387 4.1a1 1 0 001.637 1.149z" fill="#8B949E" class="fill_color"></path><path d="M19.246 20.794c1.566-2.4 2.483-5.432 2.483-8.542 0-2.77-.854-5.431-2.358-8.308a1 1 0 00-1.773.927c1.369 2.617 2.131 4.992 2.131 7.38 0 2.72-.802 5.373-2.158 7.45a1 1 0 101.675 1.093z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 16.659a2.727 2.727 0 002.727 2.727h2.038l4.24 3.237A1.864 1.864 0 0013 21.142V2.95A1.864 1.864 0 009.83 1.62L5.944 5.444H3.727A2.727 2.727 0 001 8.17v8.488zm2.727-9.215h3.038L11 3.275v17.591l-4.56-3.48H3.728A.727.727 0 013 16.659V8.17c0-.402.326-.727.727-.727z" fill="#1B2129" class="fill_color"></path>
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
