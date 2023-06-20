---
date: 2023-02-26
sticky: 1
star: true
category:
  - AI绘画
  - Mac
tag:
  - AI
  - stable-diffusion-webui
layout: ArticleLayout
containerClass: article-container
---

# Mac 本地部署超火的 AI 绘画 stable-diffusion-webui

日常抖音上经常刷到 AI 绘画的内容，觉得挺有趣的，寻思着能不能自己部署一个，网上 Google 了下找到了这个超火的 AI 绘画开源的程序[stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)，看了下基本的介绍，支持 Windows、Linux、Mac，由于本人使用的 Mac，记录下 Mac 的本地部署教程，整体教程参考 Wiki 中的[Installation on Apple Silicon](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon)

<!-- more -->

::: tip
如果你懒得搭建也可以使用[在线服务](https://getimg.ai/ref/4BPOzb5hx)，需要谷歌账号登录，初次登录会有 100 个点的额度，每生成一张图消耗一个点额度，每个月会重置。当然你可以发挥钞能力获取更多的额度。
:::

::: tip
博主自己整理了一个 AI 相关的导航、包含编程、绘画、视频等等，有兴趣的可以[点击查看](/nav/ai/hot.html)。
:::

## 安装 Homebrew

::: tip
以下安装过程中最好开启魔法上网，不然有些依赖会因为网络原因无法安装或其他莫名其妙的报错问题。
:::

[Homebrew](https://brew.sh/index_zh-cn) 是 macOS（或 Linux）缺失的软件包的管理器，Mac 上经常使用 Homebrew 安装一些软件，相信用 Mac 的同学应该都装了 Homebrew，没有安装的参考官网的一键安装命令。

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

不知道是否有安装的可以在终端中使用下面的命令查看：

```sh
brew -v
```

如果已安装，会显示 Homebrew 的版本号。

```
Homebrew 3.6.20
Homebrew/homebrew-core (git revision 512bc2f6829; last commit 2023-01-20)
Homebrew/homebrew-cask (git revision 0f67640754; last commit 2023-01-20)
```

## 安装所需软件

使用 Homebrew 安装一些必须的软件，在终端中使用下面的命令进行一键安装，等待安装完成。

::: tip
注意`Python`使用的是`3.10`的版本，`Python`安装完成后需要设置环境变量。
:::

```sh
brew install cmake protobuf rust python@3.10 git wget
```

## Clone 下载代码

找一个存放代码的位置，使用下面的命令将 stable-diffusion-webui 的仓库代码 Clone 下来。

```sh
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
```

## 下载 SD 模型

代码已经 Clone 下来后，实际运行还需要下载模型，一般模型文件后缀为`.ckpt`或者`.safetensors`，文件大小一般都上 G 的大小。我们可以参照 Wiki 说明上的链接在[Hugging Face](https://huggingface.co/)上进行下载，这里一般下载 1.4 或者 1.5 版本的就行。

- [Stable DIffusion 1.4](https://huggingface.co/CompVis/stable-diffusion-v-1-4-original) ([sd-v1-4.ckpt](https://huggingface.co/CompVis/stable-diffusion-v-1-4-original/resolve/main/sd-v1-4.ckpt))
- [Stable Diffusion 1.5](https://huggingface.co/runwayml/stable-diffusion-v1-5) ([v1-5-pruned-emaonly.ckpt](https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.ckpt))
- [Stable Diffusion 1.5 Inpainting](https://huggingface.co/runwayml/stable-diffusion-inpainting) ([sd-v1-5-inpainting.ckpt](https://huggingface.co/runwayml/stable-diffusion-inpainting/resolve/main/sd-v1-5-inpainting.ckpt))
- [Stable Diffusion 2.0](https://huggingface.co/stabilityai/stable-diffusion-2) ([768-v-ema.ckpt](https://huggingface.co/stabilityai/stable-diffusion-2/resolve/main/768-v-ema.ckpt))
- [Stable Diffusion 2.1](https://huggingface.co/stabilityai/stable-diffusion-2-1) ([v2-1_768-ema-pruned.ckpt](https://huggingface.co/stabilityai/stable-diffusion-2-1/resolve/main/v2-1_768-ema-pruned.ckpt))

不过本人跟倾向于在[Civitai](https://civitai.com/)上下面下载各种模型。

![image](https://image.liubing.me/i/2023/02/26/63fb29c89a222.png)

可以通过检索搜索模型类型为 `Checkpoint`。

![image](https://image.liubing.me/i/2023/02/26/63fb2ae71c2e0.png)

我们找一个下载量最高的模型[ChilloutMix](https://civitai.com/models/6424/chilloutmix)进行下载，抖音 AI 小姐姐大多数都是基于这个模型生成的。点击页面上的`Download Latest`按钮进行下载。

![image](https://image.liubing.me/i/2023/02/26/63fb2b86d1154.png)

由于是`SafeTensor`类型的模型，所以下载的文件后缀为`.safetensors`，下载完成后，将该模型文件复制到下面的 `Stable-diffusion` 目录中，`stable-diffusion-webui` 为上面 Clone 下来的代码。

```
stable-diffusion-webui/models/Stable-diffusion
```

## 运行启动

有了模型后就能通过命令启动程序了，使用终端进入到`stable-diffusion-webui`目录，然后运行下面的命令启动。

```sh
./webui.sh
```

此时程序会自动安装一些项目依赖，首次启动会耗时较长，需要耐心等待依赖安装完成。

![image](https://image.liubing.me/i/2023/02/26/63fb2d15ca24b.png)

依赖安装完成在最后启动的阶段缺报了个错，如下所示：

```
When localhost is not accessible, a shareable link must be created. Please set share=True.
```

![image](https://image.liubing.me/i/2023/02/26/63fb2e13d2780.png)

Google 搜索一番后才知道是我电脑的终端设置了代理导致的该问题，需要将一个`share`参数设置为`True`。

在项目代码里面搜索了下`share`关键词，发现只需要将项目跟目录的`webui.py`文件中`share`参数设置为`True`即可。

![image](https://image.liubing.me/i/2023/02/26/63fb2eabd2cd0.png)

修改完成后重新执行`./webui.sh`命令运行项目，最后顺利启动成功。

![image](https://image.liubing.me/i/2023/02/26/63fb2f5670ecd.png)

这时候访问提示的`http://127.0.0.1:7860/`即可访问项目了。

![image](https://image.liubing.me/i/2023/02/26/63fb2fa0c736a.png)

## 设置中文

此时页面都还是全英文的，看的也稀里糊涂，接下来设置下中文的显示。

点开`Extensions`菜单，找到`Available`中的`localization`，默认是勾选上的，将勾选去掉，然后点击`Load from`按钮。

![image](https://image.liubing.me/i/2023/02/26/63fb306479afd.png)

此时会出现很多的可安装选项，一直往下拉或者搜索`zh_CN`找到`zh_CN Localization`，点击右侧的`Install`按钮安装。

![image](https://image.liubing.me/i/2023/02/26/63fb312d101eb.png)

安装完成后点击上面的`Settings`菜单进入设置页面。

![image](https://image.liubing.me/i/2023/02/26/63fb319871cb4.png)

点击左侧`User interface`，往下拉，找到`Localization (requires restart)`，点击选择刚下载的`zh_CN`语言，如果看不到`zh_CN`，点击右侧的刷新按钮。

![image](https://image.liubing.me/i/2023/02/26/63fb321b3be87.png)

选择完`zh_CN`后页面拉到最上面点击`Apply settings`按钮保存设置，最后点击`Reload Ul`按钮。

![image](https://image.liubing.me/i/2023/02/26/63fb32af949bf.png)

此时页面会重新加载，大家就能看到熟悉的中文了。

![image](https://image.liubing.me/i/2023/02/26/63fb32c6394ad.png)

## 基本使用

大家可以通过输入 Prompt 提示词，以便 AI 可以绘制出你想要的图片。为了避免某些绘制问题，可以在 Negative prompt 反提示词中输入关键词。提示词最好都是用英文，不然绘制出来的画会牛头不对马尾。如果你想不出啥提示词，可以在[Civitai](https://civitai.com/)上找到自己喜欢的图片风格，复制图片上的提示词即可，然后点击生存按钮即可。

![image](https://image.liubing.me/i/2023/02/26/63fb549130850.png)

## 福利

最后附上几张 AI 绘制的福利图，不难看出 AI 会手指头的绘制还是会出现一些莫名其妙的问题 😂

![image](https://image.liubing.me/i/2023/02/26/63fb51b64a5ac.jpeg)

![image](https://image.liubing.me/i/2023/02/26/63fb520e2295b.jpeg)

![image](https://image.liubing.me/i/2023/02/26/63fb521da99ac.jpeg)

![image](https://image.liubing.me/i/2023/02/26/63fb5230a8128.jpeg)

![image](https://image.liubing.me/i/2023/02/26/63fb5243d3674.jpeg)

![image](https://image.liubing.me/i/2023/02/26/63fb525234ae0.jpeg)
