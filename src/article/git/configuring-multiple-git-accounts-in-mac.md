---
date: 2023-03-17
category:
  - Git
tag:
  - Git
  - Github
  - Gitlab
  - Gitee
layout: ArticleLayout
containerClass: article-container
---

# Mac 中配置多个 Git 账号

记录下日常开发中需要同时配置 Github、Gitlab、Gitee 多 Git 账号情况。

<!-- more -->

## 清空全局用户配置

如果之前使用过`--global`设置过全局的用户名和邮箱，需要使用下面的命令清空掉。

```sh
git config --global --unset user.name
git config --global --unset user.email
```

## 生成密钥

使用下面的命令生成所需要的各平台密钥。

```sh
ssh-keygen -t rsa -C 'Github邮箱' -f ~/.ssh/id_rsa_github
ssh-keygen -t rsa -C 'Gitlab邮箱' -f ~/.ssh/id_rsa_gitlab
ssh-keygen -t rsa -C 'Gitee邮箱' -f ~/.ssh/id_rsa_gitee
```

进入到`.ssh`文件中就能看到新生成的这几个密钥文件了。

![image](https://image.liubing.me/i/2023/03/17/64142d1e05ac1.png)

## 配置密钥

### Github

Github 可在[SSH and GPG keys](https://github.com/settings/keys)中点击`New SSH key`按钮来添加 SSH key。

![image](https://image.liubing.me/i/2023/03/17/64142dfd99e61.png)

填写一个容易记住的 Title，复制密钥内容填入 Key，密钥内容可通过`cat id_rsa_github.pub`查看`pub`文件中的密钥，密钥内容以`ssh-rsa`开头，`Github邮箱`为结尾。

![image](https://image.liubing.me/i/2023/03/17/64142ff194b46.png)

![image](https://image.liubing.me/i/2023/03/17/64142eb59ac99.png)

### Gitlab

同理 Github，可在 User Settings - [SSH Keys](https://gitlab.com/-/profile/keys)中配置

![image](https://image.liubing.me/i/2023/03/17/6414321a94fe1.png)

### Gitee

同理 Github，可在设置-[SSH 公钥](https://gitee.com/profile/sshkeys)中配置。
![image](https://image.liubing.me/i/2023/03/17/641431274903d.png)

## 配置 Config

在`.ssh`中新建一个`config`文件。

```ssh
cd ~/.ssh
touch config
vim config
```

通过`vim`编辑该文件，填入以下配置内容。

```
Host github.com
HostName github.com
User github邮箱
IdentityFile ~/.ssh/id_rsa_github

Host gitlab.com
HostName gitlab.com
User gitlab邮箱
IdentityFile ~/.ssh/id_rsa_gitlab

Host gitee.com
HostName gitee.com
User gitee邮箱
IdentityFile ~/.ssh/id_rsa_gitee
```

### 测试连通性

```sh
ssh -T git@github.com
ssh -T git@gitlab.com
ssh -T git@gitee.com
```

以 Github 为例，首次输入`ssh -T git@github.com`后会提示` Are you sure you want to continue connecting``，输入yes `后如果看到`successfully`字样说明就成功了，如果出现`Permission denied`说明失败，需要检查密钥是否配置以及是否复制有误。

![image](https://image.liubing.me/i/2023/03/17/641437b04ab61.png)
