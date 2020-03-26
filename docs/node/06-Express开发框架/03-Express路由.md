# Express路由

## 路由控制

路由的定义由如下结构组成：

```js
app.METHOD(PATH, HANDLER)
```

- app 是一个 express 实例(var app = new Express())；
- METHOD 是某个 HTTP 请求方式中的一个；
- PATH 是服务器端的路径；
- HANDLER 是当路由匹配到时需要执行的函数。

## 获取请求参数

request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：

- req.host返回请求头里取的 主机名 (不包含端口号)。
- req.path返回请求的URL的 路径名 。
- req.query是一个可获取客户端get请求 查询字符串 转成的对象，默 认为{}。
- req.params是一个由 路径参数 组成的对象。

## send

send()方法向浏览器发送响应，并可以智能处理不同类型的数据。并地 输出响应时会自动进行一些设置，比如header信息、http缓存支持等等。

- 当参数为一个String时，Content-Type默认设置为"text/html"。

  ```js
  res.send([body|status], [body]);
  ```

- 当参数为Array或Object时，Express会返回一个JSON

  ```js
  res.send({ user: 'tobi' }); //{"user":"tobi"}
  ```

  不能使用数字作为参数，如果要返回入码要用 res.sendStatus 方法

## 请求方法

### get方法

根据请求 路径 来处理客户端发出的 GET 请求

```js
app.get(path,function(request, response));
```

- path为请求的 路径
- 第二个参数为处理请求的 回调函数 ，有两个参数:
  - request代表请求信息
  - response代表响应信息。

### post方法

根据请求路径来处理客户端发出的 POST 请求

```js
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
```

### put方法

根据请求路径来处理客户端发出的 PUT 请求

```js
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
```

### delete方法

根据请求路径来处理客户端发出的 DELETE 请求

```js
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

### all

app.all()函数可以匹配所有的HTTP 动词 ，也就是说它可以匹配所有路径的请求。

```js
app.all('/user',function(req,res){
    res.send('所有的请求都可以匹配到！');
    })
```
