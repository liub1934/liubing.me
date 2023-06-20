---
date: 2022-12-26
category:
  - V2Ray
tag:
  - V2Ray
  - WebSocket
  - TLS
  - Nginx
  - Cloudflare
  - x-ui
layout: ArticleLayout
containerClass: article-container
---

# V2Ray+WebSocket(ws)+TLS+Nginx+Cloudflare+x-ui 拯救被墙的 VPS

之前看着别人的教程写过一篇拯救搬瓦工被 Q 的文章，用的是`v2ray.fun` 的面板，后面因为某些原因脚本失效了，后面就换成了`v2-ui`的可视化面板，之后发现该面板在 Github 上的项目也因为某些原因项目不存在了，后来又发现新的面板`x-ui`，页面长的基本一样，不知道是不是同一个作者。接下来记录下具体的`x-ui`面板的安装和使用。

<!-- more -->

::: warning
前置教程请参考之前写过的已废弃的文章：[点击前往](/article/v2ray/v2ray-websocket-tl-nginx-cloudflare-bandwagonhost.md)。只需要看到`宝塔面板相关设置`，将上述教程 `Cloudflare` 中`Proxy status`变灰的云朵重新弄成点亮状态。
:::

## 功能介绍

可以参考该面板仓库 Github 仓库地址：[点击访问](https://github.com/vaxilu/x-ui)

- 系统状态监控
- 支持多用户多协议，网页可视化操作
- 支持的协议：vmess、vless、trojan、shadowsocks、dokodemo-door、socks、http
- 支持配置更多传输配置
- 流量统计，限制流量，限制到期时间
- 可自定义 xray 配置模板
- 支持 https 访问面板（自备域名 + ssl 证书）
- 支持一键 SSL 证书申请且自动续签

## 安装

可以在 VPS 上直接执行下面的脚本进行一键安装，安装过程中会要求输入用户名、密码、端口信息，按需输入提供即可。

```sh
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)
```

安装完成后可以输入命令`x-ui`来查看面板的状态和操作面板。

![image](https://image.liubing.me/2022/12/26/87835a432b73e.png)

如果面板状态不是`已运行`，可以使用内置的命令进行输入相应的序号进行启动或重启面板操作。

最后在防火墙中放行上面设定的端口号。宝塔面板用户在`安全`中添加放行端口号。

## 面板访问

通过该地址`http://vps地址:端口号/`进行面板访问，将`vps地址`和`端口号`换成你们自己的。如果没啥意外的话就能看到登录页面了。

::: warning
如果面板登录页面无法访问，请检查下`端口号`是否放行，或者面板状态是否是`已运行`状态。
:::

![image](https://image.liubing.me/2022/12/26/c7ccce9fa55f4.png)

## 账号配置

登录面板后打开入站列表页面，点击`+`号新增账号。

![image](https://image.liubing.me/2022/12/26/964f79ba67ea5.png)

按`vmess`协议配置如下信息：

- `备注` 自己随便填写
- `协议` 选择`vmess`
- `端口` 填写`https`支持的端口

::: warning
Cloudflare 支持的`https`端口号有限，建议使用非 443 的端口。
![image](https://image.liubing.me/2022/12/26/ec5eb32247043.png)
:::

- `id` 一个合法的 `UUID`，添加的时候会自动生成，可以不用管
- `额外 ID` 配置一个 1-65535 之间的值
- `传输` 选择`ws`
- `路径` 填入`/ws/`
- `请求头名称` 填写`Host`
- `请求头值` 填写准备好的域名
- `tls` 处于开启状态
- `域名` 同上`请求头值`
- `证书` 可以选择`路径`或者`文件内容`

::: tip
选择`路径`的话需要将 Cloudflare 的证书密钥文件保存到服务器上的某个位置，然后将路径填上。  
选择`文件内容`的话可以直接将密钥内容粘贴到输入框里面去。

:::

![image](https://image.liubing.me/2022/12/26/c2ee266c508b6.png)

## 从 v2-ui 迁移

如果之前安装过`v2-ui`面板，可以使用下方的命令很快速的将之前的节点配置快速迁移过来，`面板设置和用户名密码不会迁移`。

::: warning
迁移成功后请 `关闭 v2-ui`并且 `重启 x-ui`，否则 `v2-ui` 的 `inbound` 会与 `x-ui` 的 `inbound` 会产生端口冲突。
:::

```sh
x-ui v2-ui
```

## 结语

最后就可以使用相应的工具验证节点是否可用了，具体工具可参考之前的[教程](/article/v2ray/v2ray-websocket-tl-nginx-cloudflare-bandwagonhost.md)中的`v2ray 客户端下载`。

::: danger
本教程仅做记录使用，所建节点仅用于编程学习需要，请勿用于非法用途。  
本教程仅做记录使用，所建节点仅用于编程学习需要，请勿用于非法用途。  
本教程仅做记录使用，所建节点仅用于编程学习需要，请勿用于非法用途。  
:::
