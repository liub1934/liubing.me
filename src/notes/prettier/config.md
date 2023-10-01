# Prettier 配置

```js
// prettier.config.js
module.exports = {
  printWidth: 80, // 指定行的最大宽度，超过这个宽度的行将被格式化为多行。
  tabWidth: 2, // 指定制表符的宽度。
  useTabs: false, // 指定是否使用制表符而不是空格进行缩进。
  semi: false, // 指定是否在语句末尾添加分号。
  vueIndentScriptAndStyle: true, // 指定在Vue文件中缩进脚本和样式。
  singleQuote: true, // 指定是否使用单引号而不是双引号。
  quoteProps: 'as-needed', // 指定对象属性名称是否需要引号。
  bracketSpacing: true, // 指定是否在对象字面量中打印空格。
  trailingComma: 'none', // 指定是否在多行对象和数组字面量中添加尾随逗号。
  jsxBracketSameLine: false, // 指定JSX元素的闭合括号是否与最后一行的结尾对齐。
  jsxSingleQuote: false, // 指定在JSX属性中是否使用单引号。
  arrowParens: 'always', // 指定箭头函数参数是否需要括号。
  insertPragma: false, // 指定是否在文件顶部插入一个特殊的注释，以表明该文件已经被Prettier格式化过。
  requirePragma: false, // 指定是否只对包含特殊注释的文件进行格式化。
  proseWrap: 'never', // 指定是否将Markdown文本包装到指定的行宽度内。
  htmlWhitespaceSensitivity: 'strict', // 指定HTML标记中空格的敏感性。
  endOfLine: 'auto', // 指定行尾如何结束。
  rangeStart: 0 // 指定从哪个字符索引开始格式化。
}
```
