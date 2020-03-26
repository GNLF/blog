# RestfulAPI设计原则

> REStful本质是一种软件架构风格，核心是面向资源。

| 类别           | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| 协议           | API与用户的通信协议，总是使用HTTPs协议。                     |
| 域名           | 应该尽量将API部署在专用域名之下。`https://api.example.com`   |
| URL版本控制    | 应该将API的版本号放入URL。`https://api.example.com/v{n}/`    |
| API路径规则    | 资源就是URL表示的，所以简洁、清晰、结构化的 URL 设计是至关重要的 |
| 针对资源的操作 | 通过标准HTTP方法(GET、POST、PUT、DELETE)对资源CRUD。         |
| 验证和授权     | 让任何人随意访问公开的 API 是不好的做法。验证和授权是两件事情 |

## 协议

API与用户的通信协议，总是使用HTTPs协议。

## 域名

应该尽量将API部署在专用域名之下。

```
https://api.example.com
```

如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。

```
https://example.org/api/
```

## 版本控制

应该将API的版本号放入URL

```
https://api.example.com/v{n}/
```

另一种做法是将版本号放在HTTP头信息中，但不如放入URL方便和直观。Github采用这种做法。

采用多版本并存，增量发布的方式。

v{n} n代表版本号，分为整型和浮点型

整型版本号：大功能版本发布形式，具有当前版本状态下的所有API接口，例如：v1，v2

浮点型版本号：为小版本号，只具备补充api的功能，其他API都默认调用对应大版本号的api 例如：v1.1,v2.1

## API路径规则

路径又称“终点”，表示API具体网址。

在RESTful架构中，每个网址代表一种资源(resource),所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表名对应。一般来说，数据库中的表都是同种记录的“集合”,所以API中的名词也应该使用复数。

资源是 Restful API 的核心元素，所有的操作都是针对特定资源进行的。而资源就是 URL（Uniform Resoure Locator）表示的，所以简洁、清晰、结构化的 URL 设计是至关重要的。

### URI规范

- URI(Uniform Resource Identifiers) 统一资源标示符
- URL(Uniform Resource Locator) 统一资源定位符

URI的格式定义如下：

```
URI = scheme "://" authority "/" path [ "?" query ] [ "#" fragment ]
```

1. URI尽量使用“-”代替下划线“_“。
2. URI统一使用小写字母
3. URI不包含文件扩展名
4. 使用"?"用来过滤资源，比如:`?limit=10`指定返回10条记录。
5. 不使用无意义的字符串、数字，要做到简洁。

### URI设计示例

> 一般来说，数据库中的表都是同种记录的“集合”,所以API中的名词也应该使用复数。例如：books、categorys、users

示例：图书系统包含 图书信息、分类信息、用户信息

```
https://api.example.com/v1/books
https://api.example.com/v1/categorys
https://api.example.com/v1/users
```

## API传入参数

传入参数分为四种类型：

| 类型           | 描述                                                         |
| -------------- | :----------------------------------------------------------- |
| 地址栏传递参数 | `https://api.example.com/v1/product/122` 122为产品id，获取产品为122信息； 查询字符串 |
| requset body   | 通过http请求体给API传递数据                                  |
| cookie         | 一般是用于OAuth认证                                          |
| request header | 一般是用于OAuth认证                                          |

## 过滤信息

如果信息记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。

| 参数                       | 描述                                   |
| :------------------------- | :------------------------------------- |
| ?limit=10                  | 指定返回记录条数                       |
| ?offset=100                | 指定返回记录开始位置                   |
| ?page=2&nums=20            | 指定第几页，每页记录数量               |
| ?sortby=bookname&order=asc | 指定返回结果按照那个属性排序，以及顺序 |
| ?bookid=10021              | 指定筛选条件                           |

## 针对资源的操作

通过标准HTTP方法对资源CRUD。

有了资源的 URL 设计，所有针对资源的操作都是使用 HTTP 方法指定的。比较常用的方法有：

| method          | 描述                                         |
| --------------- | -------------------------------------------- |
| GET (select)    | 从服务器上获取一个具体的资源或者一个资源列表 |
| POST (create)   | 在服务器上创建一个新的资源                   |
| PUT (update)    | 以整体的方式更新服务器上的一个资源           |
| PATCH (update)  | 只更新服务器上一个资源的一个属性             |
| DELETE (delete) | 删除服务器上的一个资源                       |

一个端点就是指向特定资源或资源集合的URL。

如果你正在构建一个虚构的API来展现几个不同的动物园，每一个动物园又包含很多动物，员工和每个动物的物种，你可能会有如下的端点信息：

```
https://api.example.com/v1/zoos              动物园
https://api.example.com/v1/animals           动物
https://api.example.com/v1/animal_types      动物类型
https://api.example.com/v1/employees         饲养员
```

针对每一个端点来说，你可能想列出所有可行的HTTP动词和端点的组合。如下所示，请注意我把HTTP动词都放在了虚构的API之前，正如将同样的注解放在每一个HTTP请求头里一样。

