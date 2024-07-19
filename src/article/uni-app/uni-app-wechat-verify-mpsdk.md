---
date: 2019-08-17
category:
  - uni-app
  - Vue
tag:
  - 微信小程序
  - WeChat
  - 人脸核身
  - sdk
  - uni-app
layout: ArticleLayout
containerClass: article-container
---

# uni-app 微信小程序接入人脸核身 SDK

![image](https://image.liubing.me/2019/12/26/336a94e239a5f.png)

这几天使用 uni-app 开发某银行的一个微信小程序，需要集成接入腾讯云的人脸核身 SDK，如上图所示，记录下整合接入过程及踩的一些坑，帮助后面需要的朋友们。关于 uni-app 接入人脸核身 SDK 有不懂的地方可以在下面提问，看到会及时回复。

<!-- more -->

## 申请服务

不是所有的企业都能够申请的，需要符合以下行业要求的客户才能申请
政务：政府机构或事业单位
金融：银行、保险
医疗：公立医疗机构
运营商：电信运营商
教育：公立教育机构
交通：航空、客运、网约车、交通卡、共享交通、轨道交通、租车
旅游：酒店
物流：快递、邮政、物流
由于 SDK 会调用小程序原生的`wx.startFacialRecognitionVerify`方法，所以总共得申请 2 个服务:
**SDK 服务**：[申请人脸核身服务](https://cloud.tencent.com/apply/p/shcgszvmppc)
**小程序**：[查看申请流程](https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d)（需要发送邮件申请，使用该服务的小程序的 appid，后面开发也是用的这个）

::: warning 重要的事情说 3 遍
以上这 2 个服务都需要申请，缺一不可。  
以上这 2 个服务都需要申请，缺一不可。  
以上这 2 个服务都需要申请，缺一不可。
:::

## 下载 SDK

由于不是我申请的，所以怎么下载我也不知道，听群里的人说的是 SDK 腾讯云下发给客户的。

## SDK 目录结构

![image](https://image.liubing.me/2019/12/26/cf4574b0e1e09.png)

## SDK 接入

参考腾讯云文档的接入方法：[https://cloud.tencent.com/document/product/1007/31071](https://cloud.tencent.com/document/product/1007/31071)
文档是针对原生小程序写的，所以页面引入的方法有所不同
由于 uni-app 不支持直接引入小程序的原生页面，所以这里能想到的就是将它当作成一个微信小程序的组件，然后 uni-app 的页面引入这个组件

## 解压引入 SDK

在 uni-app 项目中新建`wxcomponents`目录，将 SDK 解压后放到该目录

![image](https://image.liubing.me/2019/12/26/b785c22afe7c2.png)

`pages.json`中`globalStyle`中全局引入小程序的组件，注意引用的路径

```javascript
"usingComponents": {
  "verify-mpsdk": "/wxcomponents/verify_mpsdk/index/index"
}
```

![image](https://image.liubing.me/2019/12/26/43e41f71fdb96.png)

### 新建人脸核身页面

`pages`中新建人脸核身的页面`face`(名字可以随意，根据自己的需要起名)，
`pages.json`中配置页面

![image](https://image.liubing.me/2019/12/26/1acb9dfe54c7a.png)

`face`页面中引入`verify-mpsdk`组件

![image](https://image.liubing.me/2019/12/26/efff0fc801e0d.png)

最终的人脸核身的页面访问就是`/pages/face/face`

### 初始化 SDK

在需要的页面初始化 SDK，如有个页面需要点击按钮进行人脸核身，就在这个页面进行初始化。
这个直接照着文档`快速入门`中的来就行了，这里就直接使用 uni-app 默认的`index`页面，
适当修改下即可，大概代码如下：

```html
<template>
  <view class="content">
    <button type="primary" @tap="gotoVerify">进入人脸核身</button>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        BizToken: ''
      }
    },
    onLoad() {
      // 初始化慧眼实名核身组件
      const Verify = require('@/wxcomponents/verify_mpsdk/main.js')
      Verify.init()
    },
    methods: {
      // 单击进入人脸核身按钮时，触发该函数
      gotoVerify() {
        this.BizToken = '' // 这里需要我们去客户后端调用DetectAuth接口获取BizToken
        // 调用实名核身功能
        wx.startVerify({
          data: {
            token: this.BizToken // BizToken
          },
          success: (res) => {
            // 验证成功后触发
            // res 包含验证成功的token, 这里需要加500ms延时，防止iOS下不执行后面的逻辑
            setTimeout(() => {
              // 验证成功后，拿到token后的逻辑处理，具体以客户自身逻辑为准
              console.log(res)
            }, 500)
          },
          fail: (err) => {
            // 验证失败时触发
            // err 包含错误码，错误信息，弹窗提示错误
            setTimeout(() => {
              console.log(err)
              wx.showModal({
                title: '提示',
                content: err.ErrorMsg,
                showCancel: false
              })
            }, 500)
          }
        })
      }
    }
  }
</script>
```

注意下这里的`BizToken`,需要调用后端服务接口来获取，
需要后端的同学调用腾讯云提供的[DetectAuth](https://cloud.tencent.com/document/api/1007/31816)来返回前端需要的`BizToken`，
调试开发阶段我们可以先通过腾讯云提供的工具
[API 3.0 Explorer](https://console.cloud.tencent.com/api/explorer?Product=faceid&Version=2018-03-01&Action=DetectAuth)
直接来获取这个`BizToken`
如果服务申请成功后控制台一般能找到`SecretId`，`SecretKey`，`RuleId`
注意`Endpoint`和`Region`选择的地区得保持和申请时选择的地区一致。
填写完成后点击`在线调用`中的`发送请求`按钮，如果填的都对的话返回信息里面会有`BizToken`
拿到`BizToken`后就可以直接使用了，修改下上面的代码：
xxxxxxxxxxxxxxxxx 就是拿到的`BizToken`

```javascript
this.BizToken = 'xxxxxxxxxxxxxxxxx' // 这里需要我们去客户后端调用DetectAuth接口获取BizToken
```

![image](https://image.liubing.me/2019/12/26/ae97b97b95ec8.png)

### 开发调试

上面都做完后就可以进行调试了
需要先在项目中`manifest.json`中配置上小程序的 appid，这个 appid 就是上面`申请服务`中的 appid，不然无法开启调试。

![image](https://image.liubing.me/2019/12/26/b448bf6e38531.png)

然后运行到微信开发工具（这里就不多说了），如果提示不是开发人员，就让该 appid 的管理员将你加到开发组里面就行了。
运行成功后点击开发者工具的真机调试，扫描二维码开启真机调试模式。
接下来就是踩坑了，会出现各种问题。

## 踩坑及解决方法

### Component is not found in path

这里开发者工具里面都是显示正常的，不会报这个错，
手机扫码进入调试后控制台会出现这个报错，
提示组件找不到，但是我们的路径都是对的，
`Component is not found in path "wxcomponents/verify_mpsdk/index/index"`

![image](https://image.liubing.me/2019/12/26/add318ae96511.png)

问题出在这里将`verify_mpsdk`当成自定义组件了，
小程序自定义组件引入的时候需要在文件 JSON 中指定`"component": true`
找到`wxcomponents\verify_mpsdk\index\index.json`文件，加入`"component": true`即可
重新开启调试扫码后上面的报错就没了。

![image](https://image.liubing.me/2019/12/26/5b68735163aca.png)

### navigateTo:fail page

点击按钮调用`gotoVerify`后会报一个页面找不到的错
`navigateTo:fail page "verify_mpsdk/index/index?isNotice=false" is not found`

![image](https://image.liubing.me/2019/12/26/1d7b45b526df2.png)

SDK 默认的是跳转验证页面的地址是`verify_mpsdk/index/index`，
文档找了半天也没找到相应的配置地址，最后在 SDK 里面搜索找到了这个地址。
所以只需要把这个地址改成我们所需要的地址就行了。
找到`wxcomponents\verify_mpsdk\main.js`，里面搜索`verify_mpsdk/index/index`,
找到后修改成上面`人脸核身页面`的地址`pages/face/face`
保存后重试就能跳转到人脸核身的页面了。

### 无操作、无报错大坑

进入人脸核身的页面后会发现啥操作都没，控制台也没报错

![image](https://image.liubing.me/2019/12/26/00c9d4aa17b74.png)

一度认为我自己弄的有问题，搞了好久也没弄好，也提了个工单（腾讯云工单反馈率还是很快的，几分钟后就有人回复了，这点赞一个），
将代码和相关操作在工单里描述了下，对方也觉得的没问题，按照快速入门的代码应该是没问题的，
对方也没找到啥问题，就让我加了一个腾讯云慧眼小助手的微信，
本想着下午加人家看看啥问题的，中午吃完饭闲着的时候将 SDK 里面的文件都格式化后终于在`index.js`里面找到问题所在了。
`wxcomponents\verify_mpsdk\index\index.js`文件中有个`onLoad`生命周期，

![image](https://image.liubing.me/2019/12/26/62818e83c0ca7.png)

正常原生微信小程序进入到这个页面的时候会执行`onLoad`里面的代码，
但是我们上面将这个 SDK 当作是一个自定义组件了，
在 uni-app 中组件是不存在`onLoad`这个生命周期的，这个是页面所属的生命周期。
找到问题所在就好解决了，我们可以在人脸核身的页面`pages/face/face`手动执行`onLoad`
修改下`pages/face/face`的代码，如下：

```html
<template>
  <view class="face">
    <verify-mpsdk ref="verifyMpsdk"></verify-mpsdk>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    onLoad(i) {
      // 页面onLoad的时候手动调用
      this.$refs.verifyMpsdk.onLoad(i)
    }
  }
</script>
```

保存后重试，就能正常显示了

![image](https://image.liubing.me/2019/12/26/cb1aea18b95b0.png)

### SDK 图片异常

点击快速验证进入下一步及后面的步骤的时候发现，页面的图片都挂掉了不显示，
一开始我一直用的真机调试，页面上也不会出现破图，控制台也不会报图片异常的错误，
导致我不知道怎么进行拍摄身份证，以为会自动识别身份证然后自动下一步，
最后在开发者工具里面跑了一遍才知道是图片找不到了，然后拍照的图片按钮自然也就显示不了了。

![image](https://image.liubing.me/2019/12/26/f685179d955a3.png)

![image](https://image.liubing.me/2019/12/26/e7198199e28a6.png)

最后在 SDK 里面搜索`/verify_mpsdk/images`，在下面文件中找到关键词，
`wxcomponents\verify_mpsdk\templates\ocr\ocr.wxml`

![image](https://image.liubing.me/2019/12/26/66e2a7217386c.png)

既然这种形式导致运行的时候图片找不到，我们可以把 SDK 所用的图片都复制到项目的`static`目录里
在`static`中新建`verify_mpsdk`目录，将 SDK 中的图片即`wxcomponents\verify_mpsdk\images`
复制到`static\verify_mpsdk`中，最终形成以下目录形式

![image](https://image.liubing.me/2019/12/26/15041760d4833.png)

最后将`wxcomponents\verify_mpsdk\templates\ocr\ocr.wxml`中的`/verify_mpsdk/images`批量替换成
`/static/verify_mpsdk/images`后重试即可，然后就都正常了。

![image](https://image.liubing.me/2019/12/26/d107501ee8a40.png)

![image](https://image.liubing.me/2019/12/26/2c761686d6f2a.png)

## 完整流程

最后用真机调试完整跑一把

![image](https://image.liubing.me/2019/12/26/361a820e125be.png)

![image](https://image.liubing.me/2019/12/26/c4a2e95b835ac.png)

![image](https://image.liubing.me/2019/12/26/edc4314b7947d.png)

![image](https://image.liubing.me/2019/12/26/bf8aa4ae266d1.png)

> 备注：如果最上面的`wx.startFacialRecognitionVerify`服务没有申请到此时点击下一步的会弹出一个无权限的弹窗无法进行下一步

![image](https://image.liubing.me/2019/12/26/42a2a5cf13274.png)

![image](https://image.liubing.me/2019/12/26/8ae35e6337fc6.png)

> 这里就是活体人脸检测了，需要将脸对准框框，点击开始后需要读几个数字，

![image](https://image.liubing.me/2019/12/26/a56b3945a5220.png)

最后验证通过后会回到之前的页面（调用 gotoVerify()方法的页面）， 验证成功后，会拿到一个`BizToken`，
可以在`wx.startVerify`回调函数`success`中打印自行查看。
拿到`BizToken`后可以调用后端的接口，后端通过调用 [GetDetectInfo](https://cloud.tencent.com/document/api/1007/31331) 接口获取并返回本次核身的详细信息，包括身份证上的信息和身份证证图片等信息。
前端拿到这些信息后根据自己的程序需要做处理。

## 结语

整合过程中遇到不少问题，百度加 google 也找不到相关的详细信息，
人脸核身的相关文档都很简单，出现问题后无从下手，只能慢慢自己摸索解决了，
最后写篇文章记录下整个过程，也能帮到后面需要集成这个 SDK 的朋友们。
