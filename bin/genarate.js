const cheerio = require("cheerio");
const queryColorName = require("./replaceColors");

// 获取SVG标签的属性
const generate_svg_attrs = (attrs) => {
  // 获取父级的属性
  const {
    viewBox = "0 0 24 24",
    fill = "none",
    xmlns = "http://www.w3.org/2000/svg",
  } = attrs;

  const baseAttrs = {
    xmlns,
    fill,
    viewBox,
    ":width": "width || size",
    ":height": "height || size",
    ":class": `{
        m_svg_class: !!color,
        m_svg_class_hover: !!hoverColor,
        }`,
    ":style": `{
            '--svg-color': color,
            '--svg-hover-color': hoverColor || color,
        }`,
  };

  if (fill !== "fill") {
    Object.assign(baseAttrs, {
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    });
  }

  return baseAttrs;
};

// 将标签对象转换成为字符串
const attrs2string = (attrs) => {
  return Object.entries(attrs).reduce(
    (con, [key, value]) => (con += `${key}="${value}" `),
    ""
  );
};

const generate_vue_template = (code_str, attrs) => {
  // 获取父级的属性
  const { width = 16, height = 16 } = attrs;

  const svg_attrs_string = attrs2string(generate_svg_attrs(attrs));

  return `
    <template>
      <svg
       ${svg_attrs_string}
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
      const html = ref(\`${code_str}\`)
      return { size,height,width, color, attrs ,html};
    },
  });
  </script>
  `;
};

const generate = (code_str) => {
  const new_code_str = code_str.replace(/#[A-Fa-f0-9]{6}/g, (code) => {
    console.log(code);
    const new_code = queryColorName(code);
    return new_code;
  });

  const $ = cheerio.load(new_code_str, { xmlMode: true });
  const svg = $("svg");
  // 获取SVG 的宽高
  const width = svg.attr("width");
  const height = svg.attr("height");
  const fill = svg.attr("fill");
  const xmlns = svg.attr("xmlns");
  const viewBox = `0 0 ${width} ${height}`;

  // 生成返回对应得Vue 组件
  const vue_component_text = generate_vue_template(svg.html(), {
    width,
    height,
    viewBox,
    fill,
    xmlns,
  });

  return vue_component_text;
};

module.exports = generate;

// generate(`<svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0_258_2542)">
// <path d="M1.58925 0C1.23097 0 0.848803 0.143312 0.586064 0.429936C0.323325 0.716561 0.156128 1.07484 0.156128 1.43312V27.5669C0.156128 27.9252 0.29944 28.3073 0.586064 28.5701C0.872688 28.8567 1.23097 29 1.58925 29H22.6084C22.9666 29 23.3488 28.8567 23.6115 28.5701C23.8982 28.2834 24.0415 27.9252 24.0415 27.5669V8.12102L15.9205 0H1.58925Z" fill="#F55047"/>
// <path d="M24.0415 8.12102H17.3536C16.9953 8.12102 16.6131 7.97771 16.3504 7.69108C16.0638 7.42834 15.9205 7.04618 15.9205 6.6879V0L24.0415 8.12102Z" fill="white" fill-opacity="0.5"/>
// <path d="M4.71613 12.288V18H5.65213V15.808H7.06813C8.46013 15.808 9.15613 15.216 9.15613 14.04C9.15613 12.872 8.46013 12.288 7.08413 12.288H4.71613ZM5.65213 13.088H7.01213C7.42013 13.088 7.72413 13.16 7.91613 13.312C8.10813 13.456 8.21213 13.696 8.21213 14.04C8.21213 14.384 8.11613 14.632 7.92413 14.784C7.73213 14.928 7.42813 15.008 7.01213 15.008H5.65213V13.088Z" fill="white"/>
// <path d="M9.95831 12.288V18H12.0463C12.9743 18 13.6703 17.744 14.1503 17.232C14.6063 16.744 14.8383 16.048 14.8383 15.144C14.8383 14.232 14.6063 13.536 14.1503 13.056C13.6703 12.544 12.9743 12.288 12.0463 12.288H9.95831ZM10.8943 13.088H11.8703C12.5823 13.088 13.1023 13.248 13.4303 13.576C13.7503 13.896 13.9103 14.424 13.9103 15.144C13.9103 15.848 13.7503 16.368 13.4303 16.704C13.1023 17.032 12.5823 17.2 11.8703 17.2H10.8943V13.088Z" fill="white"/>
// <path d="M15.7161 12.288V18H16.6521V15.472H19.4441V14.672H16.6521V13.088H19.6121V12.288H15.7161Z" fill="white"/>
// </g>
// <defs>
// <clipPath id="clip0_258_2542">
// <rect width="24" height="29" fill="white" transform="translate(0.156128)"/>
// </clipPath>
// </defs>
// </svg>
// `)
