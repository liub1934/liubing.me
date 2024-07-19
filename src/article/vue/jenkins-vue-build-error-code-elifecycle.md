---
date: 2019-05-20
category:
  - Vue
  - 其他
  - Jenkins
tag:
  - Vue
  - Jenkins
layout: ArticleLayout
containerClass: article-container
---

# 记录线上环境 Jenkins Vue 打包失败 error code ELIFECYCLE

Jenkins 里面的 Nodejs 版本换了下，然后自动打包的时候老是失败，提取了下日志信息。

<!-- more -->

```
0 info it worked if it ends with ok
1 verbose cli [ '/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin/node',
1 verbose cli   '/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin/npm',
1 verbose cli   'run',
1 verbose cli   'build' ]
2 info using npm@5.6.0
3 info using node@v8.10.0
4 verbose run-script [ 'prebuild', 'build', 'postbuild' ]
5 info lifecycle yuntu-isight@1.0.0~prebuild: yuntu-isight@1.0.0
6 info lifecycle yuntu-isight@1.0.0~build: yuntu-isight@1.0.0
7 verbose lifecycle yuntu-isight@1.0.0~build: unsafe-perm in lifecycle true
8 verbose lifecycle yuntu-isight@1.0.0~build: PATH: /var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/var/lib/jenkins/workspace/yuntu-isight/node_modules/.bin:/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin:/sbin:/usr/sbin:/bin:/usr/bin
9 verbose lifecycle yuntu-isight@1.0.0~build: CWD: /var/lib/jenkins/workspace/yuntu-isight
10 silly lifecycle yuntu-isight@1.0.0~build: Args: [ '-c', 'node build/build.js' ]
11 silly lifecycle yuntu-isight@1.0.0~build: Returned: code: 1  signal: null
12 info lifecycle yuntu-isight@1.0.0~build: Failed to exec build script
13 verbose stack Error: yuntu-isight@1.0.0 build: `node build/build.js`
13 verbose stack Exit status 1
13 verbose stack     at EventEmitter.<anonymous> (/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/lib/node_modules/npm/node_modules/npm-lifecycle/index.js:285:16)
13 verbose stack     at emitTwo (events.js:126:13)
13 verbose stack     at EventEmitter.emit (events.js:214:7)
13 verbose stack     at ChildProcess.<anonymous> (/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:55:14)
13 verbose stack     at emitTwo (events.js:126:13)
13 verbose stack     at ChildProcess.emit (events.js:214:7)
13 verbose stack     at maybeClose (internal/child_process.js:925:16)
13 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:209:5)
14 verbose pkgid yuntu-isight@1.0.0
15 verbose cwd /var/lib/jenkins/workspace/yuntu-isight
16 verbose Linux 2.6.32-431.el6.x86_64
17 verbose argv "/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin/node" "/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin/npm" "run" "build"
18 verbose node v8.10.0
19 verbose npm  v5.6.0
20 error code ELIFECYCLE
21 error errno 1
22 error yuntu-isight@1.0.0 build: `node build/build.js`
22 error Exit status 1
23 error Failed at the yuntu-isight@1.0.0 build script.
23 error This is probably not a problem with npm. There is likely additional logging output above.
24 verbose exit [ 1, true ]

```

发现也没代码上的报错情况，找了一圈找到了错误关键词`error code ELIFECYCLE`,然后上 Google 搜索了下，找到了一个类似的问题[https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle](https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle)，解决方法大都如下：

1. 清空 npm 的缓存
2. 删除`node_modules`
3. 删除`package-lock.json`
4. 重新`npm install`

```shell
npm cache clean --force
rm -rf node_modules
rm -rf package-lock.json
npm install
```

由于用的`Jenkins`配置的自动打包，所以先把工作空间内容删了，也就不存在`node_modules`了，在 Build 中执行 Shell`npm install`之前加了如下：

```shell
npm cache clean --force
rm -rf package-lock.json
```

![image](https://image.liubing.me/2023/01/05/b0c56e89de7ce.jpg)

最后重新试了下构建，显示 Success，OK 问题解决。

![image](https://image.liubing.me/2023/01/05/456d58a6f0cfe.jpg)
