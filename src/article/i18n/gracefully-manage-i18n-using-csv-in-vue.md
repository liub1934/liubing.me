---
date: 2023-02-11
category:
  - Vue
  - i18n
tag:
  - Vue
  - Vite
  - i18n
  - Vue I18n
layout: ArticleLayout
containerClass: article-container
---

# Vue 中使用 CSV 优雅的管理 i18n 多语言

项目中使用 CSV 文件将多语言集中在一起，方便同时对一个 Key 进行修改。  
通过一个可执行的文件`icotjo`，将 CSV 转换成各语言的 JSON 文件。  
`icotjo`是一个 Go 写的工具，源码可在[https://github.com/wonsikin/icotjo](https://github.com/wonsikin/icotjo)查看。

<!-- more -->

::: tip
文中的`icotjo.exe` `icotjo` `icotjoForMac`等文件可以在[Github 仓库](https://github.com/liub1934/i18n-csv-tool)进行下载。
:::

## CSV 文件格式

以下是一个通用的管理格式，第一行定义多语言的 Key，按逗号进行分隔。

```csv
key,zh-CN,en-US,ja
GENERAL.FIELD.VIEW,查看,View,確認
```

![image](https://image.liubing.me/2023/02/11/1d7ccb37ebf62.png)

## 生成多语言 JSON

Window 系统可直接双击`icotjo.exe`文件执行，Linux 系统用户可通过命令`./icotjo`执行，Mac 系统用户同理，通过命令`./icotjoForMac`执行。

执行命令后如果 CSV 文件格式都 OK 的话同级目录会自动`zh-CN.json` `en-US.json` `ja.json`文件。

::: tip
Linux 或 Mac 执行文件提示没权限的话可以使用 chmod 修改文件权限

```sh
chmod 0755 icotjo
chmod 0755 icotjoForMac
```

:::

生成的 JSON 文件就是 `i18n` 所需要引入的文件。

![image](https://image.liubing.me/2023/02/11/8a782f7f97a35.gif)

## 引入使用

已 Vite + Vue3 为例子，通过`import`引入 json 文件，在 `i18n` `messages` 参数中配置

```ts
import { createI18n } from 'vue-i18n'
import { getAppLang } from '@/utils'
import zhCN from './lang/zh-CN.json'
import enUS from './lang/en-US.json'
import ja from './lang/ja.json'

const initLang = getAppLang()

const i18n = createI18n({
  locale: initLang,
  fallbackLocale: initLang,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
    ja: ja
  }
})

export default i18n
```

## 按模块使用

当项目过大且模块过多的时候，多人同时编辑 CSV 文件的时候很容易产生冲突，这时候可以通过按模块的形式去维护管理 CSV，即每个模块都有个 CSV 文件，这样造成冲突的概率会大大减小。

![image](https://image.liubing.me/2023/02/11/d3eefb393fd1e.png)

为了保持 Key 各个模块的唯一下，可以在 Key 前面加上模块名。如下面的`GENERAL`和`USER`

::: code-tabs
@tab 通用模块

```csv
key,zh-CN,en-US,ja
GENERAL.FIELD.VIEW,查看,View,確認
```

@tab 用户模块

```csv
key,zh-CN,en-US,ja
USER.FIELD.LOGIN,登录,Login,ログイン
USER.FIELD.WELCOME,欢迎,Welcome,ようこそ
```

:::

## 模块 JSON 合并

拆分后不同的模块都会输出各个语言的 json 文件，这个时候我们可以使用 Vite 提供的[Glob 导入](https://cn.vitejs.dev/guide/features.html#glob-import)来自动导入需要的 json 文件。

我们将上面引入多语言的代码优化下，通过`import.meta.glob`引入`lang`目录下的所有 json 文件，通过循环`modules`提取多语言文件内容，将同个语言不同的 json 内容合并成一个新的内容。`modules`中的内容可以打印看下。

![image](https://image.liubing.me/2023/02/11/6b05f51e2faa9.png)

最终代码如下所示：

```ts
import { createI18n } from 'vue-i18n'
import { getAppLang } from '@/utils'

const messages: any = {}
const modules = import.meta.glob('./lang/**/*.json')

// 获取路径中的多语言
function getLangByPath(path: string) {
  return path?.split('/')?.pop()?.split('.')[0]
}

for (const path in modules) {
  modules[path]().then((mod: any) => {
    console.log(path, mod)
    const pathLang = getLangByPath(path)
    if (pathLang) {
      if (messages[pathLang]) {
        messages[pathLang] = Object.assign(messages[pathLang], mod.default)
      } else {
        messages[pathLang] = mod.default
      }
    }
  })
}

const initLang = getAppLang()

const i18n = createI18n({
  locale: initLang,
  fallbackLocale: initLang,
  messages
})

export default i18n
```

## 结语

::: tip
文中的`icotjo.exe` `icotjo` `icotjoForMac`等文件可以在[Github 仓库](https://github.com/liub1934/i18n-csv-tool)进行下载。
:::

由于 VsCode 对 CSV 文件内容没有高亮颜色显示，可以安装[Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)，安装完成后即可高亮多色显示内容了，该扩展还提供了`CSVLint`来校验 CSV 内容是否合法。可以比较下安装前后的效果

![image](https://image.liubing.me/2023/02/11/38fb104290d00.png)

![image](https://image.liubing.me/2023/02/11/5b0bb4bb835d0.png)

此外还推荐安装[Edit csv](https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv)扩展，该扩展可以支持 CSV 在表格里面进行内容修改，对于内容含有很多英文引号和逗号的情况下，避免手写转义引号和逗号的各种麻烦情况。

![image](https://image.liubing.me/2023/02/11/a35d824bebbb3.png)
