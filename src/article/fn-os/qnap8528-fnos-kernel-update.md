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

## 一键脚本

让AI帮我整理并写了个脚本，下次飞牛更新好后直接执行脚本即可。

::: warning 免责声明
本脚本由 AI 辅助编写，未经全面测试，不保证其安全性、准确性及适用性。本人仅在自己的设备上进行过测试，确认目前运行正常，但不保证在其他设备或环境中能够正常运行。  
使用本脚本前，请自行评估风险并做好数据备份。因使用、修改或执行本脚本而产生的任何问题或损失，均由使用者自行承担，本人不承担相关责任。
:::

:::: details 点击查看脚本

```sh title="qnap8528-recover.sh"
#!/usr/bin/env bash

set -Eeuo pipefail

# ==========================================
# 基本配置
# ==========================================

MODULE_NAME="qnap8528"
MODULE_VERSION="1.18"

# 当前运行的内核版本
KERNEL_VERSION="$(uname -r)"

# qnap8528 驱动源码目录
SOURCE_DIR="/qnap8528"

# CoolerControl Docker 容器名称
# 请根据 docker ps -a 的实际结果修改
COOLCONTROL_CONTAINER="coolcontrol"

# 驱动加载参数
MODULE_OPTIONS="skip_hw_check=true"

# 日志文件
LOG_FILE="/var/log/qnap8528-recover.log"


# ==========================================
# 日志初始化
# ==========================================

exec > >(tee -a "$LOG_FILE") 2>&1

echo
echo "=========================================="
echo "qnap8528 驱动检查与恢复"
echo "时间：$(date '+%F %T')"
echo "当前内核：${KERNEL_VERSION}"
echo "=========================================="


# ==========================================
# 基础检查
# ==========================================

if [[ "$EUID" -ne 0 ]]; then
    echo "[错误] 请使用 sudo 执行此脚本。"
    exit 1
fi

for cmd in dkms depmod modprobe uname sensors; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
        echo "[错误] 缺少必要命令：${cmd}"
        exit 1
    fi
done


# ==========================================
# 检查当前内核 DKMS 驱动状态
# ==========================================

is_dkms_installed() {
    dkms status \
        -m "$MODULE_NAME" \
        -v "$MODULE_VERSION" \
        -k "$KERNEL_VERSION" 2>/dev/null |
        grep -q 'installed'
}


# ==========================================
# 检查驱动是否已加载
# ==========================================

is_module_loaded() {
    grep -q "^${MODULE_NAME} " /proc/modules
}


# ==========================================
# 检查 qnap8528 传感器
# ==========================================

is_sensor_ok() {
    sensors 2>/dev/null | grep -q '^qnap8528-'
}


# ==========================================
# 清理旧内核对应的 DKMS 驱动
# ==========================================

cleanup_old_kernels() {
    echo
    echo "[清理] 检查旧内核驱动"

    while IFS= read -r entry; do
        [[ -z "$entry" ]] && continue

        # 仅处理 qnap8528/1.18 的记录
        if [[ "$entry" =~ ^qnap8528/1\.18,\ ([^,]+), ]]; then
            OLD_KERNEL="${BASH_REMATCH[1]}"

            # 保留当前正在运行的内核
            if [[ "$OLD_KERNEL" == "$KERNEL_VERSION" ]]; then
                continue
            fi

            echo "[信息] 发现旧内核驱动：${OLD_KERNEL}"

            if dkms remove \
                "${MODULE_NAME}/${MODULE_VERSION}" \
                -k "$OLD_KERNEL"; then
                echo "[成功] 已移除旧内核驱动：${OLD_KERNEL}"
            else
                echo "[警告] 移除旧内核驱动失败：${OLD_KERNEL}"
            fi
        fi
    done < <(
        dkms status \
            -m "$MODULE_NAME" \
            -v "$MODULE_VERSION" 2>/dev/null || true
    )

    echo "[完成] 旧内核驱动检查结束。"
}


# ==========================================
# 重启 CoolerControl Docker 容器
# ==========================================

restart_coolcontrol() {
    echo
    echo "[Docker] 准备重启 CoolerControl"

    if ! command -v docker >/dev/null 2>&1; then
        echo "[错误] 未找到 docker 命令。"
        return 1
    fi

    if ! docker inspect "$COOLCONTROL_CONTAINER" >/dev/null 2>&1; then
        echo "[错误] 找不到 Docker 容器：${COOLCONTROL_CONTAINER}"
        echo "[提示] 请检查 COOLCONTROL_CONTAINER 配置。"
        return 1
    fi

    echo "[Docker] 重启容器：${COOLCONTROL_CONTAINER}"

    if docker restart "$COOLCONTROL_CONTAINER"; then
        echo "[成功] CoolerControl 容器已重启。"
        return 0
    else
        echo "[错误] CoolerControl 容器重启失败。"
        return 1
    fi
}


# ==========================================
# 检查驱动是否完全正常
# ==========================================

if is_dkms_installed && is_module_loaded && is_sensor_ok; then

    echo
    echo "[正常] 当前内核驱动已安装、已加载，传感器数据正常。"
    echo "[跳过] 不重新安装、不重新加载驱动。"

    # 仅清理旧内核驱动
    cleanup_old_kernels

    # 即使驱动已经正常，也重启 CoolerControl
    if ! restart_coolcontrol; then
        echo "[警告] 驱动正常，但 CoolerControl 重启失败。"
        exit 1
    fi

    echo
    echo "[完成] 驱动正常，CoolerControl 已重启。"
    echo "日志：${LOG_FILE}"
    echo "=========================================="

    exit 0
fi


# ==========================================
# 驱动异常，开始恢复
# ==========================================

echo
echo "[异常] 当前驱动未完全正常，开始恢复。"


# 检查源码目录
if [[ ! -d "$SOURCE_DIR" ]]; then
    echo "[错误] 驱动源码目录不存在：${SOURCE_DIR}"
    exit 1
fi

# 检查 DKMS 源码目录
if [[ ! -d "/usr/src/${MODULE_NAME}-${MODULE_VERSION}" ]]; then
    echo "[错误] DKMS 源码目录不存在："
    echo "/usr/src/${MODULE_NAME}-${MODULE_VERSION}"
    exit 1
fi


# ==========================================
# 为当前内核安装驱动
# ==========================================

if ! is_dkms_installed; then

    echo
    echo "[恢复] 为当前内核安装 DKMS 驱动。"

    dkms install \
        "${MODULE_NAME}/${MODULE_VERSION}" \
        -k "$KERNEL_VERSION" \
        --force

else
    echo "[信息] 当前内核已有 DKMS 安装记录。"
fi


# ==========================================
# 更新内核模块依赖
# ==========================================

echo
echo "[恢复] 更新内核模块依赖。"

depmod -a "$KERNEL_VERSION"


# ==========================================
# 加载驱动
# ==========================================

if ! is_module_loaded; then

    echo
    echo "[恢复] 加载 qnap8528 驱动。"

    modprobe "$MODULE_NAME" "$MODULE_OPTIONS"

else
    echo "[信息] qnap8528 已经加载。"
fi


# ==========================================
# 验证恢复结果
# ==========================================

echo
echo "[检查] 验证当前驱动状态。"

if ! is_dkms_installed; then
    echo "[错误] 当前内核的 DKMS 驱动未安装。"
    exit 1
fi

if ! is_module_loaded; then
    echo "[错误] qnap8528 模块未成功加载。"
    exit 1
fi

if ! is_sensor_ok; then
    echo "[错误] 未检测到 qnap8528 传感器数据。"
    echo "[提示] 请检查驱动日志、hwmon 设备及硬件检测情况。"
    exit 1
fi

echo "[成功] 当前内核驱动已恢复，传感器数据正常。"


# ==========================================
# 清理旧内核驱动
# ==========================================

cleanup_old_kernels


# ==========================================
# 重启 CoolerControl
# ==========================================

if ! restart_coolcontrol; then
    echo "[警告] 驱动恢复成功，但 CoolerControl 重启失败。"
    exit 1
fi


# ==========================================
# 输出最终状态
# ==========================================

echo
echo "=========================================="
echo "最终 DKMS 状态"
echo "=========================================="

dkms status \
    -m "$MODULE_NAME" \
    -v "$MODULE_VERSION" || true

echo
echo "=========================================="
echo "[完成] qnap8528 驱动恢复成功。"
echo "[完成] CoolerControl 容器已重启。"
echo "日志：${LOG_FILE}"
echo "=========================================="
```

::::

### 创建脚本

将上面的脚本内容复制进去并保存

```sh
sudo vim /usr/local/sbin/qnap8528-recover.sh
```

### 设置执行权限

```sh
sudo chmod +x /usr/local/sbin/qnap8528-recover.sh
```

### 确认 CoolerControl 容器名称

```sh
sudo docker ps -a --format 'table {{.Names}}\t{{.Status}}\t{{.Image}}'
```

如果容器名称不是 `coolcontrol`，修改脚本中的：

```
COOLCONTROL_CONTAINER="实际容器名称"
```

### 手动执行脚本

```sh
sudo /usr/local/sbin/qnap8528-recover.sh
```

查看运行日志：

```sh
sudo tail -n 100 /var/log/qnap8528-recover.log
```
