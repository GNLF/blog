# Buffer

JavaScript对字符串处理十分友好，无论是宽字节还是单字节字符串，都被认为是一个字符串。Node中需要处理网络协议、操作数据库、处理图片、文件上传等，还需要处理大量二进制数据，自带的字符串远不能满足这些要求，因此Buffer应运而生。

## Buffer结构

Buffer是一个典型的Javascript和C++结合的模块，性能相关部分用C++实现，非性能相关部分用javascript实现。

node在进程启动时Buffer就已经加装进入内存，并将其放入全局对象，因此无需require

Buffer对象：类似于数组，其元素是16进制的两位数。

### 字节

- 1024b = 1k
- 8bit = 1b
- 一个汉字3b
- 一个字节转化成十进制最大是255
- 一个字节转化成十六进制最大是FF

## 什么时候用Buffer

纯粹的javascript支持unicode码而对二进制不是很支持，当解决TCP流或者文件流的时候，处理流是有必要的，我们保存非utf-8字符串，2进制等等其他格式的时候，我们就必须得使用”Buffer“。

## Buffer的转换

Buffer对象可以和字符串相互转换，支持的编码类型如下： ASCII、UTF-8、Base64、Binary(二进制)、Hex(十六进制)

## Buffer使用

| 方法                                     | 类型 | 描述                                                         |
| ---------------------------------------- | ---- | ------------------------------------------------------------ |
| Buffer.from(array)                       | 创建 | array 创建一个新的 Buffer                                    |
| Buffer.from(string[,encoding])           | 创建 | 新建一个包含所给的 JavaScript 字符串 string 的 Buffer 。 encoding 参数指定 string 的字符编码。 |
| Buffer.alloc(size[,val[,encoding]])      | 创建 | 分配一个大小为 size 字节的新建的 Buffer 。 如果 fill 为 undefined ，则该 Buffer 会用 0 填充。 |
| Buffer.concat(list[,totallength])        | 合并 | 返回一个合并了 list 中所有 Buffer 实例的新建的 Buffer        |
| buf.toString([encoding], [start], [end]) | 返回 | 根据 encoding 指定的字符编码解码 buf 成一个字符串。          |
| buf.toJSON()                             | 返回 | 返回 buf 的 JSON 格式。                                      |
| Buffer.isEncoding(encoding)              | 检测 | 如果 encoding 是一个支持的字符编码则返回 true，否则返回 false 。 |
| Buffer.isBuffer(obj)                     | 检测 | 如果 obj 是一个 Buffer 则返回 true ，否则返回 false 。       |
| Buffer.byteLength(buf)                   | 获取 | 获取字节长度                                                 |
| buf.equals(otherBuffer)                  | 检测 | 如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。 |
| buf.fill(any)                            | 填充 | 用数据填充buf，any为0，可视为初始化buf                       |
| buf.slice()                              | 截取 | 是浅拷贝                                                     |

### 创建Buffer

```js
Buffer.from(array)
Buffer.from(string[,encoding])
Buffer.alloc(size[,val[,encoding]])
```

### 字符串转Buffer

```js
# 默认UTF-8
Buffer.from(string[,encoding])
```

### Buffer转字符串

```js
buf.toString([encoding], [start], [end])
```

### 拼接Buffer

```js
Buffer.concat(list[,totallength])
```

### Buffer不支持的编码类型

```js
Buffer.isEncoding(encoding)
```

### 判断是不是Buffer

```js
Buffer.isBuffer(obj)
```

### 获取字节长度

```js
Buffer.byteLength(buf)
```

### 判断两个Buffer字节是否相同

如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。

```js
buf.equals(otherBuffer)
```

### 对象的拷贝

- 深拷贝

  ```js
  1.JSON
  JSON.parse(JSON.stringfiy(obj));
  //缺点  不能拷贝方法，只能拷贝属性
  2.递归拷贝
  ```

- 浅拷贝

  ```js
  数组.slice   Object.assgin() {...{},...{}}   
  ```

  