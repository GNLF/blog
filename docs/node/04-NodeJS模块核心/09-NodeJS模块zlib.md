# zlib

zlib是提供数据压缩用的函式库，由Jean-loup Gailly与Mark Adler所开发，初版0.9版在1995年5月1日发表。zlib使用DEFLATE算法，最初是为libpng函式库所写的，后来普遍为许多软件所使用。此函式库为自由软件，使用zlib授权。

zlib是一个免费、通用、不受任何法律阻碍的、无损的数据压缩开发库，而且还是跨平台的。这意味着任何人都可以修改、使用而无需交纳任何费用。ZLib具有同winzip和winrar等商业软件相比毫不逊色的压缩率，已经成功应用在诸如MySQL、Java、3DMax、甚至是微软的DirectX等大型的系统中。目前Z1ib的最新版本是1.2.3。

> DEFLATE是同时使用了LZ77算法与哈夫曼编码（Huffman Coding）的一个无损数据压缩算法。

## 关于gzip与deflate

deflate(RFC1951)是一种压缩算法，使用LZ77和哈弗曼进行编码。gzip(RFC1952)一种压缩格式，是对deflate的简单封装，gzip = gzip头(10字节) + deflate编码的实际内容 + gzip尾(8字节)。在HTTP传输中，gzip是一种常用的压缩算法，使用gzip压缩的HTTP数据流，会在HTTP头中使用Content-Encoding：gzip进行标识。

## 使用zlib

zlib模块提供`Gzip`和`Deflate` / `Inflate`方式来实现压缩功能。使用以下方式访问：

```js
const zlib = require('zlib');
```

| 说明                                | 方法                             |
| :---------------------------------- | :------------------------------- |
| 创建gzip压缩类Gzip                  | zlib.createGzip([options])       |
| 创建gzip解压类Gunzip                | zlib.createGunzip([options])     |
| 创建deflate压缩类Deflate            | zlib.createDeflate([options])    |
| 创建deflate解压类Inflate            | zlib.createInflate([options])    |
| 创建deflate原始数据压缩类DeflateRaw | zlib.createDeflateRaw([options]) |
| 创建deflate原始数据解压类InflateRaw | zlib.createInflateRaw([options]) |

## 简单的压缩/解压缩

### 压缩

```js
var fs = require("fs");
var zlib = require("zlib");

var gzip = zlib.createGzip();
var inFile = fs.createReadStream("./test.txt");
var outFile = fs.createWriteStream("./test.txt.gz");

inFile.pipe(gzip).pipe(outFile);
```

### 解压缩

```js
var fs = require("fs");
var zlib = require("zlib");

var Gunzip = zlib.createGunzip();

var inFile = fs.createReadStream("./test.txt.gz");
var outFile = fs.createWriteStream("./test2.txt");

inFile.pipe(Gunzip).pipe(outFile);
```

## Web开发:压缩HTTP请求和响应

为了减少网络传输数据量，http传输过程中会采用通用的压缩算法来压缩数据，gzip属于最常用的压缩算法。

浏览器向服务器发起资源请求，比如下载一个js文件，服务器先对资源进行压缩，再返回给浏览器，以此节省流量，加快访问速度。

### HTTP配置

#### HTTP请求中添加Accept-Encoding字段

浏览器通过HTTP请求头部里加上`Accept-Encoding`,告诉服务器,"你可以用gzip,或者defalte算法压缩资源"。

```
Accept-Encoding:gzip, deflate
```

#### HTTP响应中添加Content-Encoding字段

在HTTP响应中添加`Content-Encoding`，告诉浏览器：文件被 gzip 压缩过。

```js
res.writeHead(200, {
    'Content-Encoding': 'gzip'
});
```

### 示例代码

开发逻辑：
判断HTTP请求头是否包含 accept-encoding 字段，且值为gzip。

- 否：返回未压缩的文件。
- 是：返回gzip压缩后的文件。

```js
var zlib = require("zlib");
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    console.log(req.headers)
    var acceptEncoding = req.headers['accept-encoding'];
    var inFile = fs.createReadStream('./test.html');
    if(acceptEncoding.indexOf('gzip') !=-1){
        //响应头添加 Content-Encoding 字段，告诉浏览器 服务器端使用gzip压缩
        res.writeHead(200,{
            'Content-Encoding': 'gzip'
        });
        inFile.pipe(zlib.createGzip()).pipe(res);
    }else if(acceptEncoding.indexOf('deflate') !=-1){
        res.writeHead(200,{
            'Content-Encoding': 'deflate'
        });
        inFile.pipe(zlib.createInflate()).pipe(res);
    }else{
        inFile.pipe(res);
    }
});
server.listen(8080)
```

## 参考

在express中提供了compress的中间件用来处理gzip

- <https://www.cnblogs.com/chyingp/p/6029054.html>
- <http://www.cnblogs.com/chyingp/p/node-learning-guide-dns.html>
- <https://cnodejs.org/topic/532269f4d7ede09c72000a88>


  