---
date: 2023-12-30
category:
  - Vue
tag:
  - Vue
  - Vue3
layout: ArticleLayout
containerClass: article-container
---

# Vue 3.4 发布

> 本文为翻译
> 原文地址：[Announcing Vue 3.4](https://blog.vuejs.org/posts/vue-3-4)

今天，我们非常高兴地宣布 Vue 3.4"🏀大灌篮 "正式发布！

该版本包含一些实质性的内部改进-其中最显著的是重写了模板解析器，速度提高了 2 倍，还重构了反应性系统，使效果触发更准确、更高效。此外，它还对 API 进行了一系列质量改进，包括稳定了 `defineModel` 和绑定道具时的新同名简称。

本文章概述了 3.4 中的重点功能。有关变更的完整列表，请查阅[GitHub 上的完整更新日志](https://github.com/vuejs/core/blob/main/CHANGELOG.md#340-2023-12-28)。

<!-- more -->

## 需要采取的潜在行动

1. 要充分利用 3.4 中的新功能，建议在升级到 3.4 时同时更新以下依赖项：

   - Volar / vue-tsc@^1.8.27 (**required**)
   - @vitejs/plugin-vue@^5.0.0 （如果使用 Vite）
   - nuxt@^3.9.0（如使用 Nuxt）
   - vue-loader@^17.4.0（如使用 webpack 或 vue-cli）

2. 如果在 Vue 中使用 TSX，请检查已删除：[全局 JSX 命名空间](#全局-jsx-命名空间) 中所需的操作。

3. 确保不再使用任何过时的功能（如果使用了，控制台中应该会有警告提示）。它们可能已被[在 3.4 中移除](#其他已删除功能)。

### 功能亮点

### 解析器速度提高 2 倍，SFC 构建性能得到改善

- 上下文： [PR#9674](https://github.com/vuejs/core/pull/9674)

在 3.4 中，我们完全重写了模板解析器。以前，Vue 使用的是递归下降解析器，依赖于许多正则表达式和前瞻搜索。新的解析器使用了基于 [htmlparser2](https://github.com/fb55/htmlparser2) 中标记符的状态机标记符，只对整个模板字符串迭代一次。因此，对于各种大小的模板，解析器的速度都能持续提高一倍。得益于我们广泛的测试用例和 [ecosystem-ci](https://github.com/vuejs/ecosystem-ci) 的支持，该解析器对 Vue 最终用户来说也是 100% 向后兼容的。

在将新解析器与系统其他部分集成时，我们还发现了一些进一步提高 SFC 整体编译性能的机会。基准测试表明，在生成源映射的同时编译 Vue SFC 的脚本和模板部分时，性能提高了约 44%。不过，请注意，Vue SFC 编译只是实际项目中整个构建过程的一部分。与孤立的基准相比，端到端构建时间的最终增益可能要小得多。

除 Vue 核心外，新解析器还将有利于提高 Volar / vue-tsc 以及需要解析 Vue SFC 或模板（如 Vue 宏）的社区插件的性能。

### 更高效的反应系统

**上下文：[PR#5912](https://github.com/vuejs/core/pull/5912)**

3.4 还对反应系统进行了大量重构，目的是提高已计算属性的重新计算效率。

为了说明改进的内容，让我们考虑以下情况：

```js
const count = ref(0)
const isEven = computed(() => count.value % 2 === 0)

watchEffect(() => console.log(isEven.value)) // logs true

count.value = 2 // logs true again
```

在 3.4 之前，每次更改 `count.value` 时都会触发 `watchEffect` 的回调，即使计算结果保持不变。经过 3.4 版之后的优化，现在只有当计算结果发生变化时才会触发回调。

此外，在 3.4 中

- 多个计算结果变化只触发一次同步效果。
- 数组的 `shift`、`unshift` 和 `splice` 方法只触发一次同步效果。

除了[基准](https://github.com/vuejs/core/pull/5912#issuecomment-1748985641) 中显示的增益外，这应能在许多情况下减少不必要的组件重新呈现，同时保留完全的向后兼容性。

### `defineModel`现已稳定

**上下文： [RFC#503](https://github.com/vuejs/rfcs/discussions/503)**

`defineModel` 是一个新的 `<script setup>` 宏，旨在简化支持 `v-model` 的组件的实现。它曾作为实验功能在 3.3 中发布，并在 3.4 中升级到稳定状态。现在，它还为使用 `v-model` 修饰符提供了更好的支持。

相关文档：

- [修订组件v-model部分](https://vuejs.org/guide/components/v-model.html)
- [defineModel API 参考](https://vuejs.org/api/sfc-script-setup.html#definemodel)

### `v-bind` 同名速记

**语境： [PR#9451](https://github.com/vuejs/core/pull/9451)**

现在您可以将其缩短：

```vue
<img :id="id" :src="src" :alt="alt" />
```

变成这样：

```vue
<img :id :src :alt />
```

该功能在过去经常被要求使用。最初，我们担心其用法会与布尔属性相混淆。不过，在重新审视该功能后，我们现在认为，考虑到其动态性质，`v-bind` 的行为比原生属性更像 JavaScript，这是有道理的。

### 改进水合失配错误

**语境： [PR#5953](https://github.com/vuejs/core/pull/5953)**

3.4 版对水合失配错误信息进行了多项改进：

1. 提高了措辞的清晰度（服务器渲染与客户端预期）。
2. 消息中现在包含有问题的 DOM 节点，因此您可以在页面上或元素面板中快速找到它。
3. 水合失配检查现在也适用于类、样式和其他动态绑定的属性。

此外，3.4 还添加了一个新的编译时标志 [**VUE_PROD_HYDRATION_MISMATCH_DETAILS**](https://vuejs.org/api/compile-time-flags.html#vue-prod-hydration-mismatch-details)，可用于强制水合失配错误包含完整的详细信息，即使在生产环境中也是如此。

### 错误代码和编译时标志参考

为了减少包的大小，Vue 会在生产构建中丢弃较长的错误信息字符串。不过，这意味着生产环境中错误处理程序捕获的错误会收到较短的错误代码，如果不深入研究 Vue 的源代码，就很难解读这些代码。

为了改善这种情况，我们在文档中添加了[生产错误参考页](https://vuejs.org/error-reference/)。这些错误代码是从 Vue 稳定发布的最新版本中自动生成的。

我们还添加了[编译时标志参考](https://vuejs.org/api/compile-time-flags.html)，其中说明了如何为不同的构建工具配置这些标志。

## 已删除的过时功能

### 全局 JSX 命名空间

从 3.4 开始，Vue 默认不再注册全局 `JSX` 命名空间。这是为了避免与 React 的全局命名空间发生冲突，以便两个库的 TSX 可以在同一项目中共存。这不会影响使用最新版 Volar 的纯 SFC 用户。

如果您正在使用 TSX，有两种选择：

1. 在升级到 3.4 之前，在 `tsconfig.json` 中将 [jsxImportSource](https://www.typescriptlang.org/tsconfig#jsxImportSource) 明确设置为 `'vue'`。您也可以在文件顶部添加 `/* @jsxImportSource vue */` 注释，选择在每个文件中使用。

2. 如果您的代码依赖于全局 `JSX` 命名空间的存在，例如使用 `JSX.Element` 等类型，您可以通过显式引用 `vue/jsx` 来保留与 3.4 之前完全相同的全局行为，该引用会注册全局 `JSX` 命名空间。

请注意，这是次要发布版本中仅类型的破坏性变更，符合我们的 [release policy](https://vuejs.org/about/releases.html#semantic-versioning-edge-cases)。

### 其他已删除功能

- [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html)在 3.3 中被标记为弃用，现已在 3.4 中移除。由于该功能是试验性的，因此不需要重大变更。希望继续使用该功能的用户可以通过 [Vue Macros 插件](https://vue-macros.dev/features/reactivity-transform.html)。
- 删除了 `app.config.unwrapInjectedRef`。该功能在 3.3 中已被弃用并默认启用。在 3.4 中已无法禁用此行为。
- 模板中的 `@vnodeXXX` 事件侦听器现在会出现编译器错误，而不是弃用警告。请使用 `@vue:XXX` 监听器。
- 删除了 `v-is` 指令。它在 3.3 中已被弃用。请使用带有 `vue:` 前缀的 [`is` 属性](https://vuejs.org/api/built-in-special-attributes.html#is) 代替。
