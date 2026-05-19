const getAttrs = (style) => {
  const baseAttrs = {
    'xmlns': 'http://www.w3.org/2000/svg',
    ':width': 'width || size',
    ':height': 'height || size',
    'viewBox': '0 0 24 24',
    'aria-hidden': 'true',
    ':class': 'svgClass',
    ':style': 'svgStyle'
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
import { computed, defineComponent, toRefs,ref } from "vue";

export default defineComponent({
  props: {
    size: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
    },
    hoverColor: {
      type: String,
    },
    height: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { attrs }) {
    const { size,height,width, color, hoverColor } = toRefs(props);
    const html = ref('${svgCode}')
    const svgClass = computed(() => ({
      m_svg_class: !!color.value,
      m_svg_class_hover: !!hoverColor.value,
    }))
    const svgStyle = computed(() => ({
      "--svg-color": color.value,
      "--svg-hover-color": hoverColor.value || color.value,
    }))
    return { size,height,width, color, hoverColor, attrs ,html, svgClass, svgStyle};
  },
});
</script>
`

module.exports = { getAttrs, getElementCode }
