---
date: 2023-03-13
category:
  - Vue
  - Element UI
  - Ant Design Vue
tag:
  - Vue
  - Element UI
  - Ant Design Vue
  - ToolTip
layout: ArticleLayout
containerClass: article-container
---

# 文字超长显示省略号和 ToolTip

日常开发过程中避免不了需要显示一些内容，但是内容超长了需要显示...，鼠标悬停需要显示完整内容，原生的`title`属性虽然可以做到上述的需求，但是完整内容无法复制，也不适用于隐藏的内容是非纯文本的情况，一般 UI 组件都会提供 ToolTip 的组件，我们就可以利用这个组件控制鼠标悬停显示完整内容。下面记录下实际开发过程中使用 Element UI 或者 Ant Design Vue 实现该需求过程。

<!-- more -->

## 分析场景

显示省略号很简单，使用`text-overflow: ellipsis`和`overflow: hidden`即可实现，通常只需要处理是否显示 ToolTip 的情况，当文字宽度大于容器的宽度的时候就需要显示 ToolTip。之前想的通过[ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)监听元素的宽度变化来处理是否显示 ToolTip。

```js
const resizeObserver = new ResizeObserver((entries) => {
  const target = entries[0]?.target
  if (target) {
    // 处理逻辑
  }
})
resizeObserver.observe(document.getElementById('Your DOM'))
```