```
GET    /zoos:                   列出所有动物园
POST   /zoos:                   新建一个动物园
GET    /zoos/ZID:               获取某个指定动物园的信息
PUT    /zoos/ZID:               更新某个指定动物园的信息（提供该动物园的全部信息）
PATCH  /zoos/ZID:               更新某个指定动物园的信息（提供该动物园的部分信息）
DELETE /zoos/ZID:               删除某个动物园
GET    /zoos/ZID/animals:       列出某个指定动物园的所有动物

GET   /animals:                 列出所有动物    
POST  /animals:                 创建一个新动物
GET   /animals/AID:             获取某个指定动物信息
PUT   /animals/AID:             更新某个指定动物的信息（全部信息）
PATCH /animals/AID:             更新某个指定动物的信息（部分信息）
GET   /animal_types:            列出所有动物类型
GET   /animal_types/ATID:       列出某个指定动物类型

GET   /employees:               列出所有饲养员列表
GET   /employees/EID:           获取某个指定饲养员信息
GET   /zoos/ZID/employees:      列出在指定动物园工作的饲养员列表
POST  /employees:               创建一个新饲养员
POST  /zoos/ZID/employees:      给指定动物园创建一个饲养员
DELETE /zoos/ZID/employees/EID: 删除某个动物园的指定饲养员信息
```

## 验证和授权

一般来说，让任何人随意访问公开的 API 是不好的做法。验证和授权是两件事情：

- 验证（Authentication）是为了确定用户是其申明的身份，比如提供账户的密码。不然的话，任何人伪造成其他身份（比如其他用户或者管理员）是非常危险的
- 授权（Authorization）是为了保证用户有对请求资源特定操作的权限。比如用户的私人信息只能自己能访问，其他人无法看到；有些特殊的操作只能管理员可以操作，其他用户有只读的权限等等

### 认证

RESTful API应该是无状态。这意味着对请求的认证不应该基于cookie或者session。相反，每个请求应该带有一些认证凭证。

如果一直使用SSL，认证凭证可以简单的使用随机生成的access token，把其做为HTTP Basic Auth中user name字段的值传给API。这么做的好处是可以通过浏览器访问 – 如果浏览器从服务器收到401 Unauthorized状态码，它将会弹出一个对话框让人输出认证凭证。

当然，这种基于token来进行基本认证的方法只能当用户从API管理后台拷贝了一个token到自己的代码中才行。如果搞不到token，只能使用OAuth 2来把安全token传递给第三方。OAuth 2使用Bearer token，并且也是基于SSL来保证传输安全。

支持JSONP的API可能需要第三种方法来实现认证，因为JSONP的请求没法发送HTTP Basic Auth凭证或者Bearer token。这种情况下，可以使用一个额外的查询参数access_token。注意：使用查询参数来传递token存在一个固有的安全隐患，因为大多数web服务器会在服务器日志中保存查询参数。

不管怎么样，以上三种方法是用来在API之间传输token的方法。实际传输的token可以是一样的。

### 使用SSL

一定要使用SSL。没有例外。如今，你的web API可以从任何有互联网的地方（像图书馆，咖啡馆，机场等等）被访问到。这些地方并不都是安全的。很多地方根本没有对网络连接进行加密，如果认证凭证被劫持的话，这样访问者很容易被窃听或者被冒充。

一直使用SSL的另一个优势是，加密的连接简化了用户认证的工作 – 你可以使用简单的access token，而不需要对每个API请求进行签名。

需要注意的一件事是以非SSL的形式访问API的URL。不要把请求跳转到它们的SSL版本上。直接抛出一个严重错误！

## HTTP方法的幂等性

要定义严谨的REST的统一接口，就需要真正理解HTTP方法的幂等性

- 安全性:代表安全的REST的接口，是指外系统对该接口的访问，不会使服务器端资源的状态发生改变。
- 幂等性:幂等性是指外系统对同一REST接口的多次访问，得到的资源是相同的。

### GET

HTTP的GET方法用于读取资源。GET的方法是幂等的。GET方法也是安全的。如果获取的信息资源状态和资源的值发生变化，就不能使用GET方法。而是使用POST方法

另外我们一并介绍HEAD方法和OPTIONS方法:

- HEAD方法和和OPTIONS方法与GET方法类似，是安全和幂等的。只不过HEAD方法从服务端返回值不包括HTTP实体。
- OPTIONS用于读取资源所支持的所有HTTP请求方法

### PUT

PUT方法是一种写操作的HTTP请求。REST使用HTTP的PUT方法更新和添加资源。PUT方法是幂等的但不是安全的。

如何区分何时使用PUT

- 更新一定使用PUT方法
- 添加资源 创建通常选用POST方法。PUT方法的唯一的应用场景是，客户端发起请求时，在同一数据中总可以提供唯一的主键值。

### DELETE

DELETE方法是幂等的，既多次删除同一份数据，在服务器端产生的改变是相同的。

### POST

POST方法是一种写操作的HTTP请求，RPC的所有写操作均是使用POST方法。而REST只使用HTTP的POST方法添加资源。

POST 既不幂等也不安全。


  