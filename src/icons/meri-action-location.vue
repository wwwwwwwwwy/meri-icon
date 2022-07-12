
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
      <path opacity=".01" d="M2.283.296h20V20.01h-20V.296z" fill="#1B2129" class="fill_color"></path><path d="M18.612 3.834a9.529 9.529 0 00-3.165-2.015 9.916 9.916 0 00-3.599-.671 9.917 9.917 0 00-3.598.671 9.553 9.553 0 00-3.166 2.015 9.081 9.081 0 00-2.1 3.036 8.842 8.842 0 000 6.903 9.104 9.104 0 002.1 3.036l6.092 5.842c.376.36.969.36 1.345 0a.983.983 0 00-.069-1.472c-.26-.21-.503-.412-.606-.51-1.74-1.67-5.473-5.28-5.473-5.28-2.913-2.794-2.913-7.34 0-10.135 1.41-1.353 3.477-2.413 5.473-2.413 1.997 0 4.058 1.06 5.469 2.413 2.913 2.794 2.913 7.34 0 10.135 0 0-3.715 3.6-5.467 5.28-.099.095-.343.297-.605.51a.984.984 0 00-.067 1.472c.376.36.969.36 1.345 0l6.091-5.842a9.081 9.081 0 002.101-3.036 8.84 8.84 0 000-6.903 9.106 9.106 0 00-2.1-3.036z" fill="#1B2129" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.85 7.11c1.918 0 3.478 1.528 3.478 3.408 0 1.877-1.56 3.405-3.479 3.407-1.918 0-3.478-1.528-3.478-3.407 0-1.88 1.56-3.408 3.478-3.408zm-1.74 3.408c0 .94.78 1.703 1.739 1.703.96 0 1.739-.763 1.739-1.703 0-.94-.78-1.704-1.74-1.704s-1.739.763-1.739 1.704z" fill="#8B949E" class="fill_color"></path>
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
