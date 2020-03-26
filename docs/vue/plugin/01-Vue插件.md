# Vue插件

插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：

- 添加全局方法或者属性。如: vue-custom-element
- 添加全局资源：指令/过滤器/过渡等。如 [vue-touch](https://github.com/vuejs/vue-touch)
- 通过全局混入来添加一些组件选项。如 [vue-router](https://github.com/vuejs/vue-router)
- 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
- 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 [vue-router](https://github.com/vuejs/vue-router)

## 使用插件

通过全局方法 `Vue.use()` 使用插件。它需要在你调用 `new Vue()` 启动应用之前完成：

```js
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
  // ...组件选项
})
```

也可以传入一个可选的选项对象：

```js
Vue.use(MyPlugin, { someOption: true })
```

> Vue.use 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。

Vue.js 官方提供的一些插件 (例如 vue-router) 在检测到 Vue 是可访问的全局变量时会自动调用 `Vue.use()`。然而在像 CommonJS 这样的模块环境中，你应该始终显式地调用 `Vue.use()`：

```js
// 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
var Vue = require('vue')
var VueRouter = require('vue-router')

// 不要忘了调用此方法
Vue.use(VueRouter)
```

## 开发插件

Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：

```js
MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalProp = value;
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }

    // 2. 添加全局资源
    Vue.filter('my-filter',function(){
        // 逻辑...
    })
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
            // 逻辑...
        }
        ...
    })

    // 3. 注入组件选项
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
        ...
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    }
}
```

## Vue自定义Loading插件

### 目录结构

```js
├── components
│   ├── Loading
│   ├── ├── index.js
│   └── └── index.css
└── main.js
```

### 插件逻辑

components/Loading/index.js

```js
/*
   自定义 loading 组件
   调用
   this.$loading('正在加载中...');
   this.$loading.close();
*/
let _LOADING = {
       show: false,     // Boolean loading显示状态
       component: null  // Object loading组件
    };
export default {
   install(Vue) {
       /*
           text: String
           type: String
       */
       Vue.prototype.$loading = function(text='正在加载中...', type) {
           if (type == 'close') {
               _LOADING.component.show = _LOADING.show = false;
           } else {
               if (_LOADING.show) {
                   return;
               }
               let LoadingCompoent = Vue.extend({
                   data: function() {
                       return {
                           show: _LOADING.show
                       }
                   },
                   template: `<div v-show="show" class="zh-load-mark">
                                   <div class="zh-load-box">
                                       <div class="zh-loading">
                                           <div class="loading_leaf loading_leaf_0"></div>
                                           <div class="loading_leaf loading_leaf_1"></div>
                                           <div class="loading_leaf loading_leaf_2"></div>
                                           <div class="loading_leaf loading_leaf_3"></div>
                                           <div class="loading_leaf loading_leaf_4"></div>
                                           <div class="loading_leaf loading_leaf_5"></div>
                                           <div class="loading_leaf loading_leaf_6"></div>
                                           <div class="loading_leaf loading_leaf_7"></div>
                                           <div class="loading_leaf loading_leaf_8"></div>
                                           <div class="loading_leaf loading_leaf_9"></div>
                                           <div class="loading_leaf loading_leaf_10"></div>
                                           <div class="loading_leaf loading_leaf_11"></div>
                                       </div>
                                       <div class="zh-load-content">${text}</div>
                                   </div>
                               </div>`
               });
               _LOADING.component = new LoadingCompoent();
               let element = _LOADING.component.$mount().$el;
               document.body.appendChild(element);
               _LOADING.component.show = _LOADING.show = true;
           }
       };
       // 打开/关闭
       ['open', 'close'].forEach(function(type) {
           Vue.prototype.$loading[type] = function(text) {
               return Vue.prototype.$loading(text, type);
           }
       });
   }
}
```

### 插件样式

components/Loading/index.css

```css
.zh-load-mark {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
}
.zh-load-box {
    position: fixed;
    z-index: 3;
    width: 7.6em;
    min-height: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
}
.zh-load-content {
    margin-top: 64%;
    font-size: 14px;
}
.zh-loading {
    position: absolute;
    width: 0px;
    left: 50%;
    top: 38%;
}
.loading_leaf {
    position: absolute;
    top: -1px;
    opacity: 0.25;
}
.loading_leaf:before {
    content: " ";
    position: absolute;
    width: 9.14px;
    height: 3.08px;
    background: #d1d1d5;
    box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;
    border-radius: 1px;
    -webkit-transform-origin: left 50% 0px;
    transform-origin: left 50% 0px;
}
.loading_leaf_0 {
    -webkit-animation: opacity-0 1.25s linear infinite;
    animation: opacity-0 1.25s linear infinite;
}
.loading_leaf_0:before {
    -webkit-transform: rotate(0deg) translate(7.92px, 0px);
    transform: rotate(0deg) translate(7.92px, 0px);
}
.loading_leaf_1 {
    -webkit-animation: opacity-1 1.25s linear infinite;
    animation: opacity-1 1.25s linear infinite;
}
.loading_leaf_1:before {
    -webkit-transform: rotate(30deg) translate(7.92px, 0px);
    transform: rotate(30deg) translate(7.92px, 0px);
}
.loading_leaf_2 {
    -webkit-animation: opacity-2 1.25s linear infinite;
    animation: opacity-2 1.25s linear infinite;
}
.loading_leaf_2:before {
    -webkit-transform: rotate(60deg) translate(7.92px, 0px);
    transform: rotate(60deg) translate(7.92px, 0px);
}
.loading_leaf_3 {
    -webkit-animation: opacity-3 1.25s linear infinite;
    animation: opacity-3 1.25s linear infinite;
}
.loading_leaf_3:before {
    -webkit-transform: rotate(90deg) translate(7.92px, 0px);
    transform: rotate(90deg) translate(7.92px, 0px);
}
.loading_leaf_4 {
    -webkit-animation: opacity-4 1.25s linear infinite;
    animation: opacity-4 1.25s linear infinite;
}
.loading_leaf_4:before {
    -webkit-transform: rotate(120deg) translate(7.92px, 0px);
    transform: rotate(120deg) translate(7.92px, 0px);
}
.loading_leaf_5 {
    -webkit-animation: opacity-5 1.25s linear infinite;
    animation: opacity-5 1.25s linear infinite;
}
.loading_leaf_5:before {
    -webkit-transform: rotate(150deg) translate(7.92px, 0px);
    transform: rotate(150deg) translate(7.92px, 0px);
}
.loading_leaf_6 {
    -webkit-animation: opacity-6 1.25s linear infinite;
    animation: opacity-6 1.25s linear infinite;
}
.loading_leaf_6:before {
    -webkit-transform: rotate(180deg) translate(7.92px, 0px);
    transform: rotate(180deg) translate(7.92px, 0px);
}
.loading_leaf_7 {
    -webkit-animation: opacity-7 1.25s linear infinite;
    animation: opacity-7 1.25s linear infinite;
}
.loading_leaf_7:before {
    -webkit-transform: rotate(210deg) translate(7.92px, 0px);
    transform: rotate(210deg) translate(7.92px, 0px);
}
.loading_leaf_8 {
    -webkit-animation: opacity-8 1.25s linear infinite;
    animation: opacity-8 1.25s linear infinite;
}
.loading_leaf_8:before {
    -webkit-transform: rotate(240deg) translate(7.92px, 0px);
    transform: rotate(240deg) translate(7.92px, 0px);
}
.loading_leaf_9 {
    -webkit-animation: opacity-9 1.25s linear infinite;
    animation: opacity-9 1.25s linear infinite;
}
.loading_leaf_9:before {
    -webkit-transform: rotate(270deg) translate(7.92px, 0px);
    transform: rotate(270deg) translate(7.92px, 0px);
}
.loading_leaf_10 {
    -webkit-animation: opacity-10 1.25s linear infinite;
    animation: opacity-10 1.25s linear infinite;
}
.loading_leaf_10:before {
    -webkit-transform: rotate(300deg) translate(7.92px, 0px);
    transform: rotate(300deg) translate(7.92px, 0px);
}
.loading_leaf_11 {
    -webkit-animation: opacity-11 1.25s linear infinite;
    animation: opacity-11 1.25s linear infinite;
}
.loading_leaf_11:before {
    -webkit-transform: rotate(330deg) translate(7.92px, 0px);
    transform: rotate(330deg) translate(7.92px, 0px);
}
@-webkit-keyframes opacity-0 {
    0% {
        opacity: 0.25;
    }
    0.01% {
        opacity: 0.25;
    }
    0.02% {
        opacity: 1;
    }
    60.01% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}
@-webkit-keyframes opacity-1 {
    0% {
        opacity: 0.25;
    }
    8.34333% {
        opacity: 0.25;
    }
    8.35333% {
        opacity: 1;
    }
    68.3433% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}
@-webkit-keyframes opacity-2 {
    0% {
        opacity: 0.25;
    }
    16.6767% {
        opacity: 0.25;
    }
    16.6867% {
        opacity: 1;
    }
    76.6767% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}
@-webkit-keyframes opacity-3 {
    0% {
        opacity: 0.25;
    }
    25.01% {
        opacity: 0.25;
    }
    25.02% {
        opacity: 1;
    }
    85.01% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}
@-webkit-keyframes opacity-4 {
    0% {
        opacity: 0.25;
    }
    33.3433% {
        opacity: 0.25;
    }
    33.3533% {
        opacity: 1;
    }
    93.3433% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}
@-webkit-keyframes opacity-5 {
    0% {
        opacity: 0.270958333333333;
    }
    41.6767% {
        opacity: 0.25;
    }
    41.6867% {
        opacity: 1;
    }
    1.67667% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.270958333333333;
    }
}
@-webkit-keyframes opacity-6 {
    0% {
        opacity: 0.375125;
    }
    50.01% {
        opacity: 0.25;
    }
    50.02% {
        opacity: 1;
    }
    10.01% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.375125;
    }
}
@-webkit-keyframes opacity-7 {
    0% {
        opacity: 0.479291666666667;
    }
    58.3433% {
        opacity: 0.25;
    }
    58.3533% {
        opacity: 1;
    }
    18.3433% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.479291666666667;
    }
}
@-webkit-keyframes opacity-8 {
    0% {
        opacity: 0.583458333333333;
    }
    66.6767% {
        opacity: 0.25;
    }
    66.6867% {
        opacity: 1;
    }
    26.6767% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.583458333333333;
    }
}
@-webkit-keyframes opacity-9 {
    0% {
        opacity: 0.687625;
    }
    75.01% {
        opacity: 0.25;
    }
    75.02% {
        opacity: 1;
    }
    35.01% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.687625;
    }
}
@-webkit-keyframes opacity-10 {
    0% {
        opacity: 0.791791666666667;
    }
    83.3433% {
        opacity: 0.25;
    }
    83.3533% {
        opacity: 1;
    }
    43.3433% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.791791666666667;
    }
}
@-webkit-keyframes opacity-11 {
    0% {
        opacity: 0.895958333333333;
    }
    91.6767% {
        opacity: 0.25;
    }
    91.6867% {
        opacity: 1;
    }
    51.6767% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.895958333333333;
    }
}
```

### 使用插件

 main.js

```js
// Loading
import './components/Loading/index.css';
import Loading from './components/Loading/index';
Vue.use(Loading);
```

调用

```js
this.$loading('正在加载中...');
this.$loading.close();
```
