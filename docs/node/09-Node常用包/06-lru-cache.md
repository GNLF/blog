# lru-cache

为了优化程序性能，我们常常需要奖数据缓存起来，根据实际情况，我们可以将数据存储到磁盘、数据库、redis等。

但是有时候要缓存的数据量非常小，或者项目规模非常小，也许就是一个工具脚本，使用redis等外部数据库，还得做依赖部署。而直接将数据保存在程序变量中，最经济、快捷。但是这样就会带来一些其他问题，比如缓存更新、缓存过期等。

### lru-cache介绍

| 名称       | 地址                                       |
| :--------- | :----------------------------------------- |
| GitHub仓库 | <https://github.com/isaacs/node-lru-cache> |

lru-cache 用于在内存中管理缓存数据，并且支持LRU算法。可以让程序不依赖任何外部数据库实现缓存管理。

- LRU算法：尽量保留最近使用过的项
- 可指定缓存大小
- 可指定缓存项过期时间

> LruCache的缓存算法
> LruCache采用的缓存算法为LRU（Least Recently Used），最近最少使用算法。核心思想是当缓存满时，会优先淘汰那些近期最少使用的缓存对象。

## 基本使用

### 安装

```
npm install lru-cache --save
```

### 使用示例

```
var lru = require("lru-cache");
var options = {
    max : 500,               //最大条数
    maxAge : 1000 * 60 * 60  //缓存时间 1000 * 60 * 60 = 1小时
}
var cache = lru(options);

//设置指定key缓存
cache.set("key", "value")

//获取指定key缓存
cache.get("key") // "value"

//清空所有缓存
cache.reset()
```

### API

```
var lru = require("lru-cache");
var cache = lru();
# 设置缓存
cache.set(key, value[, maxAge])

# 获取指定key缓存，更新最近使用
cache.get(key) => value
```

- 使用set或get方法会将该key进行最新使用更新
- maxAge是一个可以选参数，传入将覆盖设置的值
- get如果访问的key不存在，则返回undefined

获取

```
# 获取缓存，但是不进行最新使用更新
cache.peek(key)
```

删除

```
# 从缓存中删除key。
cache.del(key)

# 清空所有缓存
cache.reset();
```

检测某个key是否在缓存中

```
cache.has(key)
```

长度

```
# 返回缓存中对象的总长度
cache.length
```

其他API

```
# 返回缓存中的键数组。
keys()

# 返回缓存中的值数组。
values()
```

### 注意事项

虽然，lru-cache 使用非常方便，但是lru-cache的缓存数据保存在当前进程内存内，这就决定了依赖lru-cache的项目是有状态的程序，这样就不能够分布式部署多实例负载均衡，所以如果系统设计需要多实例运行，那么还是需要使用redis。


  