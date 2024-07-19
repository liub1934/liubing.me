---
date: 2023-06-24
category:
  - Vue
  - Vue3
tag:
  - Vue
  - Vue3
  - fake-progress
layout: ArticleLayout
containerClass: article-container
---

# Vue3 中使用 fake-progress 模拟“真实”的进度条

最近在逛 GitHub 的过程中发现一个很有趣的库，[fake-progress](https://github.com/piercus/fake-progress)，用来模拟“真实”的进度条，虽然看着已经很多年没更新了，但是不妨碍在 Vue3 中集成使用，这样就不用手搓模拟进度条了，在页面加载顶部进度条、文件上传进度条等等很有用处。

<!-- more -->

## 安装 fake-progress

使用自己常用的方式安装`fake-progress`即可。

::: code-tabs
@tab npm

```sh
npm install fake-progress
```

@tab yarn

```sh
yarn add fake-progress
```

@tab pnpm

```sh
pnpm install fake-progress
```

:::

## Vue2 中使用

在 Vue2 中使用非常简单，直接通过`new FakeProgress`创建实例后即可在模版中使用`fake.progress`，获取百分比数值可以通过`parseInt`。

```vue
<template>
  <div>
    <div>{{ fake.progress }}</div>
    <div>{{ percentage }}</div>
  </div>
</template>

<script>
import FakeProgress from 'fake-progress'
export default {
  data() {
    return {
      fake: new FakeProgress({
        timeConstant: 5000,
        autoStart: true
      })
    }
  },
  computed: {
    percentage() {
      return parseInt(this.fake.progress * 100)
    }
  }
}
</script>
```

![image](https://image.liubing.me/i/2023/06/24/64965a51b6c5f.gif)

## Vue3 中使用

按同样的方法，引入包后通过`new FakeProgress`创建一个实例，页面绑定`fake.progress`后发现显示的一直是 0，数据也没任何变化。通过查看该库的源码可以知道数值的变化是通过`setInterval`设置的，而且间隔也是固定的 100：`this._intervalFrequency = 100;`

```vue
<template>
  <div>
    {{ fake.progress }}
  </div>
  <div>
    {{ percentage }}
  </div>
</template>

<script setup lang="ts">
import FakeProgress from 'fake-progress'
import { computed } from 'vue'

const fake = new FakeProgress({
  timeConstant: 5000,
  autoStart: true
})
const percentage = computed(() => parseInt(fake.progress * 100 + ''))
</script>
```

## setInterval 改造

我们也加一个同样的`setInterval`去间隔读取`fake.progress`

```vue {3,12,18-22}
<template>
  <div>
    {{ progress }}
  </div>
  <div>
    {{ percentage }}
  </div>
</template>

<script setup lang="ts">
import FakeProgress from 'fake-progress'
import { ref, computed } from 'vue'

const fake = new FakeProgress({
  timeConstant: 5000,
  autoStart: true
})
const progress = ref(fake.progress)
const percentage = computed(() => parseInt(progress.value * 100 + ''))
setInterval(() => {
  progress.value = fake.progress
}, 100)
</script>
```

## 搭配 UI 组件使用

可以搭配一些 UI 的进度条组件或者顶部进度条的组件使用，下面以[Element Plus](https://element-plus.org/)的`Progress 进度条`组件为例子，在需要结束进度条的时候调用`FakeProgress`实例提供的`end()`方法即可。

```vue {3-7,10,13}
<template>
  <div>
    <el-progress
      :percentage="percentage"
      :striped="true"
      :striped-flow="true"
    />
  </div>
  <div>
    <el-progress type="circle" :percentage="percentage" />
  </div>
  <div>
    <el-button type="danger" @click="fake.end()">结束</el-button>
  </div>
</template>
```

![image](https://image.liubing.me/i/2023/06/24/649661b6b56d3.gif)

## 封装成 Hook

为了方便日常使用，我们可以封装一个`useFakeProgress`的 Hook，引入后直接可以使用`percentage`和相关的`start()`和`end()`方法。
::: code-tabs
@tab Demo.vue

```vue {13-14,19,21-23}
<template>
  <div>
    <el-progress
      :percentage="percentage"
      :striped="true"
      :striped-flow="true"
    />
  </div>
  <div>
    <el-progress type="circle" :percentage="percentage" />
  </div>
  <div>
    <el-button type="primary" @click="start()">开始</el-button>
    <el-button type="danger" @click="end()">结束</el-button>
  </div>
</template>

<script setup lang="ts">
import { useFakeProgress } from '@/hooks/useFakeProgress'

const fakeProgress = useFakeProgress()
const percentage = fakeProgress.percentage
const { start, end } = fakeProgress
</script>
```

@tab useFakeProgress.ts

```ts
import { ref, computed, type Ref } from 'vue'
import FakeProgress from 'fake-progress'

interface IUseFakeProgress {
  progress: Ref<number>
  percentage: Ref<number>
  start: () => void
  end: () => void
}

/**
 * useFakeProgress Hook
 *
 * @param {number} [timeConstant=5000] - 默认timeConstant为5000，单位毫秒
 * @param {boolean} [autoStart=false] - 是否自动开始，默认为false
 * @return {IUseFakeProgress}
 */
export function useFakeProgress(
  timeConstant?: number,
  autoStart?: boolean
): IUseFakeProgress {
  const fake = new FakeProgress({
    timeConstant: timeConstant || 5000,
    autoStart
  })
  const progress = ref(fake.progress)
  const percentage = computed(() => parseInt(progress.value * 100 + ''))
  let timerInterval: ReturnType<typeof setInterval> | null
  if (autoStart) {
    setTimerInterval()
  }

  onBeforeUnmount(() => {
    clearTimerInterval()
  })

  function start() {
    if (!percentage.value || percentage.value === 100) {
      fake.start()
      setTimerInterval()
    }
  }

  function end() {
    fake.end()
    progress.value = fake.progress
  }

  function setTimerInterval() {
    clearTimerInterval()
    timerInterval = setInterval(() => {
      progress.value = fake.progress
    }, 100)
  }

  function clearTimerInterval() {
    if (timerInterval) clearInterval(timerInterval)
    timerInterval = null
  }

  return {
    progress,
    percentage,
    start,
    end
  }
}
```

:::

![image](https://image.liubing.me/i/2023/06/24/649669633dcb5.gif)

## TS 申明

最后将 TS 申明加入到项目的`env.d.ts`或者其他申明类型的`d.ts`中。

```ts
interface FakeProgressOptions {
  timeConstant: number
  autoStart?: boolean
  parent?: FakeProgress
  parentStart?: number
  parentEnd?: number
}

declare module 'fake-progress' {
  export = FakeProgress

  class FakeProgress {
    constructor(opts: FakeProgressOptions)

    progress: number

    createSubProgress(opts: FakeProgressOptions): FakeProgress

    end(): void

    setProgress(progress: number): void

    start(): void

    stop(): void
  }
}
```
