(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{383:function(t,e,r){"use strict";r.r(e);var a=r(17),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"git常用命令总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令总结"}},[t._v("#")]),t._v(" git常用命令总结")]),t._v(" "),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),r("h3",{attrs:{id:"首先是配置帐号信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#首先是配置帐号信息"}},[t._v("#")]),t._v(" 首先是配置帐号信息")]),t._v(" "),r("blockquote",[r("p",[t._v('ssh -T git@github.com#登陆github\n修改项目中的个人信息\n$ git config --global user.name "wirelessqa"\n$ git config --global user.email wirelessqa.me@gmail.com')])]),t._v(" "),r("h3",{attrs:{id:"config"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" config")]),t._v(" "),r("blockquote",[r("p",[t._v("git config --global user.name JSLite#设置提交用户名\ngit config --global user.email JSLite@yeah.net#设置提交邮箱\ngit config --list#查看配置的信息\ngit remote remove origin#删除该远程路径\ngit remote add origin git@jslite.github.com:JSLite/JSLite.git#添加远程路径")])]),t._v(" "),r("h3",{attrs:{id:"help"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[t._v("#")]),t._v(" help")]),t._v(" "),r("blockquote",[r("p",[t._v("git help config#获取帮助信息")])]),t._v(" "),r("h3",{attrs:{id:"配置自动换行（自动转换坑太大）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置自动换行（自动转换坑太大）"}},[t._v("#")]),t._v(" 配置自动换行（自动转换坑太大）")]),t._v(" "),r("blockquote",[r("p",[t._v("git config --global core.autocrlf input#提交到git是自动将换行符转换为lf")])]),t._v(" "),r("h3",{attrs:{id:"配置密钥"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置密钥"}},[t._v("#")]),t._v(" 配置密钥")]),t._v(" "),r("blockquote",[r("p",[t._v("ssh-keygen -t rsa -C JSLite@yeah.net#生成密钥\nssh -T git@github.com#测试是否成功")])]),t._v(" "),r("h3",{attrs:{id:"多账号ssh配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多账号ssh配置"}},[t._v("#")]),t._v(" 多账号ssh配置")]),t._v(" "),r("h4",{attrs:{id:"_1-生成指定名字的密钥"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成指定名字的密钥"}},[t._v("#")]),t._v(" 1.生成指定名字的密钥")]),t._v(" "),r("blockquote",[r("p",[t._v('ssh-keygen -t rsa -C "邮箱地址" -f ~/.ssh/github_jslite 会生成github_jslite和github_jslite.pub这两个文件')])]),t._v(" "),r("h4",{attrs:{id:"_2-密钥复制到托管平台上"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-密钥复制到托管平台上"}},[t._v("#")]),t._v(" 2.密钥复制到托管平台上")]),t._v(" "),r("blockquote",[r("p",[t._v("vim ~/.ssh/github_jslite.pub\n打开公钥文件github_jslite.pub，并把内容复制至代码托管平台上")])]),t._v(" "),r("h4",{attrs:{id:"_3-修改config文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改config文件"}},[t._v("#")]),t._v(" 3.修改config文件")]),t._v(" "),r("blockquote",[r("p",[t._v("vim ~/.ssh/config#修改config文件，如果没有创建config\nHost jslite.github.com\nHostName github.com\nUser git\nIdentityFile ~/.ssh/github_jslite\nHost abc.github.com\nHostName github.com\nUser git\nIdentityFile ~/.ssh/github_abc")])]),t._v(" "),r("h4",{attrs:{id:"_4-测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试"}},[t._v("#")]),t._v(" 4.测试")]),t._v(" "),r("blockquote",[r("p",[t._v("ssh -T git@jslite.github.com#@后面跟上定义的Host")])]),t._v(" "),r("h3",{attrs:{id:"git推向3个库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git推向3个库"}},[t._v("#")]),t._v(" Git推向3个库")]),t._v(" "),r("h4",{attrs:{id:"增加3个远程库地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增加3个远程库地址"}},[t._v("#")]),t._v(" 增加3个远程库地址")]),t._v(" "),r("blockquote",[r("p",[t._v("git remote add origin "),r("a",{attrs:{href:"https://github.com/JSLite/JSLite.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/JSLite/JSLite.git"),r("OutboundLink")],1),t._v("\ngit remote set-url --add origin "),r("a",{attrs:{href:"https://gitlab.com/wang/JSLite.js.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitlab.com/wang/JSLite.js.git"),r("OutboundLink")],1),t._v("\ngit remote set-url --add origin "),r("a",{attrs:{href:"https://oschina.net/wang/JSLite.js.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://oschina.net/wang/JSLite.js.git"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"删除其中一个-set-url-地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除其中一个-set-url-地址"}},[t._v("#")]),t._v(" 删除其中一个 set-url 地址")]),t._v(" "),r("blockquote",[r("p",[t._v("usage: git remote set-url [--push][] or: git remote set-url --addor: git remote set-url --delete\ngit remote set-url --delete origin "),r("a",{attrs:{href:"https://oschina.net/wang/JSLite.js.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://oschina.net/wang/JSLite.js.git"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"push"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[t._v("#")]),t._v(" push")]),t._v(" "),r("blockquote",[r("p",[t._v("git push origin master\ngit push -f origin master#强制推送")])]),t._v(" "),r("p",[t._v("缩写 -f\n全写--force\n注：强制推送文件没有了哦")]),t._v(" "),r("h4",{attrs:{id:"pull"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[t._v("#")]),t._v(" pull")]),t._v(" "),r("blockquote",[r("p",[t._v("只能拉取origin里的一个url地址，这个fetch-url\n默认为你添加的到origin的第一个地址\ngit pull origin master\ngit pull --all#获取远程所有内容包括tag\ngit pull origin next:master#取回origin主机的next分支，与本地的master分支合并\ngit pull origin next#远程分支是与当前分支合并")])]),t._v(" "),r("p",[t._v("上面一条命令等同于下面两条命令")]),t._v(" "),r("blockquote",[r("p",[t._v("git fetch origin\ngit merge origin/next")])]),t._v(" "),r("p",[t._v("如果远程主机删除了某个分支，默认情况下，git pull 不会在拉取远程分支的时候，删除对应的本地分支。这是为了防止，由于其他人操作了远程主机，导致git pull不知不觉删除了本地分支。\n但是，你可以改变这个行为，加上参数 -p 就会在本地删除远程已经删除的分支。")]),t._v(" "),r("blockquote",[r("p",[t._v("$ git pull -p")])]),t._v(" "),r("h4",{attrs:{id:"等同于下面的命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#等同于下面的命令"}},[t._v("#")]),t._v(" 等同于下面的命令")]),t._v(" "),r("blockquote",[r("p",[t._v("$ git fetch --prune origin\n$ git fetch -p")])]),t._v(" "),r("p",[t._v("更改pull")]),t._v(" "),r("p",[t._v("只需要更改config文件里，那三个url的顺序即可，fetch-url会直接对应排行第一的那个utl连接。")]),t._v(" "),r("h3",{attrs:{id:"新建仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库"}},[t._v("#")]),t._v(" 新建仓库")]),t._v(" "),r("h4",{attrs:{id:"init"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[t._v("#")]),t._v(" init")]),t._v(" "),r("blockquote",[r("p",[t._v("git init#初始化")])]),t._v(" "),r("h4",{attrs:{id:"status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" status")]),t._v(" "),r("blockquote",[r("p",[t._v("git status#获取状态")])]),t._v(" "),r("h4",{attrs:{id:"add"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),r("blockquote",[r("p",[t._v("git add file#.或*代表全部添加\ngit rm --cached 在commit之前撤销git add操作\ngit reset head好像比上面git rm --cached更方便")])]),t._v(" "),r("h4",{attrs:{id:"commit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" commit")]),t._v(" "),r("blockquote",[r("p",[t._v('git commit -m "message"#此处注意乱码')])]),t._v(" "),r("h4",{attrs:{id:"remote"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remote"}},[t._v("#")]),t._v(" remote")]),t._v(" "),r("blockquote",[r("p",[t._v("git remote add origin git@github.com:JSLite/test.git#添加源")])]),t._v(" "),r("h4",{attrs:{id:"push-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#push-2"}},[t._v("#")]),t._v(" push")]),t._v(" "),r("blockquote",[r("p",[t._v("git push -u origin master#push同事设置默认跟踪分支\ngit push origin master")])]),t._v(" "),r("h4",{attrs:{id:"从现有仓库克隆"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从现有仓库克隆"}},[t._v("#")]),t._v(" 从现有仓库克隆")]),t._v(" "),r("blockquote",[r("p",[t._v("git clone git://github.com/JSLite/JSLite.js.git\ngit clone git://github.com/JSLite/JSLite.js.git mypro#克隆到自定义文件夹\ngit clone [user@]example.com:path/to/repo.git/#SSH协议还有另一种写法。\ngit clone支持多种协议，除了HTTP(s)以外，还支持SSH、Git、本地文件协议等，下面是一些例子。$ git clone <版本库的网址> <本地目录名>\n$ git clone http[s]😕/example.com/path/to/repo.git/\n$ git clone ssh://example.com/path/to/repo.git/\n$ git clone git://example.com/path/to/repo.git/\n$ git clone /opt/git/project.git\n$ git clone file:///opt/git/project.git\n$ git clone ftp[s]😕/example.com/path/to/repo.git/\n$ git clone rsync://example.com/path/to/repo.git/")])]),t._v(" "),r("h4",{attrs:{id:"submodule"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#submodule"}},[t._v("#")]),t._v(" submodule")]),t._v(" "),r("blockquote",[r("p",[t._v("git submodule add --force 仓库地址 路径\n其中，仓库地址是指子模块仓库地址，路径指将子模块放置在当前工程下的路径。")])]),t._v(" "),r("p",[t._v("注意：路径不能以 / 结尾（会造成修改不生效）、不能是现有工程已有的目录（不能順利 Clone）")]),t._v(" "),r("blockquote",[r("p",[t._v("git submodule init初始化submodule\ngit submodule update更新submodule(必须在根目录执行命令)")])]),t._v(" "),r("p",[t._v("当使用git clone下来的工程中带有submodule时，初始的时候，submodule的内容并不会自动下载下来的，此时，只需执行如下命令：")]),t._v(" "),r("blockquote",[r("p",[t._v("git submodule update --init --recursive下载的工程带有submodule\ngit submodule foreach git pullsubmodule 里有其他的 submodule 一次更新\ngit submodule foreach git pull origin mastersubmodule更新\ngit submodule foreach --recursive git submodule init\ngit submodule foreach --recursive git submodule update")])]),t._v(" "),r("h4",{attrs:{id:"本地"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地"}},[t._v("#")]),t._v(" 本地")]),t._v(" "),r("blockquote",[r("p",[t._v("add\ngit add * #跟踪新文件\ngit add -u [path]#添加[指定路径下]已跟踪文件")])]),t._v(" "),r("h5",{attrs:{id:"rm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[t._v("#")]),t._v(" rm")]),t._v(" "),r("blockquote",[r("p",[t._v("rm &git rm #移除文件\ngit rm -f "),r("em",[t._v("#移除文件git rm --cached")]),t._v(" #取消跟踪\ngit mv file_from file_to#重命名跟踪文件\ngit log#查看提交记录")])]),t._v(" "),r("h4",{attrs:{id:"commit-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commit-2"}},[t._v("#")]),t._v(" commit")]),t._v(" "),r("blockquote",[r("p",[t._v("git commit#提交更新 git commit -m 'message'#提交说明\ngit commit -a#跳过使用暂存区域，把所有已经跟踪过的文件暂存起来一并提交\ngit commit --amend#修改最后一次提交\ngit commit log#查看所有提交，包括没有push的commit\ngit commit -m \"#133\"#关联issue 任意位置带上#符号加上issue号码\ngit commit -m \"fix #133\"commit关闭issue\ngit commit -m '概要描述'$'\\n\\n''1.详细描述'$'\\n''2.详细描述'#提交简要描述和详细描述")])]),t._v(" "),r("h4",{attrs:{id:"reset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset")]),t._v(" "),r("blockquote",[r("p",[t._v("git reset HEAD*#取消已经暂存的文件git reset --mixed HEAD*#同上\ngit reset --soft HEAD*#重置到指定状态，不会修改索引区和工作树git reset --hard HEAD*#重置到指定状态，会修改索引区和工作树\ngit reset -- files*#重置index区文件")])]),t._v(" "),r("p",[t._v("那么如何跟随着commit关闭一个issue呢? 在confirm merge的时候可以使用一下命令来关闭相关issue:")]),t._v(" "),r("blockquote",[r("p",[t._v("fixes #xxx\nfixed #xxx\nfix #xxx\ncloses #xxx\nclose #xxx\nclosed #xxx")])]),t._v(" "),r("h4",{attrs:{id:"revert"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[t._v("#")]),t._v(" revert")]),t._v(" "),r("blockquote",[r("p",[t._v("git revert HEAD#撤销前一次操作\ngit revert HEAD~#撤销前前一次操作\ngit revert commit##撤销指定操作")])]),t._v(" "),r("h4",{attrs:{id:"checkout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#checkout"}},[t._v("#")]),t._v(" checkout")]),t._v(" "),r("blockquote",[r("p",[t._v("git checkout -- file#取消对文件的修改（从暂存区------覆盖worktree file）\ngit checkout branch|tag|commit -- file_name#从仓库取出file覆盖当前分支\ngit checkout HEAD~1 [文件]#将会更新 working directory 去匹配某次 commit\ngit checkout -- .#从暂存区取出文件覆盖工作区\ngit checkout -b gh-pages 0c304c9这个表示 从当前分支 commit 哈希值为 0c304c9 的节点，分一个新的分支gh-pages出来，并切换到 gh-pages")])]),t._v(" "),r("h4",{attrs:{id:"diff"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" diff")]),t._v(" "),r("blockquote",[r("p",[t._v("git diff file#查看指定文件的差异\ngit diff --stat#查看简单的diff结果\ngit diff#比较Worktree和Index之间的差异\ngit diff --cached#比较Index和HEAD之间的差异\ngit diff HEAD#比较Worktree和HEAD之间的差异\ngit diff branch#比较Worktree和branch之间的差异\ngit diff branch1 branch2#比较两次分支之间的差异\ngit diff commit commit#比较两次提交之间的差异\n$ git diff master..test#上面这条命令只显示两个分支间的差异\ngit diff master...test#你想找出'master','test'的共有 父分支和'test'分支之间的差异，你用3个'.'来取代前面的两个'.'")])]),t._v(" "),r("h4",{attrs:{id:"stash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stash"}},[t._v("#")]),t._v(" stash")]),t._v(" "),r("blockquote",[r("p",[t._v("git stash#将工作区现场（已跟踪文件）储藏起来，等以后恢复后继续工作。\ngit stash list#查看保存的工作现场\ngit stash apply#恢复工作现场\ngit stash drop#删除stash内容\ngit stash pop#恢复的同时直接删除stash内容\ngit stash apply stash@{0}#恢复指定的工作现场，当你保存了不只一份工作现场时。")])]),t._v(" "),r("h4",{attrs:{id:"merge"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" merge")]),t._v(" "),r("blockquote",[r("p",[t._v("git merge --squash test##合并压缩，将test上的commit压缩为一条")])]),t._v(" "),r("h4",{attrs:{id:"cherry-pick"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[t._v("#")]),t._v(" cherry-pick")]),t._v(" "),r("blockquote",[r("p",[t._v("git cherry-pick commit#拣选合并，将commit合并到当前分支\ngit cherry-pick -n commit#拣选多个提交，合并完后可以继续拣选下一个提交")])]),t._v(" "),r("h4",{attrs:{id:"rebase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[t._v("#")]),t._v(" rebase")]),t._v(" "),r("blockquote",[r("p",[t._v("git rebase master#将master分之上超前的提交，变基到当前分支\ngit rebase --onto master 169a6#限制回滚范围，rebase当前分支从169a6以后的提交\ngit rebase --interactive#交互模式，修改commit\ngit rebase --continue#处理完冲突继续合并\ngit rebase --skip#跳过\ngit rebase --abort#取消合并")])]),t._v(" "),r("h3",{attrs:{id:"分支branch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支branch"}},[t._v("#")]),t._v(" 分支branch")]),t._v(" "),r("h4",{attrs:{id:"删除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),r("blockquote",[r("p",[t._v("git push origin :branchName#删除远程分支\ngit push origin --delete new#删除远程分支new\ngit branch -d branchName#删除本地分支，强制删除用-D\ngit branch -d test#删除本地test分支\ngit branch -D test#强制删除本地test分支")])]),t._v(" "),r("h4",{attrs:{id:"提交"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[t._v("#")]),t._v(" 提交")]),t._v(" "),r("blockquote",[r("p",[t._v("git push -u origin branchName#提交分支到远程origin主机中")])]),t._v(" "),r("h4",{attrs:{id:"拉取"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拉取"}},[t._v("#")]),t._v(" 拉取")]),t._v(" "),r("blockquote",[r("p",[t._v("git fetch -p#拉取远程分支时，自动清理 远程分支已删除，本地还存在的对应同名分支。")])]),t._v(" "),r("h4",{attrs:{id:"分支合并"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支合并"}},[t._v("#")]),t._v(" 分支合并")]),t._v(" "),r("blockquote",[r("p",[t._v("git merge branchName#合并分支 - 将分支branchName和当前所在分支合并\ngit merge origin/master#在本地分支上合并远程分支。\ngit rebase origin/master#在本地分支上合并远程分支。\ngit merge test#将test分支合并到当前分支")])]),t._v(" "),r("h4",{attrs:{id:"重命名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重命名"}},[t._v("#")]),t._v(" 重命名")]),t._v(" "),r("blockquote",[r("p",[t._v("git branch -m old new#重命名分支")])]),t._v(" "),r("h4",{attrs:{id:"查看"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[t._v("#")]),t._v(" 查看")]),t._v(" "),r("blockquote",[r("p",[t._v("git branch#列出本地分支\ngit branch -r#列出远端分支\ngit branch -a#列出所有分支\ngit branch -v#查看各个分支最后一个提交对象的信息\ngit branch --merge#查看已经合并到当前分支的分支\ngit branch --no-merge#查看为合并到当前分支的分支")])]),t._v(" "),r("h4",{attrs:{id:"新建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新建"}},[t._v("#")]),t._v(" 新建")]),t._v(" "),r("blockquote",[r("p",[t._v("git branch test#新建test分支\ngit checkout -b newBrach origin/master#取回远程主机的更新以后，在它的基础上创建一个新的分支")])]),t._v(" "),r("h4",{attrs:{id:"连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#连接"}},[t._v("#")]),t._v(" 连接")]),t._v(" "),r("blockquote",[r("p",[t._v("git branch --set-upstream dev origin/dev#将本地dev分支与远程dev分支之间建立链接\ngit branch --set-upstream master origin/next#手动建立追踪关系")])]),t._v(" "),r("p",[t._v("####分支切换")]),t._v(" "),r("blockquote",[r("p",[t._v("git checkout test#切换到test分支\ngit checkout -b test#新建+切换到test分支\ngit checkout -b test dev#基于dev新建test分支，并切换")])]),t._v(" "),r("h4",{attrs:{id:"远端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#远端"}},[t._v("#")]),t._v(" 远端")]),t._v(" "),r("blockquote",[r("p",[t._v("git fetch <远程主机名> <分支名>#fetch取回所有分支（branch）的更新\ngit fetch origin remotebranch[:localbranch]# 从远端拉去分支[到本地指定分支]\ngit merge origin/branch#合并远端上指定分支\ngit pull origin remotebranch:localbranch# 拉去远端分支到本地分支\ngit push origin branch#将当前分支，推送到远端上指定分支\ngit push origin localbranch:remotebranch#推送本地指定分支，到远端上指定分支\ngit push origin :remotebranch#删除远端指定分支\ngit checkout -b [--track] test origin/dev基于远端dev分支，新建本地test分支[同时设置跟踪]")])]),t._v(" "),r("h4",{attrs:{id:"撤销远程记录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#撤销远程记录"}},[t._v("#")]),t._v(" 撤销远程记录")]),t._v(" "),r("blockquote",[r("p",[t._v("git reset --hard HEAD~1#撤销一条记录\ngit push -f origin HEAD:master#同步到远程仓库")])]),t._v(" "),r("h4",{attrs:{id:"忽略文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件"}},[t._v("#")]),t._v(" 忽略文件")]),t._v(" "),r("blockquote",[r("p",[t._v("echo node_modules/ >> .gitignore")])]),t._v(" "),r("h4",{attrs:{id:"删除文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[t._v("#")]),t._v(" 删除文件")]),t._v(" "),r("blockquote",[r("p",[t._v("git rm -rf node_modules/")])]),t._v(" "),r("h4",{attrs:{id:"源remote"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源remote"}},[t._v("#")]),t._v(" 源remote")]),t._v(" "),r("p",[t._v("git是一个分布式代码管理工具，所以可以支持多个仓库，在git里，服务器上的仓库在本地称之为remote。\n个人开发时，多源用的可能不多，但多源其实非常有用。")]),t._v(" "),r("blockquote",[r("p",[t._v("git remote add origin1 git@github.com:yanhaijing/data.js.git\ngit remote#显示全部源\ngit remote -v#显示全部源+详细信息\ngit remote rename origin1 origin2#重命名\ngit remote rm origin#删除\ngit remote show origin#查看指定源的全部信息")])]),t._v(" "),r("h3",{attrs:{id:"同步一个fork"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同步一个fork"}},[t._v("#")]),t._v(" 同步一个fork")]),t._v(" "),r("h4",{attrs:{id:"设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),r("p",[t._v("在同步之前，需要创建一个远程点指向上游仓库(repo).如果你已经派生了一个原始仓库，可以按照如下方法做。")]),t._v(" "),r("blockquote",[r("p",[t._v("$ git remote -v#List the current remotes （列出当前远程仓库）#origin "),r("a",{attrs:{href:"https://github.com/user/repo.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/user/repo.git"),r("OutboundLink")],1),t._v(" (fetch)#origin "),r("a",{attrs:{href:"https://github.com/user/repo.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/user/repo.git"),r("OutboundLink")],1),t._v(" (push)$ git remote add upstream "),r("a",{attrs:{href:"https://github.com/otheruser/repo.git#Set",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/otheruser/repo.git#Set"),r("OutboundLink")],1),t._v(" a new remote (设置一个新的远程仓库)$ git remote -v#Verify new remote (验证新的原唱仓库)#origin "),r("a",{attrs:{href:"https://github.com/user/repo.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/user/repo.git"),r("OutboundLink")],1),t._v(" (fetch)#origin "),r("a",{attrs:{href:"https://github.com/user/repo.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/user/repo.git"),r("OutboundLink")],1),t._v(" (push)#upstream "),r("a",{attrs:{href:"https://github.com/otheruser/repo.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/otheruser/repo.git"),r("OutboundLink")],1),t._v(" (fetch)#upstream "),r("a",{attrs:{href:"https://github.com/otheruser/repo.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/otheruser/repo.git"),r("OutboundLink")],1),t._v(" (push)")])]),t._v(" "),r("h5",{attrs:{id:"同步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[t._v("#")]),t._v(" 同步")]),t._v(" "),r("p",[t._v("同步上游仓库到你的仓库需要执行两步：首先你需要从远程拉去，之后你需要合并你希望的分支到你的本地副本分支。")]),t._v(" "),r("p",[t._v("从上游的存储库中提取分支以及各自的提交内容。master将被存储在本地分支机构upstream/master")]),t._v(" "),r("blockquote",[r("p",[t._v("git fetch upstream#remote: Counting objects: 75, done.#remote: Compressing objects: 100% (53/53), done.#remote: Total 62 (delta 27), reused 44 (delta 9)#Unpacking objects: 100% (62/62), done.#From "),r("a",{attrs:{href:"https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY#*",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY#*"),r("OutboundLink")],1),t._v(" [new branch] master -> upstream/master")])]),t._v(" "),r("p",[t._v("检查你的 fork's 本地master分支")]),t._v(" "),r("blockquote",[r("p",[t._v("git checkout master#Switched to branch 'master'")])]),t._v(" "),r("p",[t._v("合并来自upstream/master的更改到本地 master 分支上。 这使你的前 fork'smaster分支与上游资源库同步，而不会丢失你本地修改。")]),t._v(" "),r("blockquote",[r("p",[t._v("git merge upstream/master#Updating a422352..5fdff0f#Fast-forward#README | 9 -------#README.md | 7 ++++++#2 files changed, 7 insertions(+), 9 deletions(-)#delete mode 100644 README#create mode 100644 README.md")])]),t._v(" "),r("h4",{attrs:{id:"标签tag"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标签tag"}},[t._v("#")]),t._v(" 标签tag")]),t._v(" "),r("p",[t._v("当开发到一定阶段时，给程序打标签是非常棒的功能。")]),t._v(" "),r("blockquote",[r("p",[t._v("git tag#列出现有标签\ngit tag v0gi.1#新建标签\ngit tag -a v0.1 -m 'my version 1.4'#新建带注释标签\ngit checkout tagname#切换到标签\ngit push origin v1.5#推送分支到源上\ngit push origin --tags#一次性推送所有分支\ngit tag -d v0.1#删除标签\ngit push origin :refs/tags/v0.1#删除远程标签\ngit pull --all#获取远程所有内容包括tag\ngit --git-dir='<绝对地址>/.git' describe --tags HEAD#查看本地版本信息")])]),t._v(" "),r("h5",{attrs:{id:"日志log"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#日志log"}},[t._v("#")]),t._v(" 日志log")]),t._v(" "),r("blockquote",[r("p",[t._v('git config format.pretty oneline#显示历史记录时，每个提交的信息只显示一行\ngit config color.ui true#彩色的 git 输出\ngit log#查看最近的提交日志\ngit log --pretty=oneline#单行显示提交日志\ngit log --graph --pretty=oneline --abbrev-commit\ngit log -num#显示第几条log（倒数）\ngit reflog#查看所有分支的所有操作记录\ngit log --since=1.day#一天内的提交；你可以给出各种时间格式，比如说具体的某一天（"2008-01-15"），或者是多久以前（"2 years 1 day 3 minutes ago"）。\ngit log --pretty="%h - %s" --author=自己的名字#查看自己的日志\ngit log -p -2#展开两次更新显示每次提交的内容差异\ngit log --stat#要快速浏览其他协作者提交的更新都作了哪些改动\ngit log --pretty=format:"%h - %an, %ar : %s"#定制要显示的记录格式\ngit log --pretty=format:\'%h : %s\' --date-order --graph#拓扑顺序展示\ngit log --pretty=format:\'%h : %s - %ad\' --date=short#日期YYYY-MM-DD显示\ngit log HEAD --pretty=format:%s只显示commit')])]),t._v(" "),r("h4",{attrs:{id:"选项说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选项说明"}},[t._v("#")]),t._v(" 选项说明")]),t._v(" "),r("blockquote",[r("p",[t._v("%H提交对象（commit）的完整哈希字串\n%h提交对象的简短哈希字串\n%T树对象（tree）的完整哈希字串\n%t树对象的简短哈希字串\n%P父对象（parent）的完整哈希字串\n%p父对象的简短哈希字串\n%an作者（author）的名字\n%ae作者的电子邮件地址\n%ad作者修订日期（可以用 -date= 选项定制格式） %ar作者修订日期，按多久以前的方式显示\n%cn提交者(committer)的名字\n%ce提交者的电子邮件地址\n%cd提交日期\n%cr提交日期，按多久以前的方式显示\n%s提交说明")])]),t._v(" "),r("h4",{attrs:{id:"重写历史"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重写历史"}},[t._v("#")]),t._v(" 重写历史")]),t._v(" "),r("blockquote",[r("p",[t._v("git commit --amend#改变最近一次提交\ngit rebase -i HEAD~3#修改最近三次的提交说明，或者其中任意一次\ngit commit --amend#保存好了，这些指示很明确地告诉了你该干什么\ngit rebase --continue修改提交说明，退出编辑器。")])]),t._v(" "),r("p",[t._v("pick f7f3f6d changed my name a bit\npick 310154e updated README formatting and added blame\npick a5f4a0d added cat-file")]),t._v(" "),r("p",[t._v("改成")]),t._v(" "),r("p",[t._v("pick 310154e updated README formatting and added blame\npick f7f3f6d changed my name a bit")]),t._v(" "),r("h4",{attrs:{id:"查看某个文件历史"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看某个文件历史"}},[t._v("#")]),t._v(" 查看某个文件历史")]),t._v(" "),r("blockquote",[r("p",[t._v("git log --pretty=oneline 文件名#列出文件的所有改动历史\ngit show c178bf49#某次的改动的修改记录\ngit log -p c178bf49#某次的改动的修改记录\ngit blame 文件名#显示文件的每一行是在那个版本最后修改。\ngit whatchanged 文件名#显示某个文件的每个版本提交信息：提交日期，提交人员，版本号，提交备注（没有修改细节）")])]),t._v(" "),r("h4",{attrs:{id:"打造自己的git命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#打造自己的git命令"}},[t._v("#")]),t._v(" 打造自己的git命令")]),t._v(" "),r("blockquote",[r("p",[t._v("git config --global alias.st status\ngit config --global alias.br branch\ngit config --global alias.co checkout\ngit config --global alias.ci commit")])]),t._v(" "),r("h4",{attrs:{id:"配置好后再输入git命令的时候就不用再输入一大段了，例如我们要查看状态，只需："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置好后再输入git命令的时候就不用再输入一大段了，例如我们要查看状态，只需："}},[t._v("#")]),t._v(" 配置好后再输入git命令的时候就不用再输入一大段了，例如我们要查看状态，只需：")]),t._v(" "),r("blockquote",[r("p",[t._v("git st")])]),t._v(" "),r("h3",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("blockquote",[r("p",[t._v("git help * #获取命令的帮助信息\ngit status#获取当前的状态，非常有用，因为git会提示接下来的能做的操作")])]),t._v(" "),r("h3",{attrs:{id:"报错"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#报错"}},[t._v("#")]),t._v(" 报错")]),t._v(" "),r("p",[t._v("git fatal: protocol error: bad line length character: No s解决办法：更换remote地址为http/https的\nThe requested URL returned error: 403 Forbidden while accessing解决github push错误的办法")]),t._v(" "),r("h3",{attrs:{id:"解决方案："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方案："}},[t._v("#")]),t._v(" 解决方案：")]),t._v(" "),r("p",[t._v('vim 编辑器打开 当前项目中的config文件vim .git/config\n修改\n[remote"origin"]\nurl = '),r("a",{attrs:{href:"https://github.com/jaywcjlove/example.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/jaywcjlove/example.git"),r("OutboundLink")],1),t._v('\n为下面代码\n[remote"origin"]\nurl = '),r("a",{attrs:{href:"https://jaywcjlove@github.com/jaywcjlove/example.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jaywcjlove@github.com/jaywcjlove/example.git"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);