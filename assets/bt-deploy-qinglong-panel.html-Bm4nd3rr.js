import{_ as e,c as a,a as t,o as n}from"./app-CyBGB7Zn.js";const s={};function g(l,i){return n(),a("div",null,i[0]||(i[0]=[t(`<h1 id="宝塔面板-docker-部署一个青龙面板-🐉" tabindex="-1"><a class="header-anchor" href="#宝塔面板-docker-部署一个青龙面板-🐉"><span>宝塔面板 Docker 部署一个青龙面板 🐉</span></a></h1><p><a href="https://github.com/whyour/qinglong" target="_blank" rel="noopener noreferrer">青龙面板</a>是一个开源支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，可以定时执行各种类型的脚本，提高脚本执行效率，解放双手。</p><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h2><p>如果已经安装 Docker 可以忽略，没有安装的可以直接在宝塔面板搜索 Docker 进行安装即可。 <img src="https://image.liubing.me/i/2023/10/14/652a6b129d614.png" alt="image" loading="lazy"></p><h2 id="创建站点" tabindex="-1"><a class="header-anchor" href="#创建站点"><span>创建站点</span></a></h2><p>先创建一个站点用于后续面板的访问，比如博主的<code>qinglong.liubing.me</code>，复制好生成的<code>根目录</code>：<code>/www/wwwroot/qinglong.liubing.me</code>，当然你可以自定义一个目录。后面再设置好<code>SSL</code>，以便支持<code>https</code>访问。</p><figure><img src="https://image.liubing.me/i/2023/10/14/652a6cae9f083.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/10/14/652a6daa0a63b.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="部署青龙-🐉" tabindex="-1"><a class="header-anchor" href="#部署青龙-🐉"><span>部署青龙 🐉</span></a></h2><h3 id="获取镜像" tabindex="-1"><a class="header-anchor" href="#获取镜像"><span>获取镜像</span></a></h3><p>在<code>设置</code> -&gt; <code>镜像管理</code> -&gt; <code>获取镜像</code>先拉取下青龙面板的最新 Docker 镜像。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>whyour/qinglong:latest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/i/2023/10/14/652a6b8c489b5.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="部署启动" tabindex="-1"><a class="header-anchor" href="#部署启动"><span>部署启动</span></a></h3><p>使用内置的终端或者其他 SSH 客户端连接到服务器，执行下面的命令进行一键部署启动，其中<code>/www/wwwroot/qinglong.liubing.me</code>可以换成你们自己的目录，<code>5700</code>是端口号，如果被占用可以换成其他的。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -dit</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /www/wwwroot/qinglong.liubing.me/ql/data:/ql/data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 5700:5700</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> qinglong</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  whyour/qinglong:latest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令执行完成后不出意外的话可以在容器列表中看到刚才启动的容器。</p><figure><img src="https://image.liubing.me/i/2023/10/14/652a6e9f34351.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="设置反向代理" tabindex="-1"><a class="header-anchor" href="#设置反向代理"><span>设置反向代理</span></a></h2><p>此时面板还不支持域名的访问，需要在<code>站点设置</code> -&gt; <code>反向代理</code>中添加如下的代理，端口号保持和上面的保持一致。</p><figure><img src="https://image.liubing.me/i/2023/10/14/652a6f1973ec1.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>最后在<code>安全</code> -&gt; <code>防火墙</code>中添加放行端口。</p><figure><img src="https://image.liubing.me/i/2023/10/14/652a6fb6aee5f.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>端口放行后访问之前添加的站点就能看到面板画面了，首次会出现安装设置，用于用户名、密码等设置，按提示进行设置即可。</p><figure><img src="https://image.liubing.me/i/2023/10/14/652a70988aee6.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/10/14/652a7073d9098.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>`,27)]))}const p=e(s,[["render",g]]),o=JSON.parse('{"path":"/article/baota/bt-deploy-qinglong-panel.html","title":"宝塔面板 Docker 部署一个青龙面板 🐉","lang":"zh-CN","frontmatter":{"date":"2023-10-14T00:00:00.000Z","category":["宝塔面板","青龙面板","自部署"],"tag":["宝塔面板","青龙面板","Docker"],"layout":"ArticleLayout","containerClass":"article-container","description":"青龙面板是一个开源支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，可以定时执行各种类型的脚本，提高脚本执行效率，解放双手。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/baota/bt-deploy-qinglong-panel.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"宝塔面板 Docker 部署一个青龙面板 🐉"}],["meta",{"property":"og:description","content":"青龙面板是一个开源支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，可以定时执行各种类型的脚本，提高脚本执行效率，解放双手。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/i/2023/10/14/652a6b129d614.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-10T10:39:05.000Z"}],["meta",{"property":"article:tag","content":"宝塔面板"}],["meta",{"property":"article:tag","content":"青龙面板"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2023-10-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-10T10:39:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"宝塔面板 Docker 部署一个青龙面板 🐉\\",\\"image\\":[\\"https://image.liubing.me/i/2023/10/14/652a6b129d614.png\\",\\"https://image.liubing.me/i/2023/10/14/652a6cae9f083.png\\",\\"https://image.liubing.me/i/2023/10/14/652a6daa0a63b.png\\",\\"https://image.liubing.me/i/2023/10/14/652a6b8c489b5.png\\",\\"https://image.liubing.me/i/2023/10/14/652a6e9f34351.png\\",\\"https://image.liubing.me/i/2023/10/14/652a6f1973ec1.png\\",\\"https://image.liubing.me/i/2023/10/14/652a6fb6aee5f.png\\",\\"https://image.liubing.me/i/2023/10/14/652a70988aee6.png\\",\\"https://image.liubing.me/i/2023/10/14/652a7073d9098.png\\"],\\"datePublished\\":\\"2023-10-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-10T10:39:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"git":{"createdTime":1697416202000,"updatedTime":1710067145000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":2,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"article/baota/bt-deploy-qinglong-panel.md","localizedDate":"2023年10月14日","excerpt":"\\n<p><a href=\\"https://github.com/whyour/qinglong\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">青龙面板</a>是一个开源支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，可以定时执行各种类型的脚本，提高脚本执行效率，解放双手。</p>\\n","autoDesc":true}');export{p as comp,o as data};
