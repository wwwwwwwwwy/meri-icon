
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
      <g clip-path="url(#clip0_1_123)" fill-rule="evenodd" clip-rule="evenodd" fill="#000" class="fill_color"><path d="M8 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"></path><path d="M8 12a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"></path><path d="M16 18a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"></path><path d="M16 12a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"></path><path d="M12 20a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"></path><path d="M12 14a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"></path><path d="M8.082.047A9 9 0 0117.48 6h.522a6 6 0 012.4 11.496 1 1 0 11-.802-1.832A4 4 0 0017.999 8H16.74a1 1 0 01-.968-.75 7 7 0 10-11.148 7.219 1 1 0 11-1.248 1.562A9 9 0 018.082.047z"></path></g><defs><clipPath id="clip0_1_123"><rect width="24" height="24" fill="#fff" class="fill_color"></rect></clipPath></defs>
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
