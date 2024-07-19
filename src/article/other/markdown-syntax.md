---
date: 2023-05-26
category:
  - Markdown
tag:
  - Markdown
star: true
layout: ArticleLayout
containerClass: article-container
---

# Markdown 基本语法记录

整理了下 Markdown 基本语法，免得忘记的时候需要去搜索。

<!-- more -->

## 段落与换行

- 段落回车即可
- 换行需要后文字后面打 2 个空格或者输入`<br>`标签

```md
这是一段文字

这是一段文字

这是一行文字  
这是一行文字<br>
这是一行文字
```

这是一段文字

这是一段文字

这是一行文字  
这是一行文字<br>
这是一行文字

## 标题

```md
# 一级大标题

## 二级大标题

### 三级大标题

#### 四级大标题

##### 五级大标题
```

## 引用

### 引用内容

```md
> 引用内容
```

> 引用内容

### 多行引用

多行末尾需要使用 2 个空格或者`<br>`标签

```md
> 多行引用  
> 多行引用<br>
> 多行引用
```

> 多行引用  
> 多行引用<br>
> 多行引用

### 嵌套引用

```md
> 嵌套引用
>
> > 嵌套引用
```

> 嵌套引用
>
> > 嵌套引用

### 引用中使用其他 Markdown

```md
> 引用中使用其他 ~~Markdown~~
```

> 引用中使用其他 ~~Markdown~~

## 列表

### 无序列表

推荐使用`-`，虽然`*`和`+`也可以。

```md
- 无序列表
- 无序列表
```

- 无序列表
- 无序列表

### 有序列表

前面的数字不影响生成的顺序，推荐还是按顺序书写，可以安装相应的编辑器插件自动修改成正确的序号。

```md
1. 有序列表
2. 有序列表
3. 有序列表
```

1. 有序列表
2. 有序列表
3. 有序列表

### 嵌套列表

```md
- 嵌套列表

  - 1-1
  - 1-2

- 嵌套列表

  - 2-1
  - 2-2
```

- 嵌套列表

  - 1-1
  - 1-2

- 嵌套列表

  - 2-1
  - 2-2

## 代码

### 代码块

````md
```javascript
console.log('liubing.me')
console.log('liubing.me')
```

```html
<div>liubing.me</div>
<div>liubing.me</div>
```

```css
.test {
  color: '#ccc';
}
```
````

```javascript
console.log('liubing.me')
console.log('liubing.me')
```

```html
<div>liubing.me</div>
<div>liubing.me</div>
```

```css
.test {
  color: '#ccc';
}
```

### 行内代码块

```md
这是一段文字，里面有`行内代码块`。
```

这是一段文字，里面有`行内代码块`。

## 分隔线

推荐使用三个`-`或者`<hr>`标签。

```md
分隔线

---

分隔线

<hr>

分隔线
```

分隔线

---

分隔线

<hr>

分隔线

## 超链接

格式为 `[链接文字](链接地址 "链接title")`

```md
普通链接：[博客](https://liubing.me/)  
带 title 链接：[博客](https://liubing.me/ '博客')
```

普通链接：[博客](https://liubing.me/)  
带 title 链接：[博客](https://liubing.me/ '博客')

### 自动链接

链接文字和链接地址都显示一样，可以使用`<>`包含链接。

```md
自动链接：<https://liubing.me/>
```

自动链接：<https://liubing.me/>

## 图片

格式和超链接类似，前面多了个`!`感叹号。

```md
![图片](https://liubing.me/logo.png)
```

![图片](https://liubing.me/logo.png)

标准 Markdown 不支持设置图片宽高，可以直接通过插入`img`标签的形式去实现。

```md
<img src="https://liubing.me/logo.png" width="100" height="100" />
```

<img src="https://liubing.me/logo.png" width="100" height="100" />

## 文字强调

### 斜体

```md
这是一段内含*斜体*的文字
```

这是一段内含*斜体*的文字

### 加粗

```md
这是一段内含**加粗**的文字  
这是一段内含\*\*星号特殊符号\*\*的文字
```

这是一段内含**加粗**的文字  
这是一段内含\*\*星号特殊符号\*\*的文字，需要使用\转义

### 删除线

```md
这是一段~~删除线~~演示
```

这是一段~~删除线~~演示

## 表格

```md
| Column A | Column B | Column C |
| -------- | -------- | -------- |
| A1       | B1       | C1       |
| A2       | B2       | C2       |
| A3       | B3       | C3       |
```

| Column A | Column B | Column C |
| -------- | -------- | -------- |
| A1       | B1       | C1       |
| A2       | B2       | C2       |
| A3       | B3       | C3       |

### 表格对齐

```md
| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| A1     |     B1 |    C1    |
| A2     |     B2 |    C2    |
| A3     |     B3 |    C3    |
```

| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| A1     |     B1 |    C1    |
| A2     |     B2 |    C2    |
| A3     |     B3 |    C3    |

## 任务列表

```md
- [ ] 待完成
- [x] 已完成
  - [x] 已完成 1
  - [x] 已完成 2
```

- [ ] 待完成
- [x] 已完成
  - [x] 已完成 1
  - [x] 已完成 2

## Emoji 表情

表情符号代码参考：<https://gist.github.com/rxaviers/7360908>

```md
:joy:  
:smirk:  
:blush:
```

:joy:  
:smirk:  
:blush:
