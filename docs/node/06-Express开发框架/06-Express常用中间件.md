# Express常用中间件

| 类型   | 包名   | 作用                                        | 安装               | 网址                                  |
| ------ | ------ | ------------------------------------------- | ------------------ | ------------------------------------- |
| 数据库 | mysql  | 关系型数据库Mysql                           | npm install mysql  | <https://www.npmjs.com/package/mysql> |
| 上传   | multer | 用于处理 multipart/form-data 类型的表单数据 | npm install multer | <https://github.com/expressjs/multer> |

- serve-favicon
- body-parser
- cookie-parser
- express-session
- compression
- express-validator <https://express-validator.github.io/docs/>
- validator <https://www.npmjs.com/package/validator>
- morgan <https://www.cnblogs.com/chyingp/p/node-learning-guide-express-morgan.html>

## morgan

morgan是express默认的日志中间件，也可以脱离express，作为node.js的日志组件单独使用。 [morgan](https://segmentfault.com/a/1190000007769095)

### 显示页面通知消息

```
$ npm install connect-flash
```

安装完之后，你还需要安装一个 express-session 模块，因为 connect-flash 是需要存储在 session 模块，运行如下命令行：

```js
$ npm install express-session
var flash = require('connect-flash');
var session = require('express-session');
app.use(flash())

app.get('/',function(req,res){
    req.flash('error','提交失败')
})
```

## Session

```
npm install  express-session
```

1. 为什么使用session？ session运行在服务器端，当客户端第一次访问服务器时，可以将客户的登录信息保存。 当客户访问其他页面时，可以判断客户的登录状态，做出提示，相当于登录拦截。 session可以和Redis或者数据库等结合做持久化操作，当服务器挂掉时也不会导致某些客户信息（购物车）丢失。
2. session的工作流程： 当浏览器访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成一个类似于key,value的键值对， 然后将key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带key(cookie)，找到对应的session(value)。 客户的信息都保存在session中。
3. express-session的常用参数:

| 参数              | 描述                                                         |
| ----------------- | ------------------------------------------------------------ |
| secret            | 一个String类型的字符串，作为服务器端生成session的签名。      |
| name              | 返回客户端的key的名称，默认为connect.sid,也可以自己设置。    |
| resave            | (是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对session进行修改覆盖并保存。默认为true。 |
| saveUninitialized | 初始化session时是否保存到存储。默认为true， 但是(后续版本)有可能默认失效，所以最好手动添加。 |
| cookie            | 设置返回到前端key的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。 |

express-session的一些方法:

| 方法                 | 描述                                    |
| -------------------- | --------------------------------------- |
| Session.destroy()    | 删除session，当检测到客户端关闭时调用。 |
| Session.reload()     | 当session有修改时，刷新session。        |
| Session.regenerate() | 将已有session初始化。                   |
| Session.save()       | 保存session。                           |

```js
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser('sessiontest'));
app.use(session({
    secret: 'sessiontest',//与cookieParser中的一致
    resave: true,
    saveUninitialized:true
}));

//修改router/index.js,第一次请求时我们保存一条用户信息。
router.get('/', function(req, res, next) {
    var user={
        name:"Chen-xy",
        age:"22",
        address:"bj"
    }
  req.session.user=user;
  res.render('index', {
      title: 'the test for nodejs session' ,
      name:'sessiontest'
  });
});

//修改router/users.js，判断用户是否登陆。
router.get('/', function(req, res, next) {
    if(req.session.user){
        var user=req.session.user;
        var name=user.name;
        res.send('你好'+name+'，欢迎来到我的家园。');
    }else{
        res.send('你还没有登录，先登录下再试试！');
    }
});
```

## body-parser

```js
npm install --save body-parser
app.use(require(body-parser)());
```

## gzip 压缩

```js
app.use(connect.compress);
```

用 gzip 压缩响应数据。这是好事，用户会因此感激你的，特别是那些网络比较慢或者 用手机上网的用户。它应该在任何可能会发送响应的中间件之前被尽早连入。唯一应该 出现在 compress 之前的中间件只有 debugging 或 logging(它们不发送响应)。

## cookie-parser

```js
npm install --save cookie-parser
app.use(require(cookie-parser)(秘钥放在这里);)
```

提供对 cookie 的支持。

## express-session

```js
npm install --save express-session
app.use(require(express- session)());)
```

提供会话 ID(存在 cookie 里)的会话支持。默认存在内存里，不适用于生产环境，并且可以配置为使用数据库存储。

## static-favicon

```js
npm install --save static-favicon
app.use(require(static- favicon)(path_to_favicon));)
```

提供 favicon(出现在浏览器标题栏上的图标)。这个中间件不是必需的，你可以简单地 在 static 目录下放一个 favicon.ico，但这个中间件能提升性能。如果你要使用它，应该 尽可能地往中间件栈的上面放。你也可以使用除 favicon.ico 之外的其他文件名。

## morgan

```js
npm install --save morgan
app.use(require(morgan)());)
```

提供自动日志记录支持:所有请求都会被记录。

