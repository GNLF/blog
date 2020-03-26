# Express 搭建RESTfulAPI服务器

## 请求头设置

### 解决跨域问题

```
//该资源可以被任意外域访问
res.header("Access-Control-Allow-Origin", "*");  

//该资源仅允许来自 http://foo.example 访问
res.header("Access-Control-Allow-Origin", "http://foo.example");
```

### 允许的请求类型

首部字段 `Access-Control-Allow-Methods` 表明服务器允许客户端使用 PUT,POST,GET,DELETE 和 OPTIONS 方法发起请求。

```
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
```

### 利用中间件配置

```
app.use(function(req, res, next) {  
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization,x-access-token');
    next();  
});
```

## 参考

| 参数                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| Access-Control-Allow-Origin  | <https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin> |
| Access-Control-Allow-Headers | <https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers> |


  