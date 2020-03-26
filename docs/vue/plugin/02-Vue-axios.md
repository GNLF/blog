# vue-axios

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

vue-axios是按照Vue的插件文档将axios封装，使用vue-axios更多是为了符合规范，使用方法与 axios一致

## vue-axios特点

1. 支持主流浏览器。支持ie9及以上浏览器
2. 支持拦截器。可以在请求发送前和发送请求后做一些处理

## vue-axios的使用

### 安装 axios 和 vue-axios

```js
$ npm install --save axios vue-axios
```

### 加载axios 和 vue-axios模块

main.js

```js
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
```

### 使用 vue-axios

```js
this.axios({
    method: 'post',
    url: '/user',
    data: {
      name: 'wise',
      info: 'wrong'
    }
})
.then((response) => {
    console.log(response.data)
})
.catch((error) => {
    console.log(error)
})
```
