# Express模板引擎

## 什么是模板引擎

模板引擎是一个将页面模板和要显示的数据结合起来生成HTML页面的工具。

[EJS官方网站](http://ejs.co/)

## 原理

```js
function render(tpl,data){
    return tpl.replace(/\{\{(\w+)\}\}/g,function(input,words){
        return data[words];
        })
}
var result = render('<h1>{{title}}</h1>',{title:'人生如此美好'})
```

## 在express中使用模板引擎

```js
app.set('views',path.join(__dirname,'views')); //设置模板存储位置
app.set('view engine','ejs');
```

### 设置模板引擎后缀

```js
app.set('views',path.join(__dirname,'views')); //设置模板存储位置
app.set('view engine','html');
app.engine('html',require('ejs').renderFile); //使用ejs模板引擎解析html
```

### ejs的标签

- <% 'Scriptlet' 标签, 用于控制流，没有输出
- <%= 向模板输出值（带有转义）
- <%- 向模板输出没有转义的值
- <%# 注释标签，不执行，也没有输出
- <%% 输出字面的 '<%'
- %> 普通的结束标签

#### 语法

```js
<% code %> //javascript代码
<%= code %> //显示替换过html的特殊字符内容
<%- code %> //显示原始html内容(支持标签)
```

`<%= code %>`与`<%- code %>`的区别，code为普通字符串两者没有区别，为标签时`<%- code %>`会显示标签效果

#### 包含include

```js
<% include header %>
<% include tpl/footer %>
```

#### 自定义分隔符

```js
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var ejs = require('ejs');
ejs.delimiter = '$';
app.engine('ejs',ejs.renderFile);
```
