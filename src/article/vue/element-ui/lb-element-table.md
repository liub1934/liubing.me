---
date: 2019-03-25
category:
  - Element UI
  - Vue
  - Web
tag:
  - Vue
  - Table
  - 表格
layout: ArticleLayout
containerClass: article-container
---

# lb-element-table 基于 Element UI Tabel 封装的表格组件

由于项目中频繁用到表格组件，所以自己基于 Element Table 进行二次封装的一个 Table 组件，
方便日常使用，无缝支持 Element Table 的所有功能参数及事件，欢迎体验！

<!-- more -->

## Github

[点击前往](https://github.com/liub1934/lb-element-table)

## 更多示例及参考

[点击前往](https://github.liubing.me/lb-element-table/zh/guide/)

## 简单示例参考

```html
<template>
  <lb-table :column="tableData.column" :data="tableData.data"> </lb-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: {
          column: [
            {
              prop: 'date',
              label: '日期'
            },
            {
              prop: 'name',
              label: '姓名'
            },
            {
              prop: 'address',
              label: '地址'
            }
          ],
          data: [
            {
              date: '2016-05-02',
              name: '王小虎1',
              address: '上海市普陀区金沙江路 1518 弄'
            },
            {
              date: '2016-05-02',
              name: '王小虎2',
              address: '上海市普陀区金沙江路 1518 弄'
            },
            {
              date: '2016-05-02',
              name: '王小虎3',
              address: '上海市普陀区金沙江路 1518 弄'
            }
          ]
        }
      }
    }
  }
</script>
```

## 预览

![image](https://image.liubing.me/2019/12/26/c1530a5da8b76.png)
