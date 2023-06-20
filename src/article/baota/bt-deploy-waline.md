---
date: 2023-01-14
category:
  - 宝塔面板
  - Waline
tag:
  - 宝塔面板
  - Waline
layout: ArticleLayout
containerClass: article-container
---

# 宝塔面板独立部署 Waline 评论系统

由于近期将自己的博客由 `WordPress` 迁移到了 `VuePress`，刚开始使用的是[Giscus](https://giscus.app/)评论系统，基于 Github 仓库的`Discussions`功能，鉴于 Github 在国内访问巨慢，从而改用另一个有名的评论系统[Waline](https://waline.js.org/)。官网快速上手教程中使用的是`LeanCloud`和`Vercel`进行部署，作为一名开发加上有自己的服务器还是比较喜欢自己去部署服务，好在官网也提供了[独立部署](https://waline.js.org/guide/deploy/vps.html)的教程，通过文档及网络的教程记录下使用宝塔面板部署 Waline 服务。

<!-- more -->

## 宝塔面板添加站点

宝塔面板先添加一个纯静态的站点，并创建相应的 MySQL 数据库，记录下数据库账号和密码。

![image](https://image.liubing.me/2023/01/14/5457a8a4d653c.png)

![image](https://image.liubing.me/2023/01/14/9ea3cbbbf7a24.png)

配置 SSL 证书并勾选强制 HTTPS。

![image](https://image.liubing.me/2023/01/14/84feb6a9774db.png)

## 初始化数据库

选择上面添加站点中创建的数据库，点击右侧的`管理`按钮打开`phpMyAdmin`。

![image](https://image.liubing.me/2023/01/14/8ab2a3af4caab.png)

选择菜单栏的`SQL`，输入文档提供的[waline.sql](https://github.com/walinejs/waline/blob/main/assets/waline.sql)中的脚本。

![image](https://image.liubing.me/2023/01/14/f0fb917bb76df.png)

::: warning
下方的 SQL 脚本是复制的[waline.sql](https://github.com/walinejs/waline/blob/main/assets/waline.sql)中的内容，不保证是最新的脚本，随着 Waline 的更新，脚本内容也有可能会跟着更新，请以[waline.sql](https://github.com/walinejs/waline/blob/main/assets/waline.sql)中的内容为准。
:::

:::: details SQL 脚本

```sql
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table wl_Comment
# ------------------------------------------------------------

CREATE TABLE `wl_Comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `comment` text,
  `insertedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ip` varchar(100) DEFAULT '',
  `link` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  `sticky` boolean DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT '',
  `like` int(11) DEFAULT NULL,
  `ua` text,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table wl_Counter
# ------------------------------------------------------------

CREATE TABLE `wl_Counter` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `time` int(11) DEFAULT NULL,
  `reaction0` int(11) DEFAULT NULL,
  `reaction1` int(11) DEFAULT NULL,
  `reaction2` int(11) DEFAULT NULL,
  `reaction3` int(11) DEFAULT NULL,
  `reaction4` int(11) DEFAULT NULL,
  `reaction5` int(11) DEFAULT NULL,
  `reaction6` int(11) DEFAULT NULL,
  `reaction7` int(11) DEFAULT NULL,
  `reaction8` int(11) DEFAULT NULL,
  `url` varchar(255) NOT NULL DEFAULT '',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table wl_Users
# ------------------------------------------------------------

CREATE TABLE `wl_Users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `display_name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `type` varchar(50) NOT NULL DEFAULT '',
  `label` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `google` varchar(255) DEFAULT NULL,
  `weibo` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `2fa` varchar(32) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

```

::::

脚本执行完成后生成三张表，用于存储评论的相关数据。

![image](https://image.liubing.me/2023/01/14/52e82c2be6f7e.png)

## 添加域名解析

CloudFlare 的 DNS 记录中添加解析，IP 地址填写自己的服务器 IP，点击保存后即可。

![image](https://image.liubing.me/2023/01/14/9e9252dac16e5.png)

## 部署 Waline

可以参照官网[独立部署](https://waline.js.org/guide/deploy/vps.html)教程，里面比较推荐的是`直接运行`的方式，当然如果你对 Docker 熟悉的话也可以该部署方式。

### 初始化项目

::: tip
如果你对 Git 相关操作不熟悉，可以直接下载[waline-server-public](https://github.com/liub1934/waline-server-public)仓库的内容，参考文档[服务器环境变量](https://waline.js.org/reference/server/env.html)修改`.env`里面的相关参数后，上传到服务器相应位置后改名为`waline-server`，可以忽略下面的内容从[PM2 运行项目](#pm2-运行项目)开始阅读。
:::

为了方便修改及服务器拉取代码，这里推荐使用 Github 仓库的形式，先在电脑中创建一个文件夹`waline-server`，进入到`waline-server`文件夹中执行`npm init`，一路回车确认即可，此时会生成一个`package.json`的文件。

### 安装依赖

执行下面的命令安装需要的依赖。

::: code-tabs
@tab yarn

```sh
yarn add @waline/vercel dotenv
```

@tab npm
npm install @waline/vercel dotenv
:::

### 添加环境变量

新建一个`.env`的文件，填入下面的内容，按需修改相关内容和添加新的环境变量配置，其他环境变量参考官网[服务端环境变量](https://waline.js.org/reference/server/env.html)。里面的邮件配置按需修改成功你们自己的或者使用其他通知方式，具体参考文档[评论通知](https://waline.js.org/guide/features/notification.html)。MySQL 也可以换成你们常用的数据库，所支持的数据库参考文档的[数据库服务支持](https://waline.js.org/guide/database.html)。

```env
# 基本配置
SITE_NAME="Bing🐣" # 站点名称
SITE_URL="https://liubing.me" # 站点地址

# 显示配置
LEVELS="0,10,20,50,100,200" # 等级标签

# 安全配置
SECURE_DOMAINS="https://liubing.me" # 安全域名
AKISMET_KEY="" # Akismet 反垃圾评论服务 Key

# 邮件配置
SMTP_HOST="" # SMTP 服务器地址
SMTP_PORT="" # SMTP 服务器端口
SMTP_USER="" # SMTP 用户名
SMTP_PASS="" # SMTP 密码
AUTHOR_EMAIL="" # 博主邮箱用来接收新评论通知

# MySQL配置
MYSQL_DB="" # 数据库库名
MYSQL_USER="" # 数据库用户名
MYSQL_PASSWORD="" # 数据库密码

```

![image](https://image.liubing.me/2023/01/14/5f116b1fe77fa.png)

### 添加启动文件

新建启动文件`index.js`，写入以下启动脚本

```js
const dotenv = require('dotenv')
dotenv.config()
require('@waline/vercel/vanilla.js')
```

### 初始化仓库

在 Github 上新建一个`Private`的私人仓库，注意不要使用`Public`公开的仓库，因为环境变量涉及到一些私密参数，这些参数不已公开。如我自己在 Github 上的的仓库是：[https://github.com/liub1934/waline-server](https://github.com/liub1934/waline-server)。

然后添加`.gitignore`文件用于忽略上传`node_modules`，内容如下所示。

::: code-tabs
@tab .gitignore

```
node_modules/
```

:::

最后将内容推送到上述的 Github 仓库中。

### 运行项目

#### 拉取代码及安装依赖

登录到自己的服务器，使用下面的命令将上面的仓库拉取到服务器本地，由于私人仓库原因会要求输入 Github 的账户密码。

```sh
git clone https://github.com/liub1934/waline-server.git
```

也可以使用 Github Token 的形式去拉取私人仓库，如下所示：

```sh
git clone https://Token@github.com/liub1934/waline-server.git
```

Token 可以[点击链接](https://github.com/settings/tokens)去申请。

项目拉取完成后同样进入`waline-server`文件目录，执行`yarn install`或者`npm install`安装依赖。

#### PM2 运行项目

依赖安装完成后打开宝塔面板的`PM2管理器`或者`Node.js版本管理器`管理器，两者互斥，没有的安装一个即可，这里以`PM2管理器`为例。

点击添加项目按钮添加一个项目，填写如下内容保存：

1. 启动文件: `/www/wwwroot/waline.liubing.me/waline-server/index.js`
2. 运行目录: `/www/wwwroot/waline.liubing.me/waline-server`
3. 项目名称: `waline-server`

![image](https://image.liubing.me/2023/01/14/4625bd2166904.png)

保存可以看到列表多出来一个项目，运行的端口号是`8360`，记住这个端口号，后面需要配置反向代理。

![image](https://image.liubing.me/2023/01/14/534dd5d14e626.png)

#### 反向代理配置

打开站点设置，找到`反向代理`。

![image](https://image.liubing.me/2023/01/14/5afe697d75913.png)

点击`添加反向代理`按钮，添加反向代理，填写代理名称`waline-server`和目标 URL`http://127.0.0.1:8360`

![image](https://image.liubing.me/2023/01/14/fba9c8c1a335a.png)

::: warning
最后记得在`安全` `防火墙`中放行该端口。
:::

### 验证

不出意外的话打开访问`[域名]/ui/register`就能看到注册页面了，首个注册的用户就能成为系统管理员。

![image](https://image.liubing.me/2023/01/14/832b9f9b8713d.png)

管理员登录后就能进行一些个人设置和管理。

![image](https://image.liubing.me/2023/01/14/2c0adaa8bfb98.png)

![image](https://image.liubing.me/2023/01/14/f41a048d0fcbd.png)

最后将部署好的服务接入自己的博客，测试评论及邮件通知是否正常。

![image](https://image.liubing.me/2023/01/14/5fd4bb570de40.png)

![image](https://image.liubing.me/2023/01/14/ce4d9556a6b9e.png)
