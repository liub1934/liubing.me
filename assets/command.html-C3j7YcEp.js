import{_ as n,o as s,c as a,e}from"./app-BvPowtGR.js";const l={},i=e(`<h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h1><h2 id="ls命令" tabindex="-1"><a class="header-anchor" href="#ls命令"><span>ls命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-a</span> <span class="token comment"># 列出目录所有文件，包含以.开始的隐藏文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-A</span> <span class="token comment"># 列出除.及..的其它文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-r</span> <span class="token comment"># 反序排列</span>
<span class="token function">ls</span> <span class="token parameter variable">-t</span> <span class="token comment"># 以文件修改时间排序</span>
<span class="token function">ls</span> <span class="token parameter variable">-S</span> <span class="token comment"># 以文件大小排序</span>
<span class="token function">ls</span> <span class="token parameter variable">-h</span> <span class="token comment"># 以易读大小显示</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token comment"># 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cd-命令" tabindex="-1"><a class="header-anchor" href="#cd-命令"><span>cd 命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 需要进入的目录地址</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>目录名<span class="token punctuation">]</span>
<span class="token comment"># 进入主目录</span>
<span class="token builtin class-name">cd</span> /
<span class="token comment"># 进入home目录</span>
<span class="token builtin class-name">cd</span> ~
<span class="token comment"># 进入上一次工作目录</span>
<span class="token builtin class-name">cd</span> -
<span class="token comment"># 进入上级目录</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pwd-命令" tabindex="-1"><a class="header-anchor" href="#pwd-命令"><span>pwd 命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前路径</span>
<span class="token builtin class-name">pwd</span>
<span class="token comment"># 查看软链接的实际路径</span>
<span class="token builtin class-name">pwd</span> <span class="token parameter variable">-P</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mkdir-命令" tabindex="-1"><a class="header-anchor" href="#mkdir-命令"><span>mkdir 命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 当前目录下创建新文件夹</span>
<span class="token function">mkdir</span> <span class="token punctuation">[</span>文件夹名称<span class="token punctuation">]</span>
<span class="token comment"># 在 tmp 目录下创建路径为 test/t1/t 的目录，若不存在，则创建</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /tmp/test/t1/t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rm-命令" tabindex="-1"><a class="header-anchor" href="#rm-命令"><span>rm 命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 文件
<span class="token comment"># 删除任何 .log 文件，删除前逐一询问确认</span>
<span class="token function">rm</span> <span class="token parameter variable">-i</span> *.log
<span class="token comment"># 删除 test 子目录及子目录中所有档案删除，直接删除，不会确认</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mv-命令" tabindex="-1"><a class="header-anchor" href="#mv-命令"><span>mv 命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将文件 test.log 重命名为 test1.txt</span>
<span class="token function">mv</span> test.log test1.txt
<span class="token comment"># 将文件 log1.txt,log2.txt,log3.txt 移动到根的 test3 目录中</span>
<span class="token function">mv</span> llog1.txt log2.txt log3.txt /test3
<span class="token comment"># 将文件 file1 改名为 file2，如果 file2 已经存在，则询问是否覆盖</span>
<span class="token function">mv</span> <span class="token parameter variable">-i</span> log1.txt log2.txt
<span class="token comment"># 将文件 file1 改名为 file2，如果 file2 已经存在，不会询问直接覆盖，谨慎使用</span>
<span class="token function">mv</span> <span class="token parameter variable">-f</span> log1.txt log2.txt
<span class="token comment"># 移动当前文件夹下的所有文件到上一级目录</span>
<span class="token function">mv</span> * <span class="token punctuation">..</span>/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cp-命令" tabindex="-1"><a class="header-anchor" href="#cp-命令"><span>cp 命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># -i 提示</span>
<span class="token comment"># -r 复制目录及目录内所有项目</span>
<span class="token comment"># -a 复制的文件与原文件时间一样</span>

<span class="token comment"># 复制 a.txt 到 test 目录下，保持原文件时间，如果原文件存在提示是否覆盖。</span>
<span class="token function">cp</span> <span class="token parameter variable">-ai</span> a.txt <span class="token builtin class-name">test</span>
<span class="token comment"># 为 a.txt 建立一个链接（快捷方式）</span>
<span class="token function">cp</span> <span class="token parameter variable">-s</span> a.txt link_a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cat-命令" tabindex="-1"><a class="header-anchor" href="#cat-命令"><span>cat 命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 一次显示整个文件</span>
<span class="token function">cat</span> filename
<span class="token comment"># 从键盘创建一个文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> filename
<span class="token comment"># 将几个文件合并为一个文件</span>
<span class="token function">cat</span> file1 file2 <span class="token operator">&gt;</span> <span class="token function">file</span>

<span class="token comment"># -b 对非空输出行号</span>
<span class="token comment"># -n 输出所有行号</span>
<span class="token comment"># 把 log2012.log 的文件内容加上行号后输入 log2013.log 这个文件里</span>
<span class="token function">cat</span> <span class="token parameter variable">-n</span> log2012.log log2013.log
<span class="token comment"># 把 log2012.log 和 log2013.log 的文件内容加上行号（空白行不加）之后将内容附加到 log.log 里</span>
<span class="token function">cat</span> <span class="token parameter variable">-b</span> log2012.log log2013.log log.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="more-命令" tabindex="-1"><a class="header-anchor" href="#more-命令"><span>more 命令</span></a></h2><p>命令参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+n      从笫 n 行开始显示
-n       定义屏幕大小为n行
+/pattern 在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示
-c       从顶部清屏，然后显示
-d       提示“Press space to continue，’q’ to quit（按空格键继续，按q键退出）”，禁用响铃功能
-l        忽略Ctrl+l（换页）字符
-p       通过清除窗口而不是滚屏来对文件进行换页，与-c选项相似
-s       把连续的多个空行显示为一行
-u       把文件内容中的下画线去掉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作命令</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Enter    向下 n 行，需要定义。默认为 1 行
Ctrl+F   向下滚动一屏
空格键  向下滚动一屏
Ctrl+B  返回上一屏
=       输出当前行的行号
:f     输出文件名和当前行的行号
V      调用vi编辑器
!命令   调用Shell，并执行命令
q       退出more
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示文件中从第3行起的内容</span>
<span class="token function">more</span> +3 text.txt
<span class="token comment"># 在所列出文件目录详细信息，借助管道使每次显示 5 行</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">more</span> <span class="token parameter variable">-5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="less-命令" tabindex="-1"><a class="header-anchor" href="#less-命令"><span>less 命令</span></a></h2><p>less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。</p><p>命令参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-i  忽略搜索时的大小写
-N  显示每行的行号
-o  &lt;文件名&gt; 将less 输出的内容在指定文件中保存起来
-s  显示连续空行为一行
/字符串：向下搜索“字符串”的功能
?字符串：向上搜索“字符串”的功能
n：重复前一个搜索（与 / 或 ? 有关）
N：反向重复前一个搜索（与 / 或 ? 有关）
-x &lt;数字&gt; 将“tab”键显示为规定的数字空格
b  向后翻一页
d  向后翻半页
h  显示帮助界面
Q  退出less 命令
u  向前滚动半页
y  向前滚动一行
空格键 滚动一行
回车键 滚动一页
[pagedown]： 向下翻动一页
[pageup]：   向上翻动一页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ps 查看进程信息并通过 less 分页显示</span>
<span class="token function">ps</span> <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">less</span> <span class="token parameter variable">-N</span>
<span class="token comment"># 查看多个文件</span>
<span class="token function">less</span> <span class="token number">1</span>.log <span class="token number">2</span>.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="find-命令" tabindex="-1"><a class="header-anchor" href="#find-命令"><span>find 命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> pathname <span class="token parameter variable">-options</span> <span class="token punctuation">[</span>-print <span class="token parameter variable">-exec</span> <span class="token parameter variable">-ok</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pathname: find命令所查找的目录路径。例如用.来表示当前目录，用/来表示系统根目录。
-print： find命令将匹配的文件输出到标准输出。
-exec： find命令对匹配的文件执行该参数所给出的shell命令。相应命令的形式为&#39;command&#39; {  } \\;，注意{   }和\\；之间的空格。
-ok： 和-exec的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，都会给出提示，让用户来确定是否执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令选项</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-name 按照文件名查找文件
-perm 按文件权限查找文件
-user 按文件属主查找文件
-group  按照文件所属的组来查找文件。
-type  查找某一类型的文件，诸如：
   b - 块设备文件
   d - 目录
   c - 字符设备文件
   l - 符号链接文件
   p - 管道文件
   f - 普通文件

-size n :[c] 查找文件长度为n块文件，带有c时表文件字节大小
-amin n   查找系统中最后N分钟访问的文件
-atime n  查找系统中最后n*24小时访问的文件
-cmin n   查找系统中最后N分钟被改变文件状态的文件
-ctime n  查找系统中最后n*24小时被改变文件状态的文件
-mmin n   查找系统中最后N分钟被改变文件数据的文件
-mtime n  查找系统中最后n*24小时被改变文件数据的文件
(用减号-来限定更改时间在距今n日以内的文件，而用加号+来限定更改时间在距今n日以前的文件。 )
-maxdepth n 最大查找目录深度
-prune 选项来指出需要忽略的目录。在使用-prune选项时要当心，因为如果你同时使用了-depth选项，那么-prune选项就会被find命令忽略
-newer 如果希望查找更改时间比某个文件新但比另一个文件旧的所有文件，可以使用-newer选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查找 48 小时内修改过的文件</span>
<span class="token function">find</span> <span class="token parameter variable">-atime</span> <span class="token parameter variable">-2</span>
<span class="token comment"># 在当前目录查找 以 .log 结尾的文件。 . 代表当前目录</span>
<span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&#39;*.log&#39;</span>
<span class="token comment"># 查找 /opt 目录下 权限为 777 的文件</span>
<span class="token function">find</span> /opt <span class="token parameter variable">-perm</span> <span class="token number">777</span>
<span class="token comment"># 查找大于 1K 的文件</span>
<span class="token function">find</span> <span class="token parameter variable">-size</span> +1000c
<span class="token comment"># 查找等于 1000 字符的文件</span>
<span class="token function">find</span> <span class="token parameter variable">-size</span> 1000c
<span class="token comment"># 在当前目录中查找更改时间在10日以前的文件并删除它们(无提醒）</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-mtime</span> +10 <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token comment"># 当前目录下查找文件名以 passwd 开头，内容包含 &quot;pkg&quot; 字符的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;passwd*&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">grep</span> <span class="token string">&quot;pkg&quot;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token comment"># 用 exec 选项执行 cp 命令</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.log&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> test3 <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token comment"># 删除lib目录下非test开头和非node_modules的其他所有文件</span>
<span class="token function">find</span> /var/lib/ <span class="token parameter variable">-mindepth</span> <span class="token number">1</span> <span class="token parameter variable">-maxdepth</span> <span class="token number">1</span> <span class="token operator">!</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;test*&#39;</span> <span class="token operator">!</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chmod-命令" tabindex="-1"><a class="header-anchor" href="#chmod-命令"><span>chmod 命令</span></a></h2><p>常用参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-c 当发生改变时，报告处理信息
-R 处理指定目录以及其子目录下所有文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>权限范围</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>u ：目录或者文件的当前的用户
g ：目录或者文件的当前的群组
o ：除了目录或者文件的当前用户或群组之外的用户或者群组
a ：所有的用户及群组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>权限代号</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>r ：读权限，用数字4表示
w ：写权限，用数字2表示
x ：执行权限，用数字1表示
- ：删除权限，用数字0表示
s ：特殊权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 增加文件 t.log 所有用户可执行权限</span>
<span class="token function">chmod</span> a+x t.log
<span class="token comment"># 撤销原来所有的权限，然后使拥有者具有可读权限,并输出处理信息</span>
<span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>r t.log <span class="token parameter variable">-c</span>
<span class="token comment"># 给 file 的属主分配读、写、执行(7)的权限，给file的所在组分配读、执行(5)的权限，给其他用户分配执行(1)的权限</span>
<span class="token function">chmod</span> <span class="token number">751</span> t.log -c（或者：chmod <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rx,o<span class="token operator">=</span>x t.log -c<span class="token punctuation">)</span>
<span class="token comment"># 将 test 目录及其子目录所有文件添加可读权限</span>
<span class="token function">chmod</span> u+r,g+r,o+r <span class="token parameter variable">-R</span> text/ <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tar-命令" tabindex="-1"><a class="header-anchor" href="#tar-命令"><span>tar 命令</span></a></h2><p>常用参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-c 建立新的压缩文件
-f 指定压缩文件
-r 添加文件到已经压缩文件包中
-u 添加改了和现有的文件到压缩包中
-x 从压缩包中抽取文件
-t 显示压缩文件中的内容
-z 支持gzip压缩
-j 支持bzip2压缩
-Z 支持compress解压文件
-v 显示操作过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将文件全部打包成 tar 包</span>
<span class="token function">tar</span> <span class="token parameter variable">-cvf</span> log.tar <span class="token number">1</span>.log,2.log 或tar <span class="token parameter variable">-cvf</span> log.*
<span class="token comment"># 将 /etc 下的所有文件及目录打包到指定目录，并使用 gz 压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> /tmp/etc.tar.gz /etc
<span class="token comment"># 查看刚打包的文件内容</span>
<span class="token function">tar</span> <span class="token parameter variable">-ztvf</span> /tmp/etc.tar.gz
<span class="token comment"># 压缩打包 /home, /etc ，但不要 /home/dmtsai</span>
<span class="token function">tar</span> <span class="token parameter variable">--exclude</span> /home/dmtsai <span class="token parameter variable">-zcvf</span> myfile.tar.gz /home/* /etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),t=[i];function c(d,p){return s(),a("div",null,t)}const o=n(l,[["render",c],["__file","command.html.vue"]]),m=JSON.parse('{"path":"/notes/linux/command.html","title":"常用命令","lang":"zh-CN","frontmatter":{"order":1,"category":["常用命令"],"description":"常用命令 ls命令 cd 命令 pwd 命令 mkdir 命令 rm 命令 mv 命令 cp 命令 cat 命令 more 命令 命令参数 操作命令 less 命令 less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。 命令参数 find 命令 命令参...","head":[["meta",{"property":"og:url","content":"https://liubing.me/notes/linux/command.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"常用命令"}],["meta",{"property":"og:description","content":"常用命令 ls命令 cd 命令 pwd 命令 mkdir 命令 rm 命令 mv 命令 cp 命令 cat 命令 more 命令 命令参数 操作命令 less 命令 less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。 命令参数 find 命令 命令参..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-23T07:09:44.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:modified_time","content":"2024-03-23T07:09:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-23T07:09:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"ls命令","slug":"ls命令","link":"#ls命令","children":[]},{"level":2,"title":"cd 命令","slug":"cd-命令","link":"#cd-命令","children":[]},{"level":2,"title":"pwd 命令","slug":"pwd-命令","link":"#pwd-命令","children":[]},{"level":2,"title":"mkdir 命令","slug":"mkdir-命令","link":"#mkdir-命令","children":[]},{"level":2,"title":"rm 命令","slug":"rm-命令","link":"#rm-命令","children":[]},{"level":2,"title":"mv 命令","slug":"mv-命令","link":"#mv-命令","children":[]},{"level":2,"title":"cp 命令","slug":"cp-命令","link":"#cp-命令","children":[]},{"level":2,"title":"cat 命令","slug":"cat-命令","link":"#cat-命令","children":[]},{"level":2,"title":"more 命令","slug":"more-命令","link":"#more-命令","children":[]},{"level":2,"title":"less 命令","slug":"less-命令","link":"#less-命令","children":[]},{"level":2,"title":"find 命令","slug":"find-命令","link":"#find-命令","children":[]},{"level":2,"title":"chmod 命令","slug":"chmod-命令","link":"#chmod-命令","children":[]},{"level":2,"title":"tar 命令","slug":"tar-命令","link":"#tar-命令","children":[]}],"git":{"createdTime":1711177784000,"updatedTime":1711177784000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":1}]},"readingTime":{"minutes":7.88,"words":2365},"filePathRelative":"notes/linux/command.md","localizedDate":"2024年3月23日","excerpt":"\\n<h2>ls命令</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">ls</span> <span class=\\"token parameter variable\\">-a</span> <span class=\\"token comment\\"># 列出目录所有文件，包含以.开始的隐藏文件</span>\\n<span class=\\"token function\\">ls</span> <span class=\\"token parameter variable\\">-A</span> <span class=\\"token comment\\"># 列出除.及..的其它文件</span>\\n<span class=\\"token function\\">ls</span> <span class=\\"token parameter variable\\">-r</span> <span class=\\"token comment\\"># 反序排列</span>\\n<span class=\\"token function\\">ls</span> <span class=\\"token parameter variable\\">-t</span> <span class=\\"token comment\\"># 以文件修改时间排序</span>\\n<span class=\\"token function\\">ls</span> <span class=\\"token parameter variable\\">-S</span> <span class=\\"token comment\\"># 以文件大小排序</span>\\n<span class=\\"token function\\">ls</span> <span class=\\"token parameter variable\\">-h</span> <span class=\\"token comment\\"># 以易读大小显示</span>\\n<span class=\\"token function\\">ls</span> <span class=\\"token parameter variable\\">-l</span> <span class=\\"token comment\\"># 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来</span>\\n</code></pre></div>","autoDesc":true}');export{o as comp,m as data};
