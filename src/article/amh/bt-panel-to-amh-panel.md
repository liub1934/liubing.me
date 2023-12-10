---
date: 2023-12-10
category:
  - AMH面板
tag:
  - 宝塔面板
  - AMH面板
layout: ArticleLayout
containerClass: article-container
---

# 宝塔面板迁移 AMH 面板初体验

最近宝塔越用越卡，内存占用也很高，加上页面推广元素过多，就有了迁移换其他干净简洁的面板，搜索一番后找到了[AMH 面板](https://amh.sh/install.htm?fid=45745)，该国产面板已经持续更新 10 多年，安全方面应该不用质疑。

<!-- more -->

::: warning
该面板适合有一定动手能力用户使用，纯小白用户建议还是选择[宝塔面板](https://www.bt.cn/?invite_code=M19senRrbW4=)
:::

## 面板介绍

- 首款开源
  - AMH 是国内首款开源的主机面板，程序开源透明、纯净、无混淆、无加密。
  - AMH 是国内首个支持弹性多环境面板，软件模块化架构设计，高扩展灵活性。
  - 面板支持 LNMP、LAMP、LNGX、LNAMP 等不同 WEB 应用环境，
  - 与支持软件多版本同时运行等。
- 安全稳定
  - 安全稳定是 AMH 面板设计的首要指标，近 10 年 AMH 面板保持零故障、无安全事件。
  - AMH 自第一个版本开始，全自主开发框架应用，全程把关面板安全。
  - 致力解决任何可能存在的安全风险，包括源码篡改、XSS 攻击、CSRF 伪造、SQL 注入，暴力破解、跨站入侵、
  - 权限突破，及面板所有下载软件源码都进行效验等。
- 持续更新（10 年+）
  - 持续的软件更新支持，AMH 不间断更新已有 10 年+，近 8 年保持每月都有更新。
  - 软件商店软件更新频率大约为每周。
- 永久免费
  - AMH 提供免费版本支持 10 年从未间断，最新版本再次增加提供商业授权可免费授权使用。
  - 以往收费授权软件，包括异常监控、数据库与文件同步、
  - 流量防护管理、负载均衡等全部免费可用。
- 注重隐私
  - AMH 注重用户隐私，10 年从未有收集用户隐私数据、不发送回传用户使用等数据。
  - AMH 开源协议都有约定，禁止软件收集用户隐私数据与用户储存的数据。
  - AMH 从创立到至今 10 年一直遵守，从未有过更变。
- 拒绝广告
  - 追求完美用户体验一直是我们的目标，
  - AMH 面板是纯净的，在产品上您不会看到有任何广告或无关信息。
  - AMH 不管免费与收费所有版本 10 年从未有投放广告，避免影响用户软件体验。
- 独立透明
  - AMH 独立透明，无内置与软件无关的任何第三方组件，程序，不存在利益方等其它关系。
  - 无远程控制软件的运行，无隐藏式更新等左右、影响软件运行。
- 最优节能
  - AMH 轻量化、模块化设计，轻巧、节能极低占用，面板闲时近乎零资源占用。
  - AMH 同时对硬件无做限制，例如您可以在 128MB 以下的内存的机器安装，并可顺畅运行。

![image](https://image.liubing.me/i/2023/12/09/65743890bf453.png)

![image](https://image.liubing.me/i/2023/12/09/657438b9edfa4.png)

## 面板安装

::: warning
安装请使用纯净的系统，必填软件冲突。
:::

根据官网提供的[教程](https://amh.sh/install.htm?fid=45745)使用下面的命令一键进行安装，安装时间 1 至 3 分钟。

```sh
wget https://dl.amh.sh/amh.sh && bash amh.sh
```

## 面板预览

### 首页

页面看着像是上个世纪的产物，和宝塔面板的 UI 相比还是差了很多，胜在页面简洁无广告，内存占用低，反应速度快。

![image](https://image.liubing.me/i/2023/12/09/65743b6fa330b.png)

### 站点管理

#### 环境列表管理

该面板强大之处可以安装各版本的 Nginx、MySql、PHP，针对不同站点的需要创建不同的运行环境，各站点环境相互独立不会互相干扰。

![image](https://image.liubing.me/i/2023/12/09/65747e9f83344.png)

![image](https://image.liubing.me/i/2023/12/09/65747ed0a2e95.png)

目前官网支持以下 3 大站点环境

- LNMP：Linux+Nginx+MySQL+PHP 的环境组合。
- LAMP：Linux+Apache+MySQL+PHP 的环境组合。
- LNGX：Linux+Nginx+X，其中 X 为未限定。（一般主要用于各种反向代理。）

![image](https://image.liubing.me/i/2023/12/09/65747f1c56ec0.png)

创建完环境后可以自由切换，针对不同的环境添加不同的站点。

![image](https://image.liubing.me/i/2023/12/10/657495c01cc0a.png)

#### 虚拟主机

该面板的添加站点叫新增虚拟主机，支持新增虚拟主机和子域主机。

![image](https://image.liubing.me/i/2023/12/09/65747af10aac1.png)

两种主机即站点添加目前用着没啥区别，唯一的区别可能就是子域主机支持指定运行目录，对于需要指定运行目录的可以使用子域主机。

![image](https://image.liubing.me/i/2023/12/09/65747b7647ac2.png)

![image](https://image.liubing.me/i/2023/12/09/65747b9428460.png)

针对 LNGX 的环境，可以添加应用的反向代理，比如 Node、Docker 应用。

![image](https://image.liubing.me/i/2023/12/10/657496a54f2f7.png)

![image](https://image.liubing.me/i/2023/12/10/6574960961593.png)

#### 扩展安装

支持安装各版本 PHP 和扩展。

![image](https://image.liubing.me/i/2023/12/09/65747c3ddbaf2.png)

注意有些扩展比如`fileinfo`、`imagick`需要到应用商店搜索安装后才能支持对应 PHP 扩展的安装，不然安装会失败。

![image](https://image.liubing.me/i/2023/12/09/65748bda47be3.png)

![image](https://image.liubing.me/i/2023/12/09/65748bfda9227.png)

#### PHP 环境配置

支持一些常用配置的可视化管理。

![image](https://image.liubing.me/i/2023/12/09/65747ca991328.png)

也支持编辑模式下高级配置修改。

![image](https://image.liubing.me/i/2023/12/09/65747cf968292.png)

#### 规则管理

支持不同站点的 Nginx 配置单独管理和维护，如添加伪静态、重定向、防盗链等。

![image](https://image.liubing.me/i/2023/12/09/65747d3a31ea8.png)

#### SSL 证书管理

针对各站点的证书配置，支持自签名证书和官网免费[SSL 证书申请](https://amh.sh/ssl.htm)。

![image](https://image.liubing.me/i/2023/12/09/65747d885eb8e.png)

### 数据库管理

支持安装不同版本的 MySql 并进行管理，

![image](https://image.liubing.me/i/2023/12/09/65748b2a57c07.png)

自带的`Madmin`数据库管理工具如果不喜欢用的话，可以在应用商店安装`phpMyAdmin`，不对对于一些大文件 SQL 导入还是推荐自带的`Madmin`。

![image](https://image.liubing.me/i/2023/12/09/65748c616499a.png)

![image](https://image.liubing.me/i/2023/12/09/65748cd48f9f8.png)

### 文件管理

中规中矩的文件管理，一般满足日常使用，自带常用的删除、移动、复制、权限设置、新建、在线解压缩、远程上传、本地上传、文件下载等等。

![image](https://image.liubing.me/i/2023/12/09/65748db98b280.png)

还额外支持部分格式的文件在线编辑保存，不过支持的文件格式有限，没有宝塔面板的文件功能强大，勉强够用。

![image](https://image.liubing.me/i/2023/12/09/65748e10d70a0.png)

不过可以在应用商店搜索`KODExplorer`安装来弥补文件管理、编辑的不足。

:::: warning
使用`KODExplorer`需要注意权限问题，不然有些文件可能因为权限问题看不到或者无法编辑保存。
::::

![image](https://image.liubing.me/i/2023/12/10/65748f38b0164.png)

### FTP 管理

支持 FTP 的常规管理。

![image](https://image.liubing.me/i/2023/12/10/65748fd05b9c0.png)

### 备份管理

强大的备份功能，支持本地或远程备份，支持全部站点或单个站点的一键备份和还原，还可以通过安装应用支持备份到各类云存储。

![image](https://image.liubing.me/i/2023/12/10/6574908b0378e.png)

### 网络

#### 防火墙

功能简陋，但也够用了，支持可视化添加和编辑配置文件添加。一般不用特别处理，AMH 会自动帮我们添加相应的端口。

![image](https://image.liubing.me/i/2023/12/10/657491979fdbc.png)

#### 网络管理

![image](https://image.liubing.me/i/2023/12/10/6574923f88dd3.png)

#### 系统进程

![image](https://image.liubing.me/i/2023/12/10/6574929b835e5.png)

### 计划任务

支持各种计划任务的支持，包括站点的定时备份、执行各种脚步等等。

![image](https://image.liubing.me/i/2023/12/10/6574931aaf78e.png)

![image](https://image.liubing.me/i/2023/12/10/6574933e4a111.png)

### 其他功能

异常监控、缓存应用、数据同步、邮局等功能暂未安装体验，请自行在应用商店安装体验。

![image](https://image.liubing.me/i/2023/12/10/65749417241e0.png)

![image](https://image.liubing.me/i/2023/12/10/657494a0b3bb9.png)

![image](https://image.liubing.me/i/2023/12/10/657494e171867.png)

![image](https://image.liubing.me/i/2023/12/10/6574952b31811.png)

## 总结

目前官网软件支持有限，暂时还未支持 Docker 和 Node 等应用的管理，UI 过于简陋，可能有些人不太喜欢，不过好处是该面板内存占用很低，无广告、无弹窗打扰。有动手能力的可以尝试下。
