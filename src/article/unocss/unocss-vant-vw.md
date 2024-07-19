---
date: 2023-10-01
category:
  - UnoCSS
  - Vant
tag:
  - 移动端
  - VW适配
layout: ArticleLayout
containerClass: article-container
---

# UnoCSS + Vant + VW 适配

记录下近期项目 H5 项目使用 UnoCSS + Vant 进行 VW 适配。

<!-- more -->

## 安装 UnoCSS

::: code-tabs
@tab pnpm

```bash
pnpm add -D unocss
```

@tab yarn

```bash
yarn add -D unocss
```

@tab npm

```bash
npm install -D unocss
```

:::

## 配置 UnoCSS

需要安装`@unocss/preset-rem-to-px`

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx({
      baseFontSize: 4 // 设置为4，实现w-1=1px
    })
  ]
  // 其他配置
})
```

## 安装 postcss-px-to-viewport-8-plugin

::: code-tabs
@tab pnpm

```bash
pnpm add -D postcss-px-to-viewport-8-plugin
```

@tab yarn

```bash
yarn add -D postcss-px-to-viewport-8-plugin
```

@tab npm

```bash
npm install -D postcss-px-to-viewport-8-plugin
```

:::

## 新建 postcss.config.js

此时插件会将上面的 px 单位转换成 vw。

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375 // 设计图以375px为基准
    }
  }
}
```
