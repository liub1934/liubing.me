---
date: 2023-02-12
category:
  - 宝塔面板
  - Lsky Pro
tag:
  - Lsky Pro
  - 宝塔面板
  - 图床
layout: ArticleLayout
containerClass: article-container
---

# 宝塔面板升级兰空图床 Lsky Pro 到 2x 版本

之前一直用的是兰空图床 Lsky Pro，版本也是 1x 的版本，里面也上传了不少的图片，最近看到该图床也升级到了 2x 的版本，看了下[升级指南](https://docs.lsky.pro/docs/free/v2/#%E5%8D%87%E7%BA%A7%E6%8C%87%E5%8D%97)才知道 2x 版本与 1x 存在巨大差异需要手动升级，乘着周末有时间搞一下，记录下升级过程。

<!-- more -->

## 准备工作

我们可以参照文档说明做些准备工作

- 先安装全新的 2.0 版本，安装成功后不要进行任何操作
- 保证旧版本只有一个管理员账号
- 需要将旧版本中的所有用到的储存策略配置填上访问域名，保证该储存策略的图片能正常通过该域名访问
- 如果使用第三方储存，需要关闭防盗链等一切访问限制，避免图像尺寸获取失败

我们按照文档教程全新安装一个 2x 的版本，由于自己使用的是本地存储的策略，就可以不用管其他第三方存储了。

之前的访问域名是`image.liubing.me`，为了升级过程中不影响老的版本的正常使用，这次单独解析了一个新的`img.liubing.me`给这次升级使用。

## 安装环境

从文档上的[安装要求](https://docs.lsky.pro/docs/free/v2/#%E5%AE%89%E8%A3%85%E8%A6%81%E6%B1%82)中可以得知 PHP 最低的版本都得`>= 8.0.2`，由于之前使用的是`7.x`的版本，所以得先去宝塔面板的软件商店中安装 PHP `8.1x`的版本。

如果你的数据库版本也低于下列的版本的话需要安装制定的版本。

- Mysql 5.7+
- PostgreSQL 9.6+
- SQLite 3.8.8+
- SQL Server 2017+

添加站点的过程忽略了，相信你们会的。添加站点的时候记得 PHP 版本选择`8.1x`，运行目录设置成`/public`。

### 安装扩展

安装完成后按文档要求安装以下的扩展：

- BCMath PHP 扩展
- Ctype PHP 扩展
- DOM PHP 拓展
- Fileinfo PHP 扩展
- JSON PHP 扩展
- Mbstring PHP 扩展
- OpenSSL PHP 扩展
- PDO PHP 扩展
- Tokenizer PHP 扩展
- XML PHP 扩展
- Imagick 拓展

有些扩展已经自带了，只需要安装`fileinfo`和`imagemagick`即可。

![image](https://image.liubing.me/i/2023/02/12/63e8aeeaefef5.png)

### 删除禁用函数

此外还需要将默认的一些函数从禁用列表中删除

- exec、shell_exec 函数
- readlink、symlink 函数
- putenv、getenv 函数

在`禁用函数`中`Ctrl + F`搜索相关函数，如果有的话点击右侧的删除按钮删除掉。

![image](https://image.liubing.me/i/2023/02/12/63e8af7c468f6.png)

扩展和禁用函数有更改的时候需要重启下 PHP 服务

![image](https://image.liubing.me/i/2023/02/12/63e8b01b67cf2.png)

## 安装程序

这时候访问域名就能进入安装界面了，如果上述扩展都安装了，被禁用的函数也都删除后该页面环境检测都是打勾 OK 的。

![image](https://image.liubing.me/i/2023/02/12/63e8b19bab8c5.png)

点击下一步进入到数据库和管理员账号配置，按实际情况填写。

::: tip
注意要使用新的数据库，不要填写旧版本连接的数据库。管理员账号建议和原来的旧版本保持一致。
:::

![image](https://image.liubing.me/i/2023/02/12/63e8b2759afaf.png)

点击立即安装，不出意外的话过一会就显示安装完成的界面。

![image](https://image.liubing.me/i/2023/02/12/63e8b33ae497f.png)

安装完成后就先暂时不用管这个页面了，接下来就是数据迁移工作了。

## 数据迁移

好在作者勤快提供了迁移的脚本，可以在[迁移脚本配置](https://docs.lsky.pro/docs/free/v2/#%E8%BF%81%E7%A7%BB%E8%84%9A%E6%9C%AC%E9%85%8D%E7%BD%AE)中找到，或者直接点击[下载迁移脚本](https://github.com/lsky-org/lsky-pro/releases/download/2.0/migrate.zip)。

建议将下载的脚本上传到站点的目录下，可以在站点的根目录下新建一个`update-to-v2`的文件夹，将下载的脚本上传到该目录下并解压。

解压完成后可以看到有个`start.php`的脚本执行文件和`config.yaml`的配置文件。

![image](https://image.liubing.me/i/2023/02/12/63e8b46a926d8.png)

打开`config.yaml`，编辑里面的新旧数据库连接配置。保证运行脚本的环境可以同时连接到这两个不同的数据库。

![63e8b50e2f0ad](https://image.liubing.me/i/2023/02/12/63e8b50e2f0ad.png)

使用 ssh 工具登录到服务器，cd 到脚本所在的目录，执行下面的迁移命令：

```sh
php start.php migrate
```

此时会出现迁移处理的进度条，表示正在迁移图片数据，如果你的图片量很多，那么等待的时间可能很久，过程中请不要关闭窗口、断网，当进度条走完以后，则数据迁移完成。

![63e8b5ac1f72b](https://image.liubing.me/i/2023/02/12/63e8b5ac1f72b.png)

## 图片迁移

上述操作只是将数据库中的数据迁移了过来，脚本并不会迁移实际的图片文件资源。由于使用的是本地存储的策略，所以还得手动将图片文件资源迁移过来。

只需要将旧版本 `public` 目录下的图片文件，复制到新版本中的 `storage/app/uploads` 目录下。

## 后续操作

由于我们一直是需要使用旧站点`https://image.liubing.me`域名的，可以将旧站点的目录重命名在后面加一个`-bak`以做备份，将新建站点的目录修改成和旧站点之前的目录名一致。

此时登录旧的站点`https://image.liubing.me`会发现页面已经成最新的 2x 版本的了。登录完成后在`储存策略`的`本地策略`中将`访问网址`和`储存路径`修改成新的。

![image](https://image.liubing.me/i/2023/02/12/63e8bae8b3fc9.png)

## 重定向配置

一切都 OK 后通过`https://image.liubing.me/2023/01/14/5457a8a4d653c.png`形式访问会 404。  
因为新迁移后的图片访问需要在域名后面加个`i`变成如下地址：  
`https://image.liubing.me/i/2023/01/14/5457a8a4d653c.png`即可正常访问了。

但是我们之前的域名地址后面是不带`i`，需要将这些地址重定向到带`i`的地址。可以通过添加以下的 nginx 配置完成匹配和重定向。

```
if ($request_uri ~* ^/[0-9]+/[0-9]+/[0-9]+/.+) {
  return 301 https://$host/i$request_uri;
}
```

![image](https://image.liubing.me/i/2023/02/12/63e8bbde03d61.png)

一切完成测试 OK 的话就可以将之前的`img.liubing.me`站点停用了。
