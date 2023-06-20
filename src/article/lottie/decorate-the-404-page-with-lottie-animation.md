---
date: 2023-03-21
category:
  - Lottie
  - Vue
tag:
  - Lottie-Web
  - LottieFiles
layout: ArticleLayout
containerClass: article-container
---

# 使用 Lottie 动画装饰一下你的 404 页面

自己博客的 404 页面太单调无趣了，由于之前项目使用过[Lottie-Web](https://github.com/airbnb/lottie-web)做过动画，想着给 404 页面加上一个有趣的动画。然后就去 [LottieFiles](https://lottiefiles.com/featured)动画库搜索了下`404`，发现一个和谷歌浏览器断网小恐龙游戏类似的的 404 [动画效果](https://lottiefiles.com/84918-404-error-doodle-animation)，感觉很有趣，那就用它了，最终的效果大家可以通过访问 [404 页面](https://liubing.me/404.html)查看。

<!-- more -->

## 下载动画 JSON

[LottieFiles](https://lottiefiles.com/featured)上面能找到很多 404 页面的动画，可以挑一个你喜欢了。

![image](https://image.liubing.me/i/2023/03/21/641976c19325e.png)

这里就选择[小恐龙的动画](https://lottiefiles.com/84918-404-error-doodle-animation)，点击右上角的`Download`按钮，选择`Lottie JSON`进行下载。

![image](https://image.liubing.me/i/2023/03/21/641976e944b26.png)

下载完成后会得到一个 json 文件。

## 修改默认颜色

由于动画内容的黑色和博客默认的黑色不太一样，所以还需要借助 LottieFiles 提供的[编辑器](https://app.lottiefiles.com/preview?source=editor)修改下颜色。

![image](https://image.liubing.me/i/2023/03/21/64197a2531b1e.png)

上传刚刚下载的 json 文件，将`Unique colors`里面的黑色修改成想要的颜色。

![image](https://image.liubing.me/i/2023/03/21/64197a543ef01.png)

点击`Save`按钮保存后就能在[自己的项目](https://app.lottiefiles.com/)中找到修改后的动画了。

![image](https://image.liubing.me/i/2023/03/21/64197b7e91794.png)

同样是下载 Lottie JSON 文件。

![image](https://image.liubing.me/i/2023/03/21/64197bed575f5.png)

## 动画组件

[Lottie Web](http://airbnb.io/lottie/#/web) 的动画使用很简单，只需要传入一个容器`container`和动画 json 所在路径`path`，下面是文档中的一个初始化示例。

```js
var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'data.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'Hello World' // Name for future reference. Optional.
})
```

所以可以写一个简单的组件，传入相关参数即可，当然你也可以使用别人封装好的[lottie-web-vue](https://github.com/garbit/lottie-web-vue)，这里由于使用场景比较简单，就自己撸一个了，先将 lottie-web 安装一下。

::: code-tabs
@tab NPM

```sh
npm install lottie-web
```

@tab YARN

```sh
yarn add lottie-web
```

:::

由于自己的博客使用的 [vuepress2](https://v2.vuepress.vuejs.org/zh/)，可以在`src/.vuepress/components`目录中新建一个`LottieWeb`的自定义组件。

由于使用场景比较简单，将相关配置直接通过`options`传入，派发一个`DOMLoaded`事件。

::: code-tabs
@tab LottieWeb/index.vue

```vue
<template>
  <div class="lottie-web" ref="animContainer"></div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { AnimationItem } from 'lottie-web'
import lottie from 'lottie-web'

const props = defineProps({
  options: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['DOMLoaded'])
const animContainer = ref<Element | null>(null)
const anim = ref<AnimationItem | null>(null)

onMounted(() => {
  anim.value = lottie.loadAnimation({
    container: animContainer.value as Element,
    renderer: 'svg',
    loop: props.options.loop !== false,
    autoplay: props.options.autoplay !== false,
    animationData: props.options.animationData,
    path: props.options.path,
    rendererSettings: props.options.rendererSettings
  })
  anim.value.addEventListener('DOMLoaded', () => {
    emit('DOMLoaded', anim)
  })
})

onBeforeUnmount(() => {
  if (anim.value && anim.value) {
    anim.value.destroy()
  }
})
</script>
```

:::

## 集成到 404

可以参照 Vuepress 的[继承文档说明](https://v2.vuepress.vuejs.org/zh/reference/default-theme/extending.html)替换默认的 404 页面。博客主题使用的是[Mr.Hope](https://mrhope.site/)大佬写的[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)主题，好在大佬贴心的给[NotFound](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/src/client/layouts/NotFound.ts#L29)布局提供了一个默认的内容插槽，所以我们只需要引用内置的`NotFound`，将动画内容放到里面即可。

在`src/.vuepress/layouts`下面新建一个新的 NotFound 布局，将上面下载的 json 数据放到同级目录下并通过`new URL('./data.json', import.meta.url).href`形式传入 path。

新的 NotFound 布局写好后在`src/.vuepress/client.ts`中的`layouts`中引入即可。

::: code-tabs
@tab NotFound/index.vue

```vue
<template>
  <NotFound>
    <div class="not-found-hint">
      <p class="error-code">404</p>
      <h1 class="error-title">页面不存在</h1>
    </div>
    <LottieWeb
      :options="options"
      :style="{
        height: '50vh',
        opacity: showLottieWeb ? 1 : 0,
        'margin-top': '-60px'
      }"
      @DOMLoaded="DOMLoaded"
    />
  </NotFound>
</template>

<script lang="ts" setup>
import NotFound from 'vuepress-theme-hope/layouts/NotFound'
import LottieWeb from '../../components/LottieWeb/index.vue'
import { ref } from 'vue'

const showLottieWeb = ref(false)
const options = ref({
  path: new URL('./data.json', import.meta.url).href
})

function DOMLoaded() {
  const $rectList = document.querySelectorAll(
    '.lottie-web rect[fill="#ffffff"]'
  )
  $rectList.forEach((element) => {
    element.setAttribute('fill', 'transparent')
  })
  showLottieWeb.value = true
}
</script>

<style scoped lang="scss">
.not-found-hint {
  padding-bottom: 0;
}
</style>
```

@tab client.ts

```ts
import NotFound from './layouts/NotFound/index.vue'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  layouts: {
    NotFound
  }
})
```

:::

## 适配暗黑模式

由于动画背景是白色的，在暗黑模式下还是白色的会很刺眼，所以在上述代码在`DOMLoaded`的时候做了特殊处理。  
我们可以在生成的动画 SVG 中找到背景的元素`rect`元素，  
通过`document.querySelectorAll('.lottie-web rect[fill="#ffffff"]')`定位到该元素，  
使用`setAttribute`修改该背景的`fill`为`transparent`透明色。

![image](https://image.liubing.me/i/2023/03/21/64198551ec250.png)

此时在暗黑模式下刷新页面的时候会存在白色背景一闪的情况，如下图所示：

![image](https://image.liubing.me/i/2023/03/21/6419b12dad4ae.gif)

为了解决这个可以在动画组件上加个`style`样式`opacity`默认为 0，这样初始的时候不可见，通过`showLottieWeb`变量控制最终的显示，在样式替换完成后将动画组件显示可见，这样有一个缓冲就不会出现上述的现象了。

## 效果预览

[点击查看](https://liubing.me/404.html)

![image](https://image.liubing.me/i/2023/03/21/6419b40fb3016.gif)
