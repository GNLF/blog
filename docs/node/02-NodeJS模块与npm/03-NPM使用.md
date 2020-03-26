# NPM使用

> Node Package Manager 简称NPM，是Node.js的包管理器。Node本身提供了一些基本API模块，但是这些基本模块难以满足开发者需求。Node需要通过使用NPM来管理开发者自我研发的一些模块，并使其能够共用与其他开发者。简单来说，NPM就是Node.js的包管理器。

## NPM使用场景

> NPM成为现在世界上最大规模的包管理系统，很大程度上确实归功于它足够用户友好。

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

Nodejs已经集成安装了npm，可以通过输入 `npm -v`来测试是否成功安装。命令如下，出现版本提示表示安装成功:

```
$ npm -version
2.15.8
```

升级更新NPM

```
$ sudo npm install npm -g
```

## npm的常用命令

| 序号 | 命令                          | 描述                                                |
| ---- | ----------------------------- | --------------------------------------------------- |
| 1    | npm -v                        | 显示版本，检查npm 是否正确安装。                    |
| 2    | npm install express           | 安装express模块                                     |
| 3    | npm install -g express        | 全局安装express模块                                 |
| 4    | npm uninstall express         | 卸载指定的模块                                      |
| 5    | npm link express              | 把全局目录下的express模块链接到本地的node_modules下 |
| 6    | npm list                      | 列出已安装模块                                      |
| 7    | npm search express            | 搜索指定的NPM包                                     |
| 8    | npm show express              | 显示模块详情                                        |
| 9    | npm update                    | 升级当前目录下的项目的所有模块                      |
| 10   | npm update express            | 升级当前目录下的项目的指定模块                      |
| 11   | npm update -g express         | 升级全局安装的express模块                           |
| 12   | npm init                      | 通过向导的方式生成package.json文件                  |
| 13   | npm adduser                   | 添加用户 在npm官网注册的账号                        |
| 14   | npm publish .                 | 可以发布自己制作的包到NPM服务器                     |
| 15   | npm unpublish <包名>@<版本号> | 可以撤销发布自己发布过的某个版本包。                |

## 版本号

使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。

语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

- X:如果有大变动,新增了功能，向下不兼容，需要更新X位。
- Y:如果是新增了功能，但是向下兼容，需要更新Y位。
- Z:如果只是修复bug，需要更新Z位。

## NPM命令使用介绍

### 使用NPM安装模块

有一个简单安装任何Node.js模块，语法如下：

```
$ npm install <Module Name>
```

例如，下面是安装一个著名的Node.jsweb框架模块的命令叫 express:

```
$ npm install express
```

现在，你可以在js文件中使用此模块如下：

```
var express = require('express');
```

### 下载三方包

> NPM建立了一个NodeJS生态圈，NodeJS开发者和用户可以在里边互通有无。

