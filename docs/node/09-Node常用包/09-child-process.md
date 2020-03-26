# child_process

> child_process是node一个比较重要的模块，通过它可以实现创建多线程，来利用多核CPU。

我们都知道nodejs是一个单线程单进程的，也就是同一时间只能做一件事情，但是有些时候我们要在同一时间做几个事情，我们可以借助子进程去完成这样的工作。

因为Nodejs是一个单进程、单线程，如果我们用主进程执行耗时的工作，系统将不能执行其他任务，因此我们可以将一个耗时的工作交给子进程执行，这样不会阻塞主进程的执行。

child_process即子进程,可以创建一个系统子进程并执行shell命令。

```
var child_process = require("child_process");
```

这个模块提供了四个创建子进程的函数:

| 函数名 | 描述                                                         |
| ------ | :----------------------------------------------------------- |
| spawn  | 是原始的创建子进程的函数，剩下的是对这个函数不同程度的封装。但不支持回调函数。 |
| exec   |                                                              |

fork只能执行js文件。例如fork('./child.js');

## spawn

spawn每获得数据就触发一次事件。

```js
var child_process = require("child_process");
var spawn = child_process.spawn;
//child_process.spawn(command[, args][, options])
var subprocess = spawn("curl",['http://www.baidu.com']);

//当有输出即刻触发data事件
subprocess.stdout.on('data',function(data){
    console.log(data.toString());
})

//当有所有输出完成触发exit事件
subprocess.on("exit",function(){
    console.log("输出完成！");
})
console.log('continue')
// continue
// studout
```

## exec

exec将所有的输出都获取到之后一次性输出。

```js
var child_process = require("child_process");
child_process.exec("curl http://www.taobao.com",function(err,stdout,stderr){
    console.log(studout)
})
console.log('continue')
// continue
// studout
```

当你想要从子进程返回大量数据时使用spawn，如果只是返回简单的状态信息，那么使用exec。


  