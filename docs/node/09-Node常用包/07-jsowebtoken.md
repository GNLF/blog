# jsonwebtoken

| 名称       | 地址                                                |
| :--------- | :-------------------------------------------------- |
| GitHub仓库 | <https://github.com/auth0/node-jsonwebtoken#readme> |
| NPM        | <https://www.npmjs.com/package/jsonwebtoken>        |

## 安装&引用

安装

```
npm install jsonwebtoken
```

引用

```
var jwt = require("jsonwebtoken");
```

## 使用

### sign

```js
const jwt = require("jsonwebtoken");
jwt.sign(payload, secretOrPrivateKey, [options, callback])
```

异步：如果提供回调，则使用err或JWT 调用回调。

同步：将JsonWebToken返回为字符串。

| Header One | Header Two |
| :--------- | :--------- |
| Item One   | Item Two   |

payload必须是一个object, buffer或者string。请注意， exp只有当payload是object字面量时才可以设置。 secretOrPrivateKey 是包含HMAC算法的密钥或RSA和ECDSA的PEM编码私钥的string或buffer。

```js
// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

//backdate a jwt 30 seconds
var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');

// sign with RSA SHA256
var cert = fs.readFileSync('private.key');  // get private key
var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});

// sign asynchronously
jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256' }, function(err, token) {
  console.log(token);
});
```

#### 设置token过期时间

签署1小时期限的token:

```js
jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),  // 60s * 60m = 1h
    data: 'hello'
}, 'secret');
```

请使用expiresIn：以秒为单位或描述的时间跨度字符串表示rauchg / MS。如：60，”2 days”，”10h”，”7d”

```js
{expiresIn: 60}         // 有效期60秒（没有时间单位以秒为准）
{expiresIn: "2 days"}   // 有效期 2天 （后缀为时间单位）下面的类似
......
{expiresIn: "1d"}       // 86400000
{expiresIn: "10h"}      // 36000000
{expiresIn: "2.5 hrs"}  // 7200000
{expiresIn: "1m"}       // 60000
{expiresIn: "5s"}       // 5000
{expiresIn: "1y"}       // 31557600000
```

示例

```js
jwt.sign({
  data: 'hello'
}, 'secret', { expiresIn: 60 * 60 });

jwt.sign({
  data: 'hello'
}, 'secret', { expiresIn: '1h' });
```

#### verify

验证token的合法性

```js
jwt.verify（token, secretOrPublicKey, [options, callback]）
```

verify时返回的err的值

```js
"err": {
    "name": "TokenExpiredError",
    "message": "jwt expired",   //  token过了有效期
    "expiredAt": "2016-11-07T03:31:25.000Z"
}

 "err": {
    "name": "JsonWebTokenError",
    "message": "invalid token"  //  伪造/无效的token
}
```

### 示例

用户登录成功后，颁发Token：

```js
//登录逻辑
var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60*60*24),   //过期时间(单位s) 60*60*24 = 1days
    username: req.body.username,                       //保存数据1
    role:data[0].role                                  //保存数据2
},config.superSecret);
```

验证Token有效性(可作为Express中间件使用)

```js
const jwt = require('jsonwebtoken');
exports.checkToken = function(req,res,next){
    //检查post的信息或者url查询参数或者头信息
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // 解析 token
    if (token) {
        // 确认token
        jwt.verify(token, config.superSecret, function(err, decoded) {
            if (err) {
                return res.json(initData(404,'token信息错误'));
            } else {
                // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
                req.api_user = decoded;
                next();
            }
        });
    } else {
        // 如果没有token，则返回错误
        res.json(initData(404,'未提供token'));
    }
}
```


  