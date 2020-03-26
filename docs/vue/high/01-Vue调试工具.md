# Vue调试工具

Vue devtools是基于google chrome浏览器的一款调试vue.js应用的开发者浏览器扩展，可以在浏览器开发者工具下调试代码。

## 安装

### 1.到github下载

```js
git clone https://github.com/vuejs/vue-devtools
```

### 2.在vue-devtools目录下安装依赖包

```js
cd vue-devtools
cnpm install
```

### 3.修改manifest.json文件

![img](/blog/img/vue/vue-devtools-dir.png)

把`"persistent":false`改成`true`

```js
"persistent":true
```

### 4.编译代码

```js
npm run build
```

### 5.扩展Chrome插件

```js
Chrome浏览器 >  更多程序 > 拓展程序
```

点击加载已解压程序按钮, 选择 `vue-devtools > shells > chrome` 放入, 安装成功如下图 ![img](/blog/img/vue/vue-devtools-install.png)

### 6. vue-devtools使用

vue项目, 打开f12, 选择vue就可以使用了.

vue是数据驱动的, 这样就能看到对应数据了, 方便我们进行调试 ![img](/blog/img/vue/vue-devtools-use.png)
