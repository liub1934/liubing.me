---
date: 2021-05-30
category:
  - Element UI
  - Vue
  - Web
tag:
  - Vue
  - Dialog
  - 弹窗
layout: ArticleLayout
containerClass: article-container
---

# 解决 Element UI Dialog 弹窗鼠标在遮罩层松开后导致弹窗关闭问题

在 Dialog 弹窗中鼠标左键按住后移动到弹窗的遮罩层松开后弹窗会被关闭，很怪异的一个问题，经常碰到复制弹窗文字的时候鼠标不小心移动到了遮罩层后弹窗莫名其妙的就被关闭了。  
网上找了个类似的[issues](https://github.com/ElemeFE/element/issues/15000)，如下图所示：

<!-- more -->

![image](https://image.liubing.me/2021/05/30/20813bc7e4aa5.gif)

## 解决方法一

最简单有效的方法加个`:close-on-click-modal="false"`来阻止点击遮罩层关闭弹窗

## 解决方法二

既能点击遮罩层关闭弹窗，又可以解决该弹窗的问题，可以利用 Dialog 的`before-close`和鼠标的`mousedown`和`mouseup`来解决，代码大致如下：  
利用`mousedown`和`mouseup`获取到的 class 列表在`before-close`的时候做判断

```vue
<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">
      点击打开 Dialog
    </el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :before-close="beforeDialogClose"
      @mousedown.native="dialogMousedown"
      @mouseup.native="dialogMouseup"
    >
      <span>这是一段信息</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      mousedownCls: [],
      mouseupCls: []
    }
  },
  methods: {
    dialogMousedown(e) {
      this.mousedownCls = [...e.target.classList]
    },
    dialogMouseup(e) {
      this.mouseupCls = [...e.target.classList]
    },
    beforeDialogClose(done) {
      const isWrapper =
        this.mousedownCls.includes('el-dialog__wrapper') &&
        this.mouseupCls.includes('el-dialog__wrapper')
      const isClose =
        this.mousedownCls.includes('el-dialog__close') &&
        this.mouseupCls.includes('el-dialog__close')
      if (isWrapper || isClose) {
        done()
      }
    }
  }
}
</script>
```

## 结语

可以将上述部分代码写成 mixin，进行全局注册，这样其他页面的弹窗也可以直接使用，或者对弹窗进行二次封装也可。

## 在线预览

<iframe width="100%" height="300" src="//jsrun.net/NZVKp/embedded/all/light" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
