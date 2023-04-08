---
order: 1
category:
  - 代码笔记
---

# 通用 CSS

## 设置小于 12px 字体

如设置 `10px` 的字体大小，由于浏览器限制最小字体为 `12px`，可以先将字体设置成 `20px`，然后利用`transform`的`scale`属性缩小一半即 `0.5` 即可，由于缩小后位置会发生偏移，通过`transform-origin`重新设置元素的原点。

```css
.font-size-10 {
  font-size: 20px;
  transform: scale(0.5);
  transform-origin: 0 0;
}
```

👇👇👇👇 显示效果如下:

<div class="demo-font-size-10">我是 10px 大小的文字</div>
<div class="demo-font-size-12">我是 12px 大小的文字</div>

<style>
  .demo-font-size-10 {
    font-size: 20px;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
  .demo-font-size-12 {
    font-size: 12px;
  }
</style>

## 元素等比宽高

### width padding 大法

将 `width` 和 `padding-top` 设置成同一个值，宽高会成 1:1 比例，高度会有`padding-top`撑起来。

```css
.demo-box {
  width: 100%;
  padding-top: 100%;
  /* width: 100px; */
  /* padding-top: 100px; */
}

.demo-box {
  width: 100%;
  padding-top: 50%;
  /* width: 100px; */
  /* padding-top: 50px; */
}
```

效果预览 👇 可以改变窗口试试！

<div class="demo-list-1">
  <div class="demo-box" v-for="n in 3"></div>
</div>

<div class="demo-list-2">
  <div class="demo-box" v-for="n in 3"></div>
</div>

<style lang="scss">
  .demo-list-1 {
    display: flex;
    .demo-box {
      width: 20%;
      padding-top: 20%;
      background: var(--theme-color-mask);
      margin-right: 20px;
    }
  }
  .demo-list-2 {
    margin-top: 20px;
    display: flex;
    .demo-box {
      width: 20%;
      padding-top: 10%;
      background: var(--theme-color-mask);
      margin-right: 20px;
    }
  }
</style>

### aspect-ratio 大法

使用 Css 的属性[aspect-ratio](https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio)，设置相应的比例。

```css
.demo-box {
  width: 100%;
  /* width: 100px; */
  aspect-ratio: 1 / 1;
}

.demo-box {
  width: 100%;
  /* width: 100px; */
  aspect-ratio: 2 / 1;
}
```

效果预览 👇 可以改变窗口试试！

<div class="demo-list-3">
  <div class="demo-box" v-for="n in 3"></div>
</div>

<div class="demo-list-4">
  <div class="demo-box" v-for="n in 3"></div>
</div>

<style lang="scss">
  .demo-list-3 {
    display: flex;
    .demo-box {
      width: 20%;
      aspect-ratio: 1 / 1;
      background: var(--theme-color-mask);
      margin-right: 20px;
    }
  }
  .demo-list-4 {
    margin-top: 20px;
    display: flex;
    .demo-box {
      width: 20%;
      aspect-ratio: 2 / 1;
      background: var(--theme-color-mask);
      margin-right: 20px;
    }
  }
</style>
