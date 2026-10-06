---
date: 2026-10-06
category:
  - 飞牛OS
tag:
  - 飞牛
  - 威联通
layout: ArticleLayout
containerClass: article-container
---

# fnOS 更新内核后恢复 qnap8528 驱动

由于每次飞牛更新后，这个风扇的驱动都会掉，导致风扇无法使用，索性让AI介入帮我分析了下，然后记录下教程，帮助有需要的人。

<!-- more -->

## 问题原因

fnOS 更新系统后，Linux 内核版本可能发生变化。

例如：

```text
更新前：
6.18.18.c1032-trim

更新后：
6.18.18.c1107-trim
```

`qnap8528` 是通过 DKMS 安装的第三方内核模块，DKMS 编译出来的 `.ko` 文件与具体内核版本绑定。

因此 fnOS 更新内核后，旧内核对应的 `qnap8528` 模块不会自动适用于新内核。

```text
旧内核
6.18.18.c1032-trim
        ↓
qnap8528.ko
        ↓
正常工作

fnOS 更新
        ↓
新内核
6.18.18.c1107-trim
        ↓
没有对应的 qnap8528.ko
        ↓
modprobe 找不到模块
        ↓
sensors 不再显示 qnap8528
```

## 更新后检查当前内核

```bash
# 查看当前正在运行的 Linux 内核版本
uname -r
```

例如：

```text
6.18.18.c1107-trim
```

## 检查 DKMS 状态

```bash
# 查看 DKMS 已安装的内核模块
sudo dkms status
```

例如：

```text
qnap8528/1.18, 6.18.18.c1032-trim, x86_64: installed
```

如果：

```bash
uname -r
```

返回：

```text
6.18.18.c1107-trim
```

而 DKMS 显示：

```text
qnap8528/1.18, 6.18.18.c1032-trim, x86_64: installed
```

说明 qnap8528 还是旧内核版本的驱动，需要针对新内核重新编译。

## 检查 qnap8528 是否已经加载

```bash
# 查看 qnap8528 内核模块是否已经加载
lsmod | grep qnap8528
```

如果没有任何输出，说明当前没有加载 qnap8528。

## 检查当前内核是否存在 qnap8528 模块

```bash
# 在当前运行内核的模块目录中查找 qnap8528
find /lib/modules/$(uname -r) -name 'qnap8528.ko*'
```

如果没有任何输出，说明当前内核没有安装对应的 qnap8528 模块。

## 针对当前内核重新安装 qnap8528

进入 qnap8528 源码目录：

```bash
# 进入 qnap8528 源码目录
cd /qnap8528
```

针对当前正在运行的内核重新安装：

```bash
# 针对当前运行的内核重新编译并安装 qnap8528
# $(uname -r) 会自动获取当前内核版本
sudo dkms install qnap8528/1.18 -k "$(uname -r)" --force
```

## 更新内核模块依赖

```bash
# 重新生成当前内核的模块依赖关系
sudo depmod -a
```

## 确认 DKMS 安装成功

```bash
# 查看 DKMS 状态
sudo dkms status
```

正常应该看到类似：

```text
qnap8528/1.18, 6.18.18.c1107-trim, x86_64: installed
```

重点确认 DKMS 中的内核版本与：

```bash
uname -r
```

返回的版本一致。

## 确认 qnap8528.ko 文件存在

```bash
# 查找当前内核对应的 qnap8528 内核模块
find /lib/modules/$(uname -r) -name 'qnap8528.ko*'
```

正常应该能够看到类似：

```text
/lib/modules/6.18.18.c1107-trim/updates/dkms/qnap8528.ko
```

具体目录可能有所不同。

## 加载 qnap8528 驱动

```bash
# 加载 qnap8528 内核模块
# skip_hw_check=true 用于跳过硬件检查
sudo modprobe qnap8528 skip_hw_check=true
```

确认模块是否加载：

```bash
# 查看 qnap8528 是否已经加载
lsmod | grep qnap8528
```

正常应该看到类似：

```text
qnap8528    ...
```

## 确认 sensors 是否恢复

```bash
# 查看硬件温度、风扇转速等传感器信息
sensors
```

如果驱动正常加载，应该重新出现 qnap8528 相关的传感器信息。

## 恢复 systemd 自动加载

如果之前已经创建：

```text
/etc/systemd/system/qnap8528-load.service
```

可以执行：

```bash
# 让 systemd 重新读取 service 配置
sudo systemctl daemon-reload

# 立即启动 qnap8528，并设置为开机自动启动
sudo systemctl enable --now qnap8528-load.service

# 查看 qnap8528 自动加载服务状态
sudo systemctl status qnap8528-load.service
```

如果 service 使用：

```ini
Type=oneshot
```

看到：

```text
Active: active (exited)
```

通常是正常状态。

## fnOS 更新后的完整恢复流程

以后每次 fnOS 更新完成后，可以直接按照下面的流程执行：

```bash
# 查看当前运行的内核版本
uname -r

# 查看 qnap8528 当前 DKMS 安装状态
sudo dkms status

# 查看 qnap8528 是否已经加载
lsmod | grep qnap8528

# 检查当前内核是否存在 qnap8528 模块
find /lib/modules/$(uname -r) -name 'qnap8528.ko*'

# 进入 qnap8528 源码目录
cd /qnap8528

# 针对当前运行的内核重新编译并安装 qnap8528
sudo dkms install qnap8528/1.18 -k "$(uname -r)" --force

# 更新内核模块依赖
sudo depmod -a

# 检查 DKMS 是否已经安装到当前内核
sudo dkms status

# 再次确认 qnap8528.ko 是否存在
find /lib/modules/$(uname -r) -name 'qnap8528.ko*'

# 加载 qnap8528
sudo modprobe qnap8528 skip_hw_check=true

# 确认模块是否加载成功
lsmod | grep qnap8528

# 查看传感器
sensors

# 如果配置了 systemd 自动加载服务
sudo systemctl daemon-reload
sudo systemctl enable --now qnap8528-load.service

# 查看自动加载服务状态
sudo systemctl status qnap8528-load.service
```

即可恢复驱动并保持开机自动加载。

## 移除旧风扇驱动

输入`sudo dkms status`会显示有2个`installed`，一个是旧内核（6.18.18.c1032）安装的，一个是当前内核（6.18.18.c1107）安装的。

然后使用`dkms remove`命令移除旧的驱动，注意不要删除错了，使用`uname -r`可以查看当前的内核。

```sh
sudo dkms status
# qnap8528/1.18, 6.18.18.c1032-trim, x86_64: installed
# qnap8528/1.18, 6.18.18.c1107-trim, x86_64: installed

# 下面的qnap8528/1.18 -k 6.18.18.c1032-trim按你实际的替换
sudo dkms remove qnap8528/1.18 -k 6.18.18.c1032-trim
```
