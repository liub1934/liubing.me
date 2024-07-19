---
date: 2022-12-23
category:
  - 软件分享
  - Mac
tag:
  - WX Backup
  - 微信备份
layout: ArticleLayout
containerClass: article-container
---

# WX Backup - Mac 上备份微信聊天记录神器

由于自己手机存储空间只有 128G，拍娃和媳妇的照片视频越来越多，导致现有的存储空间越来越小，经常性的弹窗存储空间不足，很是烦人，不得已将一些视频、音乐软件卸载重装以释放一些缓存。然后看了下自己的存储空间占用，除去相册，微信是占用空间最大的主。

<!-- more -->

想要将微信卸载重装，但是又舍不得微信里面的部分联系人的聊天记录，就在网上搜索下看有没有可以备份微信聊天记录的软件，直到发现`WX Backup`这块神器。

## 介绍

看[官网](http://wxbackup.imxfd.com/)的介绍可以根据选择的账号和联系人导出聊天记录，包括文字、图片、视频、语音，还支持增量导出，即有新的内容更新到 iPhone 备份文件后，可以增加更新的内容到导出记录中。这就非常 Nice 啊。

![image](https://image.liubing.me/2022/12/23/0f130948c49a5.jpg)

而且预览的时候页面就和微信 PC 端浏览聊天记录一样，感觉作者很上心 UI 很赞 👍

![image](https://image.liubing.me/2022/12/23/77052bd90b764.png)

## 下载

直接去[官网](http://wxbackup.imxfd.com/)点击`Mac 下载`按钮下载软件安装。安装好后如果提示无法打开的问题请参照[教程](./mac-cannot-be-opened-because-apple-cannot-check-if-it-contain-malware.md)处理。

::: tip
官网下载使用的是百度网盘，如果你讨厌百度网盘，可以使用无需登录就可以下载的蓝奏云：[点击下载](https://lbx.lanzoue.com/iDwsJ0jc8ubg)
:::

## 备份数据

软件需要读取 Iphone 的备份文件，所以老系统需要使用 iTunes 连接 iPhone，将内容备份到电脑上。请注意，不要选择”给 iPhone 备份加密“！

![image](https://image.liubing.me/2022/12/23/9333cea397705.jpg)

如果用的新系统的可以不用下载 iTunes，只需要手机用数据线连接手机，在访达的`位置`中找到你的手机，然后将手机的所有数据备份到自己的电脑上。注意一定不要勾选`加密本地存储`

![image](https://image.liubing.me/2022/12/23/7e854d810ac1a.png)

备份的数据可以在`/Users/xxx/Library/Application Support/MobileSync/Backup`目录找到，需要将`xxx`换成你电脑自己的用户名。

## 导出记录

手机数据备份完成后打开 WX Backup，软件会自动读取到备份数据。  
点击`存放目录`按钮选择一个导出记录存放的位置或者直接在后面的输入框输入存放路径。

![image](https://image.liubing.me/2022/12/23/8b6140ff268d6.png)

选择需要导出记录的联系人或者群，点击导出按钮，过一会后就会显示导出完成是否需要预览的弹窗，点击预览按钮即可查看了。

::: warning
如果导出的联系人记录过多，速度会很慢，需要耐心等待导出完成。
:::

如果点击预览按钮后显示无法打开改页面，可以到导出目录看看有没有生成`index.html`文件，如果有的话可以直接双击打开这个文件进行预览，如果没有这个文件可能需要重新导出一下看看。

![image](https://image.liubing.me/2022/12/23/47ad3e472827c.png)

## 效果预览

预览支持按日期的年月查看。有点欠缺的可能就是导出的记录不支持按文字搜索了。

![image](https://image.liubing.me/2022/12/23/8a01098e80d2c.png)

![image](https://image.liubing.me/2022/12/23/8a2c29f7643ba.png)

![image](https://image.liubing.me/2022/12/23/b19cde02c9da7.png)

![image](https://image.liubing.me/2022/12/23/e4651347350b3.png)

## 备份记录

最后可以将导出的记录备份到网盘或者其他地方，这样就能永久保存需要的聊天记录了。
