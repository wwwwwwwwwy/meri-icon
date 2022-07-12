
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
      <path d="M20.334 1.787A1 1 0 1121.748 3.2L3.363 21.586a1 1 0 01-1.414-1.414L20.334 1.787z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.887 8.21a1 1 0 00-1-1c-2.42 0-4.385 1.955-4.385 4.369a1 1 0 102 0 2.377 2.377 0 012.385-2.369 1 1 0 001-1zm-2 6.738a1 1 0 001 1 4.377 4.377 0 004.384-4.369 1 1 0 10-2 0 2.377 2.377 0 01-2.384 2.369 1 1 0 00-1 1z" fill="#8B949E" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.565 16.7a1 1 0 00.066-1.412c-.504-.554-1.326-1.665-2.442-3.313C5.145 7.278 8.372 5 11.886 5a8 8 0 012.82.511 1 1 0 00.698-1.873A10 10 0 0011.886 3C7.561 3 3.74 5.716.437 11.005a1.839 1.839 0 00.037 2.004c1.197 1.77 2.082 2.971 2.678 3.626a1 1 0 001.413.066zm13.873-9.699a1 1 0 00-.022 1.414c.585.604 1.648 1.832 3.174 3.668C18.616 16.74 15.386 19 11.886 19c-1.334 0-2.614-.324-3.855-.979a1 1 0 10-.933 1.769c1.525.805 3.125 1.21 4.788 1.21 4.308 0 8.132-2.695 11.457-7.945a1.839 1.839 0 00-.14-2.16c-1.598-1.925-2.71-3.21-3.35-3.872a1 1 0 00-1.415-.022z" fill="#1B2129" class="fill_color"></path>
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
