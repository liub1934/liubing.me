---
date: 2024-02-05
category:
  - Vue
  - Vue3
tag:
  - Eslint
layout: ArticleLayout
containerClass: article-container
---

# Vue3使用eslint-plugin-vue规范团队代码风格

团队开发过程中，避免不了不了多人合作开发，而每个人的代码风格也可能不同，虽然可以使用`Prettier`来格式化一些基本的代码格式规范，但更详细的Vue3书写规范还是需要使用Eslint的插件[eslint-plugin-vue](https://eslint.vuejs.org/)。

<!-- more -->

## 安装使用

使用[create-vue](https://github.com/vuejs/create-vue)创建的项目可选集成自带，其他方式创建的项目可以参考[User Guide](https://eslint.vuejs.org/user-guide/)教程进行安装。

::: code-tabs
@tab npm

```sh
npm install --save-dev eslint eslint-plugin-vue
```

@tab pnpm

```sh
pnpm add -D eslint eslint-plugin-vue
```

@tab yarn

```sh
yarn add -D eslint eslint-plugin-vue
```

:::

::: warning

- ESLint v6.2.0 and above
- Node.js v14.17.x, v16.x and above

:::

`.eslintrc.js`相关配置：

```js
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
```

## 部分配置

这里推荐使用规范性更强的规则`plugin:vue/vue3-recommended`，可以显著提高代码可读性和或开发体验。

由于开发过程中每个人都有自己不同的书写风格，比如有些人在`template`中喜欢使用如下的各种写法：

- `<RouterLink></RouterLink>`
- `<router-link></router-link>`
- `<router-link />`
- `<RouterLink />`

虽然以上的代码风格都支持，代码不也不会报错，但是从团队规范性来讲，最好还是统一成一个写法，这时候就可以借助`eslint-plugin-vue`中的[vue/component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)规则在文件保存的时候自动进行格式化。

下面罗列一下博主日常开发中使用的部分规则。

### vue/component-name-in-template-casing

[vue/component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)

看规则名字有些人可能就知道该规则是干嘛的了，用于自动修复在`template`中组件名称的写法。规则默认的是`PascalCase`的写法，如下所示：

![image](https://image.liubing.me/i/2024/02/05/65c097f5ca136.png)

可选开启`kebab-case`写法，只需要在eslint rule中开启相应的规则即可，如下所示：

```json
{
  "vue/component-name-in-template-casing": [
    "error",
    "kebab-case",
    {
      "registeredComponentsOnly": true,
      "ignores": []
    }
  ]
}
```

![image](https://image.liubing.me/i/2024/02/05/65c09a2c24786.png)

开启`kebab-case`写法后如何组件名称还是`PascalCase`的写法则会有报错提示，保存后会自动格式化成配置的`kebab-case`写法，如下动图所示：

![image](https://image.liubing.me/i/2024/02/05/65c09b3d704f7.gif)

### vue/html-self-closing

[vue/html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)

此规则旨在强制执行自动关闭标志作为配置的样式。

```json
{
  "vue/html-self-closing": [
    "error",
    {
      "html": {
        "void": "never",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }
  ]
}
```

![image](https://image.liubing.me/i/2024/02/05/65c0a2b8e844b.png)

![image](https://image.liubing.me/i/2024/02/05/65c0a2db15507.png)

### vue/html-comment-content-spacing

[vue/html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)

此规则将强制注释`<!--`前后的间距保持一致。非常适合有强迫症患者。

```json
{
  "vue/html-comment-content-spacing": [
    "error",
    "always",
    {
      "exceptions": []
    }
  ]
}
```

![image](https://image.liubing.me/i/2024/02/05/65c0a46b6cb2b.png)

![image](https://image.liubing.me/i/2024/02/05/65c0a48bde681.png)

### vue/define-props-declaration

[vue/define-props-declaration](https://eslint.vuejs.org/rules/define-props-declaration.html)

此规则强制执行您应该使用或声明的defineProps键入样式。

```json
{
  "vue/define-props-declaration": ["error", "runtime"]
}
```

![image](https://image.liubing.me/i/2024/02/05/65c0a61cbbb11.png)

![image](https://image.liubing.me/i/2024/02/05/65c0a64b6ffea.png)

## 结语

[eslint-plugin-vue](https://eslint.vuejs.org/rules/)内置的很多的规则，这里就不一一讲解了，可以自行查看，按团队需要启用或禁用规则。
