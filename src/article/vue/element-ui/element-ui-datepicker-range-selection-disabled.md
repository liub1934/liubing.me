---
date: 2019-03-12
toc: false
category:
  - Element UI
  - Vue
  - Web
tag:
  - Vue
  - DatePicker
  - 日期选择
layout: ArticleLayout
containerClass: article-container
---

# Element UI DatePicker 日期范围选择动态设置禁选日期

之前看到群里又小伙伴提出了一个`DatePicker`日期范围组件的一个问题
用图描述大概就是选择开始日期 13 号后，只能选择 13 号前一周和后一周的日期，其他日期处于禁止选择状态。

<!-- more -->

![image](https://image.liubing.me/2019/12/26/4c3e37b2f6308.png)

先去看了下 element 的相关文档，找到了一个点击选择日期后相关回调函数`onPick`，[传送门](http://element-cn.eleme.io/#/zh-CN/component/date-picker#picker-options)

![image](https://image.liubing.me/2019/12/26/8e4e2c936d971.png)

根据这个回调函数可以拿到点击的开始时间是，然后根据点击的开始时间在`picker-options`中`disabledDate`中处理需禁用的日期，由于这个日期是动态不确定的，所以将`picker-options`放在`computed`里面去处理，大致下面这个样子，可以获取到`data`中的数据

```javascript
  computed: {
    pickerOptions(){
      let _this = this
      return {
        disabledDate(time) {
          //此处可以根据_this获取到data中定义的数据
        },
        onPick({maxDate, minDate}) {


        }
      }
    }
  }
```

`onPick`选择第一个日期的时候能够取到的是`minDate`，`maxDate`是取不到的，将取到的`minDate`存下来`this.minDate = minDate`，在`disabledDate`里面根据`minDate`进行相关处理

```javascript
computed: {
  pickerOptions(){
    let _this = this
    return {
      disabledDate(time) {
        const times =  86400000 * 7//一周的毫秒数
        let curSelectTime = new Date(_this.minDate).getTime()
        let before = curSelectTime - times//前一周毫秒数
        let after = curSelectTime + times//后一周毫秒数
        return time.getTime() > after || time.getTime() < before
      },
      onPick({maxDate, minDate}) {
        if (!maxDate) {
          _this.minDate = minDate
        }
      }
    }
  }
}
```

动图预览：

![image](https://image.liubing.me/2019/12/26/6ef3d8a77c480.gif)

在线预览：

<iframe width="100%" height="300" src="//jsrun.pro/beXKp/embedded/all/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
