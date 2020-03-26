# Nodejs模块http

传统的HTTP服务器会由Aphche、Nginx、IIS之类的软件来担任，但是nodejs并不需要，nodejs提供了http模块，自身就可以用来构建服务器，而且http模块是由C++实现的，性能可靠。

## 使用

使用http模块时，需要通过以下方法来引入：

```js
var http=require('http')。
```

创建服务器并监听

```js
http.createServer(function(req,res){

})

http.listen()
```

> 关闭nodejs进程 windows 任务管理器 结束node.exe进程 Mac ps -ef | grep node

### 搭建一个简单的HTTP服务器

```js
//导入http模块
var http = require('http');
//创建一个http服务器
var server = http.createServer(function (req,res) {//req请求 res响应
    res.write('hello'); //向客户的发送数据 只能为字符串或Buffer
    res.write('world');//向客户的发送数据
    res.end();//发送结束
})
server.listen(8080); //监听指定端口号
```

#### Request对象

| 属性            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| request.url     | 客户端请求的url地址，如[http://127.0.0.1/hello/world，那么request.url就是/hello/world](http://127.0.0.1/hello/world%EF%BC%8C%E9%82%A3%E4%B9%88request.url%E5%B0%B1%E6%98%AF/hello/world) |
| request.headers | 客户端请求的http header                                      |
| request.method  | 获取请求的方式，一般有几个选项，POST,GET和DELETE等，服务器可以根据客户端的不同请求方法进行不同的处理。 |

#### Response对象

| 属性                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| res.writeHead                   | response.writeHead(statusCode, [reasonPhrase], [headers])  res.writeHead(200,{Content-Type:'text/plain'}); |
| res.removeHeader("Date")        | 从隐式发送的队列中移除一个响应头。                           |
| res.setTimeout(msecs, callback) | 设置http超时返回的时间，一旦超过了设定时间，连接就会被丢弃   |
| res.statusCode                  | 设置返回的网页状态码                                         |
| res.setHeader(name, value)      | 设置http协议头                                               |
| res.headersSent                 | 返回一个布尔值（只读）。 如果响应头已被发送则为 true，否则为 false。 |
| res.write(chunk, [encoding])    | 返回的网页数据，[encoding] 默认是 utf-8                      |
| res.end([data], [encoding])     | 将设置的数据包，发送数据到客户端(完成响应)。                 |

#### 练习：发送时间到客户端

```js
var http = require('http');
http.createServer(function (req,res) {
    var d = new Date();
    res.write(d.toString())
    res.end();
}).listen(9000);
```

#### 练习：HTTP多次响应

```js
var http = require('http');
http.createServer(function (req,res) {
    res.setHeader('Content-type','text/html,charset=utf-8');
    res.write('你好，世界');
    setTimeout(function () {
        res.write('我不好，人类');
        res.end();
    },2000)

}).listen(9000);
```

#### 练习：静态服务器

```js
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
http.createServer(function (req,res) {
        var url = req.url;
        console.log(url)
        if(url=='/'){url='index.html'};
        res.setHeader('Content-type',mime.lookup(url)+';charset=utf-8');
        fs.readFile('./'+url,'utf8',function (err,data) {
            res.write(data);
            res.end();
        })

}).listen(9001);
```

#### 练习：ajax之get

```js
//导入核心模块
var http = require("http");
var fs = require("fs");
var url = require("url");

//模拟数据
var data  = [
    "你每天都很困，只因为你被生活所困",
    "每天都在用六位数的密码，保护着两位数的存款",
    "年纪越大，越没有人会原谅你的穷",
    "全世界都在催你早点，却没人在意你，还没吃'早点'",
    "小时候总骗爸妈自己没钱了，现在总骗爸妈，没事~我还有钱"
];

//创建服务器
var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    if(req.url"/"||req.url"/index.html"){
        fs.readFile("./index.html",function(err,data){
            res.write(data);
            res.end();
        })
    }
    if(urlObj.pathname=="/search"){
        var d = data.filter((val,index)=>{
            return val.indexOf(urlObj.query.s)==-1?false:true;
        });
        res.write(JSON.stringify(d));
        res.end();
    }
})

//监听服务器
server.listen(3000);
```

#### 练习：ajax之post

```js
//引入核心模块
var http = require('http');
//引用URL解析URL参数
var url = require('url');
//读写文件
var fs = require('fs');
var querystring = require('querystring');
//创建http服务器
//只有当提交form表单，并且是GET请求的时候，浏览器才会把表单进行序列化拼到URL后面
http.createServer(function(req,res){
    //一定会返回一个对象
    // true的话urlObj的query也会是一个对象，否则就是一个字符串
   // username=zfpx&password=123 -> {username:'zfpx',password:123}
    var urlObj = url.parse(req.url,true);
    //路径名
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        //读取文件的内容
        fs.readFile('./index.html','utf8',function(err,data){
                res.end(data);
        })
    }else if(pathname == '/reg'){
        var result='';
        //当读到客户端提交过来的数据时会触发data事件，然后调用回调函数
        req.on('data',function(data){
            result +=data;
        })
        req.on('end',function(data){
            var contentType = req.headers['content-type'];
            if(contentType =='application/x-www-form-urlencoded'){
                var obj = querystring.parse(result);
                console.log(obj);
            }else if(contentType == 'application/json'){
                var obj  = JSON.parse(result);
                console.log(obj);
            }
            res.end('ok');
        })
    }else if(pathname == '/reg2'){
        res.end('ok2');
    }
}).listen(8080);
```

#### 练习：ajax上传图片

使用第三方包 [formidable](https://github.com/felixge/node-formidable)

```js
var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var querystring = require('querystring');
var util  = require('util');
var mime  = require('mime');

// 构建一个解析器
var formParser = new formidable.IncomingForm();
///用解析器解析请求体
//把非file的input放在fields里
//把文件类型的元素放在files里
formParser.parse(req, function(err, fields, files) {
   fs.readFile(files.avatar.path,function(err,data){
       console.log(files.avatar);
       var filename = '/imgs/'+files.avatar.name;
       fs.writeFile('.'+filename,data,function(err){
           res.writeHead(200,{'Content-Type':'text/plain'});
           res.end(filename);
       })
   })
});
```

## http客户端

http.request() 返回一个 http.ClientRequest 类的实例。

```
http.request(options[, callback])
```

### options

options 可以是一个对象、或字符串、或 URL 对象。 如果 options 是一个字符串，它会被自动使用 url.parse() 解析。

| 参数             | 类型                 | 描述                                                         |
| ---------------- | -------------------- | ------------------------------------------------------------ |
| protocol         | string               | 使用的协议。默认为 http:。                                   |
| host             | string               | 请求发送至的服务器的域名或 IP 地址。默认为 localhost。       |
| hostname         | string               | host 的别名。为了支持 url.parse()，hostname 优于 host。      |
| family           | number               | 当解析 host 和 hostname 时使用的 IP 地址族。 有效值是 4 或 6。当未指定时，则同时使用 IP v4 和 v6。 |
| port             | number               | 远程服务器的端口。默认为 80。                                |
| localAddress     | string               | 为网络连接绑定的本地接口。                                   |
| socketPath       | string               | Unix 域 Socket（使用 host:port 或 socketPath）。             |
| method           | string               | 指定 HTTP 请求方法的字符串。默认为 'GET'。                   |
| path             | string               | 请求的路径。默认为 '/'。 应包括查询字符串（如有的话）。如 '/index.html?page=12'。 当请求的路径中包含非法字符时，会抛出异常。 目前只有空字符会被拒绝，但未来可能会变化。 |
| headers          | Object               | 包含请求头的对象。                                           |
| auth             | string               | 基本身份验证，如 'user:password' 用来计算 Authorization 请求头。 |
| agent            | http.Agent \ boolean | 控制 Agent 的行为。 可能的值有： undefined (默认): 对该主机和端口使用 http.globalAgent。 Agent 对象：显式地使用传入的 Agent。 false: 创建一个新的使用默认值的 Agent。 |
| createConnection | Function             | 当不使用 agent 选项时，为请求创建一个 socket 或流。 这可以用于避免仅仅创建一个自定义的 Agent 类来覆盖默认的 createConnection 函数。详见 agent.createConnection()。 |
| timeout          | number               | 指定 socket 超时的毫秒数。 它设置了 socket 等待连接的超时时间。 |

### callback

callback 参数会作为单次监听器被添加到 'response' 事件。


  