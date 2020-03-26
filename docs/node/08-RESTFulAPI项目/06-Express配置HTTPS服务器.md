# Express配置自签名https服务器

在nodejs中使用express来搭建框架可以说是非常的简单方便，但是一般默认创建的都是http服务器，也就是只能通过http协议进行访问。如今https已经是发展趋势，我们应该顺应时代的潮流。在本篇文章中，我们将会来使用自签名的方式创建证书，然后使用express框架来搭建https服务器，最后让浏览器或者客户端使用https协议进行访问。

## Http与Https

### 介绍

#### HTTP

超文本传输协议 (Hypertext transfer protocol) 是一种详细规定了浏览器和万维网服务器之间互相通信的规则，通过因特网传送万维网文档的数据传送协议。

#### HTTPS

超文本安全传输协议（Hypertext Transfer Protocol over Secure Socket Layer），是以安全为目标的HTTP通道，简单讲是HTTP的安全版。即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。 它是一个URI scheme（抽象标识符体系），句法类同http:体系。用于安全的HTTP数据传输。https:URL表明它使用了HTTP，但HTTPS存在不同于HTTP的默认端口及一个加密/身份验证层（在HTTP与TCP之间）。这个系统的最初研发由网景公司进行，提供了身份验证与加密通讯方法，现在它被广泛用于万维网上安全敏感的通讯，例如交易支付方面。

### 区别

1. https协议需要到ca申请证书，一般免费证书很少，需要交费。
2. http是超文本传输协议，信息是明文传输，https 则是具有安全性的ssl加密传输协议。
3. http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
4. http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

## 生成证书

### 生成私钥key文件

> pathway表示你要保存的文件路径位置

```
openssl genrsa 1024 > /pathway/private.pem
```

### 生成CSR证书签名

> 通过上面生成的私钥文件生成CSR证书签名

```
openssl req -new -key /pathway/private.pem -out csr.pem
```

### 生成证书文件

> 通过上述私钥文件和CSR证书签名生成证书文件

```
openssl x509 -req -days 365 -in csr.pem -signkey /pathway/private.pem -out /pathway/file.crt
```

此时生成的三个文件如下：

> private.pem: 私钥
> csr.pem: CSR证书签名
> file.crt: 证书文件

![img](https://node.hnz.kim/amWiki/img/jianming.png)

## 与Express结合

### 拷贝至Express项目目录

把这生成的这三个文件拷贝到你的nodejs项目目录下，比如我直接在项目根目录下新建certificate文件夹，然后放入三个文件：

```
certificate/
│  
├── private.pem
│
├── private.pem  
│     
└── file.crt
```

### 修改app.js

完成以上步骤后，修改项目的启动文件，我这里的启动文件是app.js，或者有人是server.js，以下代码实现都一样：

```
var express = require('express'); // 项目服务端使用express框架  
var app = express();  
var path = require('path');  
var fs = require('fs');  

//使用nodejs自带的http、https模块   
var https = require('https');

//根据项目的路径导入生成的证书文件  
var privateKey  = fs.readFileSync(path.join(__dirname, './certificate/private.pem'), 'utf8');  
var certificate = fs.readFileSync(path.join(__dirname, './certificate/file.crt'), 'utf8');  
var credentials = {key: privateKey, cert: certificate};

var httpsServer = https.createServer(credentials, app);  

httpsServer.listen(SSLPORT, function() {  
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);  
});
```

启动Express

```
node app.js
```

可以看到我们已经成功使用https来访问我们的服务器，但是Chrome浏览器却显示红色的Not Secure，这是因为这个证书是我们自建的，没有经过第三方机构验证，所以会出现警告的提示。

## 第三方机构验证证书

由于我们证书是自己创建的，没有经过第三方机构的验证，所以会出现警告的提示。

| 机构               | 链接                                                    | 类型 |
| ------------------ | ------------------------------------------------------- | ---- |
| godaddy SSL Cert   | <https://www.godaddy.com/web-security/ssl-certificate>  | 收费 |
| WoSign             | [https://www.wosign.com](https://www.wosign.com/)       | 免费 |
| 阿里云 DV SSL 证书 | <https://common-buy.aliyun.com/?commodityCode=cas#/buy> | 免费 |

### 使用阿里云免费SSL证书简例

```
var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('213949634960268.key'),
  cert: fs.readFileSync('213949634960268.pem')
};
var a = https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(443);
```

## 参考

| 名称                                     | 地址                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| nodejs开发——express配置自签名https服务器 | <http://blog.csdn.net/chenyufeng1991/article/details/60340006> |


  