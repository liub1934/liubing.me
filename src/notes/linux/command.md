---
order: 1
category:
  - 常用命令
---

# 常用命令

## ls命令

```sh
ls -a # 列出目录所有文件，包含以.开始的隐藏文件
ls -A # 列出除.及..的其它文件
ls -r # 反序排列
ls -t # 以文件修改时间排序
ls -S # 以文件大小排序
ls -h # 以易读大小显示
ls -l # 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来
```

## cd 命令

```sh
# 需要进入的目录地址
cd [目录名]
# 进入主目录
cd /
# 进入home目录
cd ~
# 进入上一次工作目录
cd -
# 进入上级目录
cd ..
```

## pwd 命令

```sh
# 查看当前路径
pwd
# 查看软链接的实际路径
pwd -P
```

## mkdir 命令

```sh
# 当前目录下创建新文件夹
mkdir [文件夹名称]
# 在 tmp 目录下创建路径为 test/t1/t 的目录，若不存在，则创建
mkdir -p /tmp/test/t1/t
```

## rm 命令

```sh
rm [选项] 文件
# 删除任何 .log 文件，删除前逐一询问确认
rm -i *.log
# 删除 test 子目录及子目录中所有档案删除，直接删除，不会确认
rm -rf test
```

## mv 命令

```sh
# 将文件 test.log 重命名为 test1.txt
mv test.log test1.txt
# 将文件 log1.txt,log2.txt,log3.txt 移动到根的 test3 目录中
mv llog1.txt log2.txt log3.txt /test3
# 将文件 file1 改名为 file2，如果 file2 已经存在，则询问是否覆盖
mv -i log1.txt log2.txt
# 将文件 file1 改名为 file2，如果 file2 已经存在，不会询问直接覆盖，谨慎使用
mv -f log1.txt log2.txt
# 移动当前文件夹下的所有文件到上一级目录
mv * ../
```

## cp 命令

```sh
# -i 提示
# -r 复制目录及目录内所有项目
# -a 复制的文件与原文件时间一样

# 复制 a.txt 到 test 目录下，保持原文件时间，如果原文件存在提示是否覆盖。
cp -ai a.txt test
# 为 a.txt 建立一个链接（快捷方式）
cp -s a.txt link_a.txt
```

## cat 命令

```sh
# 一次显示整个文件
cat filename
# 从键盘创建一个文件
cat > filename
# 将几个文件合并为一个文件
cat file1 file2 > file

# -b 对非空输出行号
# -n 输出所有行号
# 把 log2012.log 的文件内容加上行号后输入 log2013.log 这个文件里
cat -n log2012.log log2013.log
# 把 log2012.log 和 log2013.log 的文件内容加上行号（空白行不加）之后将内容附加到 log.log 里
cat -b log2012.log log2013.log log.log
```

## more 命令

命令参数

```
+n      从笫 n 行开始显示
-n       定义屏幕大小为n行
+/pattern 在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示
-c       从顶部清屏，然后显示
-d       提示“Press space to continue，’q’ to quit（按空格键继续，按q键退出）”，禁用响铃功能
-l        忽略Ctrl+l（换页）字符
-p       通过清除窗口而不是滚屏来对文件进行换页，与-c选项相似
-s       把连续的多个空行显示为一行
-u       把文件内容中的下画线去掉
```

操作命令

```
Enter    向下 n 行，需要定义。默认为 1 行
Ctrl+F   向下滚动一屏
空格键  向下滚动一屏
Ctrl+B  返回上一屏
=       输出当前行的行号
:f     输出文件名和当前行的行号
V      调用vi编辑器
!命令   调用Shell，并执行命令
q       退出more
```

```sh
# 显示文件中从第3行起的内容
more +3 text.txt
# 在所列出文件目录详细信息，借助管道使每次显示 5 行
ls -l | more -5
```

## less 命令

less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。

命令参数

