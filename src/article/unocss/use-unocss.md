---
date: 2023-09-30
category:
  - UnoCSS
tag:
  - Vite
  - Css
  - UnoCSS
layout: ArticleLayout
containerClass: article-container
---

# 全面拥抱原子 CSS 框架 UnoCSS

近期项目中接触并使用了 UnoCSS，使用一段时间后感觉还是很香的，在日常开发中其实存在了很多了 CSS 重复代码，比如会有很多页面或者组件使用到了`margin-top: 10px`的样式，有些人可能会想到定义一个 class`mt-10`来表示，那如果需要定义其他数值的样式呢，是不是就有点力不从心了，那还赶紧去尝试下 UnoCSS。

<!-- more -->

## 什么是 UnoCSS

UnoCSS 是一款轻量级的原子 CSS 框架，其核心理念是将样式表拆分成最小的可复用单元，即“原子”。这些原子样式由类名组成，通过类名的组合，可以组合出任意复杂的样式。比如有下面的一个组件。

```html
<div class="m-1">Hello</div>
```

其中`m-1`将被检测到并生成以下 CSS：

```css
.m-1 {
  margin: 1px;
}
```

当然`m-1`可以是其他合法的值，比如`m-2` `m-3` `m-4`等等，这一切得益于配置规则的动态化：

```diff
// uno.config.ts
export default defineConfig({
  rules: [
-    ['m-1', { margin: '1px' }]
+    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
})
```

这些类似的规则都是 UnoCSS 预设的规则，后面会降到预设相关的内容。

## 为什么选择 UnoCSS

市面上已经有其他成熟的原子 CSS 框架了，如 [Tailwind CSS](https://tailwindcss.com/) 和[ Windi CSS](https://windicss.org/)，为什么还要使用 UnoCSS，这个就仁者见仁智者见智，可以参考下 antfu 大佬写的[重新构想原子化 CSS](https://antfu.me/posts/reimagine-atomic-css-zh)，当然也可以参考下[文档的说法](https://unocss.dev/guide/why)。

## Vite 集成

UnoCSS 支持市面上各种框架/工具的集成，如 Vite、Webpack 等等，这里以常用的 Vite 为例。

### 安装 UnoCSS

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

### Vite 安装插件

```ts
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UnoCSS()]
})
```

### UnoCSS 配置文件

创建一个`uno.config.ts`文件

```ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
})
```

在入口文件中添加`virtual:uno.css`

```ts
// main.ts
import 'virtual:uno.css'
```

### VS Code 配置

VS Code 中安装[UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)扩展插件。

扩展插件会自动读取项目根目录下的`uno.config.ts`配置文件，扩展生效的时候在 class 名下面会有虚线展示，如下图所示：

![image](https://image.liubing.me/i/2023/09/30/651811c22b9ef.png)

如果项目是`monorepo`形式的目录，需要 VS Code 配置文件`settings.json`中手动设置`unocss.root`。

```json
{
  "unocss.root": "packages/client"
}
```

## UnoCSS 配置

这里强烈建议使用专用`uno.config.ts`文件来配置您的 UnoCSS，以获得 IDE 和其他集成的最佳体验。

完整功能的配置文件如下所示：

```ts
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  rules: [
    // ...
  ],
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
```

具体说明参考见文档[Configurations](https://unocss.dev/config/)说明介绍。
