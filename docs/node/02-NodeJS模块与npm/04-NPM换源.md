# NPM换源

npm全称Node Package Manager，是node.js的模块依赖管理工具。由于npm的源在国外，所以国内用户使用起来各种不方便。下面整理出了一部分国内优秀的npm镜像资源，国内用户可以选择使用。

## nrm

nrm 是一个管理 npm 源的工具。用过 ruby 和 gem 的同学会比较熟悉，通常我们会把 gem 源切到国内的淘宝镜像，这样在安装和更新一些包的时候比较快。nrm 同理，用来切换官方 npm 源和国内的 npm 源（如: cnpm），当然也可以用来切换官方 npm 源和公司私有 npm 源。

| 包名 | 网址                                                      |
| ---- | --------------------------------------------------------- |
| nrm  | <http://www.cnblogs.com/songqingbo/articles/5611588.html> |

### 全局安装 nrm:

```
npm i nrm -g
```

### nrm ls 列出来现在已经配置好的所有的原地址

查看当前 nrm 内置的几个 npm 源的地址：

```
# nrm ls
结果如下:
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

### nrm use是切换到哪个源上

```
nrm use npm
```

### nrm add添加源

```
nrm add  <registry> <url> [home]
```

### nrm del删除源

```
nrm del <registry>
```

### nrm test测试源的响应时间，可以作为使用哪个源的参考

```
nrm test
```

## 使用淘宝 NPM 镜像

淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

### 安装cnpm

```
$ npm install -g cnpm
```

这样就可以使用 cnpm 命令来安装模块了：

### 安装包

```
$ cnpm install [模块名]
```

### 同步模块

直接通过 sync 命令马上同步一个模块, 只有 cnpm 命令行才有此功能:

```
cnpm sync [模块名]
```

### 其它命令

支持 npm 除了 publish 之外的所有命令, 如:

```
$ cnpm info [模块名]
```

更多信息可以查阅：[淘宝NPM镜像](http://npm.taobao.org/)


  