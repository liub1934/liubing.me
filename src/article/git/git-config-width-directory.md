---
date: 2023-06-23
category:
  - Git
tag:
  - Git
layout: ArticleLayout
containerClass: article-container
---

# Git 根据目录文件夹配置用户名和邮箱

平常开发过程中自己电脑 Git 全局配置的用户名和邮箱都是自己常用的，由于会存在开发公司项目的情况，Git 配置的用户名和邮箱肯定会不一样，此时需要手动在公司项目仓库下面单独设置提交的`user.name`和`user.email`，有人肯定会说这也没啥麻烦的，但是公司项目过多的情况下拉取仓库后很可能会忘记设置，导致提交记录里面的用户名非公司项目账号，这个就会尴尬 😅，然后自己 Google 了一番记录下根据目录文件夹的形式去配置用户名和邮箱，该目录下的所有项目都会统一使用相同的 Git 配置。

<!-- more -->

## Git 配置文件层级

先了解下 Git 有哪些层级的配置，通过[自定义 Git - 配置 Git](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git)中可以看到，Git 会首先会查找系统级的 `/etc/gitconfig` 文件，该文件含有系统里每位用户及他们所拥有的仓库的配置值。接下来 Git 会查找每个用户的`~/.gitconfig` 文件（或者 `~/.config/git/config` 文件），最后 Git 会查找你正在操作的仓库所对应的 Git 目录下的配置文件（`.git/config`），这个文件中的值只对该仓库有效。

- 系统层级: `/etc/gitconfig`，作用于系统中每位用户的 Git 配置。
- 用户层级: `~/.gitconfig`，作用于具体用户的 Git 配置。
- 项目层级: `.git/config`，作用于具体仓库，只对该仓库有效。

## [includeIf]

Git 配置文件支持 [Conditional Includes](https://git-scm.com/docs/git-config#_conditional_includes) 的配置。通过设置 `includeIf.<condition>.path`，可以向命中 `condition` 的 Git 仓库引入 `path` 指向一个 自定义的 Git 配置文件。

[includeIf] 的语法如下，`<keyword>` 为关键词，`<data>` 是与关键词关联的数据， 具体意义由关键词决定。

```sh
[includeIf "<keyword>:<data>"]
  path = path/to/gitconfig
```

其中支持的 keyword 关键词有`gitdir`、`gitdir/i`、`onbranch`：

- `gitdir`: 其中 `<data>` 是一个 `glob pattern` 如果代码仓库的`.git` 目录匹配 `<data>` 指定的 `glob pattern`，那么条件命中；
- `gitdir/i`：`gitdir` 的大小写不敏感版本。
- `onbranch`：其中 `<data>` 是匹配分支名的一个 `glob pattern`， 假如代码仓库中分支名匹配 `<data>`，那么条件就成立。

看下来后我们其实需要的是就是`gitdir`，根据代码目录仓库匹配。

## 实例配置

假如公司的所有项目都放在`~/jobCode/`目录下面。编辑用户目录下面的配置文件`~/.gitconfig`

```sh
vim ~/.gitconfig
```

在配置文件的最后加上`includeIf`配置

```sh
[includeIf "gitdir:~/jobCode/"]
  path = ~/jobCode/.gitconfig
```

最后在`~/jobCode/`目录下面新增`.gitconfig`配置文件，并配置`user.name`和`user.email`信息

```sh
[user]
  name = xx
  email = xx

[http]
  # 如果需要代理的话配置proxy，不需要可以忽略
  proxy = <Proxy URL>
```

最后可以重新拉取一个公司的新仓库，随便改点东西提交后查看提交记录中的用户名和邮箱验证下。
