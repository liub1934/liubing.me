---
date: 2019-12-21
category:
  - 宝塔面板
  - Docker
tag:
  - Bitwarden
  - Docker
layout: ArticleLayout
containerClass: article-container
---

# 基于宝塔 Docker 自建 Bitwarden 密码管理服务

[Bitwarden](https://bitwarden.com)是一个跨平台的密码管理软件，类似于 1Password、EnPass、LastPass 等。Bitwarden 是免费开源的，可以将服务端部署在自己的服务器上，比如群晖，并且支持 Docker 部署。但官方的镜像要求至少 2G 以上内存，要求比较高。有人用 Rust 实现了 Bitwarden 服务器，项目叫[~~bitwarden_rs~~](https://github.com/dani-garcia/bitwarden_rs)，现在已经更新为[vaultwarden](https://github.com/dani-garcia/vaultwarden)，并且提供了 Docker 镜像，这个实现更进一步降低了对机器配置的要求，并且 Docker 镜像体积很小，部署非常方便。

<!-- more -->

## 宝塔安装 Docker

如果已经安装，可以忽略该步骤，如果没有安装，进入到宝塔面板的软件商店，搜索 docker 安装即可。

![image](https://image.liubing.me/2019/12/26/500745e78893f.png)

## 获取镜像

打开 docker 管理器，点击获取镜像，输入 Bitwarden_rs 的官方镜像`bitwardenrs/server`后点击获取镜像。

::: tip
原项目已经变更名称，故官方镜像名称也变成了`vaultwarden/server`，所以教程里面的`bitwardenrs/server`均需替换成新的镜像名称 `vaultwarden/server`
:::

![image](https://image.liubing.me/2019/12/26/c14a8df9528d3.png)

## 创建容器

1.点击创建容器按钮 2.填写端口映射中的`容器端口`：`80`,`服务端口`：`6666`(6666 可以自定义) 3.填写目录映射中的`服务器目录`：`/www/wwwroot/bitwarden.liubing.me`(该目录可以自定义，我习惯用网址作为目录)，`容器目录`：`/data` 4.填写内存配额，根据自己服务器的配置按需填写 5.提交创建容器 6.点击容器名称，修改容器名称为`Bitwarden`以方便辨认

::: tip
端口映射和目录映射填写完成后一定要点击 + 号进行添加
:::

![image](https://image.liubing.me/2019/12/26/49d59861f5edf.png)

![image](https://image.liubing.me/2019/12/26/d2b1be24d8fcc.png)

## 添加站点

一般可以添加一个二级域名，按自己需要起名字即可，由于我用的`cloudflare`的服务，所以以这个为演示，阿里云、百度云等其他厂商添加二级域名都是差不多的。

添加一个 A 记录，名字为`bitwarden`，指向的 IP 为你服务器 VPS 的 IP 地址，最后的访问地址就是`bitwarden.liubing.me`了。

![image](https://image.liubing.me/2019/12/26/812f2e8686901.png)

域名准备好后，在宝塔里面添加一个站点，FTP、数据库均不用创建，PHP 版本选择纯静态。

![image](https://image.liubing.me/2019/12/26/8f442adca1059.png)

网站添加完成后设置 SSL，自己准备证书，或者用免费的，我用的一直是 cloudflare 颁发的证书。
设置完毕后开启强制 Https

![image](https://image.liubing.me/2019/12/26/c4dc1ab3b419d.png)

最后添加一个反向代理，名称随意填，目标 URL 为`http://127.0.0.1:6666`，端口号和上面`创建容器`时`服务端口`保持一直。

![image](https://image.liubing.me/2019/12/26/87e73267f1965.png)

## 完成自建

上述步骤都做完后别忘了在宝塔面板安全-防火墙中放行端口`6666`。
最后不出意外的话访问`https://bitwarden.liubing.me`就能看到界面了。
首次完成安装页面是英文的，自己可以创建一个账号登录进去，在设置-选项-语言中设置语言。

![image](https://image.liubing.me/2019/12/26/823752848793e.png)

![image](https://image.liubing.me/2019/12/26/426be9f96588c.png)

## 其他问题

### 关闭注册

一般自建的服务都是自己用的，所以如果想关闭注册的话可以按照下面的方法做：

1.在 docker 管理器中点击刚才创建的容器的状态绿色图标，停止容器运行，然后删除容器（删除容器后不会删除数据）

![image](https://image.liubing.me/2019/12/26/7aaae31a5fd4f.png)

2.在 VPS 中运行下面的命令重新运行容器，其中`Bitwarden`为容器的名字，`SIGNUPS_ALLOWED=false`代表禁止注册，`/www/wwwroot/bitwarden.liubing.me`为上面创建容器时所写的`服务器目录`,`/data`为容器目录，`6666:80`代表上面创建容器时的`服务端口:容器端口`

```shell
docker run -d --name Bitwarden \
  -e SIGNUPS_ALLOWED=false \
  -v /www/wwwroot/bitwarden.liubing.me/:/data/ \
  -p 6666:80 \
  bitwardenrs/server:latest
```

运行完成后在容器列表里就又能看到了。
然后再去试下创建账号就会出现一个不能创建账号的错误提示。

![image](https://image.liubing.me/2019/12/26/fcb5744695fd8.png)

### 其他配置

参考项目的 wiki 即可：[https://github.com/dani-garcia/bitwarden_rs/wiki](https://github.com/dani-garcia/bitwarden_rs/wiki)

## 插件及 App 下载

可以到 bitwarden 官网自行下载：[https://bitwarden.com/#download](https://bitwarden.com/#download)

## 连接自建的服务

以 CHrome 的插件为例子，如果之前有安装及登录过，可以在设置中退出登录。
点击左上角的设置图标，填写自建服务器的 URL 保存后登录即可。

![image](https://image.liubing.me/2019/12/26/b6de0110b315b.png)

![image](https://image.liubing.me/2019/12/26/5908b0aee9a95.png)

## 更新镜像

由于原项目改名，镜像名称也随之有变更，所以需要更新到最新的镜像的话，需要在宝塔的 docker 管理器容器列表中先将目前的项目停用掉删除（删除不会删除原数据，不放心的可以在网页中将现有密码先导出一遍）

![image](https://image.liubing.me/2021/08/08/e62e4752478d0.png)

删除后在镜像列表中找到原来的名称为`bitwardenrs/server`的删除

![image](https://image.liubing.me/2021/08/08/8fa6a18434118.png)

镜像删除后点击获取镜像按钮，输入新的镜像名称`vaultwarden/server`获取镜像

![image](https://image.liubing.me/2021/08/08/cba9ac5a06ae1.png)

获取完成后重新再 VPS 上重新运行容器的命令,注意相关目录和镜像名称别输错了。

```shell
docker run -d --name Bitwarden \
  -e SIGNUPS_ALLOWED=false \
  -v /www/wwwroot/bitwarden.liubing.me/:/data/ \
  -p 6666:80 \
  vaultwarden/server:latest
```

启动完成后就能在容器列表中重新看到新运行的项目了，数据依旧是原来的数据。

## 结语

最后就可以愉快的在浏览器和手机上愉快的使用了，顺便说句：我的密码存储我做主，再也不用害怕密码忘记的事了，也可以记录些银行卡等隐私信息，随时复制。

![image](https://image.liubing.me/2019/12/29/a876abe759b9f.png)

![image](https://image.liubing.me/2019/12/29/88198d86a91cb.png)
