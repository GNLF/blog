# JavaScript异步编程

Node.js 是一个异步的世界，官方 API 支持的都是 callback 形式的异步编程模型，这会带来许多问题

1. callback hell: 最臭名昭著的 callback 嵌套问题。
2. release zalgo: 异步函数中可能同步调用 callback 返回数据,带来不一致性。 解决方案：
3. Promise 内置到了 ES2015 中
4. Generator 函数 是 ES2015 提供的一种异步编程解决方案。
5. async function 是语言层面提供的语法糖. (ES2017 标准)

## 异步编程

JavaScript 由于某种原因是被设计为单线程的，同时由于 JavaScript 在设计之初是用于浏览器的 GUI 编程，这也就需要线程不能进行阻塞。

所以在后续的发展过程中基本都采用异步非阻塞的编程模式。

简单来说，异步编程就是在执行一个指令之后不是马上得到结果，而是继续执行后面的指令，等到特定的事件触发后，才得到结果。

也正是因为这样，我们常常会说: JavaScript 是由事件驱动的。

## 异步实现

用 JavaScript 构建一个应用的时候经常会遇到异步编程，不管是 Node 服务端还是 Web 前端。

那如何去进行异步编程呢？就目前的标准以及草案来看，主要有下面的几种方式：

| 名称     |
| -------- |
| Callback |
| Promise  |

### 回调

读取一个文件，在控制台输出这个文件内容。

```js
var fs = require("fs");
fs.readFile("./a.txt","utf8",function(err,data){
    console.log(data);
})
```

看起来很简单，再进一步: 读取两个文件，并在控制台同时输出这两个文件内容。

```js
var fs = require("fs");
fs.readFile("./a.txt","utf8",function(err,data1){
    fs.readFile("./b.txt","utf8",function(err,data2){
        console.log(data1,data2);
    })
})
```

要是读取更多的文件呢?

```js
var fs = require("fs");
fs.readFile("./a.txt","utf8",function(err,data1){
    fs.readFile("./b.txt","utf8",function(err,data2){
        fs.readFile("./c.txt","utf8",function(err,data3){
            fs.readFile("./d.txt","utf8",function(err,data4){
                fs.readFile("./e.txt","utf8",function(err,data5){
                    fs.readFile("./f.txt","utf8",function(err,data6){
                        console.log(data1,data2,data3,data4,data5,data6);
                    })
                })
            })
        })
    })
})
```

这种层层嵌套的关系最终形成类似上面的回调地狱。

这种回调地狱不仅看起来很不舒服，可读性比较差；除此之外还有比较重要的一点就是对异常的捕获无法支持。

### Promise

Promise 是 ES 2015 原生支持的，他把原来嵌套的回调改为了级联的方式。

Promise 主要就是为了解决异步回调的问题。用 Promise 来处理异步回调使得代码层次清晰，便于理解，且更加容易维护。其主流规范目前主要是 Promises/A+ 。

| 名称        | 地址                         |
| ----------- | ---------------------------- |
| Promises/A+ | <https://promisesaplus.com/> |

#### 兼容

Promise是新特性，在IE9-11中不支持，所以如果要用 Promise 的话，还是建议引用 bluebird.js。

| 名称       | 地址                                              |
| ---------- | ------------------------------------------------- |
| bluebirdjs | <http://bluebirdjs.com/docs/getting-started.html> |

#### 什么是 Promise ？

Promise 就是一个对象，用来表示并传递异步操作的最终结果

Promise 最主要的交互方式：将回调函数传入 then 方法来获得最终结果或出错原因

Promise 代码书写上的表现：以“链式调用”代替回调函数层层嵌套（回调地狱）

其实promise原理说起来并不难，它内部有三个状态，分别是pending，fulfilled和rejected 。

- pending是对象创建后的初始状态
- 当对象fulfill（成功）时变为fulfilled
- 当对象reject（失败）时变为rejected。

且只能从pengding变为fulfilled或rejected ，而不能逆向或从fulfilled变为rejected 、从rejected变为fulfilled。如图所示：

![Promise](/blog/img/node/promise.jpeg)

#### 基本用法

Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由JavaScript引擎提供，不用自己部署。

```
var promise = new Promise(function(resolve,reject){
    //... some code
    if(/*异步操作成功*/){
        //成功
        resolve(value);
    }else{
        //失败
        reject(error);
    }
})
```

#### promise.then(onFulfilled, onRejected)

Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数。

```
promise.then(function(value) {
  // 成功
}, function(error) {
  // 失败
});
```

then方法可以接受两个回调函数作为参数。

- 第一个回调函数是Promise对象的状态变为Resolved时调用。
- 第二个回调函数是Promise对象的状态变为Reject时调用。

> 注意：第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。

#### Promise.prototype.catch()

`Promise.prototype.catch`方法是`.then(null, rejection)`的别名，用于指定发生错误时的回调函数。

```
getJSON("/posts.json").then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

上面代码中，getJSON方法返回一个Promise对象，如果该对象状态变为Resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为Rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。

```
p.then((val) => console.log("fulfilled:", val))
  .catch((err) => console.log("rejected:", err));

// 等同于

p.then((val) => console.log(fulfilled:", val))
  .then(null, (err) => console.log("rejected:", err));
```

一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。

```
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```

上面代码中，第二种写法要好于第一种写法，理由是第二种写法可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）。因此，建议总是使用catch方法，而不使用then方法的第二个参数。

#### Promise.all()

Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。

```
var promises = Promise.all([p1, p2, p3]);
```

上面代码中，Promise.all方法接受一个数组作为参数，p1、p2、p3都是Promise对象的实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为Promise实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例。）

p的状态由p1、p2、p3决定，分成两种情况。

- 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
- 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

```
// 生成一个Promise对象的数组
var promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON("/post/" + id + ".json");
});

Promise.all(promises).then(function (posts) {
  // 成功
}).catch(function(reason){
  // 失败
});
```

上面代码中，promises是包含6个Promise实例的数组，只有这6个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。

#### Promise.race()

Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。

```
var promises = Promise.race([p1,p2,p3]);
```

上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的回调函数。

Promise.race方法的参数与Promise.all方法一样，如果不是Promise实例，就会先调用下面讲到的Promise.resolve方法，将参数转为Promise实例，再进一步处理。

下面是一个例子，如果指定时间内没有获得结果，就将Promise的状态变为reject，否则变为resolve。

```
var p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
])

p.then(response => console.log(response))
p.catch(error => console.log(error))
```

上面代码中，如果5秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。

#### 请求数据

```
new Promise(function(resolve) {
    $.get('a.html',function(dataa) {
        console.log(dataa);
        resolve();
    });
}).then(function(resolve) {
    return new Promise(function(resolve) {
        $.get('b.html',function(datab) {
            console.log(datab);
            resolve();
        });
    });
}).then(function(resolve) {
    $.get('c.html',function(datac) {
        console.log(datac);
    });
});
```

- <https://zhuanlan.zhihu.com/p/30630902>
