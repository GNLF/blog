# Nodejs包

> 由多个子模块组成的大模块称做包。

## 什么是包？

我们已经知道了 JS 模块的基本单位是单个 JS 文件，但复杂些的模块往往由多个子模块组成。为了便于管理和使用，我们可以把由多个子模块组成的大模块称做**包**，并把所有子模块放在同一个目录里。

## 自定义包

在组成一个包的所有子模块中，需要有一个入口模块，入口模块的导出对象被作为包的导出对象。例如有以下目录结构。

```js
d:/node/calc/
/calc
    sum.js            //加法
    subtraction.js    //减法
    multiplication.js //乘法
    division.js       //除法
    main.js           //主模块 入口模块
```

calc目录定义了一个包，其中包含了4个子模块，main.js作为入口模块。

```js
var sum = require('./sum.js');
var subtraction = reuqire('./subtraction.js');
var multiplication = require('./multiplication.js');
var division = require('./division.js');

function calc(a,tag,b){
    switch(tag){
        case '+':
        return sum(a,b);
        break;
        case '-':
        return subtraction(a,b);
        break;
        case '*':
        return multiplication(a,b);
        break;
        case '/':
        return division(a,b);
    }
}
module.exports = calc;
```

然后我们要使用这个包

```js
//d:/node/use.js

var calc = require('./calc/main.js');
console.log(clac(10,'+',100));
```

但是这样使用感觉不像一个包。

```js
var calc = require('./calc');
```

## package.json

如果想自定义入口模块的文件名和存放位置，就需要在包目录下包含一个 package.json 文件，package.json是包的配置文件。

```js
d:/node/calc/
/calc
    sum.js            //加法
    subtraction.js    //减法
    multiplication.js //乘法
    division.js       //除法
    main.js           //主模块 入口模块

//package.json
{
    "name": "calc",
    "main": "./calc/main.js"
}
```

### Package.json 属性说明

| 属性            | 描述                                                         |
| --------------- | :----------------------------------------------------------- |
| name            | 包名。                                                       |
| version         | 包的版本号。                                                 |
| description     | 包的描述。                                                   |
| homepage        | 包的官网 url 。                                              |
| author          | 包的作者姓名。                                               |
| contributors    | 包的其他贡献者姓名。                                         |
| devDependencies | 开发环境依赖包列表。                                         |
| dependencies    | 生产环境依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。 |
| repository      | 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。 |
| main            | main 字段是一个模块ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")。 |
| keywords        | 关键字                                                       |

它是这样一个json文件（注意：json文件内是不能写注释的，复制下列内容请删除注释）

```js
{
  "name": "test",                                      //项目名称（必须）
  "version": "1.0.0",                                  //项目版本（必须）
  "description": "This is for study gulp project !",   //项目描述（必须）
  "homepage": "",                                      //项目主页
  "repository": {                                      //项目资源库
    "type": "git",
    "url": "https://git.oschina.net/xxxx"
  },
  "author": {                                          //项目作者信息
    "name": "surging",
    "email": "surging2@qq.com"
  },
  "license": "ISC",                                    //项目许可协议
  "devDependencies": {                                 //项目开发依赖包
    "gulp": "^3.8.11",
    "gulp-less": "^3.0.0"
  },
  dependencies:{                                       //项目生产依赖包

  }
}
```

## 符合CommonJS规范的包

包是在模块基础上更深一步的抽象，Nodejs 的包类似于 C/C++ 的函数库或者 Java/.Net 的类库。它将某个独立的功能封装起来，用于发布、更新、依赖管理和版本控制。Nodejs 根 据 CommonJS 规范实现了包机制，开发了 npm来解决包的发布和获取需求。

Node.js 的包是一个目录，其中包含一个 JSON 格式的包说明文件 package.json。严格符 合 CommonJS 规范的包应该具备以下特征:

| 文件类型     | 描述                 |
| ------------ | :------------------- |
| package.json | 必须在包的顶层目录下 |
| 二进制文件   | 应该在 bin 目录下    |
| JavaScript   | 应该在 lib 目录下    |
| 文档         | 应该在 doc 目录下    |
| 单元测试     | 应该在 test 目录下   |

Node.js 对包的要求并没有这么严格，只要顶层目录下有 package.json，并符合一些规范即可。当然为了提高兼容性，我们还是建议你在制作包的时候，严格遵守 CommonJS 规范。

```js
/
 ├── bin/            # 存放命令行相关代码
 │
 ├── src/            # 开发目录
 │
 ├── doc/            # 存放文档
 │
 ├── lib/            # 存放API相关代码
 │
 ├── node_modules/   # 存放三方包
 │
 ├── tests/          # 存放测试用例
 │
 ├── package.json    # 元数据文件
 │
 └── README.md        # 说明文件
```


  