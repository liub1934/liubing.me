import{_ as i,c as t,a as o,o as a}from"./app-iUePP8D9.js";const s={};function n(r,e){return a(),t("div",null,e[0]||(e[0]=[o(`<h1 id="vscode-关闭源代码管理中的-传入-传出" tabindex="-1"><a class="header-anchor" href="#vscode-关闭源代码管理中的-传入-传出"><span>VsCode 关闭源代码管理中的 传入/传出</span></a></h1><p>前几天自从重启VsCode自动更新后，在源代码管理中多出了<code>传入/传出</code>，大量的记录导致VsCode变的极度卡顿，网上搜索一番后记录下怎么关闭。</p><figure><img src="https://image.liubing.me/i/2024/08/13/66bb03400d623.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="关闭-传入-传出" tabindex="-1"><a class="header-anchor" href="#关闭-传入-传出"><span>关闭 传入/传出</span></a></h2><p>在设置中搜索<code>showHistoryGraph</code>，默认是勾选开启状态，取消勾选禁用即可，可以据你的需求选择更改用户/工作区的设置。</p><figure><img src="https://image.liubing.me/i/2024/08/13/66bb03f4bb3fe.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>或者直接在配置文件中加入以下内容：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;scm.showHistoryGraph&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const l=i(s,[["render",n],["__file","vscode-close-source-control-incoming-outgoing.html.vue"]]),d=JSON.parse('{"path":"/article/vscode/vscode-close-source-control-incoming-outgoing.html","title":"VsCode 关闭源代码管理中的 传入/传出","lang":"zh-CN","frontmatter":{"date":"2024-08-13T00:00:00.000Z","category":["VsCode"],"tag":["VsCode"],"layout":"ArticleLayout","containerClass":"article-container","description":"前几天自从重启VsCode自动更新后，在源代码管理中多出了传入/传出，大量的记录导致VsCode变的极度卡顿，网上搜索一番后记录下怎么关闭。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/vscode/vscode-close-source-control-incoming-outgoing.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"VsCode 关闭源代码管理中的 传入/传出"}],["meta",{"property":"og:description","content":"前几天自从重启VsCode自动更新后，在源代码管理中多出了传入/传出，大量的记录导致VsCode变的极度卡顿，网上搜索一番后记录下怎么关闭。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/i/2024/08/13/66bb03400d623.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-13T07:09:19.000Z"}],["meta",{"property":"article:tag","content":"VsCode"}],["meta",{"property":"article:published_time","content":"2024-08-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-13T07:09:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VsCode 关闭源代码管理中的 传入/传出\\",\\"image\\":[\\"https://image.liubing.me/i/2024/08/13/66bb03400d623.png\\",\\"https://image.liubing.me/i/2024/08/13/66bb03f4bb3fe.png\\"],\\"datePublished\\":\\"2024-08-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-13T07:09:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"关闭 传入/传出","slug":"关闭-传入-传出","link":"#关闭-传入-传出","children":[]}],"git":{"createdTime":1723532959000,"updatedTime":1723532959000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":1,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":0.54,"words":161},"filePathRelative":"article/vscode/vscode-close-source-control-incoming-outgoing.md","localizedDate":"2024年8月13日","excerpt":"\\n<p>前几天自从重启VsCode自动更新后，在源代码管理中多出了<code>传入/传出</code>，大量的记录导致VsCode变的极度卡顿，网上搜索一番后记录下怎么关闭。</p>\\n","autoDesc":true}');export{l as comp,d as data};