---
date: 2026-02-01
category:
  - 飞牛OS
tag:
  - 飞牛
  - 威联通
layout: ArticleLayout
containerClass: article-container
---

# 威联通 QNAP TS-453Bmini 安装飞牛 OS

前几年由于 NAS 设备威联通的性价比比较高，在京东斥巨资买了个 TS-453Bmini，用于备份自己的相册和收藏的影视资源，奈何威联通的系统反应真是太慢了，系统界面也很上古，完全不符合现在的审美，再加上飞牛 OS 现在也挺火的，就有了刷飞牛 OS 的想法，网上也搜索了相关的教程，都是些零碎的，没有一个完整的教程，所以就准备自己写一个教程，记录一下自己刷飞牛 OS 的整个过程，希望能帮到其他人，虽然近期飞牛出了个很严重的漏洞，但对于不开外网访问的我来说影响不大，废话不多说直接上教程。

<!-- more -->

## 前置准备

- 一个 8G 以上的 U 盘，用于制作飞牛 OS 的启动盘

  飞牛官网下载 ISO 镜像文件，然后制作启动盘，相关教程可以参考飞牛官网的[如何安装和初始化飞牛 fnOS](https://help.fnnas.com/articles/v1/start/install-os.md)，这里就不多说了，如果是 Mac 的用户，可以使用[balenaEtcher](https://etcher.balena.io/)来制作启动盘。

- 显示器、键盘、网线、HDMI 连接线
- 最好有一块 SSD，用于安装飞牛 OS，这样系统会运行快些（如果已经有了可以忽略）

## 安装飞牛 fnOS

::: caution
安装飞牛 OS 之前请提前备份相关重要的数据，后续的存储空间挂载会格式化硬盘数据！！！
:::

::: tip 温馨提示
由于飞牛 OS 在 TS-453Bmini 上存在 1、2 盘位无法识别的问题，所以需要将安装系统的 SSD 插入到 3 或 4 盘位上，不然安装页面无法选择 SSD 盘位，安装之前可以提前做。
:::

1. 将制作好的启动盘插入到 NAS 上面
2. HDMI 线连接 NAS 和显示器
3. 接入键盘、网线，装的时候，一定要插着网线
4. 启动 NAS 后一直按键盘的`DELETE`键，直到出现`BOOT`界面

   这个时候需要在`BOOT`选项修改启动项，将名称为`USB DISK MODULE PMAP`的启动项先设置成`Disabled`禁用，由于我的已经禁用了，已经显示成`Disabled`了，网上的教程说要把威联通自带的的系统盘拆掉，其实不用的，我们把这个禁用掉一样可以，然后将自己的的启动盘 U 盘调到第一个（可以按空格调整顺序），一般 U 盘会显示品牌的名称，如我的是`SanDisk`，调整顺序完成后按`F4`保存退出，此时会 NAS 会自动重启然后就会读取 U 盘进入安装界面。

   ![image](https://image.liubing.me/i/2026/02/07/6986ba6a09ba5.png)

5. 在安装页面选择需要安装的 SSD，然后一路下一步就行了，最后耐心等待安装完成即可。

   ![image](https://image.liubing.me/i/2026/02/07/6986bda519c78.png)

6. 系统安装完成后，就可以拔掉 U 盘了，然后电脑浏览器就可以打开最后显示的 Web UI 的地址进行初始化的设置。

   ![image](https://image.liubing.me/i/2026/02/07/6986bebdad9ce.png)

以上系统就安装完成了，后续就可以根据自己的需求进行配置了，但是还有 2 个问题需要解决，一个是 1、2 盘位无法识别和风扇无法调节的问题。

## 解决盘位无法识别

需要现在系统设置中开启 SSH，用于后续的 SSH 连接。

![image](https://image.liubing.me/i/2026/02/07/6986bf8dadc33.png)

最新版系统还需要在用户管理-更多选项中启用管理员用户的 SSH 权限，由于我已经开了，所以显示的禁用。

![image](https://image.liubing.me/i/2026/02/07/6986bfef1e647.png)

1. 使用 SSH 连接工具连接到 NAS，IP 使用访问飞牛 OS 的 IP 地址，用户名和密码为初始化时自己设置的用户名和密码，端口默认为 22。
2. 编辑 GRUB 配置文件，输入下面的命令

   ```sh
   sudo vim /etc/default/grub
   ```

   将`GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"`这一行参数后面添加`pci=noacpi`，变成如下形式：

   ```sh
   GRUB_CMDLINE_LINUX="modprobe.blacklist=pcspkr pci=noacpi"
   ```

   ![image](https://image.liubing.me/i/2026/02/07/698711e098e1b.png)

3. 更新 GRUB 配置，使上面的修改生效，输入下面的命令：

   ```sh
   sudo update-grub
   ```

4. 重启飞牛 OS 验证

   -输入以下命令重启：

   ```sh
   sudo reboot
   ```

   输入以下命令查看盘位

   ```sh
   lsblk
   ```

   此时会出现`sda`、`sdb`、`sdc`、`sdd`，说明 1 和 2 盘位（sda、sdb）已成功识别。

   ![6987129a9881b](https://image.liubing.me/i/2026/02/07/6987129a9881b.png)

## 解决风扇无法调节

### 安装风扇驱动

1. 依赖工具安装及更新

   ```sh
   sudo apt update && sudo apt install -y dkms git build-essential linux-headers-$(uname -r)
   ```

2. 下载并安装驱动程序

   如果无法 clone 仓库，可能是因为网络问题，多试几次，或者直接下载仓库内容手动上传。

   ```sh
    sudo git clone https://github.com/0xgiddi/qnap8528.git
    cd qnap8528
    sudo make install
   ```

3. 加载驱动

   ```sh
   sudo modprobe qnap8528 skip_hw_check=true
   ```

4. 验证

   输入`sensors`后会有类似下面的输出

   ![image](https://image.liubing.me/i/2026/02/07/69871539d5f34.png)

   输入下面的命令显示风扇的转速

   ```sh
   cat /sys/class/hwmon/hwmon*/fan*_input
   ```

5. 设置开机自启动

   ```sh
   sudo vim /etc/systemd/system/qnap8528-load.service
   ```

   输入以下内容：

   ```sh
    [Unit]
    Description=QNAP 453Bmini Fan Driver
    [Service]
    Type=oneshot
    RemainAfterExit=yes
    ExecStart=/usr/sbin/modprobe qnap8528 skip_hw_check=true
    ExecStop=/usr/sbin/modprobe -r qnap8528
    [Install]
   ```

   保存退出后，输入以下命令启用服务：

   ```sh
    sudo systemctl daemon-reload
    sudo systemctl enable --now qnap8528-load.service
   ```

   如果有显示`active`即正常。

   ![image](https://image.liubing.me/i/2026/02/07/6987161e32c03.png)

### 自定义调节风扇

打开自带的 Docker 应用，完成相关设置，如已完成设置可以忽略这一步。

![image](https://image.liubing.me/i/2026/02/07/69871bbaece1a.png)

在 SSH 中输入下面的命令安装创建存储目录，其中`/vol1/1000/docker`是飞牛 OS 默认的 Docker 存储路径。

```sh
sudo mkdir -p /vol1/1000/docker/coolcontrol
```

输入下面的命令安装`coolcontrol`并启动

```sh
sudo docker run -d \
    --name coolcontrol \
    --restart unless-stopped \
    --network bridge \
    -p 11987:11987 \
    --privileged \
    -v /sys:/sys \
    -v /dev:/dev \
    -v /vol1/1000/docker/coolcontrol:/etc/coolercontrol \
    coolercontrol/coolercontrold:latest
```

完事后，打开 Docker 应用，在`容器` - `快捷访问` 中点击端口号即可访问 coolercontrol

![image](https://image.liubing.me/i/2026/02/07/69871cc43db0a.png)

![image](https://image.liubing.me/i/2026/02/07/69871d1c63245.png)

点击左侧的添加配置文件

![image](https://image.liubing.me/i/2026/02/07/69871d59287ed.png)

输入配置名称如`Auto-Fan`后下一步

![image](https://image.liubing.me/i/2026/02/07/69871d9bd8075.png)

选择温度源，可以按需选择，一般选择`CPU Temp Package Id 0`即可，然后下一步。

![image](https://image.liubing.me/i/2026/02/07/69871dd78fb9a.png)

此时可以选择不同的温度，可以上下拉取圆点上下调整温度对应的风扇转速，也可以点击双击线段添加新的温度点，调整完成后下一步。

![image](https://image.liubing.me/i/2026/02/07/69871e58685c8.png)

选择默认功能，然后下一步后保存即可。

![image](https://image.liubing.me/i/2026/02/07/69871ee904ee8.png)

![image](https://image.liubing.me/i/2026/02/07/69871f717e082.png)

选择左侧刚创建的配置文件，点击应用配置文件

![image](https://image.liubing.me/i/2026/02/07/69871fc76ec0c.png)

然后选择风扇保存即可。

![image](https://image.liubing.me/i/2026/02/07/69872012d3f16.png)

## 相关教程参考

<https://sspai.com/post/104298>  
<https://club.fnnas.com/forum.php?mod=viewthread&tid=47349>  
<https://club.fnnas.com/forum.php?mod=viewthread&tid=47174>  
<https://club.fnnas.com/forum.php?mod=viewthread&tid=40482>  
<https://post.smzdm.com/p/ax6gzw02/>

## 结语

本人也是参考了上面的大佬们的教程总结出来的，目前系统使用很流程，已经将手机相册内容备份上去了。

![image](https://image.liubing.me/i/2026/02/07/698729b848884.png)

![image](https://image.liubing.me/i/2026/02/07/6987292ad95f3.png)

![image](https://image.liubing.me/i/2026/02/07/6987296983363.png)

![image](https://image.liubing.me/i/2026/02/07/69872a465c14d.png)
