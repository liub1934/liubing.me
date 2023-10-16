---
date: 2023-10-14
category:
  - 宝塔面板
  - 青龙面板
tag:
  - 宝塔面板
  - 青龙面板
  - Docker
layout: ArticleLayout
containerClass: article-container
---

# 宝塔面板 Docker 部署一个青龙面板 🐉

[青龙面板](https://github.com/whyour/qinglong)是一个开源支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，可以定时执行各种类型的脚本，提高脚本执行效率，解放双手。

<!-- more -->

## 安装 Docker

如果已经安装 Docker 可以忽略，没有安装的可以直接在宝塔面板搜索 Docker 进行安装即可。
![image](https://image.liubing.me/i/2023/10/14/652a6b129d614.png)

## 创建站点

先创建一个站点用于后续面板的访问，比如博主的`qinglong.liubing.me`，复制好生成的`根目录`：`/www/wwwroot/qinglong.liubing.me`，当然你可以自定义一个目录。后面再设置好`SSL`，以便支持`https`访问。

![image](https://image.liubing.me/i/2023/10/14/652a6cae9f083.png)

![image](https://image.liubing.me/i/2023/10/14/652a6daa0a63b.png)

## 部署青龙 🐉

### 获取镜像

在`设置` -> `镜像管理` -> `获取镜像`先拉取下青龙面板的最新 Docker 镜像。

```
whyour/qinglong:latest
```

![image](https://image.liubing.me/i/2023/10/14/652a6b8c489b5.png)

### 部署启动

使用内置的终端或者其他 SSH 客户端连接到服务器，执行下面的命令进行一键部署启动，其中`/www/wwwroot/qinglong.liubing.me`可以换成你们自己的目录，`5700`是端口号，如果被占用可以换成其他的。

```sh
docker run -dit \
  -v /www/wwwroot/qinglong.liubing.me/ql/data:/ql/data \
  -p 5700:5700 \
  --name qinglong \
  whyour/qinglong:latest
```

命令执行完成后不出意外的话可以在容器列表中看到刚才启动的容器。

![image](https://image.liubing.me/i/2023/10/14/652a6e9f34351.png)

## 设置反向代理

此时面板还不支持域名的访问，需要在`站点设置` -> `反向代理`中添加如下的代理，端口号保持和上面的保持一致。

![image](https://image.liubing.me/i/2023/10/14/652a6f1973ec1.png)

最后在`安全` -> `防火墙`中添加放行端口。

![image](https://image.liubing.me/i/2023/10/14/652a6fb6aee5f.png)

## 结语

端口放行后访问之前添加的站点就能看到面板画面了，首次会出现安装设置，用于用户名、密码等设置，按提示进行设置即可。

![image](https://image.liubing.me/i/2023/10/14/652a70988aee6.png)

![image](https://image.liubing.me/i/2023/10/14/652a7073d9098.png)
