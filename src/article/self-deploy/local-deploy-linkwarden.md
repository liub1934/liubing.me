---
date: 2024-03-11
category:
  - 自部署
  - Linkwarden
tag:
  - Linkwarden
  - Docker
  - AMH
layout: ArticleLayout
containerClass: article-container
---

# 本地部署一个开源的书签管理器Linkwarden

为什么要自己搭建一个书签管理器，浏览器的书签管理不够用吗？之前收藏过不少的文章教程等内容，但由于不可变因素导致原网页停止服务或者文章内容被删除等等情况，导致后来我想查看的时候就很尴尬。虽然国内有成熟的产品，但是免费版本功能都有数量等限制，Google搜索了下相关的开源书签管理工具，最重要的一个要求就是可以存档当时的页面，以防页面挂掉的时候依旧可以查看。最终找到了符合要求的[Linkwarden](https://linkwarden.app/)。

![image](https://image.liubing.me/i/2024/03/10/65ed8240abbba.png)

## 本地部署

这里我们可以参考官方提供的[Installation](https://docs.linkwarden.app/self-hosting/installation)文档进行安装，由于服务器装不了高版本的Node，这里使用官网推荐的Docker部署的方式，当然你可以选择动手能力比较强的Node方式手动运行。

> 服务器面板使用的是AMH，以下都以AMH为例，宝塔面板类似，AMH面板需要提前安装Docker，相关教程参考[AMH 面板安装及管理 Docker 应用](/article/amh/amh-panel-install-docker.md)

### 新建站点

在`LNGX虚拟主机`环境中先新建一个用于反向代理的站点，并提前配置好SSL。

![image](https://image.liubing.me/i/2024/03/10/65ed84278ee91.png)

### 拉取代码

登录VPS服务器拉取主代码，并手动添加一个环境变量`.env`文件。

```sh
cd /home/wwwroot/my_lngx/domain/xx.liubing.me/web/
git clone https://github.com/linkwarden/linkwarden.git
cd linkwarden
touch .env
```

### 环境变量配置

可以使用AMH提供的文件管理快捷编辑，XXX替换成自己随机生成的密钥和密码，更多支持的环境变量参考[Environment Variables](https://docs.linkwarden.app/self-hosting/environment-variables)。

```env
NEXTAUTH_SECRET=XXX
POSTGRES_PASSWORD=XXX
NEXTAUTH_URL=http://127.0.0.1/api/v1/auth
# 用于禁止注册控制，默认先填false，部署完成注册账号后再修改成true禁止注册
NEXT_PUBLIC_DISABLE_REGISTRATION=true
```

![image](https://image.liubing.me/i/2024/03/10/65ed869246c84.png)

### 启动服务

最后在环境变量所在的目录即`linkwarden`下面运行下面的命令启动服务。

```sh
docker compose up
```

启动完成后可以在Portainer容器列表中看到已经运行的2个`linkwarden`服务，一个是linkwarden主服务，是另一个`PostgreSQL`数据服务。

![image](https://image.liubing.me/i/2024/03/10/65ed88a47caad.png)

### 访问注册

最后就可以打开上面配置的站点进行访问了，如果环境变量配置的`NEXT_PUBLIC_DISABLE_REGISTRATION=false`的话在`Login`按钮下面会有个`Sign Up`注册的链接。

![image](https://image.liubing.me/i/2024/03/10/65ed89a7c113b.png)

## 功能预览

### 仪表板

![image](https://image.liubing.me/i/2024/03/10/65ed8a583d35e.png)

### 分类目录

支持创建目录及子目录。

![image](https://image.liubing.me/i/2024/03/10/65ed8a9409539.png)

点击3个小点选择`Preserved Formats`，还可以额外支持截图、PDF、阅读模式进行访问，在源页面失效的情况下依旧可以访问内容。

> 生成的PDF浏览的时候页面链接也是支持点击访问的，这一点很赞👍

![image](https://image.liubing.me/i/2024/03/10/65ed8acda7488.png)

![image](https://image.liubing.me/i/2024/03/10/65ed8b0e297e2.png)

## 扩展安装

官方也提供了[浏览器扩展](https://docs.linkwarden.app/getting-started/browser-extension)方便再页面上直接添加。

- [Chrome](https://chrome.google.com/webstore/detail/linkwarden/pnidmkljnhbjfffciajlcpeldoljnidn)

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/linkwarden)

扩展设置也很简单，首次安装使用后会有设置，输入服务的访问地址，用户名和密码即可。

![image](https://image.liubing.me/i/2024/03/10/65ed8c3298de1.png)

使用的时候直接点击扩展的图标进行快速添加。

![image](https://image.liubing.me/i/2024/03/10/65ed8cb12579c.png)
