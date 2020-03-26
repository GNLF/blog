# Express中间件

中间件是在管道中执行的。你可以想象一个送水的真实管道。水从一端泵入，然后在到达 目的地之前还会经过各种仪表和阀门。这个比喻中很重要的一部分是顺序问题，你把压力 表放在阀门之前和之后的效果是不同的。同样，如果你有个向水中注入什么东西的阀门， 这个阀门“下游”的所有东西都会含有这个新添加的原料。在 Express 程序中，通过调用 app.use 向管道中插入中间件。

中间件就是处理HTTP请求的函数 ，用来完成各种特定的任务，比如：

- 检查用户是否登录
- 添加公共方法。

它最大的特点就是，一个中间件处理完，可以把相应数据再传递给下一个中间件。 如果调用回调函数的 next 参数表示将请求数据传递给下一个中间件。

```js
app.use([path], function(request, response, next){}); //可选参数path默认为"/"
```

## 静态文件服务中间件

express.static 是 Express 内置的唯一一个中间件,负责托管 Express 应用内的静态资源。 如果要在网页中加载静态文件(css、js、img)，就需要另外指定一 个存放静态文件的 目录 项目目录下添加一个存放静态文件的目录为 public 在public目录下在添加三个存放 js 、 css 、 img 的目录,把相关文 件放到相应的目录下 当浏览器发出文件请求时，服务器端就会到这个目录下去寻找相关文件

```js
app.use(express.static(require('path').join(__dirname, 'public')),{options});
```

## bodyParser中间件

根据请求路径来处理客户端发出的Post请求 req.body 属性解析客户端的 post 请求参数，通过它可获取请求路径 的参数值。

```js
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.post(path,function(req, res));
```