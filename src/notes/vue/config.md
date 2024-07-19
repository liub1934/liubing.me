# Vue Config 配置

## 移除 preload prefetch 插件

```js
chainWebpack: (config) => {
  // 移除 preload 插件
  config.plugins.delete('preload')
  // 移除 prefetch 插件
  config.plugins.delete('prefetch')
}
```

## 全局加载样式文件

```js
pluginOptions: {
  // vue add style-resources-loader添加插件
  'style-resources-loader': {
    preProcessor: 'less',
    patterns: [path.resolve(__dirname, 'src/assets/styles/variables.less')]
  },
  // vue add lodash添加插件
  lodash: {
    // 是否开启ProvidePlugin, 默认false
    provide: true
  }
},
```

## Lodash 按需加载

### 插件安装

::: code-tabs
@tab NPM

```sh
npm install lodash-webpack-plugin babel-plugin-lodash -D
```

@tab Yarn

```sh
yarn add lodash-webpack-plugin babel-plugin-lodash -D
```

:::

### 配置 vue.config.js

```javascript
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

chainWebpack: (config) => {
  // lodash按需加载
  config.plugin('loadshReplace').use(new LodashModuleReplacementPlugin())
}
```

### 配置 babel.config.js

```javascript
module.exports = {
  plugins: ['lodash']
}
```

## 打包优化

[https://blog.csdn.net/weixin_43638968/article/details/109093199](https://blog.csdn.net/weixin_43638968/article/details/109093199)
