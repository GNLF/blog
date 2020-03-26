# vue文件

vuejs 自定义了一种.vue文件，可以把html, css, js 写到一个文件中，从而实现了对一个组件的封装， 一个.vue 文件就是一个单独的组件。

打开目录中App.vue查看：

```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## template标签

template 中都是html 代码，它定义了在页面中显示的内容，由于里面还有变量，也可以说定义了一个模版；

## script标签

script中都是js 代码，它定义这个组件中所需要的数据和及其操作，

## style标签

style 里面是css 样式，定义这个组件的样式

## script标签内容介绍

在不使用.vue 单文件时，我们是通过 Vue 构造函数创建一个 Vue 根实例来启动vuejs 项目，Vue 构造函数接受一个对象，这个对象有一些配置属性 el, data, component, template 等，从而对整个应用提供支持。

```js
new Vue({
  el: '#app',
  data: {
        msg: "hello Vue"
  }  
})
```

在.vue文件中，export default 后面的对象 就相当于 `new Vue()` 构造函数中的接受的对象，它们都是定义组件所需要的数据（data）, 以及操作数 据的方法等， 更为全面的一个 export default 对象，有methods, data, computed, 这时可以看到, 这个对象和new Vue() 构造函数中接受的对象是一模一样的。但要注意 `data` 的书写方式不同。**在 .vue 组件, data 必须是一个函数，它return（返回一个对象）**，这个返回的对象的数据，供组件实现。
