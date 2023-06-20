---
date: 2023-06-04
category:
  - Vue
tag:
  - Vue
  - Pinia
  - Vuex
layout: ArticleLayout
containerClass: article-container
---

# Vue3 状态管理是时候放弃 Vuex 使用大菠萝 Pinia 了

之前的时候我们通常使用`Vuex`进行状态管理，Vue3 的时候[组合式 API](https://cn.vuejs.org/guide/extras/composition-api-faq.html)大火，[Pinia](https://pinia.vuejs.org/zh/) 因此诞生，其目的是设计一个拥有组合式 API 的 Vue 状态管理库，特点简单易用好上手。由于 Vuex 现在处于维护模式，新的应用官方更推荐使用 Pinia：[详情](https://cn.vuejs.org/guide/scaling-up/state-management.html#pinia)。

## Pinia 是什么

[Pinia](https://pinia.vuejs.org/zh/) 是一个基于 Vue 3 的状态管理库，它提供了一种简单、直观的方式来管理 Vue 应用程序中的状态。Pinia 不仅可以用于小型项目，还可以用于大型项目，它具有以下几个优点：

1. 简单易用：Pinia 非常易于使用，它的 API 非常简洁明了，开发者可以很快上手。

2. 性能优秀：Pinia 采用了 Vue 3 的响应式系统，它的性能非常出色，可以处理大量的状态变化。

3. 可扩展性强：Pinia 提供了一些钩子函数，可以让开发者轻松地扩展它的功能。

4. 类型安全：Pinia 支持 TypeScript，开发者可以在编码时就发现类型错误，避免在运行时出现错误。

总之，Pinia 是一个非常优秀的状态管理库，它可以帮助开发者更好地管理 Vue 应用程序中的状态。如果你还没有尝试过 Pinia，不妨试一试，相信你会喜欢上它的。

## 安装 Pinia

使用你喜欢的包管理器安装即可。

```sh
yarn add pinia
# 或者使用 npm
npm install pinia
```

## 创建实例

和 Vuex 相比，Pinia 实例创建非常简单，2 行代码即可搞定。

```ts {2,5}
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

## 定义 Store

可以参考官方的[定义 Store](https://pinia.vuejs.org/zh/core-concepts/)文档，使用`defineStore()`就可以创建一个 Store。按照原先的习惯，我们通常会创建一个`stores`的目录用于存放各个模块的 Store。这里用于测试新建一个`counter.ts`文件。

可以对`defineStore()`的返回值任意命名，但是为了规范性，通常使用`useXXXStore`，其中的`XXX`可以替换成模块名称，如`useUserStore`，`useCartStore`，`useProductStore`。

`defineStore()`方法的第一个参数应该是应用中 Store 的唯一 ID，具有唯一性，一般可以使用模块名。

```ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // 其他配置...
})
```

`defineStore()`方法的第二个参数可接受两类值：`Setup 函数`或 `Option 对象`。

### 选项式写法

可以看到写法很熟悉，和之前的 Vuex 很像，也与 Vue 的选项式 API 类似，我们也可以传入很熟悉的带有 state、actions 与 getters 属性的 Option 对象。

```ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

### 组合式写法

