---
date: 2025-05-03
category:
  - nuxt
tag:
  - nuxt
layout: ArticleLayout
containerClass: article-container
---

# Nuxt排除pages页面中的components组件目录

通常在项目的页面开发过程中会将一整个页面分割成多个组件形式，这样也方便后续的维护，但由于 Nuxt 会为 `~/pages/` 目录中的每个页面自动创建路由，这会导致在`pages`目录中的新建的`components`目录中的组件代码也会被生成页面路由，并且是可以通过路由地址进行访问的，没有使用到的`components`组件代码也会被进行打包，这显然不是我们想要的效果，顺带记录下解决方法。

<!-- more -->

## 通过nuxtignore忽略

`.nuxtignore` 文件告诉 Nuxt 在构建阶段忽略项目根目录（rootDir）中的文件。

不足之处就是虽然我们可以忽略`pages`目录中`components`目录中的代码，但是最终打包的时候依旧会生成页面的路由，只是访问的时候会显示无法找到路由。

![image](https://image.liubing.me/i/2025/05/03/681581bf9f9c3.png)

![image](https://image.liubing.me/i/2025/05/03/6815821ee179b.png)

而且这个组件没有任何文件引用它，也会出现在最终的打包代码中，从而增加打包后的文件体积。

![image](https://image.liubing.me/i/2025/05/03/681582bf5be4e.png)

## 通过路由页面钩子排除

路由页面提供了一个`pages:extend`的钩子，该钩子可用于添加、更改或移除扫描路由中的页面，具体参见[Pages Hook](https://nuxt.com/docs/guide/recipes/custom-routing#pages-hook)，我们可以参考示例代码修改下从而移除`pages`中的`components`目录生成的路由。

```ts title="nuxt.config.ts"
import type { NuxtPage } from '@nuxt/schema'

export default defineNuxtConfig({
  hooks: {
    'pages:extend': function (pages) {
      function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = []
        for (const page of pages) {
          if (page.file?.match(pattern)) {
            pagesToRemove.push(page)
          }
          else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      // 移除pages中components目录自动生成的路由
      removePagesMatching(/\/components/, pages)
    },
  }
})
```

如果组件未被引用也不会出现在最终的打包文件中。

![image](https://image.liubing.me/i/2025/05/03/6815851ec28ac.png)
