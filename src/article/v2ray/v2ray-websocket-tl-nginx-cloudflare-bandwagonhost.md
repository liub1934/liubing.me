---
date: 2019-10-13
category:
  - V2Ray
tag:
  - V2Ray
  - WebSocket
  - TLS
  - Nginx
  - Cloudflare
  - 搬瓦工
  - bandwagonhost
layout: ArticleLayout
containerClass: article-container
---

# V2Ray+WebSocket(ws)+TLS+Nginx+Cloudflare 拯救搬瓦工被封 IP 的 VPS

上一次国庆的时候打击力度真是大，可谓是血色国庆，一大波梯子惨遭封禁，楼主的也不例外，
网上搜索了下搬瓦工被封 IP，之前搬瓦工还是可以免费更换 IP 的，现在政策改了，不在提供免费的更换 IP 服务，
所以你得你得花 60 多块钱重新买个 IP。
在搜索的过程中无意间看到了 V2Ray，于是搜索了下 V2Ray 搬瓦工关键词，果然找到了相应的教程。
下面开始大概讲下教程，如果你有装宝塔面板的话就更简单了，配合 V2Ray+WebSocket(ws)+TLS+Nginx+Cloudflare 即可拯救你的 VPS。

<!-- more -->

## 准备一个域名

事先得准备一个可用的域名，自己买也好，还是免费注册一个都行，这里推荐一个免费注册域名的地方：[freenom](https://www.freenom.com)

> 该网站目前注册域名有时会会失败，国内访问速度慢加上该网站引入的防机器人的插件 reCAPTCHA，国内被墙导致验证不通过而注册失败
> 可以参考贴吧的一个教程尝试：[https://tieba.baidu.com/p/6227922839](https://tieba.baidu.com/p/6227922839)

先注册一个账号登陆上去，点击菜单的`Services`，选择`Register a New Domain`

![image](https://image.liubing.me/2019/12/26/58c6cf6283c82.png)

在输入框里输入想要注册的域名：如`lovechinacc`，点击`Check Availability`

选择一个域名点击`Get it now!`,

![image](https://image.liubing.me/2019/12/26/e58841780db66.png)

完成后点击`Checkout`进入下一步

![image](https://image.liubing.me/2019/12/26/a1e91bcde7d54.png)

选择免费的 12 个月期限，点击`Continue`下一步

![image](https://image.liubing.me/2019/12/26/48153dc578495.png)

进入到结算页面后需要填写一些信息，其中红色框出来的地方如实填写，其他的随便填，最关键的是地区，如果你没国外的手机号，老老实实选择 China，
不然会校验到你当前 IP 所属国家和你选择的不符会失败。

![image](https://image.liubing.me/2019/12/26/d62a084633f81.png)

出现下面的情况说明域名购买成功了

![image](https://image.liubing.me/2019/12/26/d941a9411e1d4.png)

如果购买成功的信息里面有如下图红框圈出来的信息则说明失败了

![image](https://image.liubing.me/2019/12/26/741bd4dd4a3c8.png)

## 域名套上 Cloudflare

需要先注册一个 Cloudflare 的账号并登陆上去，[点我去注册](https://dash.cloudflare.com/sign-up)
注册完成后登陆进入，[进入控制台](https://dash.cloudflare.com)，点击`Add a Site`按钮添加一个站点。

![image](https://image.liubing.me/2019/12/26/56967e12a5ca8.png)

输入事先注册好的域名，点击`Add site`

> 如果出现无法添加的情况，请耐心等待一会，刚注册的域名 DNS 还未来得及解析。

![image](https://image.liubing.me/2019/12/26/2cacbc42728e9.png)

选择一个计划，这里我们选择第一个免费的就行了，选择完后点击`Confirm plan`

![image](https://image.liubing.me/2019/12/26/4ecaef21c0cbe.png)

点击`Add Record`按钮添加 2 条 A 记录，Value 指向被墙的 VPS 的 IP，点击`Proxy status`栏中的云朵，让其变成灰色(这个很重要)，
弄完后点击`Continue`按钮继续

![image](https://image.liubing.me/2019/12/26/e178c8af687a5.png)

此时会提示你将域名的 DNS 解析到 Cloudflare，其中有 2 个 Nameserver 是需要用到的。

![image](https://image.liubing.me/2019/12/26/a4a119359b7e2.png)

这里需要重新到 freenom 修改下 DNS，点击`Services`，选择`My Domains`，
找到之前注册的域名，点击右侧的`Manage Domain`

![image](https://image.liubing.me/2019/12/26/67df4e6ea4c80.png)

![image](https://image.liubing.me/2019/12/26/2e551cacfa9df.png)

点击`Management Tools`选择`Nameservers`

![image](https://image.liubing.me/2019/12/26/59fe33d349694.png)

选择第二个选项自定义，填写上面的 2 个 Nameserver，点击`Change Nameservers`保存。

![image](https://image.liubing.me/2019/12/26/cf14f013e28c2.png)

回到 Cloudflare，刷新之前的页面，如果跳转到下面所示控制台页面就成功了，如果没有耐心等待一会，解析需要时间。

![image](https://image.liubing.me/2019/12/26/1c7132210b4bc.png)

点击`SSL/TLS`菜单，选择`mode`模式为`Full`

![image](https://image.liubing.me/2019/12/26/6e97009c0fffa.png)

点击`Origin Server`，点击`Create Certificate`按钮创建证书，年限选择最大的 15 年

![image](https://image.liubing.me/2019/12/26/10bd691c931b4.png)

![image](https://image.liubing.me/2019/12/26/ea0c154031650.png)

创建完成后会出现一个弹窗，请务必将红框圈出来的内容保存下来，请务必将红框圈出来的内容保存下来，请务必将红框圈出来的内容保存下来
弹窗关闭后 Private key 就看不到了。

![image](https://image.liubing.me/2019/12/26/ac7e8bd564667.png)

## 宝塔面板相关设置

打开宝塔控制面板，在网站中添加站点，PHP 版本选择纯静态

![image](https://image.liubing.me/2019/12/26/7f4c223430263.png)

添加完成后点击网站名称，选择`SSL`，选择`其他证书`，将 Cloudflare 创建的证书填进去并保存，保存完毕后勾选`强制HTTPS`

![image](https://image.liubing.me/2019/12/26/87b7c2f3da55b.png)

![image](https://image.liubing.me/2019/12/26/ade284c78181e.png)

::: warning
看到此处下面的不用看了，下面的教程方法已失效过期，请参考新的教程：[点击查看](./v2ray-websocket-tl-nginx-cloudflare-x-ui.md)
:::

## 安装 v2ray.fun 面板

::: warning

该面板可能已经失效，可以尝试安装`v2-ui`，安装完成后拥有可视化操作 UI，可参考下图，具体安装参考：[点击前往](https://github.com/sprov065/v2-ui)  
![image](https://image.liubing.me/2020/12/15/80ea0e9a52d2e.png)  
![image](https://image.liubing.me/2020/12/15/532de133ce06c.png)  
![image](https://image.liubing.me/2020/12/15/84f597bb8fd26.png)

:::

这里需要链接你的 VPS，如果你的 VPS 已经被墙了，需要去找个临时的梯子，这里就需要你自己去想办法了。如果无法链接 VPS，下面的也就不用看了。

用 Xshell 或者其他工具链接上 VPS 后执行下面的命令

```shell
wget -N --no-check-certificate https://raw.githubusercontent.com/FunctionClub/v2ray.fun/master/install.sh && bash install.sh
```

安装到最后会提示你输入账号密码和端口

```text
请输入默认用户名（默认admin）：可自行修改，举例为默认；
请输入默认登陆密码（默认admin）：可自行修改，举例为默认；
请输入监听端口号（默认5000）：可自行修改，举例为默认；
```

进入宝塔面板-安全-防火墙，放行上面的 V2ray 面板监听端口（默认 5000）

![image](https://image.liubing.me/2019/12/26/a333d5b15f8bc.png)

## V2ray.fun 配置

登陆 V2ray.fun 控制面板，登陆方式是：VPS 的 IP:5000，输入账号（admin）、密码（admin）登录。

### 主端口及传输方式修改

点击修改链接，修改主端口号：10010（可自定义，下面会用到，得保持一直）
修改传输方式，选择 WebSocket 后，点击修改传输，会弹出一个对话框，输入之前弄得域名：lovechinacc.tk

![image](https://image.liubing.me/2019/12/26/8a7dc854b75df.png)

![image](https://image.liubing.me/2019/12/26/519f5bcf95a5e.png)

### 配置文件修改

编辑 /etc/v2ray/config.json 文件

```shell
vi /etc/v2ray/config.json
```

修改`path`为`/ws/`
修改`Host`为`lovechinacc.tk`

![image](https://image.liubing.me/2019/12/26/8ac8461443b7b.png)

### Nginx 设置

打开宝塔面板->网站，点击上面的创建的站点，选择配置文件，
将以下信息添加到最后，其中`proxy_pass`中的`10010`端口号得保持和上面`主端口及传输方式修改`中主端口号保持一致。

```text
location /ws {
  proxy_redirect off;
  proxy_pass http://127.0.0.1:10010;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_set_header Host $http_host;
}
```

![image](https://image.liubing.me/2019/12/26/1e999a3810628.png)

### 重启相关服务

重启 V2ray：

```shell
service v2ray restart
```

重启 Ngix

找到宝塔上安装的 Nginx，点击重启按钮重启服务

![image](https://image.liubing.me/2019/12/26/a872ed68efd7e.png)

### Cloudflare 再次设置

回到 Cloudflare，在 DNS 设置中点击灰色的小云朵，让你变成点亮状态

![image](https://image.liubing.me/2019/12/26/7ca3d85866d5e.png)

![image](https://image.liubing.me/2019/12/26/b714d005eb009.png)

至此教程就差不多结束了，接下来需要在电脑上下载相应的客户端软件

## v2ray 客户端下载

### Windows

v2ray-core：[https://github.com/v2ray/v2ray-core/releases/latest](https://github.com/v2ray/v2ray-core/releases/latest)

v2rayN：[https://github.com/2dust/v2rayN/releases/latest](https://github.com/2dust/v2rayN/releases/latest)

### Mac OS

v2ray-core：[https://github.com/v2ray/v2ray-core/releases/latest](https://github.com/v2ray/v2ray-core/releases/latest)

V2RayX：[https://github.com/Cenmrev/V2RayX/releases/latest](https://github.com/Cenmrev/V2RayX/releases/latest)

### Android

V2rayNG：[https://github.com/2dust/v2rayNG/releases/latest](https://github.com/2dust/v2rayNG/releases/latest)

Actinium：[https://github.com/V2Ray-Android/Actinium/releases/latest](https://github.com/V2Ray-Android/Actinium/releases/latest)

BifrostV：[https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv](https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv)

### IOS

Kitsunebi：[https://apps.apple.com/us/app/kitsunebi/id1275446921](https://apps.apple.com/us/app/kitsunebi/id1275446921)

ShadowRocket：[https://apps.apple.com/us/app/shadowrocket/id932747118](https://apps.apple.com/us/app/shadowrocket/id932747118)

Pepi：[https://apps.apple.com/us/app/pepi/id1283082051](https://apps.apple.com/us/app/pepi/id1283082051)

## 客户端使用

以 win 说明，下载相应的 win 版本

> Mac 及其他请自行搜索

![image](https://image.liubing.me/2019/12/26/16eeda326a239.png)

![image](https://image.liubing.me/2019/12/26/d341a253e1af8.png)

下载完成后解压`v2ray-core`，`v2rayN`压缩包中的内容复制到解压后的`v2ray-core`中

![image](https://image.liubing.me/2019/12/26/38ca1333b7b0d.png)

打开`v2rayN`，点击`服务器`，选择`添加[VMess]服务器`

![image](https://image.liubing.me/2019/12/26/6c6b2a550c32e.png)

按图填写相关的信息，其中`地址`、`用户ID`、`额外ID`、`别名`、`伪装域名`换成你们自己的，其他的保持一致。

![image](https://image.liubing.me/2019/12/26/c8f5bed50fbf9.png)

至于`用户ID`、`额外ID`怎么查看，可以登录自己的 VPS，输入下面的命令查看：

```shell
vi /etc/v2ray/config.json
```

![image](https://image.liubing.me/2019/12/26/5dc76b1e341fa.png)

添加完成后右键任务栏的 v2ray 的小图标，点击启用 http 代理，点击代理模式选择第二个开启 PAC

![image](https://image.liubing.me/2019/12/26/c00206b45a5cb.png)

最后打开 Google 试试吧。

## 多用户使用

可以通过 v2ray 的配置文件添加多个 ID，登录 VPS 输入下面的命令：

```shell
vi /etc/v2ray/config.json
```

在`clients`节点下添加多个用户对象即可，如下图所示

![image](https://image.liubing.me/2019/12/26/06b711bf90a2d.png)

其中得保持`ID`和`alertId`唯一性，`ID`可以在`添加[VMess]服务器`的时候，点击`用户ID`后面的生成按钮生成 ID。
添加完成后最好将 v2ray 重启下即可。

## 结语

至此教程就结束了，最后奉劝大家个人及朋友使用即可，切勿建机场、切勿建机场、切勿建机场。
本文教程来源：[https://eveaz.com/1107.html](https://eveaz.com/1107.html)。
其他的拯救被封 IP 途径也可参考上面的网站其他文章解决：[https://eveaz.com/](https://eveaz.com/)

> lovechinacc.tk 该域名仅做为教程需要所注册，请勿直接使用。

如果无法成功在 freenom 注册域名可邮箱私聊我，发送你的 freenom 的用户名、密码、手机号及想要注册的域名，楼主可以免费帮忙注册。
