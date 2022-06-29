
  <template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    v-bind="attrs"
    xmlns="http://www.w3.org/2000/svg"
    :class="{
      m_svg_class: !!color,
      m_svg_class_hover: !!hoverColor,
    }"
    :style="{
      '--svg-color': color,
      '--svg-hover-color': hoverColor || color,
    }"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V2Z"
      class="fill_color"
      fill="#1F2429"
    />
    <path
      d="M11.8471 15.5895L18.3054 9.35421C18.7028 8.97061 19.3358 8.98174 19.7194 9.37906C20.103 9.77639 20.0919 10.4095 19.6946 10.7931L12.5204 17.7194C12.3223 17.9106 12.0657 18.0038 11.8106 17.9999C11.5558 17.9961 11.3021 17.8953 11.1099 17.6981L4.28404 10.6981C3.89847 10.3027 3.90644 9.66962 4.30186 9.28404C4.69727 8.89847 5.33038 8.90644 5.71596 9.30186L11.8471 15.5895Z"
      class="fill_color"
      fill="#1F2429"
    />
    <path
      d="M1 14V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V14C23 13.4477 22.5523 13 22 13C21.4477 13 21 13.4477 21 14V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V14C3 13.4477 2.55228 13 2 13C1.44772 13 1 13.4477 1 14Z"
      class="fill_color"
      fill="#8D9399"
    />
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