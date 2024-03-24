import{_ as n,o as s,c as a,e}from"./app-BvPowtGR.js";const i={},t=e(`<h1 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令"><span>Git 常用命令</span></a></h1><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库"><span>仓库</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在当前目录新建一个Git代码库</span>
<span class="token function">git</span> init

<span class="token comment"># 新建一个目录，将其初始化为Git代码库</span>
<span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

<span class="token comment"># 下载克隆代码</span>
<span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前的Git配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token comment"># 编辑Git配置文件</span>
<span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>--global<span class="token punctuation">]</span>

<span class="token comment"># 设置提交代码时的用户信息</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增加-删除文件" tabindex="-1"><a class="header-anchor" href="#增加-删除文件"><span>增加/删除文件</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 添加指定文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># 添加指定目录到暂存区，包括子目录</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>

<span class="token comment"># 添加当前目录的所有文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 添加每个变化前，都会要求确认</span>
<span class="token comment"># 对于同一个文件的多处变化，可以实现分次提交</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-p</span>

<span class="token comment"># 删除工作区文件，并且将这次删除放入暂存区</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># 停止追踪指定文件，但该文件会保留在工作区</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 改名文件，并且将这个改名放入暂存区</span>
<span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交"><span>代码提交</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 提交暂存区到仓库区</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交暂存区的指定文件到仓库区</span>
<span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交工作区自上次commit之后的变化，直接到仓库区</span>
<span class="token function">git</span> commit <span class="token parameter variable">-a</span>

<span class="token comment"># 提交时显示所有diff信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">-v</span>

<span class="token comment"># 使用一次新的commit，替代上一次提交</span>
<span class="token comment"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 重做上一次commit，并包括指定文件的新变化</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有本地分支</span>
<span class="token function">git</span> branch

<span class="token comment"># 列出所有远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>

<span class="token comment"># 列出所有本地分支和远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 新建一个分支，但依然停留在当前分支</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，并切换到该分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，指向指定commit</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，与指定的远程分支建立追踪关系</span>
<span class="token function">git</span> branch <span class="token parameter variable">--track</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># 切换到指定分支，并更新工作区</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 切换到上一个分支</span>
<span class="token function">git</span> checkout -

<span class="token comment"># 建立追踪关系，在现有分支与指定的远程分支之间</span>
<span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># 合并指定分支到当前分支</span>
<span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 选择一个commit，合并进当前分支</span>
<span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 删除远程分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token function">git</span> branch <span class="token parameter variable">-dr</span> <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有tag</span>
<span class="token function">git</span> tag

<span class="token comment"># 新建一个tag在当前commit</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 新建一个tag在指定commit</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 删除本地tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 删除远程tag</span>
<span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>

<span class="token comment"># 查看tag信息</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交指定tag</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交所有tag</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--tags</span>

<span class="token comment"># 新建一个分支，指向某个tag</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看信息" tabindex="-1"><a class="header-anchor" href="#查看信息"><span>查看信息</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示有变更的文件</span>
<span class="token function">git</span> status

<span class="token comment"># 显示当前分支的版本历史</span>
<span class="token function">git</span> log

<span class="token comment"># 显示commit历史，以及每次commit发生变更的文件</span>
<span class="token function">git</span> log <span class="token parameter variable">--stat</span>

<span class="token comment"># 搜索提交历史，根据关键词</span>
<span class="token function">git</span> log <span class="token parameter variable">-S</span> <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>

<span class="token comment"># 显示某个commit之后的所有变动，每个commit占据一行</span>
<span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s

<span class="token comment"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span>
<span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--grep</span> feature

<span class="token comment"># 显示某个文件的版本历史，包括文件改名</span>
<span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示指定文件相关的每一次diff</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示过去5次提交</span>
<span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--oneline</span>

<span class="token comment"># 显示所有提交过的用户，按提交次数排序</span>
<span class="token function">git</span> shortlog <span class="token parameter variable">-sn</span>

<span class="token comment"># 显示指定文件是什么人在什么时间修改过</span>
<span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示暂存区和工作区的差异</span>
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># 显示暂存区和上一个commit的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示工作区与当前分支最新commit之间的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># 显示两次提交之间的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>

<span class="token comment"># 显示今天你写了多少行代码</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--shortstat</span> <span class="token string">&quot;@{0 day ago}&quot;</span>

<span class="token comment"># 显示某次提交的元数据和内容变化</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交发生变化的文件</span>
<span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交时，某个文件的内容</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># 显示当前分支的最近几次提交</span>
<span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程同步" tabindex="-1"><a class="header-anchor" href="#远程同步"><span>远程同步</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载远程仓库的所有变动</span>
<span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 显示所有远程仓库</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 显示某个远程仓库的信息</span>
<span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 增加一个新的远程仓库，并命名</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># 取回远程仓库的变化，并与本地分支合并</span>
<span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 上传本地指定分支到远程仓库</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--force</span>

<span class="token comment"># 推送所有分支到远程仓库</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销"><span>撤销</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 恢复暂存区的指定文件到工作区</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复某个commit的指定文件到暂存区和工作区</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复暂存区的所有文件到工作区</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 重置暂存区与工作区，与上一次commit保持一致</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span>
<span class="token function">git</span> reset <span class="token parameter variable">--keep</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个commit，用来撤销指定commit</span>
<span class="token comment"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span>
<span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

暂时将未提交的变化移除，稍后再移入
<span class="token function">git</span> stash
<span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 生成一个可供发布的压缩包</span>
<span class="token function">git</span> archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[t];function l(p,o){return s(),a("div",null,c)}const d=n(i,[["render",l],["__file","command.html.vue"]]),m=JSON.parse('{"path":"/notes/git/command.html","title":"Git 常用命令","lang":"zh-CN","frontmatter":{"order":1,"category":["代码笔记"],"description":"Git 常用命令 仓库 配置 增加/删除文件 代码提交 分支 标签 查看信息 远程同步 撤销 其他","head":[["meta",{"property":"og:url","content":"https://liubing.me/notes/git/command.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"Git 常用命令"}],["meta",{"property":"og:description","content":"Git 常用命令 仓库 配置 增加/删除文件 代码提交 分支 标签 查看信息 远程同步 撤销 其他"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-28T09:48:35.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:modified_time","content":"2023-03-28T09:48:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-28T09:48:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"仓库","slug":"仓库","link":"#仓库","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"增加/删除文件","slug":"增加-删除文件","link":"#增加-删除文件","children":[]},{"level":2,"title":"代码提交","slug":"代码提交","link":"#代码提交","children":[]},{"level":2,"title":"分支","slug":"分支","link":"#分支","children":[]},{"level":2,"title":"标签","slug":"标签","link":"#标签","children":[]},{"level":2,"title":"查看信息","slug":"查看信息","link":"#查看信息","children":[]},{"level":2,"title":"远程同步","slug":"远程同步","link":"#远程同步","children":[]},{"level":2,"title":"撤销","slug":"撤销","link":"#撤销","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1679996915000,"updatedTime":1679996915000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":1}]},"readingTime":{"minutes":5.06,"words":1519},"filePathRelative":"notes/git/command.md","localizedDate":"2023年3月28日","excerpt":"\\n<h2>仓库</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 在当前目录新建一个Git代码库</span>\\n<span class=\\"token function\\">git</span> init\\n\\n<span class=\\"token comment\\"># 新建一个目录，将其初始化为Git代码库</span>\\n<span class=\\"token function\\">git</span> init <span class=\\"token punctuation\\">[</span>project-name<span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token comment\\"># 下载克隆代码</span>\\n<span class=\\"token function\\">git</span> clone <span class=\\"token punctuation\\">[</span>url<span class=\\"token punctuation\\">]</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,m as data};
