import{_ as s,c as a,a as e,o as n}from"./app-iUePP8D9.js";const t={};function l(p,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="uni-app-微信小程序接入人脸核身-sdk" tabindex="-1"><a class="header-anchor" href="#uni-app-微信小程序接入人脸核身-sdk"><span>uni-app 微信小程序接入人脸核身 SDK</span></a></h1><figure><img src="https://image.liubing.me/2019/12/26/336a94e239a5f.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>这几天使用 uni-app 开发某银行的一个微信小程序，需要集成接入腾讯云的人脸核身 SDK，如上图所示，记录下整合接入过程及踩的一些坑，帮助后面需要的朋友们。关于 uni-app 接入人脸核身 SDK 有不懂的地方可以在下面提问，看到会及时回复。</p><h2 id="申请服务" tabindex="-1"><a class="header-anchor" href="#申请服务"><span>申请服务</span></a></h2><p>不是所有的企业都能够申请的，需要符合以下行业要求的客户才能申请 政务：政府机构或事业单位 金融：银行、保险 医疗：公立医疗机构 运营商：电信运营商 教育：公立教育机构 交通：航空、客运、网约车、交通卡、共享交通、轨道交通、租车 旅游：酒店 物流：快递、邮政、物流 由于 SDK 会调用小程序原生的<code>wx.startFacialRecognitionVerify</code>方法，所以总共得申请 2 个服务: <strong>SDK 服务</strong>：<a href="https://cloud.tencent.com/apply/p/shcgszvmppc" target="_blank" rel="noopener noreferrer">申请人脸核身服务</a><strong>小程序</strong>：<a href="https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d" target="_blank" rel="noopener noreferrer">查看申请流程</a>（需要发送邮件申请，使用该服务的小程序的 appid，后面开发也是用的这个）</p><div class="hint-container warning"><p class="hint-container-title">重要的事情说 3 遍</p><p>以上这 2 个服务都需要申请，缺一不可。<br> 以上这 2 个服务都需要申请，缺一不可。<br> 以上这 2 个服务都需要申请，缺一不可。</p></div><h2 id="下载-sdk" tabindex="-1"><a class="header-anchor" href="#下载-sdk"><span>下载 SDK</span></a></h2><p>由于不是我申请的，所以怎么下载我也不知道，听群里的人说的是 SDK 腾讯云下发给客户的。</p><h2 id="sdk-目录结构" tabindex="-1"><a class="header-anchor" href="#sdk-目录结构"><span>SDK 目录结构</span></a></h2><figure><img src="https://image.liubing.me/2019/12/26/cf4574b0e1e09.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="sdk-接入" tabindex="-1"><a class="header-anchor" href="#sdk-接入"><span>SDK 接入</span></a></h2><p>参考腾讯云文档的接入方法：<a href="https://cloud.tencent.com/document/product/1007/31071" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/document/product/1007/31071</a> 文档是针对原生小程序写的，所以页面引入的方法有所不同 由于 uni-app 不支持直接引入小程序的原生页面，所以这里能想到的就是将它当作成一个微信小程序的组件，然后 uni-app 的页面引入这个组件</p><h2 id="解压引入-sdk" tabindex="-1"><a class="header-anchor" href="#解压引入-sdk"><span>解压引入 SDK</span></a></h2><p>在 uni-app 项目中新建<code>wxcomponents</code>目录，将 SDK 解压后放到该目录</p><figure><img src="https://image.liubing.me/2019/12/26/b785c22afe7c2.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p><code>pages.json</code>中<code>globalStyle</code>中全局引入小程序的组件，注意引用的路径</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;usingComponents&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;verify-mpsdk&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;/wxcomponents/verify_mpsdk/index/index&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2019/12/26/43e41f71fdb96.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="新建人脸核身页面" tabindex="-1"><a class="header-anchor" href="#新建人脸核身页面"><span>新建人脸核身页面</span></a></h3><p><code>pages</code>中新建人脸核身的页面<code>face</code>(名字可以随意，根据自己的需要起名)， <code>pages.json</code>中配置页面</p><figure><img src="https://image.liubing.me/2019/12/26/1acb9dfe54c7a.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p><code>face</code>页面中引入<code>verify-mpsdk</code>组件</p><figure><img src="https://image.liubing.me/2019/12/26/efff0fc801e0d.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>最终的人脸核身的页面访问就是<code>/pages/face/face</code></p><h3 id="初始化-sdk" tabindex="-1"><a class="header-anchor" href="#初始化-sdk"><span>初始化 SDK</span></a></h3><p>在需要的页面初始化 SDK，如有个页面需要点击按钮进行人脸核身，就在这个页面进行初始化。 这个直接照着文档<code>快速入门</code>中的来就行了，这里就直接使用 uni-app 默认的<code>index</code>页面， 适当修改下即可，大概代码如下：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;content&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;primary&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> @tap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;gotoVerify&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;进入人脸核身&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        BizToken</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    onLoad</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 初始化慧眼实名核身组件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> Verify</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;@/wxcomponents/verify_mpsdk/main.js&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      Verify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 单击进入人脸核身按钮时，触发该函数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      gotoVerify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">BizToken</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 这里需要我们去客户后端调用DetectAuth接口获取BizToken</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 调用实名核身功能</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        wx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">startVerify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            token</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">BizToken</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // BizToken</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          success</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 验证成功后触发</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // res 包含验证成功的token, 这里需要加500ms延时，防止iOS下不执行后面的逻辑</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">              // 验证成功后，拿到token后的逻辑处理，具体以客户自身逻辑为准</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">              console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">500</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          fail</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // 验证失败时触发</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            // err 包含错误码，错误信息，弹窗提示错误</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">              console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">              wx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">showModal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                title</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;提示&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                content</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ErrorMsg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                showCancel</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">              })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">500</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意下这里的<code>BizToken</code>,需要调用后端服务接口来获取， 需要后端的同学调用腾讯云提供的<a href="https://cloud.tencent.com/document/api/1007/31816" target="_blank" rel="noopener noreferrer">DetectAuth</a>来返回前端需要的<code>BizToken</code>， 调试开发阶段我们可以先通过腾讯云提供的工具 <a href="https://console.cloud.tencent.com/api/explorer?Product=faceid&amp;Version=2018-03-01&amp;Action=DetectAuth" target="_blank" rel="noopener noreferrer">API 3.0 Explorer</a> 直接来获取这个<code>BizToken</code> 如果服务申请成功后控制台一般能找到<code>SecretId</code>，<code>SecretKey</code>，<code>RuleId</code> 注意<code>Endpoint</code>和<code>Region</code>选择的地区得保持和申请时选择的地区一致。 填写完成后点击<code>在线调用</code>中的<code>发送请求</code>按钮，如果填的都对的话返回信息里面会有<code>BizToken</code> 拿到<code>BizToken</code>后就可以直接使用了，修改下上面的代码： xxxxxxxxxxxxxxxxx 就是拿到的<code>BizToken</code></p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">BizToken</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;xxxxxxxxxxxxxxxxx&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 这里需要我们去客户后端调用DetectAuth接口获取BizToken</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2019/12/26/ae97b97b95ec8.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="开发调试" tabindex="-1"><a class="header-anchor" href="#开发调试"><span>开发调试</span></a></h3><p>上面都做完后就可以进行调试了 需要先在项目中<code>manifest.json</code>中配置上小程序的 appid，这个 appid 就是上面<code>申请服务</code>中的 appid，不然无法开启调试。</p><figure><img src="https://image.liubing.me/2019/12/26/b448bf6e38531.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>然后运行到微信开发工具（这里就不多说了），如果提示不是开发人员，就让该 appid 的管理员将你加到开发组里面就行了。 运行成功后点击开发者工具的真机调试，扫描二维码开启真机调试模式。 接下来就是踩坑了，会出现各种问题。</p><h2 id="踩坑及解决方法" tabindex="-1"><a class="header-anchor" href="#踩坑及解决方法"><span>踩坑及解决方法</span></a></h2><h3 id="component-is-not-found-in-path" tabindex="-1"><a class="header-anchor" href="#component-is-not-found-in-path"><span>Component is not found in path</span></a></h3><p>这里开发者工具里面都是显示正常的，不会报这个错， 手机扫码进入调试后控制台会出现这个报错， 提示组件找不到，但是我们的路径都是对的， <code>Component is not found in path &quot;wxcomponents/verify_mpsdk/index/index&quot;</code></p><figure><img src="https://image.liubing.me/2019/12/26/add318ae96511.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>问题出在这里将<code>verify_mpsdk</code>当成自定义组件了， 小程序自定义组件引入的时候需要在文件 JSON 中指定<code>&quot;component&quot;: true</code> 找到<code>wxcomponents\\verify_mpsdk\\index\\index.json</code>文件，加入<code>&quot;component&quot;: true</code>即可 重新开启调试扫码后上面的报错就没了。</p><figure><img src="https://image.liubing.me/2019/12/26/5b68735163aca.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="navigateto-fail-page" tabindex="-1"><a class="header-anchor" href="#navigateto-fail-page"><span>navigateTo:fail page</span></a></h3><p>点击按钮调用<code>gotoVerify</code>后会报一个页面找不到的错 <code>navigateTo:fail page &quot;verify_mpsdk/index/index?isNotice=false&quot; is not found</code></p><figure><img src="https://image.liubing.me/2019/12/26/1d7b45b526df2.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>SDK 默认的是跳转验证页面的地址是<code>verify_mpsdk/index/index</code>， 文档找了半天也没找到相应的配置地址，最后在 SDK 里面搜索找到了这个地址。 所以只需要把这个地址改成我们所需要的地址就行了。 找到<code>wxcomponents\\verify_mpsdk\\main.js</code>，里面搜索<code>verify_mpsdk/index/index</code>, 找到后修改成上面<code>人脸核身页面</code>的地址<code>pages/face/face</code> 保存后重试就能跳转到人脸核身的页面了。</p><h3 id="无操作、无报错大坑" tabindex="-1"><a class="header-anchor" href="#无操作、无报错大坑"><span>无操作、无报错大坑</span></a></h3><p>进入人脸核身的页面后会发现啥操作都没，控制台也没报错</p><figure><img src="https://image.liubing.me/2019/12/26/00c9d4aa17b74.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>一度认为我自己弄的有问题，搞了好久也没弄好，也提了个工单（腾讯云工单反馈率还是很快的，几分钟后就有人回复了，这点赞一个）， 将代码和相关操作在工单里描述了下，对方也觉得的没问题，按照快速入门的代码应该是没问题的， 对方也没找到啥问题，就让我加了一个腾讯云慧眼小助手的微信， 本想着下午加人家看看啥问题的，中午吃完饭闲着的时候将 SDK 里面的文件都格式化后终于在<code>index.js</code>里面找到问题所在了。 <code>wxcomponents\\verify_mpsdk\\index\\index.js</code>文件中有个<code>onLoad</code>生命周期，</p><figure><img src="https://image.liubing.me/2019/12/26/62818e83c0ca7.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>正常原生微信小程序进入到这个页面的时候会执行<code>onLoad</code>里面的代码， 但是我们上面将这个 SDK 当作是一个自定义组件了， 在 uni-app 中组件是不存在<code>onLoad</code>这个生命周期的，这个是页面所属的生命周期。 找到问题所在就好解决了，我们可以在人脸核身的页面<code>pages/face/face</code>手动执行<code>onLoad</code> 修改下<code>pages/face/face</code>的代码，如下：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;face&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">verify-mpsdk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;verifyMpsdk&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">verify-mpsdk</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    onLoad</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 页面onLoad的时候手动调用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">$refs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">verifyMpsdk</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">onLoad</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后重试，就能正常显示了</p><figure><img src="https://image.liubing.me/2019/12/26/cb1aea18b95b0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="sdk-图片异常" tabindex="-1"><a class="header-anchor" href="#sdk-图片异常"><span>SDK 图片异常</span></a></h3><p>点击快速验证进入下一步及后面的步骤的时候发现，页面的图片都挂掉了不显示， 一开始我一直用的真机调试，页面上也不会出现破图，控制台也不会报图片异常的错误， 导致我不知道怎么进行拍摄身份证，以为会自动识别身份证然后自动下一步， 最后在开发者工具里面跑了一遍才知道是图片找不到了，然后拍照的图片按钮自然也就显示不了了。</p><figure><img src="https://image.liubing.me/2019/12/26/f685179d955a3.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/e7198199e28a6.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>最后在 SDK 里面搜索<code>/verify_mpsdk/images</code>，在下面文件中找到关键词， <code>wxcomponents\\verify_mpsdk\\templates\\ocr\\ocr.wxml</code></p><figure><img src="https://image.liubing.me/2019/12/26/66e2a7217386c.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>既然这种形式导致运行的时候图片找不到，我们可以把 SDK 所用的图片都复制到项目的<code>static</code>目录里 在<code>static</code>中新建<code>verify_mpsdk</code>目录，将 SDK 中的图片即<code>wxcomponents\\verify_mpsdk\\images</code> 复制到<code>static\\verify_mpsdk</code>中，最终形成以下目录形式</p><figure><img src="https://image.liubing.me/2019/12/26/15041760d4833.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>最后将<code>wxcomponents\\verify_mpsdk\\templates\\ocr\\ocr.wxml</code>中的<code>/verify_mpsdk/images</code>批量替换成 <code>/static/verify_mpsdk/images</code>后重试即可，然后就都正常了。</p><figure><img src="https://image.liubing.me/2019/12/26/d107501ee8a40.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/2c761686d6f2a.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="完整流程" tabindex="-1"><a class="header-anchor" href="#完整流程"><span>完整流程</span></a></h2><p>最后用真机调试完整跑一把</p><figure><img src="https://image.liubing.me/2019/12/26/361a820e125be.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/c4a2e95b835ac.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/edc4314b7947d.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/bf8aa4ae266d1.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><blockquote><p>备注：如果最上面的<code>wx.startFacialRecognitionVerify</code>服务没有申请到此时点击下一步的会弹出一个无权限的弹窗无法进行下一步</p></blockquote><figure><img src="https://image.liubing.me/2019/12/26/42a2a5cf13274.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/8ae35e6337fc6.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><blockquote><p>这里就是活体人脸检测了，需要将脸对准框框，点击开始后需要读几个数字，</p></blockquote><figure><img src="https://image.liubing.me/2019/12/26/a56b3945a5220.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>最后验证通过后会回到之前的页面（调用 gotoVerify()方法的页面）， 验证成功后，会拿到一个<code>BizToken</code>， 可以在<code>wx.startVerify</code>回调函数<code>success</code>中打印自行查看。 拿到<code>BizToken</code>后可以调用后端的接口，后端通过调用 <a href="https://cloud.tencent.com/document/api/1007/31331" target="_blank" rel="noopener noreferrer">GetDetectInfo</a> 接口获取并返回本次核身的详细信息，包括身份证上的信息和身份证证图片等信息。 前端拿到这些信息后根据自己的程序需要做处理。</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>整合过程中遇到不少问题，百度加 google 也找不到相关的详细信息， 人脸核身的相关文档都很简单，出现问题后无从下手，只能慢慢自己摸索解决了， 最后写篇文章记录下整个过程，也能帮到后面需要集成这个 SDK 的朋友们。</p>`,78)]))}const d=s(t,[["render",l],["__file","uni-app-wechat-verify-mpsdk.html.vue"]]),k=JSON.parse('{"path":"/article/uni-app/uni-app-wechat-verify-mpsdk.html","title":"uni-app 微信小程序接入人脸核身 SDK","lang":"zh-CN","frontmatter":{"date":"2019-08-17T00:00:00.000Z","category":["uni-app","Vue"],"tag":["微信小程序","WeChat","人脸核身","sdk","uni-app"],"layout":"ArticleLayout","containerClass":"article-container","description":"imageimage 这几天使用 uni-app 开发某银行的一个微信小程序，需要集成接入腾讯云的人脸核身 SDK，如上图所示，记录下整合接入过程及踩的一些坑，帮助后面需要的朋友们。关于 uni-app 接入人脸核身 SDK 有不懂的地方可以在下面提问，看到会及时回复。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/uni-app/uni-app-wechat-verify-mpsdk.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"uni-app 微信小程序接入人脸核身 SDK"}],["meta",{"property":"og:description","content":"imageimage 这几天使用 uni-app 开发某银行的一个微信小程序，需要集成接入腾讯云的人脸核身 SDK，如上图所示，记录下整合接入过程及踩的一些坑，帮助后面需要的朋友们。关于 uni-app 接入人脸核身 SDK 有不懂的地方可以在下面提问，看到会及时回复。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/2019/12/26/336a94e239a5f.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-20T14:06:59.000Z"}],["meta",{"property":"article:tag","content":"微信小程序"}],["meta",{"property":"article:tag","content":"WeChat"}],["meta",{"property":"article:tag","content":"人脸核身"}],["meta",{"property":"article:tag","content":"sdk"}],["meta",{"property":"article:tag","content":"uni-app"}],["meta",{"property":"article:published_time","content":"2019-08-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-20T14:06:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"uni-app 微信小程序接入人脸核身 SDK\\",\\"image\\":[\\"https://image.liubing.me/2019/12/26/336a94e239a5f.png\\",\\"https://image.liubing.me/2019/12/26/cf4574b0e1e09.png\\",\\"https://image.liubing.me/2019/12/26/b785c22afe7c2.png\\",\\"https://image.liubing.me/2019/12/26/43e41f71fdb96.png\\",\\"https://image.liubing.me/2019/12/26/1acb9dfe54c7a.png\\",\\"https://image.liubing.me/2019/12/26/efff0fc801e0d.png\\",\\"https://image.liubing.me/2019/12/26/ae97b97b95ec8.png\\",\\"https://image.liubing.me/2019/12/26/b448bf6e38531.png\\",\\"https://image.liubing.me/2019/12/26/add318ae96511.png\\",\\"https://image.liubing.me/2019/12/26/5b68735163aca.png\\",\\"https://image.liubing.me/2019/12/26/1d7b45b526df2.png\\",\\"https://image.liubing.me/2019/12/26/00c9d4aa17b74.png\\",\\"https://image.liubing.me/2019/12/26/62818e83c0ca7.png\\",\\"https://image.liubing.me/2019/12/26/cb1aea18b95b0.png\\",\\"https://image.liubing.me/2019/12/26/f685179d955a3.png\\",\\"https://image.liubing.me/2019/12/26/e7198199e28a6.png\\",\\"https://image.liubing.me/2019/12/26/66e2a7217386c.png\\",\\"https://image.liubing.me/2019/12/26/15041760d4833.png\\",\\"https://image.liubing.me/2019/12/26/d107501ee8a40.png\\",\\"https://image.liubing.me/2019/12/26/2c761686d6f2a.png\\",\\"https://image.liubing.me/2019/12/26/361a820e125be.png\\",\\"https://image.liubing.me/2019/12/26/c4a2e95b835ac.png\\",\\"https://image.liubing.me/2019/12/26/edc4314b7947d.png\\",\\"https://image.liubing.me/2019/12/26/bf8aa4ae266d1.png\\",\\"https://image.liubing.me/2019/12/26/42a2a5cf13274.png\\",\\"https://image.liubing.me/2019/12/26/8ae35e6337fc6.png\\",\\"https://image.liubing.me/2019/12/26/a56b3945a5220.png\\"],\\"datePublished\\":\\"2019-08-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-20T14:06:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"申请服务","slug":"申请服务","link":"#申请服务","children":[]},{"level":2,"title":"下载 SDK","slug":"下载-sdk","link":"#下载-sdk","children":[]},{"level":2,"title":"SDK 目录结构","slug":"sdk-目录结构","link":"#sdk-目录结构","children":[]},{"level":2,"title":"SDK 接入","slug":"sdk-接入","link":"#sdk-接入","children":[]},{"level":2,"title":"解压引入 SDK","slug":"解压引入-sdk","link":"#解压引入-sdk","children":[{"level":3,"title":"新建人脸核身页面","slug":"新建人脸核身页面","link":"#新建人脸核身页面","children":[]},{"level":3,"title":"初始化 SDK","slug":"初始化-sdk","link":"#初始化-sdk","children":[]},{"level":3,"title":"开发调试","slug":"开发调试","link":"#开发调试","children":[]}]},{"level":2,"title":"踩坑及解决方法","slug":"踩坑及解决方法","link":"#踩坑及解决方法","children":[{"level":3,"title":"Component is not found in path","slug":"component-is-not-found-in-path","link":"#component-is-not-found-in-path","children":[]},{"level":3,"title":"navigateTo:fail page","slug":"navigateto-fail-page","link":"#navigateto-fail-page","children":[]},{"level":3,"title":"无操作、无报错大坑","slug":"无操作、无报错大坑","link":"#无操作、无报错大坑","children":[]},{"level":3,"title":"SDK 图片异常","slug":"sdk-图片异常","link":"#sdk-图片异常","children":[]}]},{"level":2,"title":"完整流程","slug":"完整流程","link":"#完整流程","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1671435588000,"updatedTime":1687270019000,"contributors":[{"name":"liub1934","username":"liub1934","email":"liub1934@gmail.com","commits":6,"url":"https://github.com/liub1934"}]},"readingTime":{"minutes":8.86,"words":2658},"filePathRelative":"article/uni-app/uni-app-wechat-verify-mpsdk.md","localizedDate":"2019年8月17日","excerpt":"\\n<figure><img src=\\"https://image.liubing.me/2019/12/26/336a94e239a5f.png\\" alt=\\"image\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image</figcaption></figure>\\n<p>这几天使用 uni-app 开发某银行的一个微信小程序，需要集成接入腾讯云的人脸核身 SDK，如上图所示，记录下整合接入过程及踩的一些坑，帮助后面需要的朋友们。关于 uni-app 接入人脸核身 SDK 有不懂的地方可以在下面提问，看到会及时回复。</p>\\n","autoDesc":true}');export{d as comp,k as data};