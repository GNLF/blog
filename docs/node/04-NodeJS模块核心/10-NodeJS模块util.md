# Node.js 常用工具

> util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。

## util.inherits

```js
util.inherits(constructor, superConstructor)
```

此方法有2个参数: 此方法参数针对的都是构造函数

constructor : 构造函数

superConstructor: 父类构造函数

是一个实现对象间原型继承 的函数。

JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。

## isArray函数的基本用法

isArray函数可以判断对象是否为数组类型，是则返回ture,否则为false。语法如下：

```js
var util = require('util');
var result = util.isArray(object);
console.log(result);
```

## isDate函数的基本用法

isDate函数可以判断对象是否为日期类型，是则返回ture,否则返回false。语法如下：

```js
var util = require('util');
var result = util.isDate(object);
console.log(result);
```

## isRegExp函数的基本用法

isRegExp函数可以判断对象是否为正则类型，是则返回ture,否则返回false。语法如下：

```js
var util = require('util');
var result = util.isRegExp(object);
console.log(result);
```

## isBoolean函数的基本用法

```js
var util = require('util');
var result = util.isBoolean(object);
console.log(result);
```

## isBuffer函数的基本用法

```js
var util = require('util');
var result = util.isBuffer(object);
console.log(result);
```

## isFunction函数的基本用法

```js
var util = require('util');
var result = util.isFunction(object);
console.log(result);
```

## isNumber函数的基本用法

```js
var util = require('util');
var result = util.isNumber(object);
console.log(result);
```

## isObject函数的基本用法

```js
var util = require('util');
var result = util.isObject(object);
console.log(result);
```

## isString函数的基本用法

```js
var util = require('util');
var result = util.isString(object);
console.log(result);
```

## isNull函数的基本用法

```js
var util = require('util');
var result = util.isNull(object);
console.log(result);
```

## isUndefined函数的基本用法

```js
var util = require('util');
var result = util.isUndefined(object);
console.log(result);
```

## isNullOrUndefined 函数的基本用法

```js
var util = require('util');
var result = util.isNullOrUndefined(object);
console.log(result);
```


  