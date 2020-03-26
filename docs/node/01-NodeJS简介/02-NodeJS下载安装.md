# NodeJS下载安装

> NodeJS提供了一些安装程序可以从[nodejs.org](https://nodejs.org/en/)下载安装。

开始使用Nodejs之前，需要配置开发环境。需要从Nodejs官网下载指定平台的安装包安装。

- Windows系统下，选择和系统版本匹配的.msi后缀的安装文件。
- Mac OS X系统下，选择.pkg后缀的安装文件。

![img](/blog/img/node/Nodejs.png)

## Nodejs版本信息

> Node.js的开发非常活跃，它的最新稳定版本也频繁变化

Node维护了着两条发布流程线：

- 奇数版本 可以体验Node的新特性
- 偶数版本 没有激进的新特性更新，更加适应于生产环境

奇数版是稳定版本，偶数版不稳定。稳定的版本api功能不会发生变化，固定。

## Node.js的运行

### 交互的方式运行

在Windows开始菜单选择“命令提示符”，就进入到命令行模式，它的提示符类似`C:\>：`

```shell
┌────────────────────────────────────────────────────────┐
│Command Prompt                                    - □ x │
├────────────────────────────────────────────────────────┤
│Microsoft Windows [Version 10.0.0]                      │
│(c) 2015 Microsoft Corporation. All rights reserved.    │
│                                                        │
│C:\> node                                               │
│ >                                                      │
│ >                                                      │
│ >                                                      │
│                                                        │
│                                                        │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

在这个环境下，只要你输入符合nodejs语法规范的代码，回车后会立即得到相应的结果，所以称为交互型

### 编译型运行

1. 创建一个js的文件
2. 通过CLI命令工具进入该js文件所在的文件夹目录

```
┌────────────────────────────────────────────────────────┐
│Command Prompt                                    - □ x │
├────────────────────────────────────────────────────────┤
│Microsoft Windows [Version 10.0.0]                      │
│(c) 2015 Microsoft Corporation. All rights reserved.    │
│                                                        │
│C:\> node node.js                                       │
│                                                        │
│                                                        │
│                                                        │
│                                                        │
│                                                        │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

> 注：对js文件进行解析和执行，如果说想在命令行看到结果，必须手动输出

## 管理Nodejs版本

如果你想长期做 node 开发, 或者想快速更新 node 版本, 或者想快速切换 node 版本, 那么在非 Windows(如 osx, linux) 环境下, 请使用 n 来安装你的 node 开发环境, 保持系统的干净.

如果你使用 Windows 做开发, 那么你可以使用 nvmw

### nvmw

从github clone nvmw

```
$ d:
$ cd git
$ git clone https://github.com/cnpm/nvmw.git
```

设置 d:\git\nvmw 目录到你的 PATH 环境变量中:

```
set "PATH=d:\git\nvmw;%PATH%"
```

重新打开你的终端, 输入 nvmw

```
$ nvmw

Usage:
  nvmw help                    Show this message
  nvmw install [version]       Download and install a [version]
  nvmw uninstall [version]     Uninstall a [version]
  nvmw use [version]           Modify PATH to use [version]
  nvmw ls                      List installed versions

Example:
  nvmw install v0.6.0          Install a specific version number
  nvmw use v0.6.0              Use the specific version
```

通过 nvmw 安装任意版本的 node

```
$ nvmw install 0.12.0
```

然后你可以继续非常方便地安装各个版本的 node 了, 你可以查看一下你当前已经安装的版本:

```
$ nvmw ls
```

### Mac n模块

n是Node的一个模块，作者是TJ Holowaychuk（鼎鼎大名的Express框架作者），就像它的名字一样，它的理念就是简单：

"no subshells, no profile setup, no convoluted api, just simple"
n模块是专门用来管理node.js的版本的。 安装n模块：

```
npm install n -g
```

安装完成之后，直接输入n后输出当前已经安装的node版本以及正在使用的版本（前面有一个o），你可以通过移动上下方向键来选择要使用的版本，最后按回车生效。

```
$ n
    0.10.1
  o 4.4.3
    6.2.0
```

安装最新的版本

```
$ n latest
```

安装稳定版本

```
$ n stable
```

n后面也可以跟随版本号比如：

```
n v0.10.26

n 0.10.26
```

删除某个版本

```
$ n rm 0.10.1
```

以指定的版本来执行脚本

```
$ n use 0.10.21 some.js
```

## 第三方模块

- 通过npm来进行安装 node package manager

### 全局安装 -g

> 只能在命令行中使用

```
默认安装路径是  npm root -g
npm install nrm -g
nrm test 测试连接时间
nrm ls 显示所有的可用源
nrm use 源的名字   切换源
nrm uninstall nrm -g 
```

#### http-server

- 启动一个本地服务

```$xslt
npm install -g http-server
http-server   开启服务
```

### 本地安装

> 没有-g参数，安装之前需要初始化，记录安装依赖

```$xslt
npm init   加上 -y  一键生成
```

> package.json,目录不能有中文，特殊字符，大写，默认先找当前目录下的package.json,没有去上级，如果一直到根目录下都没有，则在当前目录下安装

#### 项目依赖

- 开发时使用，上线还需要

```$xslt
npm install jquery
npm uninstall jquery
```

#### 开发依赖

- 开发时使用，线上不使用

```$xslt
npm install less --save-dev
npm uninstall less --save-dev
```

## 安装全部依赖

```$xslt
npm install
根据package.json初始化
```

## yarn安装

- npm install -g yarn

```$xslt
yarn init 
yarn add 包名   添加全局依赖
yarn add 包名 --dev  添加开发依赖
yarn remote 包名  移除依赖
```

## 发布包

- npm源切换到国外 nrm use npm

- 包名不能和已有的包一致

- 入口文件，做整合用

- 注册帐号，如果有登录，没有注册

  ```
  npm addUser
  //如下
  Username: gnlf150318
  Password:
  Email: (this IS public) gnlf150318@163.com
  Logged in as gnlf150318 on https://registry.npmjs.org/.
  ```

- 发布

  ```
  npm publish
  ```