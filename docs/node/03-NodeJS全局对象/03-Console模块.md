# Console模块

console模块是Node提供的核心模块，用于提供控制台标准输出。它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的事实标准。Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流或标准错误流输出字符。

## console对象方法

console对象方法如下：

| 方法                     | 描述                                                         |
| ------------------------ | ------------------------------------------------------------ |
| console.log()            | 在控制台输出。【类似的还有2-4，格式有%s,%d,%j(json格式)】    |
| console.info()           | 返回信息行消息                                               |
| console.error()          | 在控制台输出一个错误的消息                                   |
| console.warn()           | 输出警告消息                                                 |
| console.dir(object)      | 利用util.inspect()输出对象的分析                             |
| console.time()           | 在程序运行之前调用、记录当前的时间信息                       |
| console.timeEnd()        | 配合 onsole．time()，在程序运行完成之后调用，记录程序完成后的时间信息（即间隔的时间） |
| consle.trance()          | 追踪情况。                                                   |
| console.assert(expr,msg) | 用于判断某个表达式或变量是否为真。若expr为假，则输出msg      |

### console.log()

向标准输出流打印字符并以换行符结束。console.log 接受若干个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于 C 语言 printf() 命令的格式输出。

```javascript
console.log('%s,%d,%j','hello world',1000,{name:'Bill Gate',Sexy:'Male',age:18,product:['xp','win7','win8']});
```

输出如下：

hello world,1000,{"name":"Bill Gate","Sexy":"Male","age":18,"product":["xp","win7","win8"]}

console.error()与 console.log()用法相同，只是用于输出错误。

### console.dir()

打印出指定对象的所有属性和属性值.

```js
var Person = function(name,age)       
{       
  this.name=name;      
  this.age=age;      
};       

var p = new Person('Jobs',23);  

console.dir(p);  
console.dir(Person);
```

输出如下：
Person { name: 'Jobs', age: 23 } [Function: Person]

### console.time

你可以启动一个计时器（timer）来跟踪某一个操作的占用时长。每一个计时器必须拥有唯一的名字，页面中最多能同时运行10,000个计时器。当以此计时器名字为参数调用 console.timeEnd() 时，浏览器将以毫秒为单位，输出对应计时器所经过的时间。

```javascript
console.time('timer1');       
for(var i=0;i<10000000;i++)       
{            
}      
console.timeEnd('timer1');        


console.trace('trace');
```

输出结果如下：

timer1: 169ms

### console.assert()

如果断言为false，则将一个错误消息写入控制台。如果断言是true，没有任何反应。在Node.js中一个值为假的断言将会导致一个AssertionError被抛出，使得代码执行被打断。

```js
try     
{      
  console.assert(1==22,'if equal are wrong');      
}     
catch(err)     
{     
  console.log('%s,%s',err.name,err.message);      
}
```

输出结果如下：

```js
AssertionError,if equal are wrong
```

### console.trace()

向Web控制台输出一个堆栈跟踪。

```js
console.trace()
```

输出结果如下：

```js
Trace
    at Object.<anonymous> (/Users/houningzhou/Web/Nodejs/3.filesystem/7.path/a.js:15:9)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:389:7)
    at startup (bootstrap_node.js:149:9)
    at bootstrap_node.js:504:3
```


  