但是页面可能会有上百个文字超长显示 ToolTip 的情况，这样监听下来对性能有一定的影响，后来看到[Naive UI](https://www.naiveui.com/zh-CN/os-theme)有个[文本省略 Ellipsis](https://www.naiveui.com/zh-CN/os-theme/components/ellipsis)的组件，就去看了下 [Ellipsis 源码](https://github.com/tusen-ai/naive-ui/blob/main/src/ellipsis/src/Ellipsis.tsx)看看对方是怎么实现的。

![image](https://image.liubing.me/i/2023/03/14/640fe4861bbe4.png)

![image](https://image.liubing.me/i/2023/03/14/640fe4b9b67e3.png)

看完后豁然开朗，原来并没有那么复杂，ToolTip 都是鼠标悬停后出现的，只需要在鼠标`mouseenter`的时候去判断元素是否超出容器宽度来决定是否开启 ToolTip，这样就没有监听性能的损耗了。

## 各版本实现

可以在`components`中新建一个`TextEllipsis.vue`作为组件，为了支持原 ToolTip 组件的属性，可以加上`v-bind="$attrs"`。

下面的代码可以复制即用，额外支持多行省略显示，传入`lineClamp`参数即可，非常方便。

### Element Plus（Vue3）

Element Plus 比较简单，提供了`disabled`的参数，我们只需要通过一个变量`tooltipVisible`来控制`disabled`属性来启用和禁用 ToolTip 即可。

:::: details 点击查看代码

::: code-tabs
@tab TextEllipsis.vue

```vue
<template>
  <el-tooltip
    v-bind="$attrs"
    v-model:visible="tooltipVisible"
    :disabled="disabledTooltip"
  >
    <template #content>
      <slot :name="$slots.content ? 'content' : 'default'"></slot>
    </template>
    <span
      ref="triggerRef"
      :class="{
        'text-ellipsis': true,
        'text-ellipsis-line-clamp': lineClamp
      }"
      @mouseenter="setTooltipDisabled"
    >
      <span
        ref="triggerInnerRef"
        class="text-ellipsis-inner"
        :style="lineClampStyle"
      >
        <slot></slot>
      </span>
    </span>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { computed, ref, type HTMLAttributes } from 'vue'

const props = defineProps({
  lineClamp: Number
})
const tooltipVisible = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const triggerInnerRef = ref<HTMLElement | null>(null)
const disabledTooltip = ref(true)
const lineClampStyle = computed<HTMLAttributes['style']>(() => {
  return props.lineClamp
    ? {
        display: '-webkit-inline-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': props.lineClamp
      }
    : {}
})

function setTooltipDisabled() {
  const { value: $trigger } = triggerRef
  if ($trigger) {
    if (props.lineClamp) {
      disabledTooltip.value = $trigger.scrollHeight <= $trigger.offsetHeight
    } else {
      const { value: $triggerInner } = triggerInnerRef
      if ($triggerInner) {
        disabledTooltip.value =
          $triggerInner.getBoundingClientRect().width <=
          $trigger.getBoundingClientRect().width
      }
    }
  }
}
</script>

<style scoped>
.text-ellipsis {
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
}
.text-ellipsis:not(.text-ellipsis-line-clamp) {
  white-space: nowrap;
  vertical-align: bottom;
  text-overflow: ellipsis;
}
</style>
```

:::
::::

### Ant Design Vue 3.x（Vue3）

由于 Ant Design Vue ToolTip 没有提供`disabled`的参数，所以不能使用`v-model`绑定`tooltipVisible`，需要通过`:visible="tooltipVisible"`这种形式手动控制，利用`visibleChange`事件去手动去处理，如果`disabledTooltip`为`true`的时候需要控制`tooltipVisible`为`false`，在需要禁用的时候不弹出 ToolTip。

:::: details 点击查看代码
::: code-tabs
@tab TextEllipsis.vue

```vue
<template>
  <a-tooltip
    v-bind="$attrs"
    :visible="tooltipVisible"
    @visibleChange="visibleChange"
  >
    <template #title>
      <slot :name="$slots.title ? 'title' : 'default'"></slot>
    </template>
    <span
      ref="triggerRef"
      :class="{
        'text-ellipsis': true,
        'text-ellipsis-line-clamp': lineClamp
      }"
      @mouseenter="setTooltipDisabled"
    >
      <span
        ref="triggerInnerRef"
        class="text-ellipsis-inner"
        :style="lineClampStyle"
      >
        <slot></slot>
      </span>
    </span>
  </a-tooltip>
</template>

<script lang="ts" setup>
import { computed, ref, type HTMLAttributes } from 'vue'

const props = defineProps({
  lineClamp: Number
})
const emits = defineEmits(['visibleChange'])
const tooltipVisible = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const triggerInnerRef = ref<HTMLElement | null>(null)
const disabledTooltip = ref(true)
const lineClampStyle = computed<HTMLAttributes['style']>(() => {
  return props.lineClamp
    ? {
        display: '-webkit-inline-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': props.lineClamp
      }
    : {}
})

function setTooltipDisabled() {
  const { value: $trigger } = triggerRef
  if ($trigger) {
    if (props.lineClamp) {
      disabledTooltip.value = $trigger.scrollHeight <= $trigger.offsetHeight
    } else {
      const { value: $triggerInner } = triggerInnerRef
      if ($triggerInner) {
        disabledTooltip.value =
          $triggerInner.getBoundingClientRect().width <=
          $trigger.getBoundingClientRect().width
      }
    }
  }
}
function visibleChange(visible: boolean) {
  tooltipVisible.value = disabledTooltip.value ? false : visible
  if (!disabledTooltip.value) {
    emits('visibleChange', tooltipVisible.value)
  }
}
</script>

<style scoped>
.text-ellipsis {
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
}
.text-ellipsis:not(.text-ellipsis-line-clamp) {
  white-space: nowrap;
  vertical-align: bottom;
  text-overflow: ellipsis;
}
</style>
```

:::
::::

### Element UI（Vue2）

代码同 Element Plus，只是改写成 Vue2 的写法。

:::: details 点击查看代码
::: code-tabs
@tab TextEllipsis.vue

```vue
<template>
  <el-tooltip
    v-bind="$attrs"
    v-model="tooltipVisible"
    :disabled="disabledTooltip"
  >
    <template #content>
      <slot :name="$slots.content ? 'content' : 'default'"></slot>
    </template>
    <span
      ref="triggerRef"
      :class="{
        'text-ellipsis': true,
        'text-ellipsis-line-clamp': lineClamp
      }"
      @mouseenter="setTooltipDisabled"
    >
      <span
        ref="triggerInnerRef"
        class="text-ellipsis-inner"
        :style="lineClampStyle"
      >
        <slot></slot>
      </span>
    </span>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    lineClamp: Number
  },
  data() {
    return {
      tooltipVisible: false,
      disabledTooltip: true
    }
  },
  computed: {
    lineClampStyle() {
      return this.lineClamp
        ? {
            display: '-webkit-inline-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': this.lineClamp
          }
        : {}
    }
  },
  methods: {
    setTooltipDisabled() {
      const $trigger = this.$refs.triggerRef
      if ($trigger) {
        if (this.lineClamp) {
          this.disabledTooltip = $trigger.scrollHeight <= $trigger.offsetHeight
        } else {
          const $triggerInner = this.$refs.triggerInnerRef
          if ($triggerInner) {
            this.disabledTooltip =
              $triggerInner.getBoundingClientRect().width <=
              $trigger.getBoundingClientRect().width
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.text-ellipsis {
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
}
.text-ellipsis:not(.text-ellipsis-line-clamp) {
  white-space: nowrap;
  vertical-align: bottom;
  text-overflow: ellipsis;
}
</style>
```

:::

::::

### Ant Design Vue 1.x（Vue2）

代码同 Ant Design Vue 3.x，只是改写成 Vue2 的写法。

:::: details 点击查看代码
::: code-tabs
@tab TextEllipsis.vue

```vue
<template>
  <a-tooltip
    v-bind="$attrs"
    :visible="tooltipVisible"
    @visibleChange="visibleChange"
  >
    <template #title>
      <slot :name="$slots.title ? 'title' : 'default'"></slot>
    </template>
    <span
      ref="triggerRef"
      :class="{
        'text-ellipsis': true,
        'text-ellipsis-line-clamp': lineClamp
      }"
      @mouseenter="setTooltipDisabled"
    >
      <span
        ref="triggerInnerRef"
        class="text-ellipsis-inner"
        :style="lineClampStyle"
      >
        <slot></slot>
      </span>
    </span>
  </a-tooltip>
</template>

<script>
export default {
  props: {
    lineClamp: Number
  },
  data() {
    return {
      tooltipVisible: false,
      disabledTooltip: true
    }
  },
  computed: {
    lineClampStyle() {
      return this.lineClamp
        ? {
            display: '-webkit-inline-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': this.lineClamp
          }
        : {}
    }
  },
  methods: {
    setTooltipDisabled() {
      const $trigger = this.$refs.triggerRef
      if ($trigger) {
        if (this.lineClamp) {
          this.disabledTooltip = $trigger.scrollHeight <= $trigger.offsetHeight
        } else {
          const $triggerInner = this.$refs.triggerInnerRef
          if ($triggerInner) {
            this.disabledTooltip =
              $triggerInner.getBoundingClientRect().width <=
              $trigger.getBoundingClientRect().width
          }
        }
      }
    },
    visibleChange(visible) {
      this.tooltipVisible = this.disabledTooltip ? false : visible
      if (!this.disabledTooltip) {
        this.$emit('visibleChange', this.tooltipVisible)
      }
    }
  }
}
</script>

<style scoped>
.text-ellipsis {
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
}
.text-ellipsis:not(.text-ellipsis-line-clamp) {
  white-space: nowrap;
  vertical-align: bottom;
  text-overflow: ellipsis;
}
</style>
```

:::
::::

## 使用

全局引入`TextEllipsis`组件后就可以全局使用了，组件支持原 Tooltip 组件所支持的属性，如`placement`。

```vue
<template>
  <TextEllipsis placement="top">
    可以写一段很长很长很长很长很长很长很长很长很长很长很长很长的文字，超出后会自动隐藏。
  </TextEllipsis>
</template>
```

同样支持非文字类型省略号 Tooltip 显示。

```vue
<template>
  <TextEllipsis>
    <el-tag>标签一</el-tag>
    <el-tag type="success">标签二</el-tag>
    <el-tag type="info">标签三</el-tag>
    <el-tag type="warning">标签四</el-tag>
    <el-tag type="danger">标签五</el-tag>
  </TextEllipsis>
</template>
```
