const { default: colors } = require("./colors");

// 获取 value:key 的对象方便查询
const colors_value_name = {};
for (const [key, value] of Object.entries(colors)) {
  colors_value_name[value.toLowerCase()] = key;
}

// 输入颜色进行查询
module.exports = (value) => {
  const color = value.toLowerCase();
  // 如果是相关色值直接返回
  if (colors_value_name[color]) return `var(${colors_value_name[color]})`;
  console.log(
    "old================================================================================" +
      color
  );
  return color;
};
