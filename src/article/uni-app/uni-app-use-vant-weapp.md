---
date: 2020-01-26
category:
  - uni-app
  - Vue
  - Vant
tag:
  - uni-app
  - Vue
  - Vant
  - 微信小程序
layout: ArticleLayout
containerClass: article-container
---

# uni-app 微信小程序引入 vant weapp

总结下使用 uni-app 开发微信小程序过程中引入及使用 Vant Weapp 的方法及问题。  
GitHub：[https://github.com/liub1934/uniapp-use-vant](https://github.com/liub1934/uniapp-use-vant)

<!-- more -->

## 下载 Vant Weapp

下载有 2 种方法：

方法 1：克隆 Vant Weapp 的仓库，运行下面的命令将仓库克隆到本地

```shell
git clone https://github.com/youzan/vant-weapp.git
```

将`dist`目录复制到 uniapp 项目的`wxcomponents`目录中，`wxcomponents`和`components`同级，如果没有`wxcomponents`，自己建一个就行，
修改`dist`文件夹名称为`vant`。

方法 2：通过`npm`安装 Vant Weapp，如果项目中存在`package.json`，执行下方的命令安装 Vant Weapp，如果没有，则在项目根目录使用命令`npm init`，一路回车即可，会自动生成 package.json。

```shell
npm i vant-weapp -S --production
```

安装完成后在项目根目录`node_modules`中找到`@vant`，同上找到`dist`目录,复制到`wxcomponents`中并改名为`vant`

个人更倾向与方法二，因为几个星期或者几个月后估计就不知道具体用的什么版本了。

## 引入 Vant Weapp

找到`pages.json`，在`globalStyle`或者具体`page`的`style`中引入 Vant 的组件，
如果需要全局使用该组件，可以在`globalStyle`中`usingComponents`中全局引入

```javascript
"usingComponents": {
  "van-button": "/wxcomponents/vant/button/index",
  "van-grid": "/wxcomponents/vant/grid/index",
  "van-grid-item": "/wxcomponents/vant/grid-item/index",
  "van-index-bar": "/wxcomponents/vant/index-bar/index",
  "van-index-anchor": "/wxcomponents/vant/index-anchor/index"
}
```

![image](https://image.liubing.me/2020/01/17/6cd551a3f245d.png)

如果只需要单独在个别页面使用，可在具体页面的`style`中配置`usingComponents`

```
{
  "path": "pages/test",
  "style": {
    "navigationBarTitleText": "测试",
    "usingComponents": {
      "van-button": "/wxcomponents/vant/button/index"
    }
  }
}
```

## 内置样式

Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用，如`van-ellipsis`，各种边框的 class`van-hairline--top` 。
官网介绍的引入方式如下：

```shell
# 在 app.wxss 中引入内置样式
@import "path/to/@vant/weapp/dist/common/index.wxss";
```

在 uni-app 中是不存在`app.wxss`，只有经过编译后才会生成`app.wxss`，自己试了下，发现可以在`App.vue`中的`style`中引入可以正常使用。

```css
<style>
/*每个页面公共css */
@import "/wxcomponents/vant/common/index.wxss";
</style>
```

## 样式覆盖

有时候 Vant 的样式不满足现在的需求，需要对其做些简单的调整，我们不太可能直接去修改别人的源 CSS，根据官网提供的几种方案，整理了以下方法供大家参考：

```HTML
<van-button type="primary" block class="custom-button">自定义样式覆盖按钮</van-button>
```

通过定义个`class`直接进行样式覆盖

```css
<style lang="scss">
.custom-button {
  .van-button {
    background-color: blue;
    border-radius: 10px;
  }
}
</style>
```

如果你的`style`样式中存在`scoped`，我们可以利用`vue`中的语法，加个`/deep/`进行样式覆盖，如下所示：

```css
<style lang="scss" scoped>
/deep/ .custom-button {
  .van-button {
    background-color: blue;
    border-radius: 10px;
  }
}
</style>
```

## 定制主题

如果你对 Vant 的颜色样式不满意，可以通过官方提供的方法进行主题定制。
官方的介绍：

小程序基于 [Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn) 来实现自定义组件，所以 Vant Weapp 使用与之配套的 [Css 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来实现定制主题。链接中的内容可以帮助你对这两个概念有基本的认识，避免许多不必要的困扰。
Css 变量 的兼容性要求可以在 [这里](https://caniuse.com/#feat=css-variables) 查看。对于不支持 Css 变量 的设备，定制主题将不会生效，不过不必担心，默认样式仍会生效。

### 全局定制

为了目录更清晰，我们可以在项目根目录建立`assets\styles`文件夹，用于存放和样式相关的代码。
`assets\styles`中新建 2 个文件：`index.scss`和定制主题的`vant-theme.scss`文件，
`index.scss`引入`vant-theme.scss`

```css
@import './vant-theme.scss';
```

然后在`main.js`中引入`index.scss`

```javascript
import Vue from 'vue'
import App from './App'
import './assets/styles/index.scss' // 引入index.scss
// 其他省略
```

最后我们就可以在`vant-theme.scss`中根据官方所说的进行主题定制了：
以下是官方配置文件中变量，完整内容请参考[配置文件](https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less)

```css
// Component Colors
@text-color: #323233;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f8f8f8;
@background-color-light: #fafafa;
```

最后在`vant-theme.scss`根据配置文件的内容进行需要的变量定制，如下所示，也可以使用`uni.scss`中的变量：

```css
page {
  --button-info-background-color: $uni-text-color;
  --button-info-border-color: $uni-text-color;
}
```

### 局部定制

可能我们会对某个页面的某个组件进行单独的定制，官方提供 2 中方法：
方法 1：通过设置 class，单独设置设置变量

```HTML
<van-button type="info" block class="my-button">class局部定制主题的信息按钮</van-button>
```

```css
.my-button {
  --button-info-background-color: grey;
  --button-info-border-color: grey;
}
```

方法 2：通过 style 属性来动态设置变量

```HTML
<van-button type="info" block :style="buttonStyle">style局部定制主题的信息按钮</van-button>
```

```javascript
data() {
  return {
    buttonStyle: `
      --button-info-background-color: pink;
      --button-info-border-color: pink;
    `
  }
}
```

## 引入 iconfont

vant-weapp 中虽然内置了不少 icon 图标，但实际开发过程中肯定不满足我们的需要，这里以[iconfont](https://www.iconfont.cn)的图标为例子。  
将需要的图标加入到项目后点击编辑操作，将图标的前缀改成`iconfont`。

![image](https://image.liubing.me/2020/01/26/f3a567e9da682.png)

![image](https://image.liubing.me/2020/01/26/b54316bd343ef.png)

修改好后点击复制链接然后打开，可以看到相关的图标字体的链接和图标的 class。

![image](https://image.liubing.me/2020/01/26/366ddf8e46340.png)

在`asssets/styles`中新建一个`icon.scss`用于管理字体图标，然后再`index.scss`中引入。

```css
@import './icon.scss';
```

然后将上面复制的链接看到的内容复制下，写入到`icon.scss`中，去除掉一些不需要的字体链接和其他的一些修改，变成如下形式：

```css
@font-face {
  font-family: 'iconfont';
  src: url('https://at.alicdn.com/t/font_998792_mo2p0a3obyo.ttf?t=1579424702259')
    format('truetype');
}

[class^='iconfont-'],
[class*=' iconfont-'] {
  font-family: 'iconfont' !important;
  position: relative;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.iconfont-edit:before {
  content: '\e61d';
}
.iconfont-drag:before {
  content: '\e636';
}
.iconfont-rectangle:before {
  content: '\e790';
}
```

其中`[class^="iconfont-"]`和`[class*=" iconfont-"]`中的`iconfont`保持和上面的图标前缀一致，不建议使用`icon`前缀。  
如果图标有变动后重新将`.ttf`的字体链接复制过来替换原来的`font-face`中的字体链接，重新将图标的 class 的复制过来即可。  
配合`van-icon`组件，指定`class-prefix`为`iconfont`，`name`为图标的名称，不带`iconfont-`。

```HTML
<van-icon class-prefix="iconfont" name="edit" />
<van-icon class-prefix="iconfont" name="drag" />
<van-icon class-prefix="iconfont" name="rectangle" />
```

这样内置的图标也可以正常使用，不会有影响。

```HTML
<van-icon name="chat-o" />
<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

![image](https://image.liubing.me/2020/01/26/a7b835cb1cd84.png)

## 结语

以上是我用 uni-app 开发微信小程序使用 Vant Weapp 的一些经验总结，希望可以帮到有需要的人，如有不懂的地方可以评论回复，一般看到都会及时回复。  
最后附上 github 的链接：[https://github.com/liub1934/uniapp-use-vant](https://github.com/liub1934/uniapp-use-vant)，可以直接用`HbuilderX`导入即可在微信开发者工具中运行。
