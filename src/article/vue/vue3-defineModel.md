---
date: 2023-07-29
category:
  - Vue
  - Vue3
tag:
  - defineModel
layout: ArticleLayout
containerClass: article-container
---

# 快去试用下 Vue3 新特性 defineModel，贼好用

具体讨论可以参见该[RFC](https://github.com/vuejs/rfcs/discussions/503)，看名字可能有的人就知道可能是和`v-model`有关了，你猜的没错，新出的`defineModel`可以更加快捷的自定义组件上的`v-model`。

<!-- more -->

## 举个例子 🌰

以前的写法我们自定义一个`v-model`需要写很多东西，包括`props`和`emit`触发更新。

```vue
<template>
  <div class="child">
    <input :value="modelValue" @input="onInput" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: String
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
```

而`defineModel`的新写法，只需要写 2 行代码就行了，是不是瞬间觉得代码看这清爽多了。

```vue {8,12}
<template>
  <div class="child">
    <input :value="modelValue" @input="onInput" />
  </div>
</template>

<script lang="ts" setup>
const modelValue = defineModel<string>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  modelValue.value = target.value
}
</script>
```

## 详细语法

```ts
// 如果你不喜欢TS，可以不用定义类型
const modelValue = defineModel()
// ^? Ref<any>
modelValue.value = 10

// 支持泛型的形式定义参数类型，如string
const modelValue = defineModel<string>()
// ^? Ref<string | undefined>
modelValue.value = 'hello'

// 支持prop的required写法
const modelValue = defineModel<string>({ required: true })
// ^? Ref<string>

// 支持指定v-model的名称，如v-model:count
const count = defineModel<number>('count')
count.value++

// 支持默认值写法
const count = defineModel<number>('count', { default: 0 })
// ^? Ref<number>
```

## 本地 Local 模式

`defineModel`选项对象还额外提供了一个`local`参数，当设置为 true 的时候，即时没有写`v-model`也能够本地 发生变化。

```vue
<template>
  <!-- local模式 -->
  <Comp />
</template>
```

官网还贴心的准备了一个小[Demo](https://play.vuejs.org/#eNqFkL1uwzAMhF+F0JIUTuPMhm206Ny1kxZHoVuj+oNMZRH87pUsO0aTIRvJO/D4MbB3a49Xj6xi9SjcYAlGJG9brgdljSP4MMpC74yC3bFMTbLvbnJw2E+LngUAroXRI4EwXhM0EC370wvXdZkj4vLYECorO8LYAdRzTJnrH7dW8/T6qswFZcPZvJCzR9+gradHY1ZDWC6ZpnTDLZcd2Mpzjw+y098NjdsbQqKA/6Qr55z61UmPEfaC/aDxM41q7dUZXbsPII3oZAXkPB6SpfOSKjjB9OQtZ09kNLwJOYjfCLZFFQVnbVGX2bGAbvI96/QH6WaqLQ==)，有兴趣的也可以直接打开看看。

## 启用 defineModel

```ts{5-7}
// vite.config.js
export default {
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    })
  ]
}
```

### vue-cli

::: warning
需要 `vue-loader@^17.1.1`
:::

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          defineModel: true
        }
      })
  }
}
```
