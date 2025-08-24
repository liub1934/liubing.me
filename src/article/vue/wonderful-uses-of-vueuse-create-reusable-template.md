---
date: 2025-08-24
category:
  - Vue
tag:
  - VueUse
  - createReusableTemplate

layout: ArticleLayout
containerClass: article-container
---

# VueUse 中 createReusableTemplate 的妙用

日常开发中部分地方需要使用[Render 渲染函数](https://cn.vuejs.org/guide/extras/render-function)的写法即使用`h`（也叫 createVNode） 来生成 VNode 虚拟节点，或者需要使用[JSX/TSX](https://cn.vuejs.org/guide/extras/render-function#jsx-tsx)的写法，对于不熟悉的人来说这 2 种写法很不友好，使用[createReusableTemplate](https://vueuse.org/core/createReusableTemplate/)后就能大大弱化这 2 种写法的不便。

## 各写法比较

对于使用 Naive UI 的人来说，常用的`菜单 Menu`、`表格 Table`、`选择器 Select`等部分都需要使用`render`的写法，以最常用的`表格 Table`自定义列的写法为例子：

### h 函数写法

```vue
<template>
  <NDataTable :columns="columns" :data="data" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { NButton, NDataTable, NPopover, NSpace } from 'naive-ui'

const columns = [
  {
    title: '名字',
    key: 'name'
  },
  {
    title: '操作',
    key: 'action',
    render: (row) => {
      return h(NSpace, {}, [
        h(
          NPopover,
          { trigger: 'hover' },
          {
            default: () => '编辑',
            trigger: () =>
              h(
                NButton,
                {
                  round: true,
                  ghost: true,
                  size: 'small',
                  type: 'primary'
                },
                { default: () => '编辑' }
              )
          }
        ),
        h(
          NPopover,
          { trigger: 'hover' },
          {
            default: () => '删除',
            trigger: () =>
              h(
                NButton,
                {
                  round: true,
                  ghost: true,
                  size: 'small',
                  type: 'error'
                },
                { default: () => '删除' }
              )
          }
        )
      ])
    }
  }
]

const data = [
  {
    name: 'liubing.me 1'
  },
  {
    name: 'liubing.me 2'
  }
]
</script>
```

### TSX 写法

```vue
<template>
  <NDataTable :columns="columns" :data="data" />
</template>

// lang需要使用tsx
<script setup lang="tsx">
import { NButton, NDataTable, NPopover, NSpace } from 'naive-ui'

const columns = [
  {
    title: '名字',
    key: 'name'
  },
  {
    title: '操作',
    key: 'action',
    render: (row) => {
      return (
        <NSpace>
          <NPopover trigger="hover">
            {{
              default: () => '编辑',
              trigger: () => (
                <NButton round ghost size="small" type="primary">
                  编辑
                </NButton>
              )
            }}
          </NPopover>
          <NPopover trigger="hover">
            {{
              default: () => '删除',
              trigger: () => (
                <NButton round ghost size="small" type="error">
                  删除
                </NButton>
              )
            }}
          </NPopover>
        </NSpace>
      )
    }
  }
]

const data = [
  {
    name: 'liubing.me 1'
  },
  {
    name: 'liubing.me 2'
  }
]
</script>
```

### createReusableTemplate 写法

解构`createReusableTemplate()`，使用`DefineActionTemplate`定义模板，然后在需要使用模板的地方使用`UseActionTemplate`渲染模板，`DefineActionTemplate`和`UseActionTemplate`可以自己随便定义，这样就可以常用的`template`写法去定义需要`render`渲染的内容，使用非常方便。

```vue
<template>
  <div>
    <!-- 定义模板 -->
    <DefineActionTemplate v-slot="{ row }">
      <NSpace>
        <NPopover trigger="hover">
          <template #trigger>
            <NButton round ghost size="small" type="primary">编辑</NButton>
          </template>
          编辑
        </NPopover>
        <NPopover trigger="hover">
          <template #trigger>
            <NButton round ghost size="small" type="error"> 删除 </NButton>
          </template>
          删除
        </NPopover>
      </NSpace>
    </DefineActionTemplate>

    <NDataTable :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import { NButton, NDataTable, NPopover, NSpace } from 'naive-ui'

const [DefineActionTemplate, UseActionTemplate] = createReusableTemplate()

const columns = [
  {
    title: '名字',
    key: 'name'
  },
  {
    title: '操作',
    key: 'action',
    render: (row) => h(UseActionTemplate, { row }) // 这里使用模板
    // render: row => <UseActionTemplate row={row} /> // 如果lang是tsx，则使用这种写法
  }
]

const data = [
  {
    name: 'liubing.me 1'
  },
  {
    name: 'liubing.me 2'
  }
]
</script>
```

## 总结

使用`createReusableTemplate`后就不用怕写`render`写法了，有一点需要注意的是定义的模板最好放在最上面，防止出现下面的错误：

```
Error: [VueUse] Failed to find the definition of reusable template
```

总之模板需要先定义在使用，比如上面的列子，如果将`DefineActionTemplate`定义模板的内容放在`<NDataTable :columns="columns" :data="data" />`下面，就会出现上面的异常。
