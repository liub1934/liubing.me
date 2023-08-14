---
date: 2023-08-14
star: true
category:
  - AI
  - Mac
  - Roop
tag:
  - AI
  - 换脸
layout: ArticleLayout
containerClass: article-container
---

# Mac 本地部署安装 Roop，从此换脸不求人

虽然市面有有不少现成的产品都提供了 AI 换脸功能，但是把脸部数据提供给别人总感觉怪怪的，也不太安全，后来在油管上了解到了一款可本地部署的开源换脸程序 Roop，赶紧搜点教程本地部署一个玩玩，顺便记录一下。

<!-- more -->

## 什么是 Roop

Roop 是一个可以简单的使用一张人脸照片一键操作就能实现照片或者视频进行 AI 换脸，效果基本上可以以假乱真，开源仓库地址可以[点击此处](https://github.com/s0md3v/roop)进行访问，文档相关部署教程可以[Roop 文档](https://roop-ai.gitbook.io/roop/)。

::: warning
国内网络环境因素，以下的安装过程需要开启魔法 🪄 上网
:::

## 安装 Roop

[Roop 文档](https://roop-ai.gitbook.io/roop/)提供了 Linux、MacOS、Windows 安装教程，这里已 MacOS 为例。

必备的安装工具[Homebrew](https://brew.sh/index_zh-cn)，我相信用 Mac 的基本上都已经安装了，如果没有安装使用[Homebrew 文档](https://brew.sh/index_zh-cn)上的一键安装命令终端执行下。已经安装了 Homebrew 的话执行下面的命令安装 Roop 项目的前置依赖，如已安装 Python 或者 Git 可以跳过安装。

```sh
# Python
brew install python@3.10
# PIP
python -m ensurepip
# GIT
brew install git
# FFmpeg
brew install ffmpeg
```

### 拉取代码

找一个目录使用 git 命令将项目仓库 clone 到本地。

```sh
git clone https://github.com/s0md3v/roop.git
```

![image](https://image.liubing.me/i/2023/08/14/64d9780c71111.png)

### 安装项目依赖

使用终端打开 roop 目录

![image](https://image.liubing.me/i/2023/08/14/64d979092f0c9.png)

执行下面的命令进行依赖安装，网络上好多教程都说的需要修改`requirements.txt`文件里面的依赖，我尝试了不修改也是可以安装成功的。

```sh
pip install -r requirements.txt
```

等待依赖全部安装完成即可，网络良好的可能几分钟就 OK 了。

![image](https://image.liubing.me/i/2023/08/14/64d9798e1c570.png)

## 运行 Roop

依赖完成后使用命令就能启动项目了，首次启动过程中还会额外安装一些依赖，耐心等待安装完成，启动完成后是一个可视化的界面，操作也非常简单。

```sh
python run.py
```

::: tip
启动过程中如果报错了`tkinter`的相关错误，可以使用的命令安装`python-tk@3.10`

```sh
brew install python-tk@3.10
```

:::

![image](https://image.liubing.me/i/2023/08/14/64d97b34c1695.png)

大致翻译一下

![image](https://image.liubing.me/i/2023/08/14/64d97b862df29.png)

## 加速 Roop

此时换脸生成图片和视频的速度还很慢，我们可以参考[加速文档](https://roop-ai.gitbook.io/roop/installation/acceleration)，安装一些依赖项来提供生成的速度。

```sh
# Mac M系列
pip uninstall onnxruntime onnxruntime-silicon
pip install onnxruntime-silicon==1.13.1
```

安装完成后就可以在运行的时候加入相关的参数

```sh
python run.py --execution-provider coreml
```

::: warning
生成速度虽然提高了，但是视频换脸经常性出现内存不足，低内存的 Mac 还是不要使用上面的命令进行视频换脸
:::

## 命令整理

网上也看了下教程，整理下自用的启动命令

```sh
# 低内存视频换脸容易内存不足，建议大内存或者仅图片换脸使用
python  run.py --execution-provider coreml --execution-threads 4 --temp-frame-format jpg --frame-processor face_swapper face_enhancer --similar-face-distance 1.5

# 低内存视频换脸使用，速度会慢点
python run.py --temp-frame-format jpg --frame-processor face_swapper face_enhancer --similar-face-distance 1.5
```

具体的参数说明可以参考[文档高级功能](https://roop-ai.gitbook.io/roop/knowledgebase/advanced-features)或者自行搜索。

## 效果预览

抖音上找了个漂亮小姐姐的视频，用自己媳妇美颜后脸尝试替换了下，视频最终的脸部效果看着还是可以的。一下两张预览左边的媳妇的脸，右边是原作者的脸。

![image](https://image.liubing.me/i/2023/08/14/64d97e7f37431.png)

![image](https://image.liubing.me/i/2023/08/14/64d97e516ebde.png)
