# vue-lazyload

[![Build Status](https://img.shields.io/circleci/project/hilongjw/vue-lazyload/master.svg?style=flat-square)](https://circleci.com/gh/hilongjw/vue-lazyload) [![npm version](https://img.shields.io/npm/v/vue-lazyload.svg?style=flat-square)](http://badge.fury.io/js/vue-lazyload) [![npm downloads](https://img.shields.io/npm/dm/vue-lazyload.svg?style=flat-square)](http://badge.fury.io/js/vue-lazyload) [![npm license](https://img.shields.io/npm/l/vue-lazyload.svg?style=flat-square)](http://badge.fury.io/js/vue-lazyload) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com/) [![CDNJS version](https://img.shields.io/cdnjs/v/vue-lazyload.svg)](https://cdnjs.com/libraries/vue-lazyload)

[vue-lazyload](https://github.com/hilongjw/vue-lazyload)是一个在vue中使用图片懒加载的插件。

## 安装

```js
npm install vue-lazyload --save
```

## 使用插件

在 src/main.js 导入import并使用use插件

```js
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
```

也可以配置一些选项, 建议使用这种配置方式，配置一些参数

```js
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
```

需要懒加载的图片绑定 v-bind:src 修改为 v-lazy

```html
# 示例1
<template>
  <div>
      <!-- <img v-bind:src="img"> -->
    <img v-lazy="img">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      img: 'https://avatar.csdn.net/0/F/7/3_vbirdbest.jpg'
    }
  }
}
</script>

# 示例2
<ul>
  <li v-for="img in list">
    <img v-lazy="img.src" >
  </li>
</ul>

# 示例3
<div v-lazy-container="{ selector: 'img' }">
  <img data-src="//domain.com/img1.jpg">
  <img data-src="//domain.com/img2.jpg">
  <img data-src="//domain.com/img3.jpg">  
</div>

# 示例4
<div v-lazy-container="{ selector: 'img', error: 'xxx.jpg', loading: 'xxx.jpg' }">
  <img data-src="//domain.com/img1.jpg">
  <img data-src="//domain.com/img2.jpg">
  <img data-src="//domain.com/img3.jpg">  
</div>
```

### 选项配置

| 参数            | 描述                                                         | 默认值                                                       | 类型                  |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------- |
| preLoad         | 预加载高度比例                                               | `1.3`                                                        | Number                |
| error           | 图片路径错误时加载图片                                       | `'data-src'`                                                 | String                |
| loading         | 加载中显示图片                                               | `'data-src'`                                                 | String                |
| attempt         | 尝试加载图片数量                                             | `3`                                                          | Number                |
| listenEvents    | 想要监听的vue事件，默认['scroll']可以省略，当插件跟页面中的动画或过渡等事件有冲突是，可以尝试其他选项 | `['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']` | Desired Listen Events |
| adapter         | 动态修改元素属性                                             | `{ }`                                                        | Element Adapter       |
| filter          | the image's listener filter（动态修改图片地址路径）          | `{ }`                                                        | Image listener filter |
| lazyComponent   | lazyload component                                           | `false`                                                      | Lazy Component        |
| dispatchEvent   | trigger the dom event                                        | `false`                                                      | Boolean               |
| throttleWait    | throttle wait                                                | `200`                                                        | Number                |
| observer        | use IntersectionObserver                                     | `false`                                                      | Boolean               |
| observerOptions | IntersectionObserver options                                 | `{ rootMargin: '0px', threshold: 0.1 }`                      | IntersectionObserver  |
