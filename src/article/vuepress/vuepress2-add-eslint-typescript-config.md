---
date: 2024-11-10
category:
  - VuePress
tag:
  - Vue
  - VuePress
  - ESLint
layout: ArticleLayout
containerClass: article-container
---

# VuePress2 添加 ESLint Typescript

常规 ESLint 配置通常比较复杂，好在之前一直关注过 [antfu](https://github.com/antfu) 大佬的 [eslint-config](https://github.com/antfu/eslint-config)，乘着有时间把自己的 VuePress2 博客也迁移到使用该 ESLint 配置，该配置使用比较简单，不用太多繁琐的操作，照着项目文档操作即可。

<!-- more -->

## 安装 @antfu/eslint-config

这里额外添加了`typescript`，不然不支持格式化 TS 文件

```sh
pnpm add -D eslint typescript @antfu/eslint-config
```

添加`eslint.config.mjs`到项目根目录

```ts title="eslint.config.mjs"
import antfu from '@antfu/eslint-config'

export default antfu()
```

`package.json`文件中可以添加校验和格式化的命令

```json title="package.json"
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## 添加 TS 配置

这里推荐使用用于 Vue 项目的 TS 扩展[@vue/tsconfig](https://github.com/vuejs/tsconfig)

安装`@vue/tsconfig`

```sh
pnpm add -D @vue/tsconfig
```

根目录添加`tsconfig.json`文件，以下是我自己的配置文件，可以参考下。

```json title="tsconfig.json"
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "composite": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/.vuepress/*"],
      "@websites/*": ["src/.vuepress/public/assets/websites/*"],
      "@theme-hope/*": ["node_modules/vuepress-theme-hope/lib/client/*"]
    },
    "noEmit": true
  },
  "include": ["src/.vuepress/**/*", "types/**/*", "utils/**/*"],
  "exclude": [
    "node_modules",
    "src/.vuepress/.cache",
    "src/.vuepress/.temp",
    "src/.vuepress/dist"
  ]
}
```

## 添加 VsCode 配置

为了不影响全局的项目，将下面的配置添加到工作区的配置文件`.vscode/settings.json`中

```json title=".vscode/settings.json"
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

## 添加忽略文件

由于 ESLint 忽略文件`.eslintignore`文件在不久的将来会被弃用，这里推荐使用`antfu`配置中的`ignores`，忽略掉 vuepress 相关不用的文件内容。

```ts{4-11} title="eslint.config.mjs"
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '**/node_modules/*',
    '!**/.vuepress/**',
    '**/.vuepress/.cache/**',
    '**/.vuepress/.temp/**',
    '**/.vuepress/dist/**',
  ]
})
```

## 添加 Prettier 处理其他文件

由于 ESLint 尚无法处理 `.css` `.html`等文件，可以设置 `formatters` 配置来启用对于这些文件使用 `Prettier` 来格式化。

```ts
// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier'
  }
})
```

该配置由[eslint-plugin-format](https://github.com/antfu/eslint-plugin-format)驱动，所以需要先安装对应的插件。

```sh
npm i -D eslint-plugin-format
```

## 额外规则启用禁用

工厂函数`antfu`还接受任意数量的任意自定义配置覆盖

```ts{16-21} title="eslint.config.mjs"
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configures for antfu's config
  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ['**/*.ts'],
    rules: {},
  },
  {
    rules: {},
  },
)
```

## 结语

这样整个项目就可以愉快的使用`antfu/eslint-config`配置进行自动格式化代码了。更多其他配置可以参考[项目的文档](https://github.com/antfu/eslint-config/blob/main/README.md)即可。
