---
date: 2019-03-12
category:
  - Vue
  - Web
tag:
  - Vue
  - webpack
  - require.context
layout: ArticleLayout
containerClass: article-container
---

# 优雅管理 Vue 全局组件和插件

随着项目的不断变大，可能有些人会把插件的引入和全局组件的注册都放到`main.js`中，导致后面`main.js`里面一大坨引入代码，看起来杂乱无比，也不利于后期进行维护，所以我们尽可能的让`main.js`看起来整洁些。此处就用到`webpack`的`require.context`功能，实现 Vue 自动注册全局组件及插件，方便全局组件和插件的管理。

<!-- more -->

## 全局插件管理

1、项目中新建`plugins`目录，和`components`目录保持同级。  
2、`plugins`目录中新建`index.js`，以引入`element-ui`为例：  
3、再`plugins`目录中新建`element.js`，写入官方的引用方法（暂不考虑按需引入问题）

```javascript
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  size: 'small'
})
```

4、`index.js`中引入`element.js`

```javascript
import './element'
```

5、`main.js`中引入`plugins`中的`index.js`

```javascript
import Vue from 'vue'
import App from './App.vue'

// 引入插件，放在此处引用是为了下面的router和store中可能会用到某些插件的功能。
import './plugins/index'

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
```

这样`main.js`看起来就清爽很多了，后面有新增的插件，只需要再 plugins 目录下新建相应的插件名称，然后在`index.js`中引入即可，再多的插件也可以很方便的进行维护。

## 自动注册全局组件

官网文档参考：[点击前往](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)，  
1、先安装`lodash`

```javascript
npm install i lodash
```

2、`components`目录中新建`globals`目录，后面需要全局注册的组件全部放这个里面  
3、、`plugins`目中新建`auto-regist.js`（文件名可随意），写入以下内容

```javascript
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 其组件目录的相对路径
  '../components/globals',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\w+\.vue$/
)

requireComponent.keys().forEach((fileName) => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
```

4、`plugins`中`index.js`引入

```javascript
import './auto-regist'
import './element'
```

最后可以`components/globals`中放一个测试组件进行测试。

## 更优雅加载插件

每次在`plugins`中新增了一个插件后都需要在`index.js`中引用，假如有 100 个这样的插件，我们就得写 100 个，这里需要的和全局组件一样，在`index.js`中自动引入`plugins`中的插件，原理和上面的`自动注册全局组件`类似。  
改造下`index.js`的代码：

```javascript
const requirePlugin = require.context(
  // 当前plugins目录
  '/',
  // 是否查询其子目录
  false,
  // 匹配当前plugins目录下的js文件
  /.+\.js$/
)
requirePlugin.keys().forEach((fileName) => {
  requirePlugin(fileName)
})
```

这样就能自动加载引入`plugins`中的所有插件了。  
但是这样会存在一个插件引入顺序问题，因为 webpack 是根据你文件夹中文件的位置排序的，  
如有 A、B、C 三个插件，A 插件需要用到 B 插件提供的某个功能，这种情况下由于 A 插件被先引用，B 后引用，  
会导致 A 插件代码报错情况，这里用个取巧的方法，将 A、B 插件命名成以下形式：  
`a-2-A.js`、`a-1-B.js`，这样 B 插件就会排在前面优先加载。  
如果不存在依赖关系，可随意。

## 目录结构图

![image](https://user-images.githubusercontent.com/29849550/63434161-1da40c80-c457-11e9-8064-0b21efd79486.png)