当你需要下载第三方包时,首先要知道有哪些包可用。[npmjs.com](https://www.npmjs.com/)提供了可以根据包名来搜索的平台，但是如果不知道包名可以百度一下。知道了包名后，就可以使用命令去安装了，例如：Express

```
npm install express
```

下载完成之后，express包就放在了工程目录下的`node_modules`目录中，在代码中只需要通过`reuqire('express')`的方式去引用，无需指定包路径。
以上命令默认下载最新版本第三方包，如果要下载指定版本，可以在包名后面追加`@<version>`,例如通过如下命令可以下载0.0.1版本的express。

```
npm install express@0.0.1
```

如果使用到的第三方包比较多，在终端下一个包一条命令的安装非常不方便，因此NPM对`package.json`的字段做了扩展，允许在其中添加三方包依赖。

```
npm install express --save
{
    "name":"test",
    "main":"./lib/main.js",
    "dependencies":{
        "express":"3.2.1"
    }
}
```

这样处理后，在工程目录下就可以使用`npm install`命令批量安装三包了。最重要的是，当以后吧`test`项目上传到了NPM服务器，别人下载这个包时，NPM会根据包中声明的三方依赖包进行自动下载依赖。这样用户只需要关心要使用的包，不用管其依赖的三方包。

#### 全局安装VS本地安装

##### 本地安装

默认情况下，NPM安装指定包默认会安装到本地。本地安装指的是包安装在当前目录中node_modules文件夹中。本地安装的包都可以通过require()方法进行访问。例如我们安装Express模块:

```
$ npm install express
```

列出所有本地安装的模块

```
$ npm ls
```

本地安装request模块：

```
npm install request
```

在实际工作中，安装包时可能需要指定包的版本号，命令格式如下：

```
npm install <包名>@<版本号>
```

例如，安装2.44版本的request模块：

```
npm install request@2.44
```

也可以使用版本号范围，安装某一版本范围的包版本。比如，安装版本号前缀为2.4的版本的request模块：

```
npm install request@2.4.x
```

可以通过以下命令，安装版本号大于2.0的request模块：

```
npm install request@">2.0"
```

还可以使用如下命令组合，安装指定范围的版本号的包：

```
npm install request@">=2.0 <2.5"
```

##### 全局安装

全局安装包都存储在系统目录中。我们可以在nodejs的CLI(命令行界面)使用，但是不能直接使用require()方法进行访问。例如安装http-server包：

```
//全局安装 -g
$ npm install -g http-server
//使用node CLI  
$ http-server
```

### 卸载模块

使用下面的命令卸载Node.js模块

```
npm uninstall express
```

### 更新模块

更加package.json并更新

```
npm update express
```

### 搜索模块

搜索使用NPM包名

```
npm search express
```

### NPM服务器发布包

第一次使用NPM发布自己的包需要在[npmjs.com](https://www.npmjs.com/)注册一个账号

```
npm adduser                 # 添加用户  在npm官网注册的账号
Username: allcky            # 用户名
Password:                   # 密码
Email: (this IS public) allcky@qq.com
npm publish .               # 可以发布自己制作的包到NPM服务器
npm unpublish <包名>@<版本号> # 可以撤销发布自己发布过的某个版本包。
```

## --save 和 --save-dev 的区别

npm i时使用--save和--save-dev，可分别将依赖（插件）记录到package.json中的dependencies和devDependencies下面。

```
保存至dependencies下
npm install <包名> --save
npm install <包名> -s

保存至devDependencies下
npm install <包名> --save-dev
npm install <包名> -d
```

| package属性     | 描述                                                         |
| --------------- | :----------------------------------------------------------- |
| dependencies    | 该属性下记录的是项目在运行时必须依赖的插件，常见的例如react jquery等，即及时项目打包好了、上线了，这些也是需要用的，否则程序无法正常执行。 |
| devDependencies | 下记录的是项目在开发过程中使用的插件，例如这里我们开发过程中需要使用webpack打包，而我在工作中使用fis3打包，但是一旦项目打包发布、上线了之后，webpack和fis3就都没有用了，可卸磨杀驴。 |

## npx

> npm 5.2.0 内置的包执行器

近日发布的 npm 5.2.0 版本中内置了伴生命令：npx，类似于 npm 简化了项目开发中的依赖安装与管理，该工具致力于提升开发者使用包提供的命令行的体验。npx 允许我们使用本地安装的命令行工具而不需要再定义 npm run-script，并且允许我们仅执行一次脚本而不需要再将其实际安装到本地；同时 npx 还允许我们以不同的 node 版本来运行指定命令、允许我们交互式地开发 node 命令行工具以及便捷地安装来自于 gist 的脚本。

```
从 npm 的可执行包执行命令

  npx [选项] <命令>[@版本] [命令的参数]...

  npx [选项] [-p|--package <包>]... <命令> [命令的参数]...

  npx [选项] -c '<命令的字符串>'

  npx --shell-auto-fallback [命令行解释器]


选项：
  --package, -p          包安装的路径                                   [字符串]
  --cache                npm 缓存路径                                   [字符串]
  --install              如果有包缺失，跳过安装            [布尔] [默认值: true]
  --userconfig           当前用户的 npmrc 路径                          [字符串]
  --call, -c             像执行 `npm run-script` 一样执行一个字符串     [字符串]
  --shell, -s            执行命令用到的解释器，可选     [字符串] [默认值: false]
  --shell-auto-fallback  产生“找不到命令”的错误码
                                    [字符串] [可选值: "", "bash", "fish", "zsh"]
  --ignore-existing      忽略 $PATH 或工程里已有的可执行文件，这会强制使 npx
                         临时安装一次，并且使用其最新的版本               [布尔]
  --quiet, -q            隐藏 npx 的输出，子命令不会受到影响              [布尔]
  --npm                  为了执行内部操作的 npm 可执行文件     [字符串] [默认值:
   "/Users/apple/.nvm/versions/node/v8.1.3/lib/node_modules/npm/bin/npm-cli.js"]
  --version, -v          显示版本号                                       [布尔]
  --help, -h             显示帮助信息                                     [布尔]
```

npx 还允许我们单次执行命令而不需要安装；
在某些场景下有可能我们安装了某个全局命令行工具之后一直忘了更新，导致以后使用的时候误用了老版本。而使用 `npx create-react-app my-cool-new-app` 来执行 `create-react-app`命令时，它会正常地帮我们创建 React 应用而不会实际安装 `create-react-app` 命令行。

我们还可以使用类似于 `$ npx -p node-bin@6 npm it` 的格式来指定 Node 版本，或者使用 `npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32` 方式直接运行来自于 Gist 的脚本。

- <https://www.sohu.com/a/226831801_505818>


  