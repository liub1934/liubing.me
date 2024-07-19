---
date: 2023-02-04
category:
  - Vue
  - Vite
tag:
  - Vue
  - Vite
  - Scss
layout: ArticleLayout
containerClass: article-container
---

# 解决 Vite 引入 variables 变量样式文件报错 This file is already being loaded 问题

之前脚手架使用的 Vue Cli 的时候，一般样式文件会定义一个变量样式文件，如`variables.scss`，会在`vue.config`中全局引入，而`variables.scss`中也会通过`:export`的形式将变量导出，这样也方便在其他文件如 js 中引入相关变量。

<!-- more -->

::: code-tabs
@tab variables.scss

```scss
$main-color: #2f54eb;

:export {
  mainColor: $main-color;
}
```

@tab other.js

```js
import variables from '@/styles/variables.scss'
console.log(variables.mainColor) // #2f54eb
```

:::

## Vite 引用问题

在 Vite 中同样也可以`vite.config`中进行全局变量的引入，如下形式：

```ts
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `
          @import "./src/styles/variables.scss";
        `
    }
  }
}
```

此时在其他文件如 js 中通过`import variables`的形式引入该文件的时候会报一个`This file is already being loaded.`的错误，大致意思该文件已经全局引入了，不能够在其他地方再次引入，网上 Google 搜索了一圈也没看到啥好的解决方法，最后只找到一个取巧的方式。

## 取巧方式

由于在`vite.config`中已经全局引入`variables.scss`文件，在 scss 文件中都可以使用里面的变量，所以可以新建一个`variables.module.scss`的文件，里面只需要留导出变量的内容。

```scss
:export {
  mainColor: $main-color;
}
```

这样其他文件在需要使用`variables.scss`中变量的时候只需要`import` `variables.module.scss`文件即可，这样就不会触发全局引入的情况下在其他文件再次引入的时候报错问题。