这是定外一种新的定义 Store 的语法，和 Vue 的[组合式 API](https://cn.vuejs.org/api/composition-api-setup.html)类似。

```ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

在组合式写法中：

- ref() 就是 state 属性
- computed() 就是 getters
- function() 就是 actions

组合式写法比选项式写法带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。

## 使用 Store

Store 的使用也非常简单，需要使用哪个 Store 就引用哪个即可，通过`counterStore`就能访问到 Store 定义的变量和方法。

```vue
<template>
  <div class="demo">
    <div>liubing.me</div>
    <div>count: {{ counterStore.count }}</div>
    <div>doubleCount: {{ counterStore.doubleCount }}</div>
    <div>
      <button @click="counterStore.increment">加+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
```

## 解构 Store

上述写法需要写大量的`counterStore.`，为了代码的简洁性，通常会使用解构的写法获取变量。

下方解构的写法会破坏数据的响应性，这就和直接解构 `props` 一样。

```vue
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
// ❌ 这将不起作用，因为它破坏了响应性
// 这就和直接解构 `props` 一样
const { count, doubleCount } = counterStore
</script>
```

正确的写法是使用 Pinia 提供的`storeToRefs`方法，这和 Vue3 提供的`toRefs`有点类似。

```vue
<template>
  <div class="demo">
    <div>liubing.me</div>
    <div>count: {{ count }}</div>
    <div>doubleCount: {{ doubleCount }}</div>
    <div>
      <button @click="increment">加+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
// ✅ 这样写是响应式的
const { count, doubleCount } = storeToRefs(counterStore)
// Store里面的方法可以直接解构，不需要使用storeToRefs
const { increment } = counterStore
</script>
```

## State

在大多数情况下，state 都是你的 store 的核心。人们通常会先定义能代表他们 APP 的 state。在 Pinia 中，state 被定义为一个返回初始状态的函数。这使得 Pinia 可以同时支持服务端和客户端。

### 访问 state

```ts
const counterStore = useCounterStore()
// 通过解构获取
const { count } = storeToRefs(counterStore)
// 或者直接获取
// const count = counterStore.count
```

### 重置 state

有时候需要整个 store 的数据重置，可以直接调用 store 提供的`$reset()`方法即可。

```ts
const counterStore = useCounterStore()
// 调用store的重置方法
counterStore.$reset()
```

此时你会发现控制台会报错，大致意思是组合式写法不支持`$reset()`

```
Uncaught Error: 🍍: Store "counter" is built using the setup syntax and does not implement $reset().
```

谷歌大法找到了一篇[Pinia: How to reset stores created with function/setup syntax](https://dev.to/the_one/pinia-how-to-reset-stores-created-with-functionsetup-syntax-1b74)教程。

参照教程的实现创建一个`resetStore`文件，这里可以使用`lodash`的`cloneDeep`或者`vueuse`的`useCloned`方法，这里以`useCloned`为例，使用深拷贝复制 store 的 state 内容，覆盖重写原有的`$reset`方法，使用`$patch`替换整个 state。

> src/utils/resetStore.ts

```ts
import { useCloned } from '@vueuse/core'
import { type Store } from 'pinia'

export default function resetStore({ store }: { store: Store }) {
  const { cloned } = useCloned(store.$state)
  store.$reset = () => store.$patch(cloned.value)
}
```

在`main.ts`中使用：

```ts {6,9-11}
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import resetStore from './utils/resetStore'

const app = createApp(App)
const pinia = createPinia()
pinia.use(resetStore)
app.use(pinia)
app.use(router)
app.mount('#app')
```

这时候再调用 Store 的`$reset()`方法后就能正常工作了。

### 变更 state

除了使用`counterStore.count++`的形式修改单个数据外，Pinia 还提供了`$patch()`方法允许同时修改 state 中多个字段数据。

```ts
counterStore.$patch({
  count: counterStore.count++,
  age: 120,
  name: 'DIO'
})
```

当有修改集合的操作（如向数组中追加，删除等操作）的时候，除了直接替换整个集合外，`$patch`方法也支持传入一个函数的形式通过操作 state 来实现。

```ts
counterStore.$patch((state) => {
  state.count = state.count++
  state.list.push({ name: 'liubing.me' })
})
```

### 替换 state

不能直接将`$state`直接重新赋值，这样会破坏其响应性，但是可以通过`$patch`进行整体赋值。

```ts
// 这实际上并没有替换`$state`
counterStore.$state = { count: 24 }
// 在它内部调用 `$patch()`：
counterStore.$patch({ count: 24 })
```

## Getter

Getter 完全等同于 store 的 state 的计算值。

### 访问 getter

和访问 state 同理：

```ts
const counterStore = useCounterStore()
// 通过解构获取
const { doubleCount } = storeToRefs(counterStore)
// 或者直接获取
// const doubleCount = counterStore.doubleCount
```

### getter 传参

Getter 只是幕后的计算属性，所以不可以向它们传递任何参数。不过，你可以从 getter 返回一个函数，该函数可以接受任意参数。 下面定义了一个`getCount`的计算属性，接收一个`num`参数，返回将`count`的值加上`num`的值，模版中直接使用`getCount(10)`就能展示相应的值了，由于是计算属性的缘故，在`count`不断`+1`的同时，`getCount`也会在原本的基础上不断`+1`。

::: code-tabs
@tab stores/counter.ts

```ts {6-8}
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const getCount = computed(() => {
    return (num: number) => count.value + num
  })
  function increment() {
    count.value++
  }

  return { count, getCount, increment }
})
```

@tab Demo.vue

```vue {5}
<template>
  <div class="demo">
    <div>liubing.me</div>
    <div>count: {{ count }}</div>
    <div>getCount: {{ getCount(10) }}</div>
    <div>
      <button @click="increment">加+</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count, getCount } = storeToRefs(counterStore)
