---
date: 2024-06-29
category:
  - Vue
tag:
  - Font Splitter
  - Font
layout: ArticleLayout
containerClass: article-container
---

# 使用Font Splitter分割大字体文件

日常工作中避免不了页面需要使用特殊字体，对于特定的数字或者字母我们可以使用[Fontmin](https://github.com/ecomfe/fontmin)输入固定的字符来生成一个很小的符合要求的字体文件，对于整个网页都需要使用特定字体的情况这种情况就不太适用了，Google搜索一番后找到一个[Font Splitter](https://github.com/VdustR/font-splitter)工具，可以将一个很大字体文件按[unicode-range](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range)规则分割成若干小字体文件，并生成一个Css，如果页面不使用此范围内的任何字符，则不会下载字体。

<!-- more -->

## 安装Font Splitter

该工具依赖[Nodejs](https://nodejs.org/) 10.0.0+和[FontTools](https://github.com/fonttools/fonttools)，FontTools是Python的一个插件库，所以本地还需要安装Python。

使用下面的命令全局安装`font-splitter`，Python同时安装`fonttools`

```sh
npm i -g font-splitter
pip install fonttools
```

## 使用Font Splitter

安装完成后测试下是否可以使用，这个提前先准备一个阿里巴巴普惠体作为测试字体。

![image](https://image.liubing.me/i/2024/06/29/667f6b6481b0d.png)

进入到当前字体所在目录测试执行下面的命令

```sh
font-splitter ./AlibabaPuHuiTi-3-55-Regular.ttf
```

执行时候发现报错了，报错原因如下所示，提示Python的Brotli扩展未找到。

```
ERROR: The WOFF2 encoder requires the Brotli Python extension, available at: https://github.com/google/brotli
```

![image](https://image.liubing.me/i/2024/06/29/667f6d28f2ff7.png)

使用下面的命令安装该扩展后再试下

```sh
pip install Brotli
font-splitter ./AlibabaPuHuiTi-3-55-Regular.ttf
```

这时候没有报错了，等任务跑完，出现`Font split success`就说明成功了。

![image](https://image.liubing.me/i/2024/06/29/667f6e2275802.png)

此时会再字体所在目录生成一个`output`目录，里面就是分割生成好的字体文件和一个我们需要加载的css文件。

![image](https://image.liubing.me/i/2024/06/29/667f6ec258e49.png)

这里也可以调整`font-splitter`的参数调整每个分割的文件大小和最终的输出目录。

```sh
$ font-splitter
Usage: font-splitter [options] <fontPath>

Options:
  -v, --version          output the version number
  -c, --chunk <chunk>    chunk size, `-` stand for infinity, default: 256
  -f, --flavor <flavor>  font flavor: woff, woff2
  -n, --family <family>  font family, default: parsed from font
  -i, --italic           italic font style, default: false
  -w, --weight <weight>  font weight, default: 400
  -d, --dry              dry run
  -q, --quite            disable stdout
  -o, --output <output>  output directory
  -h, --help             output usage information
```

最后项目中引入这个css文件即可按需加载页面需要的字体小文件了。