```
-i  忽略搜索时的大小写
-N  显示每行的行号
-o  <文件名> 将less 输出的内容在指定文件中保存起来
-s  显示连续空行为一行
/字符串：向下搜索“字符串”的功能
?字符串：向上搜索“字符串”的功能
n：重复前一个搜索（与 / 或 ? 有关）
N：反向重复前一个搜索（与 / 或 ? 有关）
-x <数字> 将“tab”键显示为规定的数字空格
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
```

```sh
# ps 查看进程信息并通过 less 分页显示
ps -aux | less -N
# 查看多个文件
less 1.log 2.log
```

## find 命令

```sh
find pathname -options [-print -exec -ok ...]
```

命令参数

```
pathname: find命令所查找的目录路径。例如用.来表示当前目录，用/来表示系统根目录。
-print： find命令将匹配的文件输出到标准输出。
-exec： find命令对匹配的文件执行该参数所给出的shell命令。相应命令的形式为'command' {  } \;，注意{   }和\；之间的空格。
-ok： 和-exec的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，都会给出提示，让用户来确定是否执行。
```

命令选项

```
-name 按照文件名查找文件
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
```

```sh
# 查找 48 小时内修改过的文件
find -atime -2
# 在当前目录查找 以 .log 结尾的文件。 . 代表当前目录
find ./ -name '*.log'
# 查找 /opt 目录下 权限为 777 的文件
find /opt -perm 777
# 查找大于 1K 的文件
find -size +1000c
# 查找等于 1000 字符的文件
find -size 1000c
# 在当前目录中查找更改时间在10日以前的文件并删除它们(无提醒）
find . -type f -mtime +10 -exec rm -f {} \;
# 当前目录下查找文件名以 passwd 开头，内容包含 "pkg" 字符的文件
find . -f -name 'passwd*' -exec grep "pkg" {} \;
# 用 exec 选项执行 cp 命令
find . -name '*.log' -exec cp {} test3 \;
# 删除lib目录下非test开头和非node_modules的其他所有文件
find /var/lib/ -mindepth 1 -maxdepth 1 ! -name 'test*' ! -name 'node_modules' -exec rm -rf {} \;
```

## chmod 命令

常用参数

```
-c 当发生改变时，报告处理信息
-R 处理指定目录以及其子目录下所有文件
```

权限范围

```
u ：目录或者文件的当前的用户
g ：目录或者文件的当前的群组
o ：除了目录或者文件的当前用户或群组之外的用户或者群组
a ：所有的用户及群组
```

权限代号

```
r ：读权限，用数字4表示
w ：写权限，用数字2表示
x ：执行权限，用数字1表示
- ：删除权限，用数字0表示
s ：特殊权限
```

```sh
# 增加文件 t.log 所有用户可执行权限
chmod a+x t.log
# 撤销原来所有的权限，然后使拥有者具有可读权限,并输出处理信息
chmod u=r t.log -c
# 给 file 的属主分配读、写、执行(7)的权限，给file的所在组分配读、执行(5)的权限，给其他用户分配执行(1)的权限
chmod 751 t.log -c（或者：chmod u=rwx,g=rx,o=x t.log -c)
# 将 test 目录及其子目录所有文件添加可读权限
chmod u+r,g+r,o+r -R text/ -c
```

## tar 命令

常用参数

```
-c 建立新的压缩文件
-f 指定压缩文件
-r 添加文件到已经压缩文件包中
-u 添加改了和现有的文件到压缩包中
-x 从压缩包中抽取文件
-t 显示压缩文件中的内容
-z 支持gzip压缩
-j 支持bzip2压缩
-Z 支持compress解压文件
-v 显示操作过程
```

```sh
# 将文件全部打包成 tar 包
tar -cvf log.tar 1.log,2.log 或tar -cvf log.*
# 将 /etc 下的所有文件及目录打包到指定目录，并使用 gz 压缩
tar -zcvf /tmp/etc.tar.gz /etc
# 查看刚打包的文件内容
tar -ztvf /tmp/etc.tar.gz
# 压缩打包 /home, /etc ，但不要 /home/dmtsai
tar --exclude /home/dmtsai -zcvf myfile.tar.gz /home/* /etc
```
