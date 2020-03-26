# Node.js模块系统

> 为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。

## 为什么需要模块化

> 网页越来越像桌面程序，需要一个团队分工协作、进度管理、单元测试等等......开发者不得不使用软件工程的方法，管理网页的业务逻辑。

在计算机程序的开发过程中，随着程序复杂度上升代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。

为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。

Javascript模块化编程，已经成为一个迫切的需求。理想情况下，开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块。

模块化编程解决问题：

1. 减少文件体积
2. 命名冲突问题
3. 文件依赖问题
4. 提高代码可复用性

## 什么是模块

模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。

在当前模块下定义的所有的变量/函数，都是属于这个模块的，如果想要定义全局变量，必须通过global.定义。那么在模块下定义的变量它的作用范围只是当前模块。而通过global定义的变量，那么它具有全局的作用范围

> 在文件中打印this不是global属性，NodeJS自带模块化功能，一个js文件就是一个模块，模块this不是global，
>
> 每个文件都有局部作用域，不会将属性挂载到global上

## Node中模块分类

NodeJS中模块分为2类：原生模块和文件模块。

| 模块类型 | 描述                                                         |
| -------- | :----------------------------------------------------------- |
| 原生模块 | 即Node.jsAPI提供的原生模块，原生模块在启动时已经被加载。(如：os模块、http模块、fs模块、buffer模块、path模块等) |
| 文件模块 | 为动态加载模块，加载文件模块的主要由原生模块module来实现和完成。原生模块在启动时已经被加载，而文件模块则需要通过调用Node.js的require方法来实现加载。 |

### 调用原生模块

```js
//调用原生模块不需要指定路径
var http = require('http');
```

### 调用文件模块

```js
//调用文件模块必须指定路径，否则会报错
var sum = require('./sum.js');
```

### 文件模块三种类型

在文件模块中，又分为3类模块。这三类文件模块以后缀来区分，Node.js会根据后缀名来决定加载方法。

| 类型  | 描述                                               |
| ----- | :------------------------------------------------- |
| .js   | 通过fs模块同步读取js文件并编译执行。               |
| .node | 通过C/C++进行编写的Addon。通过dlopen方法进行加载。 |
| .json | 读取文件，调用JSON.parse解析加载。                 |

## 模块操作

在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。

### require 加载模块

require方法接受以下几种参数的传递：

- http、fs、path等，原生模块。
- ./mod或../mod，相对路径的文件模块。
- /pathtomodule/mod，绝对路径的文件模块。
- mod，非原生模块的文件模块。

require函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。模块名可使用相对路径（以./开头），或者是绝对路径（以/或C:之类的盘符开头）。另外，模块名中的.js扩展名可以省略。以下是一个例子。

```js
var foo1 = require('./foo');
var foo2 = require('./foo.js');
var foo3 = require('/home/user/foo');
var foo4 = require('/home/user/foo.js');
//foo1 ~ foo4 中保存的是同一个模块的导出对象。
```

nodejs核心模块可以不加路径直接通过require导入：

```js
//加载node 核心模块
var fs = require('fs');
var http = require('http');
var os = require('os');
var path = require('path');
```

加载和使用json文件

```js
var data = require('./data.json');
```

### exports 创建模块

`exports`对象是当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过`require`函数使用当前模块时得到的就是当前模块的`exports`对象。以下例子中导出了一个公有方法。

```js
//sum.js
exports.sum = function(a,b){
    return a+b;
}

//main.js
var m = require("./sum");
var num = m.sum(10,20);
console.log(num);
```

### module对象

通过`module`对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块导出对象。例如模块默认导出对象默认是一个普通对象，如果想改为一个函数可以通过如下方式：

导出一个普通函数：

```js
//sum.js
function sum(a,b){
    return a+b;
}
module.exports= sum;
//main.js
var sum = require('./sum');
sum(10,20);// 30
```

导出一个构造函数：

```js
//hello.js
function hello(){
    this.name ="你的名字";
    this.setName = function(name){
        this.name = name;
    }
    this.sayName = function(){
        alert(this.name);
    }
}
module.exports= hello;

//main.js
var hello = require('./hello.js');
var o = new hello();
o.setName('张三');
o.sayName(); // 张三
```

#### module的其它API:

每一个js文件都是一个模块，每一个模块都有一个对象这个对象的可以通过module访问到，该对象上保存了一些我们当前模块的状态：

| API             | 描述                                      |
| --------------- | :---------------------------------------- |
| module.id       | 模块的ID,通常是当前模块文件路径，含文件名 |
| module.filename | 当前模块文件路径，含文件名                |
| module.loaded   | 判断模块当前是否已加载                    |
| module.parent   | 加载当前脚本的模块对象。                  |
| module.children | 当前模块加载的模块对象集合，是一个数组    |

## 模块初始化

一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。

## 模块加载优先级

> 模块加载优先级：已经缓存模块 > 原生模块 > 文件模块 > 从文件加载

Node.js 的 require方法中的文件查找策略如下：

由于Node.js中存在4类模块（原生模块和3种文件模块），尽管require方法极其简单，但是内部的加载却是十分复杂的，其加载优先级也各自不同。如下图所示：

![模块加载策略](/blog/img/node/nodejs-require.jpg)

## 模块路径解析规则

1. 内置模块
   如果传递给require函数的是NodeJS内置模块名称，不做路径解析，直接返回内部模块的导出对象，例如require('fs')。

2. node_modules目录
   NodeJS定义了一个特殊的`node_modules`目录用于存放模块。例如某个模块的绝对路径是`/home/user/hello.js`，在该模块中使用`require('foo/bar')`方式加载模块时，则NodeJS依次尝试使用以下路径。

   ```js
   /home/user/node_modules/foo/bar  # 当前目录下node_modules目录
   /home/node_modules/foo/bar       # 父级目录下node_modules目录
   /node_modules/foo/bar            # 根目录下node_modules目录
   ```

   从当前文件目录开始查找node_modules目录；然后依次进入父目录，查找父目录下的node_modules目录；依次迭代，直到根目录下的node_modules目录。

## 主模块

通过命令行参数传递给NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。例如通过以下命令启动程序时，main.js就是主模块。

```js
node main.js
```
