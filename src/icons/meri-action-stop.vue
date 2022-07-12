
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.217 7.777h-7.07a.84.84 0 00-.84.84v7.07c0 .464.376.84.84.84h7.07a.84.84 0 00.84-.84v-7.07a.84.84 0 00-.84-.84zm-5.91 6.75v-4.75h4.75v4.75h-4.75z" fill="#1B2129" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.493 11.418a1 1 0 00.822-1.151C22.392 4.749 17.543.652 11.825.652 6.122.652 1.281 4.73.343 10.23a1 1 0 001.971.336c.774-4.538 4.782-7.913 9.511-7.913 4.742 0 8.756 3.392 9.517 7.944a1 1 0 001.151.822zM1.164 12.98a1 1 0 00-.81 1.158c.964 5.47 5.792 9.514 11.471 9.514 5.669 0 10.49-4.027 11.467-9.484a1 1 0 10-1.969-.352c-.806 4.502-4.797 7.836-9.498 7.836-4.71 0-8.706-3.347-9.502-7.861a1 1 0 00-1.159-.811z" fill="#8B949E" class="fill_color"></path>
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
