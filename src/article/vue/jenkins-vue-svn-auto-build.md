---
date: 2019-05-02
category:
  - 其他
  - Jenkins
tag:
  - Vue
  - Jenkins
  - SVN
  - 自动构建
  - 自动部署
  - 自动打包
layout: ArticleLayout
containerClass: article-container
---

# Jenkins+Vue+SVN 实现自动打包构建及部署

![image](https://image.liubing.me/2019/12/26/e3fb047569f16.png)

由于公司里版本控制用的 svn，项目框架用的是 vue，所以在后期的时候搜索自学了下 Jenkins，
实现了下 Jenkins+Vue+SVN 自动化打包构建及部署。

<!-- more -->

## 为什么要 Jenkins

先谈谈为什么需要 Jenkins 做自动化处理，公司中的项目中，不管是 svn 还是 git 做版本控制，肯定避免不了分支，一个项目不太可能一个分支从头撸到尾。
一般的项目最少应该都是有 4 个分支的，以 SVN 为例，分为以下几个分支：
dev：本地开发环境分支
uat：测试环境分支
qprod：准生产环境分支
prod：生产环境分支
整体工作流程大概是本地开发完成后提交 dev 并发布，dev 代码合并到 uat 并发布进行测试，测试完成后合并到 qprod 并发布，准生产环境验证完毕后合并到 prod 并发布：

> dev ---> uat ---> qprod ---> prod

其中 dev 、uat、qprod 、prod 都是需要发布部署项目代码的，所以每次有代码发布更新的时候我们是不可能进行手动一个一个的进行打包然后拖到 ftp 上面，一来很繁琐，二来浪费时间。
所以我们就可以借助 Jenkins 将上面的一些列操作环节进行自动化处理，我们所需要的就是提交代码，合并代码，剩下的打包发布之类的重复性活交给 Jenkins 就好了。

## 安装部署 Jenkins

怎么安装 Jenkins 这里就不多说了，网上的教程也都很多，善用搜索引擎，
懒人点[传送门](https://segmentfault.com/a/1190000004639325)去看安装教程，网上随便搜的一个教程。
整个界面大概就是长这样子

![image](https://image.liubing.me/2019/12/26/b239d25fa863e.png)

## 插件安装

列几个必备的插件：

```text
Publish over SSH
NodeJS
```

点击左侧的`Manage Jenkins(系统管理)` --> `Manage Plugins(插件管理)`进行相关插件的安装

![image](https://image.liubing.me/2019/12/26/5061a770ceea6.png)

## 相关配置

上面插件安装完毕后还需要进行一些相关的设置，
点击左侧的`Manage Jenkins(系统管理)` --> `Configure System(系统设置)`

![image](https://image.liubing.me/2019/12/26/4d0ab7c5f6cad.png)

![image](https://image.liubing.me/2019/12/26/52ad11b1e53c5.png)

### Publish over SSH 配置

往下翻，找到 Publish over SSH 配置项，添加 SSH Servers

```text
Name：名称，可以随便取
Hostname：服务器IP
Remote Directory：远程目录，即将文件传送到该服务器的什么位置
```

> 记住这里的 Remote Directory，我们暂定为服务器上的/data/web

![image](https://image.liubing.me/2019/12/26/b7a1486121a8d.png)

如需配置端口、密码及其他的设置点开`Advanced`按钮即可

![image](https://image.liubing.me/2019/12/26/04d6f903f9666.png)

设置完毕后可以点击`Test Configuration`测试下连通性，如果出现`Success`则代表没问题。

### NodeJs 配置

点击左侧的`Manage Jenkins(系统管理)` --> `Global Tool Configuration(全局工具配置)`

![image](https://image.liubing.me/2019/12/26/4d0ab7c5f6cad.png)

![image](https://image.liubing.me/2019/12/26/69d73209b7cb6.png)

找到 Nodejs 配置的地方，按下图进行相关设置，

![image](https://image.liubing.me/2019/12/26/6ac0baec94434.png)

方便大家复制，如果你的项目是 cnpm 管理的依赖，可以在`Global npm packages to install`填上`cnpm --registry=https://registry.npm.taobao.org`，  
会从淘宝源全局安装 cnpm，后续的相关 npm 命令换成 cnpm 即可。

## 创建任务

点击左侧的`New Item`新建任务

![image](https://image.liubing.me/2019/12/26/85e29164bfe52.png)

填写任务名称，选择`Freestyle project`后点击 OK 进入下一步

![image](https://image.liubing.me/2019/12/26/9cc55036fe7e0.png)

### General

可以填写下任务的描述信息，勾上`Discard old builds(丢弃旧的构建)`，
`Days to keep builds(保持构建的天数)`和`Max # of builds to keep(保留的最大构建数)`可以按自己的需求填写，
这里我们暂时都填写 7.

![image](https://image.liubing.me/2019/12/26/52f6abf94cac0.png)

### Source Code Management 源代码管理

选择`Subversion`，从 SVN 获取代码。

```text
Repository URL：SVN上代码的位置
Credentials：证书凭证，就是SVN的账户密码，可以点击Add进行自行添加
```

![image](https://image.liubing.me/2019/12/26/4120a35a21061.png)

### Build Triggers 构建触发器

勾选`Poll SCM`轮询 SCM，`Schedule`中填写`* * * * *`,
代表每分钟都去轮询检查下 SVN 有没有新的提交，有新提交的话就会触发任务。

![image](https://image.liubing.me/2019/12/26/6a2118b8f0e05.png)

### Build Environment 构建环境

勾选`Provide Node & npm bin/ folder to PATH`，选择上面`NodeJs配置`中配置的版本

![image](https://image.liubing.me/2019/12/26/3167adb63944b.png)

### Build 构建

点击`Add build step`按钮，选择`Execute shell`

![image](https://image.liubing.me/2019/12/26/3598d378b12f8.png)

![image](https://image.liubing.me/2019/12/26/f899b25d416e0.png)

shell 中执行打包的相关命令，其中`xxx`为打包后名称

```shell
npm install
npm run build
cd dist
rm -rf xxx.tar.gz
tar -zcvf xxx.tar.gz *
```

![image](https://image.liubing.me/2019/12/26/efdeb36495df2.png)

### Post-build Actions 构建后的操作

点击`Add post-build action`按钮，选择`Send files or execute commands over SSH`，
选择上面事先配置好的 SSH Server。

```text
Source files：源文件
Remove prefix：删除的前缀
Remote directory：远程目录
Exec command：执行的命令
```

其中`Remote directory`填写的目录是相对于上面`Publish over SSH配置`中配置的`Remote Directory`, 上面配置的是`/data/web`,
假设我们的目录结构如下所示

```text
/data/web/project1
/data/web/project2
/data/web/project3
```

如果我们构建完成的包需要发送到`/data/web/project1`目录下，`Remote directory`只需要配置`/project1即可`

![image](https://image.liubing.me/2019/12/26/a0e264c632219.png)

Exec command 执行的命令：

```shell
cd /data/web/project1 # 进入到该目录
tar -zxvf project1.tar.gz # 解压tar包
rm -rf project1.tar.gz # 解压完成后删除tar包
```

最后点击最下面的`Save`按钮保存配置。

## 测试构建

任务流程都写完后，点击具体的任务名称进入任务任务详情页面，点击`Build Now`立即构建，查看构建过程是否能成功。

![image](https://image.liubing.me/2019/12/26/90f91d8dc0769.png)

构建过程中可以点击下面`Build History`中的任务左侧的蓝色小球查看构建信息

![image](https://image.liubing.me/2019/12/26/4584b92ea0c39.png)

如果一切顺利，最后可以看到`Finished: SUCCESS`字样。

![image](https://image.liubing.me/2019/12/26/99e5e933891d0.png)

成功后我们可以在 SVN 测试提交一条新记录，等待 1 分钟后看看相应的任务是否自动执行了。

## 结语

同理其他的几个分支也可以创建相应的任务，有代码更新后自动进行打包构建发布等一系列操作了，
再也不需要手动打包，打完包后在用 ftp 手动上传的相应的服务器位置了，
我们需要做的就是写代码，提交代码，合并代码，其他的事让 Jenkins 为我们去自动处理。
如果版本管理用的事 Git，原理是一样的。
