---
category:
  - 代码笔记
---

# 树结构操作

## 遍历树结构

:::: details 树结构

```js
let tree = [
  {
    id: '1',
    title: '节点1',
    children: [
      {
        id: '1-1',
        title: '节点1-1'
      },
      {
        id: '1-2',
        title: '节点1-2'
      }
    ]
  },
  {
    id: '2',
    title: '节点2',
    children: [
      {
        id: '2-1',
        title: '节点2-1'
      }
    ]
  }
]
```

::::

### 广度优先遍历

```js
function treeForeach(tree, func, childrenName = 'children') {
  let node,
    list = [...tree]
  while ((node = list.shift())) {
    func(node)
    node[childrenName] && list.push(...node[childrenName])
  }
}
```

### 深度优先遍历

::: code-tabs
@tab 先序遍历

```js
function treeForeach(tree, func) {
  tree.forEach((data) => {
    func(data)
    data.children && treeForeach(data.children, func) // 遍历子树
  })
}
```

@tab 后序遍历

```js
function treeForeach(tree, func) {
  tree.forEach((data) => {
    data.children && treeForeach(data.children, func) // 遍历子树
    func(data)
  })
}
```

:::

### 深度优先循环

::: code-tabs
@tab 先序遍历

```js
function treeForeach(tree, func) {
  let node,
    list = [...tree]
  while ((node = list.shift())) {
    func(node)
    node.children && list.unshift(...node.children)
  }
}
```

@tab 后序遍历

```js
function treeForeach(tree, func) {
  let node,
    list = [...tree],
    i = 0
  while ((node = list[i])) {
    let childCount = node.children ? node.children.length : 0
    if (!childCount || node.children[childCount - 1] === list[i - 1]) {
      func(node)
      i++
    } else {
      list.splice(i, 0, ...node.children)
    }
  }
}
```

:::

## 列表和树结构相互转换

## 列表转为树

:::: details list 数据

```js
let list = [
  {
    id: '1',
    title: '节点1',
    parentId: ''
  },
  {
    id: '1-1',
    title: '节点1-1',
    parentId: '1'
  },
  {
    id: '1-2',
    title: '节点1-2',
    parentId: '1'
  },
  {
    id: '2',
    title: '节点2',
    parentId: ''
  },
  {
    id: '2-1',
    title: '节点2-1',
    parentId: '2'
  }
]
```

::::

```js
function listToTree(list) {
  let info = list.reduce(
    (map, node) => ((map[node.id] = node), (node.children = []), map),
    {}
  )
  return list.filter((node) => {
    info[node.parentId] && info[node.parentId].children.push(node)
    return !node.parentId
  })
}
```

### 树结构转列表

::: code-tabs
@tab 递归实现

```js
function treeToList(tree, result = [], level = 0) {
  tree.forEach((node) => {
    result.push(node)
    node.level = level + 1
    node.children && treeToList(node.children, result, level + 1)
  })
  return result
}
```

@tab 循环实现

```js
function treeToList(tree) {
  let node,
    result = tree.map((node) => ((node.level = 1), node))
  for (let i = 0; i < result.length; i++) {
    if (!result[i].children) continue
    let list = result[i].children.map(
      (node) => ((node.level = result[i].level + 1), node)
    )
    result.splice(i + 1, 0, ...list)
  }
  return result
}
```

:::

## 树结构筛选

```js
function treeFilter(tree, func) {
  // 使用map复制一下节点，避免修改到原树
  return tree
    .map((node) => ({ ...node }))
    .filter((node) => {
      node.children = node.children && treeFilter(node.children, func)
      return func(node) || (node.children && node.children.length)
    })
}
```

## 树结构查找

### 查找节点

```js
function treeFind(tree, func) {
  for (const data of tree) {
    if (func(data)) return data
    if (data.children) {
      const res = treeFind(data.children, func)
      if (res) return res
    }
  }
  return null
}
```

### 查找节点路径

```js
function treeFindPath(tree, func, path = []) {
  if (!tree) return []
  for (const data of tree) {
    path.push(data.id)
    if (func(data)) return path
    if (data.children) {
      const findChildren = treeFindPath(data.children, func, path)
      if (findChildren.length) return findChildren
    }
    path.pop()
  }
  return []
}
```

### 查找多条节点路径

```js
function treeFindPath(tree, func, path = [], result = []) {
  for (const data of tree) {
    path.push(data.id)
    func(data) && result.push([...path])
    data.children && treeFindPath(data.children, func, path, result)
    path.pop()
  }
  return result
}
```

::: tip
代码来源：[https://wintc.top/article/20](https://wintc.top/article/20)

工具库：[https://github.com/wintc23/js-tree-tool](https://github.com/wintc23/js-tree-tool)
:::
