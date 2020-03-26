# Async库

![Async Logo](/blog/img/node/async-logo_readme.jpg)

[![Build Status via Travis CI](https://travis-ci.org/caolan/async.svg?branch=master)](https://travis-ci.org/caolan/async) [![NPM version](https://img.shields.io/npm/v/async.svg)](https://www.npmjs.com/package/async) [![Coverage Status](https://coveralls.io/repos/caolan/async/badge.svg?branch=master)](https://coveralls.io/r/caolan/async?branch=master) [![Join the chat at https://gitter.im/caolan/async](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/caolan/async?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![libhive - Open source examples](https://www.libhive.com/providers/npm/packages/async/examples/badge.svg)](https://www.libhive.com/providers/npm/packages/async) [![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/async/badge?style=rounded)](https://www.jsdelivr.com/package/npm/async)

## Async介绍

Node.js中的回调是让人又爱又恨的东西，异步充分保证了效率，但是层层回调又非常容易陷入回调陷阱里面去。

Async是一个“异步转同步”的模块（确切地说是流程控制，但是这边只介绍下异步转同步的功能），可以让层层回调看起来更加“优雅”。当然本质上来说，还是层层回调的，它的转同步方式更像是基于callback的语法糖，相对于其他的转同步方式来说，这样处理确实非常简单。

Async是一个流程控制工具包，提供了直接而强大的异步功能。基于Javascript为Node.js设计，同时也可以直接在浏览器中使用。

Async提供了大约20个函数，包括常用的 map, reduce, filter, forEach 等，异步流程控制模式包括，串行(series)，并行(parallel)，瀑布(waterfall)等。

### 官方文档

| 名称      | 网址                              |
| --------- | --------------------------------- |
| async文档 | <https://caolan.github.io/async/> |

### 安装

使用 npm:

```
npm install async
```

使用 cdn:

```html
<script src="https://cdn.bootcss.com/async/2.6.0/async.min.js"></script>
```

### 引入

```js
var async = require('async');
```

## 常用方法

### series函数

> 串行执行异步任务

```js
async.series(task,callback)
```

按tasks顺序运行集合中的函数，每个函数在前一个函数完成后运行。如果集合中的任何一个函数将错误传递给其回调函数，则停止运行后续函数，并将错误值传递给callback立即调用。否则，所有函数执行完成后会在callback 收到一系列结果集。

#### 参数：

| 名称     | 类型            | 描述                                                         |
| -------- | --------------- | ------------------------------------------------------------ |
| tasks    | Array/Object    | 包含异步函数的集合可以串行运行。每个功能都可以使用任意数量的可选result值完成。 |
| callback | function <可选> | 一个可选的回调函数，在所有函数完成后运行。该函数获取task回调函数的所有结果参数的结果数组（或对象）。用（err，result）调用。 |

#### 示例

```js
async.series([
    function(callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
});
async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    // results is now equal to: {one: 1, two: 2}
});
```

### parallel函数

> 并行执行异步任务

```js
async.parallel(task,callback)
```

parallel函数是并行执行多个函数，每个函数都是立即执行，不需要等待其它函数先执行。传给最终callback的数组中的数据按照tasks中声明的顺序，而不是执行完成的顺序

#### 参数

| 名称     | 类型            | 描述                                                         |
| -------- | --------------- | ------------------------------------------------------------ |
| tasks    | Array/Object    | 要运行的异步函数的集合。每个功能都可以使用任意数量的可选result值完成。 |
| callback | function <可选> | 一个可选的回调函数，在所有函数完成后运行。该函数获取task回调函数的所有结果参数的结果数组（或对象）。用（err，result）调用。 |

#### 示例

```js
async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
    }
],
// optional callback
function(err, results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
});

// an example using an object instead of an array
async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    // results is now equals to: {one: 1, two: 2}
});
```

### waterfall函数

> 它的特点是串行执行函数，并且前一个函数的结果会传给下一个函数。

```js
async.waterfall(task,callback)
```

按tasks顺序运行函数数组，每个函数将结果传递到tasks中的下一个函数。但是，如果tasks任何一个错误传递给它们自己的回调函数，那么下一个函数将不会执行，并且callback会立即调用main 并返回错误。

#### 参数

| 名称     | 类型            | 描述                                                         |
| -------- | --------------- | ------------------------------------------------------------ |
| tasks    | Array           | 要运行的异步函数数组。每个函数都可以有任意数量的result值。这些result值将作为参数依次传递给下一个任务。 |
| callback | function <可选> | 一个可选的回调函数，在所有函数完成后运行。将传递最后一个任务回调的结果。用（err，[results]）调用。 |

#### 示例

```js
async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
    // result now equals 'done'
});

// Or, with named functions:
async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function (err, result) {
    // result now equals 'done'
});
function myFirstFunction(callback) {
    callback(null, 'one', 'two');
}
function mySecondFunction(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three');
}
function myLastFunction(arg1, callback) {
    // arg1 now equals 'three'
    callback(null, 'done');
}
```

### auto函数

> 多个函数有数据交互,有的并行执行,有的串行执行

```js
async.auto(tasks,[callback])
```

#### 参数

| 名称        | 类型            | 描述                                                         |
| ----------- | --------------- | ------------------------------------------------------------ |
| tasks       | Object          | 一个Object。它的每个属性都是一个函数或一组需求，AsyncFunction本身是数组中的最后一项。对象的属性键用作该属性定义的任务的名称，即可以在指定其他任务的需求时使用。该函数接收一个或两个参数： 一个results对象，包含的先前执行的功能的结果，仅通过如果任务具有任何依赖关系， 一个callback(err, result)函数，必须在完成时调用，传递一个error（可以是null）和函数执行的结果。 |
| concurrency | number <可选>   | 可选的integer，用于确定可以并行运行的任务的最大数量。默认情况下，不限制。 |
| callback    | function <可选> | 所有任务完成时调用的可选回调函数。err如果有任何tasks 错误传递给它们的回调，它会收到参数。结果总是返回; 但是，如果发生错误，tasks则不会执行进一步的操作，并且结果对象将仅包含部分结果。用（err，results）调用。 |

#### 示例

```js
async.auto({  
   task1: function(callback){  
    console.log("tsak1");  
    setTimeout(function(){  
      callback(null, 'task11', 'task12');  
    },2000);  
   },  
   task2: function(callback){   
    console.log('task2');  
    setTimeout(function(){         
      callback(null, 'task2');  
    },3000);  
   },  
   task3: ['task1', 'task2', function(callback, results){  
    console.log('task3');  
    console.log('task1和task2运行结果: ',results);  
    setTimeout(function(){          
      callback(null, 'task3');  
    },1000);  
   }],  
   task4: ['task3', function(callback, results){  
    console.log('task4');  
    console.log('task1,task2,task3运行结果: ',results);  
    setTimeout(function(){  
        callback(null, {'task41':results.task3, 'task42':'task42'});  
     },1000);  
   }]  
}, function(err, results) {  
   console.log('err :', err);  
   console.log('最终results : ', results);  
   console.timeEnd("auto方法");  
});
```
