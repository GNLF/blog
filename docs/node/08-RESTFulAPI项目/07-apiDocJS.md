# apiDocjs

apiDoc是一款依赖nodejs根据程序代码注释自动生成文档的工具，比较适合生成restful api程序的文档，apiDoc面向几乎所有的编程语言，因为基于js所以操作和使用都相当方便。

| 名称     | 地址                   |
| :------- | :--------------------- |
| 官方网址 | <http://apidocjs.com/> |

## 安装

```
npm install apidoc -g
```

## 使用

### 配置

apiDoc在执行之前需要依赖一个配置文档来生成一些额外的信息，就好像我们使用photoshop创建一个PSD一样，我们需要为PSD文档设定一些基本的参数，apiDoc也是如此。

我们可以在项目根目录一下创建一个apidoc.json的配置文件,文件内容如下：

```
{
  "name": "example",
  "version": "0.1.0",
  "description": "apiDoc basic example",
  "title": "Custom apiDoc browser title",
  "url" : "https://api.github.com/v1"
}
```

参数说明

| 参数        | 描述                                                        |
| :---------- | :---------------------------------------------------------- |
| name        | 表示生成的文档的名字                                        |
| version     | 表示生成的文档版本，api升级的时候这个版本控制就会相当的有用 |
| description | 描述文档内容                                                |
| title       | 文档的标题                                                  |
| url         | api的链接地址                                               |

必须在apidoc.json的配置存在的情况下，apiDoc才可以执行自动生成文档的操作。

- <https://www.jianshu.com/p/774ae227b154>


  