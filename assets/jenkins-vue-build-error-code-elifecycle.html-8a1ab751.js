import{_ as l,G as o,S as a,a3 as d,U as e,a1 as n,V as t,a2 as i,C as r}from"./framework-ad037d56.js";const c={},u=e("h1",{id:"记录线上环境-jenkins-vue-打包失败-error-code-elifecycle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#记录线上环境-jenkins-vue-打包失败-error-code-elifecycle","aria-hidden":"true"},"#"),n(" 记录线上环境 Jenkins Vue 打包失败 error code ELIFECYCLE")],-1),v=e("p",null,"Jenkins 里面的 Nodejs 版本换了下，然后自动打包的时候老是失败，提取了下日志信息。",-1),b=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 info it worked if it ends with ok
1 verbose cli [ &#39;/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin/node&#39;,
1 verbose cli   &#39;/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin/npm&#39;,
1 verbose cli   &#39;run&#39;,
1 verbose cli   &#39;build&#39; ]
2 info using npm@5.6.0
3 info using node@v8.10.0
4 verbose run-script [ &#39;prebuild&#39;, &#39;build&#39;, &#39;postbuild&#39; ]
5 info lifecycle yuntu-isight@1.0.0~prebuild: yuntu-isight@1.0.0
6 info lifecycle yuntu-isight@1.0.0~build: yuntu-isight@1.0.0
7 verbose lifecycle yuntu-isight@1.0.0~build: unsafe-perm in lifecycle true
8 verbose lifecycle yuntu-isight@1.0.0~build: PATH: /var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/var/lib/jenkins/workspace/yuntu-isight/node_modules/.bin:/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin:/sbin:/usr/sbin:/bin:/usr/bin
9 verbose lifecycle yuntu-isight@1.0.0~build: CWD: /var/lib/jenkins/workspace/yuntu-isight
10 silly lifecycle yuntu-isight@1.0.0~build: Args: [ &#39;-c&#39;, &#39;node build/build.js&#39; ]
11 silly lifecycle yuntu-isight@1.0.0~build: Returned: code: 1  signal: null
12 info lifecycle yuntu-isight@1.0.0~build: Failed to exec build script
13 verbose stack Error: yuntu-isight@1.0.0 build: \`node build/build.js\`
13 verbose stack Exit status 1
13 verbose stack     at EventEmitter.&lt;anonymous&gt; (/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/lib/node_modules/npm/node_modules/npm-lifecycle/index.js:285:16)
13 verbose stack     at emitTwo (events.js:126:13)
13 verbose stack     at EventEmitter.emit (events.js:214:7)
13 verbose stack     at ChildProcess.&lt;anonymous&gt; (/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:55:14)
13 verbose stack     at emitTwo (events.js:126:13)
13 verbose stack     at ChildProcess.emit (events.js:214:7)
13 verbose stack     at maybeClose (internal/child_process.js:925:16)
13 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:209:5)
14 verbose pkgid yuntu-isight@1.0.0
15 verbose cwd /var/lib/jenkins/workspace/yuntu-isight
16 verbose Linux 2.6.32-431.el6.x86_64
17 verbose argv &quot;/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin/node&quot; &quot;/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS-8.10.0/bin/npm&quot; &quot;run&quot; &quot;build&quot;
18 verbose node v8.10.0
19 verbose npm  v5.6.0
20 error code ELIFECYCLE
21 error errno 1
22 error yuntu-isight@1.0.0 build: \`node build/build.js\`
22 error Exit status 1
23 error Failed at the yuntu-isight@1.0.0 build script.
23 error This is probably not a problem with npm. There is likely additional logging output above.
24 verbose exit [ 1, true ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=e("code",null,"error code ELIFECYCLE",-1),p={href:"https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle",target:"_blank",rel:"noopener noreferrer"},g=i(`<ol><li>清空 npm 的缓存</li><li>删除<code>node_modules</code></li><li>删除<code>package-lock.json</code></li><li>重新<code>npm install</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> package-lock.json
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于用的<code>Jenkins</code>配置的自动打包，所以先把工作空间内容删了，也就不存在<code>node_modules</code>了，在 Build 中执行 Shell<code>npm install</code>之前加了如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> package-lock.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2023/01/05/b0c56e89de7ce.jpg" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>最后重新试了下构建，显示 Success，OK 问题解决。</p><figure><img src="https://image.liubing.me/2023/01/05/456d58a6f0cfe.jpg" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>`,7);function k(f,h){const s=r("ExternalLinkIcon");return o(),a("div",null,[u,v,d(" more "),b,e("p",null,[n("发现也没代码上的报错情况，找了一圈找到了错误关键词"),m,n(",然后上 Google 搜索了下，找到了一个类似的问题"),e("a",p,[n("https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle"),t(s)]),n("，解决方法大都如下：")]),g])}const y=l(c,[["render",k],["__file","jenkins-vue-build-error-code-elifecycle.html.vue"]]);export{y as default};
