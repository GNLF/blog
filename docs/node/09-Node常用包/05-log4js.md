# log4js

[![NPM](https://nodei.co/npm/log4js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/log4js/)

在我们开发项目时，日志是必不可少的一部分，有助于我们排错、数据分析等等。log4js 是一个 nodejs 日志管理工具，可以将日志以各种形式输出到各种渠道。

| 类型    | 地址                                         |
| :------ | :------------------------------------------- |
| Git地址 | <https://github.com/log4js-node/log4js-node> |
| NPM地址 | <https://www.npmjs.com/package/log4js>       |

## 简单使用

log4js的使用非常简单:

1. 安包(npm install log4js)
2. 创建日志目录(./logs/log_fie/)
3. 添加一个日志输出规则的配置文件(log4js.json) (这个也是有缺省的,但往往缺省配置是不满足使用需求的)
4. 代码中加载log4js,并将配置文件获取到调用一下配置方法(log4js.configure(cfg.json))
5. 写日志log4js.getLogger('log_test').debug("随便写日志啦!!!")

安装

```
npm install log4js --save
```

简单使用

```
# test.js
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug'; // default level is OFF - which means no logs at all.
logger.debug("Time", "Some debug messages");
```

运行 `node test.js`，输出如下：

```
[2018-09-09T23:29:45.273] [DEBUG] default - Some debug messages
```

### log输出格式

默认情况下，log4js-node的每条log输出格式有如下几个字段：日志产生时间，level，日志分类，日志内容。如果用户没有配置，日志分类字段为“default”。

```
       日志产生时间         level   日志分类        日志内容
------------------------  ------  -------   -------------------
[2018-09-10T00:26:42.467] [DEBUG] default - Some debug messages
[2018-09-10T00:26:42.470] [ERROR] default - Some error messages
[2018-09-10T00:26:42.470] [WARN]  default - Some warn messages
[2018-09-10T00:26:42.470] [INFO]  default - Some info messages
[2018-09-10T00:26:42.470] [TRACE] default - Some trace messages
[2018-09-10T00:27:21.829] [FATAL] default - Some fatal messages
```

## 入口【收集日志】

### Level(分级)

日志有了分级，log4js 才能更好地为我们展示日志（不同级别的日志在控制台中采用不同的颜色，比如 error 通常是红色的），在生产可以有选择的落盘日志，比如避免一些属于.debug才用的敏感信息被泄露出来。

log4js-node将输出的log分为六个的level，每个level的含义从字面就可以看出， 对于不同的level，log输出到终端时会使用不同的颜色

(trace: 蓝色，debug: 青色， info：绿色，warn：黄色，error：红色， fatal：粉色)。

![img](amWiki/images/node/log4Level.jpeg)

ALL OFF 这两个等级并不会直接在业务代码中使用。剩下的七个即分别对应 Logger 实例的七个方法，.trace .debug .info ...。也就是说，你在调用这些方法的时候，就相当于为这些日志定了级。因此，之前的 `[2018-09-09T23:29:45.273] [DEBUG] default - Some debug messages` 中的 DEBUG 既是这条日志的级别。

| 等级  | 适用范围         | 使用原则                                                     |
| :---- | :--------------- | :----------------------------------------------------------- |
| Fatal | 记录严重错误     | fatal为系统级别的异常，发生fatal错误，代表服务器整个或者核心功能已经无法工作了，则记录fatal级别的错误日志，最好是同时触发相关的修复和告警工作（比如，给开发和维护人员发送告警邮件）。 |
| Error | 记录错误日志     | error为功能或者逻辑级别的严重异常，发生error级别的异常，代表功能或者重要逻辑遇到问题、无法正常工作。 |
| Warn  | 记录警告信息     | warn用在某些逻辑非常规，发生了一些小故障但是没有大的影响，或者重要数据被修改，或者某些操作需要引起重视。 |
| Info  | 记录一般信息     | info用于记录一些有用的、关键的信息，一般这些信息出现得不频繁，只是在初始化的地方或者重要操作的地方才记录。 |
| Debug | 记录调试信息     | debug用于记录一些调试信息，为了方便查看程序的执行过程和相关数据、了解程序的动态。 |
| TRACE | 记录流程跟踪信息 | 这类信息一般用来跟踪一个操作流                               |

```
[2018-09-10T00:26:42.467] [DEBUG] default - Some debug messages
[2018-09-10T00:26:42.470] [ERROR] default - Some error messages
[2018-09-10T00:26:42.470] [WARN] default - Some warn messages
[2018-09-10T00:26:42.470] [INFO] default - Some info messages
[2018-09-10T00:26:42.470] [TRACE] default - Some trace messages
[2018-09-10T00:27:21.829] [FATAL] default - Some fatal messages
```

### category(类型)

log4js 还有一个概念就是 category（类型），你可以设置一个 Logger 实例的类型，按照另外一个维度来区分日志：

```
# file: set-category.js
var log4js = require('log4js');
var logger = log4js.getLogger('example');
logger.level = 'debug';
logger.debug("Time", new Date());
```

在通过 `getLogger` 获取 Logger 实例时，唯一可以传的一个参数就是 `loggerCategory`（如'example'）,通过这个参数来指定Logger示例属于哪个类别。

运行

```
node set-catetory.js
[2018-09-09T23:27:48.685] [DEBUG] example - Time 2018-09-09T15:27:48.685Z
```

那类别有什么用呢，它比级别更为灵活，为日志了提供了第二个区分的维度，例如，你可以为每个文件设置不同的 category。就可以从日志 `[2018-09-09T23:27:48.685] [DEBUG] set-catetory.js - Time 2018-09-09T15:27:48.685Z` 看出，这条日志来自于 set-catetory.js 文件。又或者针对不同的 node package 使用不同的 category，这样可以区分日志来源于哪个模块。

## 出口【输出日志】

### Appender(输出的位置)

现在日志有了级别和类别，解决了日志在入口处定级和分类问题，而在 log4js 中，日志的出口问题（即日志输出到哪里）就由 Appender 来解决。

Appenders将日志序列化为某种形式的输出。可以输出到控制台、文件、发送邮件、通过网络发送输出等等。

#### 输出形式类型

Appenders必须要有一个type来确定输出的形式。

| 类型           | 描述                                                  | 依赖 | 详情                                                         |
| :------------- | :---------------------------------------------------- | :--: | :----------------------------------------------------------- |
| console        | 将日志输出到控制台                                    |  -   | <https://log4js-node.github.io/log4js-node/console.html>     |
| file           | 将日志输出到文件,可选文件大小，保留指定数量文件备份。 |  -   | <https://log4js-node.github.io/log4js-node/file.html>        |
| DateFile       | 将日志输出指定时间的日志文件中。                      |  -   | <https://log4js-node.github.io/log4js-node/dateFile.html>    |
| logLevelFilter | 根据事件级别过滤要记录的日志事件                      |  -   | <https://log4js-node.github.io/log4js-node/logLevelFilter.html> |
| smtp           | 将日志事件通过邮件方式发送                            |  有  | <https://github.com/log4js-node/smtp>                        |
| mailgun        | 使用mailgun服务奖日志消息作为电子邮件发送             |  有  | <https://github.com/log4js-node/mailgun>                     |

#### [console](https://log4js-node.github.io/log4js-node/console.html)

> 注意：向控制台写入大量输出会使应用程序占用大量内存。

将日志输出到控制台

| 属性   | 类型   | 必填 | 值                                                           |
| :----- | :----- | :--- | :----------------------------------------------------------- |
| type   | string | 是   | console                                                      |
| layout | object | 可选 | （可选，默认为colouredLayout） - 请参阅[布局](https://log4js-node.github.io/log4js-node/layouts.html) |

```
log4js.configure({
  appenders: { console: { type: 'console' } },
  categories: { default: { appenders: [ 'console' ], level: 'info' } }
});
var logger = log4js.getLogger();

logger.
```

#### [file](https://log4js-node.github.io/log4js-node/file.html)

将日志输出到文件,可选文件大小，保留指定数量文件备份。

| 属性       | 类型    | 必填 | 值                                                           |
| :--------- | :------ | :--- | :----------------------------------------------------------- |
| type       | string  | 是   | file                                                         |
| filename   | string  | 是   | 要写入日志的文件的路径。                                     |
| maxLogSize | integer | 可选 | 日志文件的最大大小（以字节为单位）。如果未指定，则不会发生日志滚动。 |
| backups    | integer | 可选 | （默认值= 5）日志滚动期间要保留的旧日志文件数。              |
| layout     | object  | 可选 | （可选，默认为基础布局） - 请参阅[布局](https://log4js-node.github.io/log4js-node/layouts.html) |

示例:将生成`all-the-logs.log`包含日志消息的单个日志文件。

```
log4js.configure({
  appenders: {
    everything: { type: 'file', filename: 'all-the-logs.log' }
  },
  categories: {
    default: { appenders: [ 'everything' ], level: 'debug' }
  }
});

const logger = log4js.getLogger();
logger.debug('I will be logged in all-the-logs.log');
```

日志滚动（和压缩备份）的示例

```
log4js.configure({
  appenders: {
    everything: { type: 'file', filename: 'all-the-logs.log', maxLogSize: 10485760, backups: 3, compress: true }
  },
  categories: {
    default: { appenders: [ 'everything' ], level: 'debug'}
  }
});
```

这将生成一个当前日志文件（all-the-logs.log）。当它达到10Mb时，它将被重命名并压缩到all-the-logs.log.1.gz并打开一个新文件all-the-logs.log。当all-the-logs.log再次达到10Mb时，all-the-logs.log.1.gz将重命名为all-the-logs.log.2.gz，依此类推。

#### [DateFile](https://log4js-node.github.io/log4js-node/dateFile.html)

将日志输出指定时间的日志文件中。

| 属性     | 类型    | 必填 | 值                                                           |
| :------- | :------ | :--- | :----------------------------------------------------------- |
| type     | string  | 是   | dateFile                                                     |
| filename | string  | 是   | 要写入日志的文件的路径。                                     |
| pattern  | integer | 可选 | （默认为.yyyy-MM-dd） - 用于确定何时滚动日志的模式。         |
| layout   | object  | 可选 | （可选，默认为基础布局） - 请参阅[布局](https://log4js-node.github.io/log4js-node/layouts.html) |

pattern可以使用的占位符说明，不属于下列占位符格式，均会原样输出为文件名（注：不支持单个M、d、h、m）：

| 占位符 | 说明                                   |
| :----- | :------------------------------------- |
| yy     | 两位年份                               |
| yyyy   | 四位年份                               |
| MM     | 两位月份                               |
| dd     | 两位日期                               |
| hh     | 两位的小时数，按24小时制               |
| mm     | 两位的分数数                           |
| ss     | 两位的秒数                             |
| SSS    | 三位的毫秒数                           |
| O      | 时区，大写字母O，占位符输出结果为+0800 |

假设当前是2014年6月20月15点，那么上面的配置最终将会记录到 `e:\weblogs\logs\debug\2014062015.txt`这个文件中。

示例：默认每日日志滚动

```
log4js.configure({
  appenders: {
    everything: { type: 'dateFile', filename: 'all-the-logs.log' }
  },
  categories: {
    default: { appenders: [ 'everything' ], level: 'debug' }
  }
});
```

此示例将导致每天滚动文件。初始文件将是all-the-logs.log，每日备份all-the-logs.log.2017-04-30，等等。

示例：每小时日志滚动（和压缩备份）

```
log4js.configure({
  appenders: {
    everything: {
        type: 'dateFile',
        //文件名为= filename + pattern, 设置为alwaysIncludePattern：true
        filename: 'all-the-logs',
        pattern: '-yyyy-MM-dd-hh.log',
        alwaysIncludePattern: true,
        compress: true
    }
  },
  categories: {
    default: { appenders: [ 'everything' ], level: 'debug'}
  }
});
```

#### [logLevelFilter](https://log4js-node.github.io/log4js-node/logLevelFilter.html)

根据事件级别过滤要记录的日志事件

| 属性     | 类型   | 必填 | 值                                             |
| :------- | :----- | :--- | :--------------------------------------------- |
| type     | string | 是   | logLevelFilter                                 |
| appender | string | 是   | 要在同一配置中定义的要过滤的appender的名称     |
| level    | string | 是   | 允许通过过滤器的最低事件级别                   |
| maxLevel | string | 可选 | （默认为FATAL） - 允许通过过滤器的最大事件级别 |

示例

```
log4js.configure({
  appenders: {
    everything: { type: 'file', filename: 'all-the-logs.log' },
    emergencies: { type: 'file', filename: 'panic-now.log' },
    just-errors: { type: 'logLevelFilter', appender: 'emergencies', level: 'error' }
  },
  categories: {
    default: { appenders: ['just-errors', 'everything' ], level: 'debug' }
  }
});
```

## API

### configuration

`log4js.configure(object || string)` ：配置 log4js。

| 参数   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| string | 加载配置的文件名。配置文件必须是 JSON 文件，并包含一个配置对象（参见下面的格式） |
| object | 直接传递一个configuration对象                                |

在应用程序中首次 `require('log4js')` 之后，应该立即进行配置。如果不调用 configure，log4js 将使用 LOG4JS_CONFIG （如果已定义）或默认配置。默认的配置定义了一个 appender，使用带颜色的布局将日志记录到 stdout，但也定义了默认日志级别是关闭的（即不会输出日志）。

如果您使用的是 cluster，那么在工作进程及主进程中都会调用 configure。工作进程将会为您的类别选择正确的级别，以及选择您定义的任何自定义级别。Appenders 只会在主进程被定义。因此，不存在多个进程试图写入同一个 appender 的危险。不需要特殊的配置来使用带有 cluster 的 Log4js （与以前的版本不同）。

configuration 对象必须定义至少一个 appender 和一个默认类别。如果配置无效，Log4js 将抛出异常。

configure 方法调用返回已配置的 Log4js 对象。

### Configuration 对象

#### appenders (object)

将命名 appender（string）映射到 appender definitions （object）的 map。appender definitions 必须有一个属性 type（string），其他属性依赖于 appender type。

```
log4js.configure({
    appenders: [
        {   
            type: 'console' //控制台输出
        },
        {
            type: 'file', //文件输出
            filename: 'logs/access.log',
            maxLogSize: 1024,
            backups:3,
            category: 'normal'
        }
    ]
});
```

#### categories (object)

将命名 categories （string）映射到 category definitions（object）。你需要定义默认类别 category 用于所有与特定类别不匹配的日志事件。

类别定义 category definitions 有两个属性：

- appenders (array of strings)：在这个 category 类别中使用的 appender 名称列表。一个 category 类别中至少要有一个 appender
- level (string, 不区分大小写)：这个 category 类别将给 appender 发送最小的日志级别。例如：如果设置成“error”，那么 appender 将只会收到级别为‘error’, ‘fatal’, ‘mark’的日志事件，日志事件为‘info’, ‘warn’, ‘debug’, ‘trace’的将会被忽略。

#### pm2 (可选, boolean)：

若您的 app 使用了 pm2，则这里必须设置为true，否则日志将不会工作（另外您还得下载 pm2-intercom作为 pm2模块: pm2 install pm2-intercom）

#### pm2InstanceVar (string, 可选)

(默认 ‘NODE_APP_INSTANCE’)：如果您使用pm2并更改了默认名称，则这里必须要设置。

#### disableClustering (boolean, 可选)

true：使用的 log4js 忽略集群环境（clustered environments）或者你在 pm2 日志中遇到了麻烦。每一个工作进程都将进行自己的日志记录。请小心使用这里如果你要把日志记录输出到文件。

### Loggers

```
log4js.getLogger([category])
```

## 使用示例

### 结合Express使用——网络请求时的日志

```js
var express = require('express');
var app = express();

var log4js = require('log4js');
log4js.configure({
    appenders: {
        console:{
            type:"console"
        }
        access_file:{
            type: "file",
            filename: "./access.log",
            maxLogSize: 10,
            backups: 6,
            category: 'access'
        }
    },
    categories:{
        default:{
            appenders:["console"],
            level:"info"
        },
        access:{
            appenders:["access_file"],
            level:'info'
        }
    }
    replaceConsole: true
});

var logger = log4js.getLogger('access');
app.use(log4js.connectLogger(logger, { level: 'auto', format:':method :url :status :response-time ms'}}));

logger.debug("loglog");
logger.info("infoinfo");
logger.error("errorerror");

console.log("测试");
console.error("错误");

app.get('/', function (req, res) {
    res.send("hello");

});

app.listen(3000, function () {
    console.log("Server Running on http://localhost:3000");
});
```

### 需求实例

1. 每天生成一个日志文件,放在/logs目录下，名字如2017-09-23.log；
2. 单独将log4js配置在一个文件中，外界不需要每次配置；
3. 记录客户端请求的HTTP状态码、URL、方法。
4. 终端显示所有日志信息，日志文件只记录WARN以及以上级别的信息。

### 实际使用中的其他细节的简略概要

配置文件我配置了两套,分别是

- 开发调试环境的,所有type都是console
- 线上环境配置,type、路径和日志级别有所改动

## 参考

- <https://www.jianshu.com/p/9604d08db899>
- <https://www.cnblogs.com/duhuo/p/5176154.html>
- <https://blog.csdn.net/m0_37263637/article/details/80328505>

other

- <https://www.cnblogs.com/yangzhx/p/4711311.html>
- <https://blog.csdn.net/chenyufeng1991/article/details/54809927>
- <https://blog.csdn.net/xjtroddy/article/details/51697077>
- <https://blog.csdn.net/cdnight/article/details/50857268>
- <https://zhuanlan.zhihu.com/p/22110802>