const { increment } = counterStore

function reset() {
  counterStore.$reset()
}
</script>
```

:::

## Action

Action 相当于组合式写法里面的`funtion`方法，支持同步和异步方法。  
定一个`oneWord`Store，里面定义 2 个方法，`clearOneWord`清空一言的方法，`fetchOneWord`异步接口获取一言的方法，异步方法可以返回一个`Promise`用于成功后回调。

::: code-tabs
@tab stores/oneWord.ts

```ts
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOneWordStore = defineStore('oneWord', () => {
  const wordText = ref('')

  function clearOneWord() {
    wordText.value = ''
  }
  function fetchOneWord() {
    return new Promise((resolve, reject) => {
      fetch('https://v1.hitokoto.cn/')
        .then((response) => response.json())
        .then((json) => {
          wordText.value = json.hitokoto
          resolve(json)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  return { wordText, clearOneWord, fetchOneWord }
})
```

@tab Demo.vue

```vue
<template>
  <div class="demo">
    <div>liubing.me</div>
    <div>一言: {{ wordText }}</div>
    <div>
      <button @click="getOneWord">获取一言</button>
      <button @click="clearOneWord">清空一言</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOneWordStore } from '@/stores/oneWord'
import { storeToRefs } from 'pinia'

const oneWordStore = useOneWordStore()
const { wordText } = storeToRefs(oneWordStore)
const { clearOneWord, fetchOneWord } = oneWordStore

function getOneWord() {
  fetchOneWord()
    .then(() => {
      console.log('获取一言成功')
    })
    .catch(() => {
      console.log('获取一言失败')
    })
}
</script>
```

:::

## 访问其他 Store

需要访问哪个 Store 就引用哪个，非常方便，这里以访问 state 数据为例，getter 和 action 同理。

::: code-tabs

@tab stores/counter.ts

```ts
import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
// 引用 user store
import { useUserStore } from './user'

export const useCounterStore = defineStore('counter', () => {
  // 使用user store
  const userStore = useUserStore()
  // 获取user store中的 age
  const { age } = storeToRefs(userStore)
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const doublePlusOne = computed(() => doubleCount.value + 1)

  function increment() {
    count.value++
    // 修改user store中的 age
    age.value++
  }

  return { count, doubleCount, doublePlusOne, increment }
})
```

@tab stores/user.ts

```ts
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = ref('liubing.me')
  const age = ref(30)
  const job = ref('web')
  const hobby = ref<String[]>(['游泳', '跑步'])

  return { name, age, job, hobby }
})
```

@tab Demo.vue

```vue
<template>
  <div class="demo">
    <div>liubing.me</div>
    <div>count: {{ count }}</div>
    <div>doubleCount: {{ doubleCount }}</div>
    <div>doublePlusOne: {{ doublePlusOne }}</div>
    <div>age: {{ age }}</div>
    <div>
      <button @click="increment">加+</button>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const userStore = useUserStore()
const { count, doubleCount, doublePlusOne } = storeToRefs(counterStore)
const { age } = storeToRefs(userStore)
const { increment } = counterStore

function reset() {
  counterStore.$reset()
  userStore.$reset()
}
</script>
```

:::
