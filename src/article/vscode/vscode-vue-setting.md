---
date: 2019-05-16
category:
  - VsCode
  - Vue
tag:
  - VsCode
layout: ArticleLayout
containerClass: article-container
---

# VsCode 从零开始配置一个属于自己的 Vue 开发环境

VsCode 算是比较热门的一个代码编辑器了，全名 Visual Studio Code，微软出品
下载地址：[点我去下载](https://code.visualstudio.com/download)
插件众多，功能齐全，平常开发过程中都是用的它，整理了下日常使用的插件及配置供大家参考，
废话就不多说了，直接进入正题。

<!-- more -->

## 相关插件

### Vetur

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=octref.vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
Vetur 不用说了吧，开发 Vue 必装的一个插件
未安装之前 vue 文件显示这样的

![image](https://image.liubing.me/2019/12/26/6841a26bdb4f9.png)

安装完成后显示这样的，看着舒服多了

![image](https://image.liubing.me/2019/12/26/a3e10bb5197fc.png)

### Vue 2 Snippets

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)
主要加强 vue 的便捷写法

![image](https://image.liubing.me/2019/12/26/9829d1e5dce59.gif)

![image](https://image.liubing.me/2019/12/26/217dcf121b277.gif)

### language-stylus

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
写 stylus 用的，如果项目用的 stylus 写样式推荐安装，其他 Sass、LESS 等同理安装相应的插件即可。

![image](https://image.liubing.me/2019/12/26/13b78783a34c1.gif)

![image](https://image.liubing.me/2019/12/26/c75c67e68a425.gif)

### Auto Close Tag

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
自动闭合标签所用

![image](https://image.liubing.me/2019/12/26/19b12e2e27734.gif)

配合快捷键`Alt+.` (`Command+Alt+.` for Mac)特别好使。

![image](https://image.liubing.me/2019/12/26/661b9a0562bdb.gif)

### Auto Rename Tag

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
自动修改重命名配对的标签

![image](https://image.liubing.me/2019/12/26/1d6f5ef6017a5.gif)

### Bookmarks

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)
可以对成片的代码做一些书签标记，方便后续查看。

![image](https://image.liubing.me/2019/12/26/459fc4bbc3260.gif)

### Bracket Pair Colorizer

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
对括号进行着色，方便区分，下面的图分别是安装前后的比较

![image](https://image.liubing.me/2019/12/26/adbbee1f71cb9.png)

![image](https://image.liubing.me/2019/12/26/ec9a6ab34e9d7.png)

### Copy Relative Path

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=alexdima.copy-relative-path](https://marketplace.visualstudio.com/items?itemName=alexdima.copy-relative-path)
用于复制文件的完整路径和相对路径，有时候我们可能需要复制一些文件的路径，该插件就很方便了。

![image](https://image.liubing.me/2019/12/26/da8d8c6644fb1.gif)

### Path Intellisense

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
路径自动感知，在配置文件中配置`@`后我们就可以很方便快捷的引用各种文件了

```javascript
"path-intellisense.mappings": {
  "@": "${workspaceRoot}/src"
}
```

![image](https://image.liubing.me/2019/12/26/a096fe1d028c1.gif)

### Document This

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=joelday.docthis](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)
主要用于方法的注释，选中方法名，按两次`Ctrl+Alt+D`,即可快速生成标准的注释

![image](https://image.liubing.me/2019/12/26/9ed538ebbeccd.gif)

### psioniq File Header

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header](https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header)
按两次`Ctrl+Alt+H`可快速在文件的头部生成注释信息，如果对默认的注释模板不满意的话，可以在配置文件中自定义注释模板

```javascript
"psi-header.templates": [
  {
    "language": "*",
    "template": [
      "FileName: <<filename>>",
      "Remark: <<filename>>",
      "Project: <<projectname>>",
      "Author: <<author>>",
      "File Created: <<filecreated('dddd, Do MMMM YYYY h:mm:ss a')>>",
      "Last Modified: <<dateformat('dddd, Do MMMM YYYY h:mm:ss a')>>",
      "Modified By: <<author>>"
    ]
  }
]
```

![image](https://image.liubing.me/2019/12/26/336a6b0bcc3ba.gif)

![image](https://image.liubing.me/2019/12/26/1d90fe0f8df59.gif)

### Vue Peek

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek)
用于 Vue 快速查看组件定义以及组件跳转，具体使用见插件文档地址中的使用方法。

![image](https://image.liubing.me/2019/12/26/33e790625cf5c.gif)

### JavaScript (ES6) code snippets

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
用于快速生成 ES6 代码片段

![image](https://image.liubing.me/2019/12/26/fe7fe1eccace0.gif)

### Material Icon Theme

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
Material 风格的 icon 文件图标，可以看下安装前后的区别。

![image](https://image.liubing.me/2019/12/26/b10973036bbee.png)

![image](https://image.liubing.me/2019/12/26/5d30854a1099f.png)

### ESLint

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
这个不用多说了，规范代码格式的。

## StandardJS - JavaScript Standard Style

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
作为一个合格的前端开发，得遵循一定得代码规范，这里推荐[StandardJS](https://github.com/standard/standard)，

> vue-cli-3 脚手架创建项目的时候，可以选择这个规范。

![image](https://image.liubing.me/2019/12/26/c048e1beab9e0.gif)

### Beautify

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
主要拿它来格式话 html 的，也可以格式话`vue` `template`中的 html
配合`vetur`插件，需要做些设置,格式化 html 支持以下四种模式
`auto|force|force-aligned|force-expand-multiline`

```javascript
"vetur.format.defaultFormatterOptions": {
  //beautify设置
  "js-beautify-html": {
    "wrap_attributes_indent_size": 2,
      "wrap_attributes": "force-expand-multiline" // auto|force|force-aligned|force-expand-multiline
  }
}
```

#### auto 模式

![image](https://image.liubing.me/2019/12/26/174074d387068.png)

#### force 模式

![image](https://image.liubing.me/2019/12/26/087754c91f6cc.gif)

#### force-aligned 模式

![image](https://image.liubing.me/2019/12/26/134e0b7e642fd.gif)

#### force-expand-multiline 模式

![image](https://image.liubing.me/2019/12/26/7a2457987885d.gif)

### vscode-element-helper

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=ElemeFE.vscode-element-helper](https://marketplace.visualstudio.com/items?itemName=ElemeFE.vscode-element-helper)
用 element-ui 的，应该都知道这个插件，功能看图就知道了。

![image](https://image.liubing.me/2019/12/26/34a9b0712c68f.gif)

![image](https://image.liubing.me/2019/12/26/9374ba7b39e93.gif)

### Version Lens

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
显示 npm，jspm，bower，dub 和 dotnet 核心的软件包版本信息

![image](https://image.liubing.me/2019/12/26/76b0392946b80.gif)

![image](https://image.liubing.me/2019/12/26/416d3918e0971.png)

### One Dark Pro

插件文档地址：[https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
一款热门的主题，安装前后比较。

![image](https://image.liubing.me/2019/12/26/4bf479051cd0a.png)

![image](https://image.liubing.me/2019/12/26/2cbe7fa17bd0e.png)

## 相关配置

```javascript
{
  // 编辑器默认设置
  "editor.tabSize": 2, // 设置2个空格统一tabSize
  "javascript.validate.enable": false, // 关闭默认的校验
  "workbench.editor.enablePreview": false, // 关闭文件预览
  // 引用路径设置
  "path-intellisense.mappings": {
      "@": "${workspaceRoot}/src",
      "~": "${workspaceRoot}/src",
      "src": "${workspaceRoot}/src"
  },
  // standard自动保存
  "standard.autoFixOnSave": true,
  // psioniq File Header设置
  "psi-header.templates": [{
      "language": "*",
      "template": [
          "FileName: <<filename>>",
          "Remark: <<filename>>",
          "Project: <<projectname>>",
          "Author: <<author>>",
          "File Created: <<filecreated('dddd, Do MMMM YYYY h:mm:ss a')>>",
          "Last Modified: <<dateformat('dddd, Do MMMM YYYY h:mm:ss a')>>",
          "Modified By: <<author>>"
      ]
  }],
  // vetur设置
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "none",
  "vetur.format.defaultFormatterOptions": {
      //beautify设置
      "js-beautify-html": {
          "wrap_attributes_indent_size": 2,
          "wrap_attributes": "force-expand-multiline" // auto|force|force-aligned|force-expand-multiline
      }
  },
  // eslint设置
  "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
          "language": "vue",
          "autoFix": true
      }
  ],
  // 保存后自动格式化
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": true,

  "workbench.iconTheme": "material-icon-theme", // icon图标
  "workbench.colorTheme": "One Dark Pro" // 编辑器主题
}
```

## 备份及同步

忙活半天把上面的插件都装上及配置好，下次换新电脑的时候总不能重新再来一遍吧，所以压轴插件登场
**Settings Sync**
插件文档地址：[https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
安装完成后需要做些其他事情：

## 创建 GitHub Gist ID

[点我去创建](https://github.com/settings/tokens/new?description=code-setting-sync&scopes=gist)

![image](https://image.liubing.me/2019/12/26/9894d691d3b27.png)

创建完成后有个提示，一定要将红色框所示的 token 记录下来，不然下次就看不到了。

![image](https://image.liubing.me/2019/12/26/145e3ec816a87.png)

### 上传设置

按`Shift + Alt + U`，会出现一个出入 token 的框，将上面我们创建的 token 输入后回车。

![image](https://image.liubing.me/2019/12/26/4c019fe03c626.png)

完成后会给你生成一个 GIST ID，将这个 GIST ID 记录下来，下次需要在其他电脑上恢复数据的时候需要用到。

![image](https://image.liubing.me/2019/12/26/376b8fe99fadc.png)

完整步骤 Gif

![image](https://image.liubing.me/2019/12/26/d9011f8890ddb.gif)

### 下载设置

按`Shift + Alt + D`，它将询问您的 GitHub Gist ID（我们在步骤`创建GitHub Gist ID`中生成的一个 ID）
在窗口中输入该 GitHub Gist ID，然后回车。

![image](https://image.liubing.me/2019/12/26/8c4a7985b6b3b.png)

提示需要输入您的 Gist ID（上面上传设置后生成的一个 ID）

![image](https://image.liubing.me/2019/12/26/3057269187eaa.png)

下载可能会需要点时间，完整过程 Gif

![image](https://image.liubing.me/2019/12/26/458bc530bbde6.gif)

### 插件配置

最后可以按照自己的需求配置自动上传与自动下载

```javascript
"sync.autoDownload": false,// 是否自动下载
"sync.autoUpload": false// 是否自动上传
```

## 结语

至此教程就结束了，后面有其他问题或者有用的插件会补充进去。
