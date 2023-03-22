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

<div class="demo-font-size-10">我是 10px 的大小的文字</div>
<div class="demo-font-size-12">我是 12px 的大小的文字</div>

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
