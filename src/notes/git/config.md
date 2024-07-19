---
order: 2
category:
  - 代码笔记
---

# Git 配置

## 全局用户名、邮箱配置

```sh
git config --global user.name "xx"
git config --global user.email "xx"
```

## 全局用户名、邮箱查看

```sh
git config --global user.name
git config --global user.email
```

## 全局用户名、邮箱清除

```sh
git config --global --unset user.name
git config --global --unset user.email
```

## 生成密钥

```sh
ssh-keygen -t rsa -C 'Github邮箱' -f ~/.ssh/id_rsa_github
```

## Config

```
Host github.com
HostName github.com
User github邮箱
IdentityFile ~/.ssh/id_rsa_github
```

## 设置代理

```sh
git config --global https.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
```

## 取消代理

```sh
git config --global --unset http.proxy
git config --global --unset https.proxy
```
