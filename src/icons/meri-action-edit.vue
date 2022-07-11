
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.492 3.301l.116-.156C13.483 1.965 15.416 1 16.911 1c2.617 0 4.732 2.145 4.732 4.784a4.798 4.798 0 01-1.645 3.627l-9.983 10.445a2.727 2.727 0 01-1.971.843H4.926A2.727 2.727 0 012.2 17.972v-2.834c0-.706.274-1.384.763-1.892l7.904-8.205 1.626-1.74zm.907 1.96l-1.077 1.151-.01.011-7.91 8.21a.727.727 0 00-.203.505v2.834c0 .401.326.727.727.727h3.118a.727.727 0 00.525-.225l8.825-9.233-3.995-3.98zM16.91 3c1.506 0 2.732 1.244 2.732 2.784a2.81 2.81 0 01-.53 1.649L14.9 3.72c.613-.41 1.422-.72 2.01-.72z" fill="#373C43" class="fill_color"></path><rect x="2.18" y="21.03" width="19" height="2" rx="1" fill="#8D9399" class="fill_color"></rect>
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
