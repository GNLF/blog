# Node.js全局对象

> JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

在浏览器端的 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

- javascript里面的全局对象 window
- node.js里面的全局对象 global

global最根本的作用是作为全局变量的宿主，据ECMAScript的定义，满足以下条件的变量都是全局变量

- 在最外层定义的变量
- 全局对象的属性
- 隐式定义的变量 在Node.js中不可能在最外层定义变量，因为所有用户代码都是属于当前模块的，而模块本身不是最外层上下文。

全局空间可以访问console,process,buffer等模块，不需要require。

## global对象

global

- global
- process
  - argv
  - platform
  - version
  - versions
  - cwd()
  - chdir()
  - memoryUsage()
  - nextTick(callback)
  - uptime()
- console
- Class:Buffer
- require()
- __filename
- __dirname
- module
- exports
- setTimeout(fn,ms)
- clearTimeout(timeout)
- setInterval(fn,ms)
- clearInterval(timeout)
- setImmediate(callback[, ...args])
- clearImmediate(immediate)

### Buffer类

JavaScript对字符串处理十分友好，无论是宽字节还是单字节字符串，都被认为是一个字符串。Node中需要处理网络协议、操作数据库、处理图片、文件上传等，还需要处理大量二进制数据，自带的字符串远不能满足这些要求，因此Buffer应运而生。

Buffer是一个典型的Javascript和C++结合的模块，性能相关部分用C++实现，非性能相关部分用javascript实现。node在进程启动时Buffer就已经加装进入内存，并将其放入全局对象，因此无需require。

详细见buffer小节。

### console

console模块是Node提供的核心模块，用于提供控制台标准输出。它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的事实标准。Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流或标准错误流输出字符。

详细见console小节。

### process进程

process是一个全局变量，即global对象的属性，它用来操作或者是获取或者查看当前进程的相关信息。

| 方法                       | 描述                                                         |
| -------------------------- | ------------------------------------------------------------ |
| process.cwd()              | 查看当前进程的工作目录                                       |
| process.chdir()            | 更改当前进程的工作目录                                       |
| process.memoryUsage()      | 内存使用情况 heapTotal代表已申请到的堆内存，heapUsed当前使用的内存，rss(resident set size)进程的常驻内存(单位字节byte),external V8 引擎内部的 C++ 对象占用的内存 |
| process.nextTick(callback) | 一旦当前事件循环结束，调用回到函数。                         |
| process.uptime()           | 返回 Node 已经运行的秒数。                                   |

| 属性             | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| process.argv     | 是用来获取或查看当前进程的相关信息。                         |
| process.platform | 运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32' |
| process.version  | Node的版本                                                   |
| process.versions | 包含了Node的版本和依赖                                       |

## global的方法

| 方法                              | 描述                                                     |
| --------------------------------- | -------------------------------------------------------- |
| setInterval(fn,ms)                | 全局函数在指定的毫秒(ms)数后执行指定的函数fn，重复执行   |
| clearInterval(timeout)            | 取消一个由 setInterval() 创建的 Timeout 对象。           |
| setTimeout(fn,ms)                 | 全局函数在指定的毫秒(ms)数后执行指定的函数fn，只执行一次 |
| clearTimeout(timeout)             | 全局函数用于停止一个之前通过setTimeout()创建的定时器     |
| setImmediate(callback[, ...args]) | 在 Node.js 事件循环的当前回合结束时要调用的函数。        |
| clearImmediate(immediate)         | 取消一个由 setImmediate() 创建的 Immediate对象           |

```js
# 每次需要判断时间
setTimeout(function(){},0)

# 放到下一次事件循环执行 效率高，直接执行无需判断
setImmediate(function(){})

# 放到当前任务末尾 效率高，直接执行无需判断
process.nextTick(callback)
```

## 魔术常量

### __filename

__filename表示当前正在执行的脚本的文件名。输出文件所在位置的绝对路径。

例如：从 /Users/houningzhou/Web/Nodejs/global运行 node test.js：

```js
console.log(__filename);
// 输出: /Users/houningzhou/Web/Nodejs/global/test.js
```

__filename 实际上不是一个全局变量，而是每个模块内部的。

### __dirname

__dirname表示当前执行脚本所在的目录

例如：从 /Users/houningzhou/Web/Nodejs/global运行 node test.js：

```js
console.log(__dirname);    
// 输出: /Users/houningzhou/Web/Nodejs/global
```

`__dirname` 实际上不是一个全局变量，而是每个模块内部的。

例子，给出两个模块：a 和 b，其中 b 是 a 的一个依赖，目录结构如下：

- /Users/mjr/app/a.js
- /Users/mjr/app/node_modules/b/b.js

b.js 的 **dirname 返回 /Users/mjr/app/node_modules/b，而 a.js 的** dirname 返回 /Users/mjr/app。

```js
// b.js
(function (exports, require, module, __filename, __dirname) {
  t = 111;
})();

// a.js
(function (exports, require, module, __filename, __dirname) {
  // ...
  console.log(t); // 111
})();
```


