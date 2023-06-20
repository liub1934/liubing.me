---
date: 2019-04-06
category:
  - Vue
  - Web
tag:
  - Vue
  - TinyMCE
  - 富文本编辑器
  - TinyMCE-Vue
layout: ArticleLayout
containerClass: article-container
---

# Vue CLI 3 TinyMCE 5 富文本编辑器整合

![image](https://image.liubing.me/2019/12/26/8373ab26138dc.png)

基于 Vue CLI 3 脚手架搭建的项目整合 tinymce 5 富文本编辑器，vue cli 2 版本及 tinymce 4 版本参考：[https://blog.csdn.net/liub37/article/details/83310879](https://blog.csdn.net/liub37/article/details/83310879)
做了些小修改，详情见 github。

<!-- more -->

> Github:[https://github.com/liub1934/vue-use-tinymce](https://github.com/liub1934/vue-use-tinymce 'https://github.com/liub1934/vue-use-tinymce')

## 插件安装

tinymce 官方提供了一个 vue 的组件[tinymce-vue](https://github.com/tinymce/tinymce-vue)  
如果有注册或购买过服务的话，直接通过组件配置 api-key 直接使用，像我这种懒的注册或者购买的直接下载 tinymce，自力更生

### 安装 tinymce-vue

```shell
npm install @tinymce/tinymce-vue -S
```

### 安装 tinymce

```shell
npm install tinymce -S
```

> 若无法完成安装，将下面的配置到`package.json`中执行`npm install`

```javascript
"@tinymce/tinymce-vue": "^2.0.0",
"tinymce": "^5.0.3"
```

### 下载中文语言包

tinymce 提供了很多的语言包，这里我们下载[中文语言包](https://www.tiny.cloud/get-tiny/language-packages/)

![image](https://image.liubing.me/2019/12/26/8ab5303abec92.png)

## 使用

1、在`public`目录下新建`tinymce`，将上面下载的语言包解压到该目录
2、在`node_modules`里面找到`tinymce`,将`skins`目录复制到`public/tinymce`里面
最终形成以下目录形式：

![image](https://image.liubing.me/2019/12/26/a5b859754b616.png)

### 初始化

引入基本文件

```javascript
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'
```

components 中注册 tinymce-vue 才能使用

```Html
<editor id="tinymce" v-model="value" :init="init"></editor>
```

初始化配置项，具体参考[官网文档](https://www.tiny.cloud/docs/)，这里说几个重要的

```javascript
init: {
  language_url: '/tinymce/langs/zh_CN.js',// 语言包的路径
  language: 'zh_CN',//语言
  skin_url: '/tinymce/skins/ui/oxide',// skin路径
  height: 300,//编辑器高度
  branding: false,//是否禁用“Powered by TinyMCE”
  menubar: false,//顶部菜单栏显示
}
```

## 扩展插件

默认的编辑器只有基本功能，如果还需要上传图片，插入表格之类的功能就需要添加[插件](https://www.tiny.cloud/docs/plugins/)
如添加上传图片和插入表格的插件

```javascript
import 'tinymce/plugins/image' // 插入上传图片插件
import 'tinymce/plugins/media' // 插入视频插件
import 'tinymce/plugins/table' // 插入表格插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/wordcount' // 字数统计插件
```

引入后还需要再`plugins`上配置和`toolbar`工具栏上添加相应的按钮

```javascript
plugins: 'lists image media table wordcount',
toolbar: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat'
```

这里我们一般会再次把它进行封装一下，以便其他地方随时可以引用

## 完整代码 tinymce-editor.vue

> 这里只是一个简单的封装，不一定满足所有人的需求，可以按照自己的需求和思路进行更深层次的封装。

```Html
<template>
  <div class="tinymce-editor">
    <editor v-model="myValue"
      :init="init"
      :disabled="disabled"
      @onClick="onClick">
    </editor>
  </div>
</template>
<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import 'tinymce/plugins/image'// 插入上传图片插件
import 'tinymce/plugins/media'// 插入视频插件
import 'tinymce/plugins/table'// 插入表格插件
import 'tinymce/plugins/lists'// 列表插件
import 'tinymce/plugins/wordcount'// 字数统计插件
export default {
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
    // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
    baseUrl: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: 'lists image media table wordcount'
    },
    toolbar: {
      type: [String, Array],
      default: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat'
    }
  },
  data () {
    return {
      init: {
        language_url: `${this.baseUrl}/tinymce/langs/zh_CN.js`,
        language: 'zh_CN',
        skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide`,
        content_css: `${this.baseUrl}/tinymce/skins/content/default/content.css`,
        // skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide-dark`, // 暗色系
        // content_css: `${this.baseUrl}/tinymce/skins/content/dark/content.css`, // 暗色系
        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        }
      },
      myValue: this.value
    }
  },
  mounted () {
    tinymce.init({})
  },
  methods: {
    // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    // 需要什么事件可以自己增加
    onClick (e) {
      this.$emit('onClick', e, tinymce)
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear () {
      this.myValue = ''
    }
  },
  watch: {
    value (newValue) {
      this.myValue = newValue
    },
    myValue (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>
```

## 封装后使用

```Html
<template>
  <div>
    { { msg }}
    <tinymce-editor ref="editor"
      v-model="msg"
      :disabled="disabled"
      @onClick="onClick">
    </tinymce-editor>
    <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
  </div>
</template>


<script>
import TinymceEditor from './tinymce-editor/tinymce-editor'
export default {
  components: {
    TinymceEditor
  },
  data () {
    return {
      msg: 'Welcome to Use Tinymce Editor',
      disabled: false
    }
  },
  methods: {
    // 鼠标单击的事件
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    // 清空内容
    clear () {
      this.$refs.editor.clear()
    }
  }
}
</script>
```

## 效果图

![image](https://image.liubing.me/2019/12/26/a74de0869dd5e.gif)

## 在线预览

[在线 Demo](https://github.liubing.me/vue-use-tinymce '在线Demo')

> 需要梯子
> 需要梯子
> 需要梯子

[Edit on CodeSandBox](https://codesandbox.io/s/1654wj537?fontsize=14)
