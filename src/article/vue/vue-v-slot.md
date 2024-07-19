---
date: 2019-05-14
category:
  - Vue
  - Web
tag:
  - Vue
  - v-slot
source: 掘金
sourceLink: https://juejin.im/post/5c64e11151882562e4726d98
layout: ArticleLayout
containerClass: article-container
---

# Vue.js 你需要知道的 v-slot[转]

从 [vue@2.6.x](https://github.com/vuejs/vue/releases/tag/v2.6.0) 开始，Vue 为具名和范围插槽引入了一个全新的语法，即我们今天要讲的主角：`v-slot` 指令。目的就是想统一 `slot` 和 `scope-slot` 语法，使代码更加规范和清晰。既然有新的语法上位，很明显，`slot` 和 `scope-slot` 也将会在 `vue@3.0.x` 中彻底的跟我们说拜拜了。而从 `vue@2.6.0` 开始，官方推荐我们使用 `v-slot` 来替代后两者。

<!-- more -->

## 具名插槽

> 在 2.6.0+ 中已弃用

先前，我们使用具名插槽来自定义模板内容，例如，一个假设的 `<base-layout>` 组件的模板如下：

```vue
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

在向具名插槽提供内容的时候，我们可以在一个父组件的 `<template>` 元素上使用 `slot` 特性：

```vue
<base-layout>
  <template slot="header">
    <h1>Here might be a page title</h1>
  </template>
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <template slot="footer">
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

或者直接用在一个普通的元素上：

```vue
<base-layout>
  <h1 slot="header">Here might be a page title</h1>
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <p slot="footer">Here's some contact info</p>
</base-layout>
```

上述两个示例渲染出来的 HTML 都将会是：

```vue
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

我们可以使用 `v-slot` 指令改写上面的栗子：

```vue
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

就是这么简单，插槽的名字现在通过 `v-slot:slotName` 这种形式来使用。

> **Tips:** 没有名字的 `<slot>` 隐含有一个 `"default"` 名称

例如，上面的默认插槽，如果你想显示调用的话，可以这样：

```vue
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>
  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>
  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

无论哪种方式，上面的代码都将输出为下面代码：

```vue
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

> 请注意， `v-slot` 只能添加到 `<template>` 或自定义组件上，这点与弃用的 slot 属性不同

## 作用域插槽

> 在 2.6.0+ 中已弃用

有时候，我们想在父组件中访问子组件内部的一些可用数据。例如，假设有一个下面模板的 `<current-user>` 组件：

```vue
<span>
  <slot>{{ user.lastName }}</slot>
</span>
```

我们可能想用用户的名字来替换掉插槽里面的姓，于是我们这样写：

```vue
<current-user>
  {{ user.firstName }}
</current-user>
```

很不幸，上面这段代码不能如你预期那样工作，因为当前代码的作用域环境是在父组件中，所以它访问不了 `<current-user>` 内部的数据。  
为了解决这个， 我们可以在 `<current-user>` 内部的 `<slot>` 元素上动态绑定一个 `user` 对象属性：

```vue
<span>
  <!-- 完整 v-bind:user 下面是简写形式 -->
  <slot :user="user">
    {{ user.lastName }}
  </slot>
</span>
```

绑定到 `<slot>` 元素上的属性我们称之为 **slot props**。现在，在父作用域中，我们可以通过 `slot-scope` 来访问 `user` 数据了：

```vue
<current-user>
  <template slot-scope="slotProp">
    {{ slotProp.user.firstName }}
  </template>
</current-user>
```

同样的，我们使用 `v-slot` 重构上面的代码：

```vue
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

或者直接作用在 `<current-user>` 上的写法：

```vue
<!-- 省略默认插槽名字 -->
<current-user v-slot="slotProp">
  {{ slotProp.user.firstName }}
</current-user>
<!-- 显示调用默认插槽名字 -->
<current-user v-slot:default="slotProp">
  {{ slotProp.user.firstName }}
</current-user>
```

> 在这个栗子中，我们选择 `slotProp` 作为我们的 **slot props** 名字，但你可以使用你喜欢的任何名字。

## 单个默认插槽的缩写形式

在上述情况下，当且仅当提供了默认插槽内容时，我们可以使用 `v-slot` 直接作用在组件上：

```vue
<current-user v-slot:default="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```

我们可以简化上面的的默认插槽写法：

```vue
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```

请注意了，默认插槽的缩写语法不能与具名插槽混用：

```vue
<!-- 控制台将报警告：-->
<!-- To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots. -->
<!-- 意思就是说，为了避免作用域模糊 -->
<!-- 当有其他具名插槽时，默认插槽也应当使用 '<template>' 模板语法 -->
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
  <template v-slot:other="otherSlotProps">
    slotProps is NOT available here
  </template>
</current-user>
```

于是，上面的代码，我们改写成：

```vue
<current-user>
  <!-- 两种写法均可 -->
  <!--<template v-slot="slotProps">
    {{ slotProps.user.firstName }}
  </template>-->
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
  <template v-slot:other="otherSlotProps">
    ...
  </template>
</current-user>
```

## 插槽内容的解构赋值

在 Vue 代码内部，我们传递的 slotProps 其实就是函数的一个单一参数：

```javascript
function (slotProps) {
  // ... slot content ...
}
```

这也就意味着 `v-slot` 的值只要满足函数参数定义的 JavaScript 表达式的都可以接受。因此，在支持的环境（单文件或现代浏览器）中，你还可以使用 **ES2015** 解构语法来提取特定的插值内容，例如：

```vue
<current-user v-slot="{ user }">
  {{ user.firstName }}
</current-user>
```

代码看起来更简洁对吧。我们还可以重命名解构变量：

```vue
<current-user v-slot="{ user: person }">
  {{ person.firstName }}
</current-user>
```

这给了我们很多自由操作的空间，你甚至可以自定义回退内容，以便在未定义插值情况下使用：

```vue
<current-user v-slot="{ user = { firstName: 'Guest' } }">>
  {{ user.firstName }}
</current-user>
```

## 动态插槽名称

> 2.6.0+ 新增

[动态指令参数](https://v2.cn.vuejs.org/v2/guide/syntax.html#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0) 也适用于 `v-slot` ，允许我们定义动态插槽名称：

```vue
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

## 命名插槽简写

> 2.6.0+ 新增

与 `v-on` 和 `v-bind` 类似，`v-slot` 也有一个简写，即使用 `#` 代替 `v-slot`。例如， `v-slot:header` 简写成 `#header`:

```vue
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

和其他指令一样，只有在提供参数时才能使用简写形式，下面的写法是无效的：

```vue
<!-- 将会触发一个控制台警告 -->
<current-user #="{ user }">
  {{ user.firstName }}
</current-user>
```

也就是说，如果你想使用简写语法，则务必指定插值的名字：

```vue
<current-user #default="{ user }">
  {{ user.firstName }}
</current-user>
```

## 参考

- [v-slot 设计细节看这里](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md)
- Vue 中文文档更新的慢，英文文档[看这里](https://vuejs.org/v2/guide/components-slots.html#Slot-Content)

## Demo

[https://codepen.io/anon/pen/mYOJrz](https://codepen.io/anon/pen/mYOJrz)
