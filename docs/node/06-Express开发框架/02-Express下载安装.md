# Express下载与安装

## 安装express

```
npm install express --save
```

> 安装 Node 模块时，如果指定了 --save 参数，那么此模块将被添加到 package.json 文件中 dependencies 依赖列表中。 然后通过 npm install 命令即可自动安装依赖列表中所列出的所有模块。

具体步骤：

1. 创建项目目录

   ```js
   mkdir test
   ```

2. 初始化项目

   ```js
   npm init
   ```

3. 进入目录,安装express

   ```js
   cd test
   npm install express --save
   ```

## 使用express

```js
var express = require('express');
var app = new express();
```


  