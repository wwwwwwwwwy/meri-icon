const getAttrs = (style) => {
  const baseAttrs = {
    'xmlns': 'http://www.w3.org/2000/svg',
    ':width': 'width || size',
    ':height': 'height || size',
    'viewBox': '0 0 24 24',
    'aria-hidden': 'true',
    ':class': `{
      m_svg_class: !!color,
      m_svg_class_hover: !!hoverColor,
    }`,
    ':style': `{
      '--svg-color': color,
      '--svg-hover-color': hoverColor || color,
    }`
  }
  const fillAttrs = {
    ':fill': 'color111'
  }
  const strokeAttrs = {
    // ':stroke': 'color',
    'fill': 'none',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }
  return Object.assign({}, baseAttrs, style === 'fill' ? fillAttrs : strokeAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  <template>
    <svg
      ${attrs}
      v-html="html"
    >
    </svg>
  </template>
  <script lang="ts">
import { defineComponent, PropType, toRefs,ref } from "vue";

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
    height: {
      type: Number as PropType<number>,
      default: 0,
    },
    width: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  setup(props, { attrs }) {
    const { size,height,width, color } = toRefs(props);
    const html = ref('${svgCode}')
    return { size,height,width, color, attrs ,html};
  },
});
</script>
`

module.exports = { getAttrs, getElementCode }
