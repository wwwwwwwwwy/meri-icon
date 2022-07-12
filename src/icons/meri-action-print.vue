
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
      <path d="M7.375 3h9v4.112h2V2.86c0-1.008-.778-1.86-1.786-1.86H7.161c-1.008 0-1.786.852-1.786 1.86v4.42h2V3z" fill="#8B949E" class="fill_color"></path><path d="M7.079 19.48H3.667c-.34 0-.667-.368-.667-.877V8.277c0-.509.327-.877.667-.877h16.666c.34 0 .667.368.667.877v10.326c0 .509-.327.877-.667.877h-3.318v2h3.318c1.501 0 2.667-1.313 2.667-2.877V8.277C23 6.713 21.834 5.4 20.333 5.4H3.667C2.166 5.4 1 6.713 1 8.277v10.326c0 1.564 1.166 2.877 2.667 2.877h3.412v-2z" fill="#1B2129" class="fill_color"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.375 15.08h-7a2 2 0 00-2 2V21a2 2 0 002 2h7a2 2 0 002-2v-3.92a2 2 0 00-2-2zm-7 5.92v-3.92h7V21h-7z" fill="#8B949E" class="fill_color"></path>
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
