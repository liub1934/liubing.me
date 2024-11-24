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

```ts title="package.json"
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
    // 由于会格式化及校验md文件中的代码块的内容，这里我暂时忽略了md文件
    '**/*.md'
  ]
})
```

## 添加 Prettier 单独格式化 MD 文件

该配置会要求禁用 Prettier 和代码自动保存功能，导致 MD 文件在保存的时候无法使用 Prettier 自动格式化，这里先暂时先注释`prettier.enable`和`editor.formatOnSave`来启用默认的 Prettier 和代码自动格式功能。

```json title=".vscode/settings.json"
{
  // Disable the default formatter, use eslint instead
  // "prettier.enable": false,
  // "editor.formatOnSave": false,
}
```

这样后自动保存 Prettier 格式化会和 ESLint 格式化打架，我这里暂时添加了`.prettierignore`文件忽略会打架的文件。

```txt title=".prettierignore"
**/*.js
**/*.jsx
**/*.ts
**/*.tsx
**/*.vue
**/*.json
**/*.html
**/*.yaml
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
