---
date: 2025-01-19
category:
  - naive-ui
  - nuxt
tag:
  - naive-ui
  - nuxt
layout: ArticleLayout
containerClass: article-container
---

# Nuxt 中使用 Naive UI 刷新页面组件样式延迟滞后加载问题

由于个人比较喜欢使用 Naive UI，在使用 Nuxt 过程中也是引入了该组件，由于该组件库提供的 Nuxt 模块 [nuxtjs-naive-ui](https://github.com/07akioni/nuxtjs-naive-ui) 长时间没更新导致在最新的 Nuxt 中使用在页面刷新的时候组件样式会存在延迟滞后加载问题，导致体验非常糟糕，搜索一番后前人已经给出了解决方法，顺便再次记录下。

<!-- more -->

![image](https://image.liubing.me/i/2025/01/19/678cc2ffda71c.gif)

## 临时解决

在谷歌搜索一番后在该[issue](https://github.com/07akioni/css-render/issues/1108)中找到解决办法。

需要在`plugins`目录新建一个`naive-ui.ts`插件，并添加以下的代码，如果`@css-render/vue3-ssr`不存在可以提前安装该依赖。

```ts
import { defineNuxtPlugin } from '#app'
import { setup } from '@css-render/vue3-ssr'

export default defineNuxtPlugin((nuxtApp) => {
  const { collect } = setup(nuxtApp.vueApp)
  useServerHead({
    style: () => {
      const stylesString = collect()
      const stylesArray = stylesString
        .split(/<\/style>/g)
        .filter((style) => style)
      return stylesArray.map((styleString: string) => {
        const match = styleString.match(/<style cssr-id="([^"]*)">([\s\S]*)/)
        if (match) {
          const id = match[1]
          return { 'cssr-id': id, children: match[2] }
        }
        return {}
      })
    }
  })
})
```

这样再次刷新页面的时候就不存在样式延迟滞后加载的问题了，但是控制台会有个 waring 警告，提示`@css-render/vue3-ssr`已经存在了。

![image](https://image.liubing.me/i/2025/01/19/678cc518090ea.png)

只需要将之前安装的`nuxtjs-naive-ui`模块在`nuxt.config.ts`中删除即可。

## 参考

- [https://github.com/07akioni/nuxtjs-naive-ui/issues/4](https://github.com/07akioni/nuxtjs-naive-ui/issues/4)
- [https://github.com/tusen-ai/naive-ui/issues/5220](https://github.com/tusen-ai/naive-ui/issues/5220)
