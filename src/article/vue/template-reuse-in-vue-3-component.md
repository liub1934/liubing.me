---
date: 2025-06-23
category:
  - Vue
tag:
  - Vue
  - Vue3
layout: ArticleLayout
containerClass: article-container
---

# 跟着 Vue 官方成员大佬学习组件内模板复用

如果一个组件中有部分重复的内容，大部分的做法可能就是单独抽一个组件出来引用或者直接使用 TSX 定义一个组件使用，直到看到了大佬的教学视频，才发现原来还可以这样做，简直太妙了。

<!-- more -->

## DefineTemplate

定义一个`DefineTemplate`组件，将需要复用的模版内容写在里面，该组件使用`setup`返回一个函数，内容是该组件的默认插槽内容，页面渲染后`DefineTemplate`组件中的内容也展示出来了。

```vue
<template>
  <div>
    <DefineTemplate>
      <div>我是复用的模板内容</div>
    </DefineTemplate>
    <div class="container">header</div>
    <div class="container">main</div>
    <div class="container">footer</div>
  </div>
</template>

<script lang="ts" setup>
const DefineTemplate = {
  setup(_, { slots }) {
    return () => {
      return slots.default()
    }
  }
}
</script>
```

![image](https://image.liubing.me/i/2025/06/23/6859465202405.png)

由于我们需要的是使用`DefineTemplate`定义复用的模板，而不是直接渲染该模版，所以需要改造下`DefineTemplate`，将渲染模板内容的方法`slots.default`使用`render`暂时保存起来先不调用，这样页面中就不会渲染`DefineTemplate`的内容了。

```vue {2,6}
<script lang="ts" setup>
let render
const DefineTemplate = {
  setup(_, { slots }) {
    return () => {
      render = slots.default
    }
  }
}
</script>
```

## UseTemplate

接下来定义一个`UseTemplate`的函数式组件，该组件直接返回并渲染上面保存的`render`方法。

```vue {10}
<script lang="ts" setup>
let render
const DefineTemplate = {
  setup(_, { slots }) {
    return () => {
      render = slots.default
    }
  }
}
const UseTemplate = () => render()
</script>
```

接下来就是在需要的地方使用`UseTemplate`的组件，这样就会渲染`DefineTemplate`中定义的内容了。

```vue {8,10}
<template>
  <div>
    <DefineTemplate>
      <div>我是复用的模板内容</div>
    </DefineTemplate>

    <div class="container">header</div>
    <UseTemplate />
    <div class="container">main</div>
    <UseTemplate />
    <div class="container">footer</div>
  </div>
</template>

<script lang="ts" setup>
let render
const DefineTemplate = {
  setup(_, { slots }) {
    return () => {
      render = slots.default
    }
  }
}
const UseTemplate = () => render()
</script>
```

![image](https://image.liubing.me/i/2025/06/23/68594fe166ec0.png)

## createReusableTemplate

这样我们就可以用`DefineTemplate`定义需要复用的模板内容，使用`UseTemplate`在需要渲染的地方使用，非常方便，由于这 2 个组件都是函数，所以我们可以将这 2 个组件抽成一个公共的方法，方便直接引用和使用。

定义一个`createReusableTemplate`方法，`return`返回一个数组，内容是`DefineTemplate`和`UseTemplate`，数组形式方便解构的时候命名，可以参考`React`的`useState`，当然你可以返回一个对象，都是可以的。

```ts title="utils.ts"
export function createReusableTemplate() {
  let render
  const DefineTemplate = {
    setup(_, { slots }) {
      return () => {
        render = slots.default
      }
    }
  }
  const UseTemplate = () => render()

  return [DefineTemplate, UseTemplate]
}
```

这样就变成了一个通用的方法，直接可以引入并使用，随心所欲，非常方便，效果是一样的。

```vue {6,8,11,16,18}
<template>
  <div>
    <DefineTemplate>
      <div>我是复用的模板内容</div>
    </DefineTemplate>
    <div class="container">header</div>
    <UseTemplate />
    <div class="container">main</div>
    <UseTemplate />
    <div class="container">footer</div>
    <UseTemplate />
  </div>
</template>

<script lang="ts" setup>
import { createReusableTemplate } from '@/utils'

const [DefineTemplate, UseTemplate] = createReusableTemplate()
</script>
```

![image](https://image.liubing.me/i/2025/06/23/685952c51ce01.png)

## 参数传递

可以直接在`UseTemplate`方法中通过`props`参数传递给`render`即可。

```ts title="utils.ts" {10}
export function createReusableTemplate() {
  let render
  const DefineTemplate = {
    setup(_, { slots }) {
      return () => {
        render = slots.default
      }
    }
  }
  const UseTemplate = (props) => render(props)

  return [DefineTemplate, UseTemplate]
}
```

在`DefineTemplate`上使用`v-slot`即可取到传递的参数。

```vue {3-5,8,10,12}
<template>
  <div>
    <DefineTemplate v-slot="{ title }">
      <div>我是复用的模板内容-{{ title }}</div>
    </DefineTemplate>

    <div class="container">header</div>
    <UseTemplate title="header" />
    <div class="container">main</div>
    <UseTemplate title="main" />
    <div class="container">footer</div>
    <UseTemplate title="footer" />
  </div>
</template>

<script lang="ts" setup>
import { createReusableTemplate } from '@/utils'

const [DefineTemplate, UseTemplate] = createReusableTemplate()
</script>
```

![image](https://image.liubing.me/i/2025/06/23/685955ee336f8.png)

## 总结

这样我们就不用为了复用小部分内容而单独去定义组件了，在日常使用中是非常方便的，以上只是一个开发思路，在实际业务开发中更推荐使用[VueUse](https://vueuse.org/)中比较成熟的[createReusableTemplate](https://vueuse.org/core/createReusableTemplate/)方法，思路基本是一致的，使用方法和上面也是一样的。

```vue {17}
<template>
  <div>
    <DefineTemplate v-slot="{ title }">
      <div>我是复用的模板内容-{{ title }}</div>
    </DefineTemplate>

    <div class="container">header</div>
    <UseTemplate title="header" />
    <div class="container">main</div>
    <UseTemplate title="main" />
    <div class="container">footer</div>
    <UseTemplate title="footer" />
  </div>
</template>

<script lang="ts" setup>
import { createReusableTemplate } from '@vueuse/core'

const [DefineTemplate, UseTemplate] = createReusableTemplate()
</script>
```
