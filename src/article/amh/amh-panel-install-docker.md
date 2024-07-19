---
date: 2023-12-10
category:
  - AMH面板
tag:
  - AMH面板
  - Docker
  - Portainer
layout: ArticleLayout
containerClass: article-container
---

# AMH 面板安装及管理 Docker 应用

AMH 面板官方暂不支持 Docker 应用的管理，需要自己动手手动安装 Docker 应用，最后再安装一个人气很高的 Docker 面板可视化工具 Portainer 即可，记录下安装过程。

<!-- more -->

## Docker 安装

这里可以参考 Docker 官网教程[Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)食用。

### 删除旧版本 Docker

如果之前有安装过 Docker 的可以使用下面的命令删除 Docker 的内容。如果是新系统没有安装过 Docker，可以忽略这一步。

```sh
sudo yum remove docker \
  docker-client \
  docker-client-latest \
  docker-common \
  docker-latest \
  docker-latest-logrotate \
  docker-logrotate \
  docker-engine
```

### 安装方法

这里推荐官网使用 rpm 存储库安装，在新主机上首次安装 Docker 之前，需要设置 Docker 存储库。之后可以从存储库安装和更新 Docker。

#### 设置存储库

安装`yum-utils`软件包（提供`yum-config-manager` 实用程序）并设置存储库。

```sh
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

#### 安装 Docker 引擎

这里一般安装最新版本即可。

```sh
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

此命令会安装 Docker，但不会启动 Docker。它还创建一个 docker 组，但是默认情况下不会将任何用户添加到该组。

别忘了最后启动 Docker。

```sh
sudo systemctl start docker
```

验证下 Docker 命令是否可用，在服务器终端上输入`docker`，如果能出现以下内容说明是 OK 的。

![image](https://image.liubing.me/i/2023/12/10/65752f4c77811.png)

## 安装 Portainer 面板

如果追求新版本更新和新功能可以参考 Portainer 官网的[Install Portainer BE with Docker on Linux](https://docs.portainer.io/start/install/server/docker/linux)的教程使用下面的命令进行安装：

```sh
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest
```

这里博主选择安装汉化版本的 Portainer，虽然新功能跟不上官网版本，但是整理功能大差不差，也足够日常使用，可以参考我不是矿神写的[Docker 管理面板 Portainer 中文汉化 新增 CE、EE 企业版汉化](https://imnks.com/3406.html)教程，找到推荐使用的版本 DockerHub：<https://hub.docker.com/r/6053537/portainer-ce>

使用里面的一键安装代码进行快速安装：

```sh
docker run -d --restart=always --name="portainer" -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock 6053537/portainer-ce
```

安装完成如果没啥意外的话，访问 `http://VPSIP:9000/`即可访问到 Portainer 面板。登录后就能很方便的进行 Docker 应用的管理了，不比宝塔面板的 Docker 管理差。

![image](https://image.liubing.me/i/2023/12/10/6575328289065.png)

![image](https://image.liubing.me/i/2023/12/10/657532c38d0f8.png)

![image](https://image.liubing.me/i/2023/12/10/6575330b43750.png)

## Portainer 面板绑定域名

在 AMH 面板`LNGX虚拟主机`中添加一个站点，如`docker.liubing.me`

需要先在应用商店安装`LNGX`，点击`管理`按钮。

![image](https://image.liubing.me/i/2023/12/10/6575347866a9d.png)

选择 `LNGX环境列表`，点击`创建LNGX环境`按钮创建一个运行环境，如果已经创建可以忽略该步骤。

![image](https://image.liubing.me/i/2023/12/10/657534ae10cb9.png)

在`主机列表`中新增虚拟主机，`后端源站地址`中使用`http://127.0.0.1:9000`，其中`9000`端口和 Portainer 面板的端口保持一致。

![image](https://image.liubing.me/i/2023/12/10/65753576a0e17.png)

新增成功后在`SSL证书`中设置站点的`https`访问。

最后打开域名就能访问到 Portainer 面板了。
