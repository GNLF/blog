# 创建VUE组件

在真实开发环境，我们往往要创建大量的组件，如果没有一个良好的组织规范，那么组件就会非常混乱，因此我们将存放组件的目录划分为两种： components目录存放的为公共组件，pages目录存放的为页面组件。

```js
├── src/                     # 项目源码目录
│   ├── main.js              # 入口js文件
│   ├── app.vue              # 根组件
│   ├── components           # 公共组件目录
│   │   └── title.vue
│   ├── pages/               # 页面目录
│   │   ├── about.vue
│   │   └── notfound.vue
```

创建一个组件：

在工程目录 `/src` 下 `component` 文件夹下创建一个 `firstcomponent.vue`;

```html
<template>
  <div>
    第一个组件
  </div>
</template>
<script>
export default {
}
</script>
<style>
</style>
```

## 使用方法

### 1. 引入

在标签内的第一行写

```html
import firstcomponent from './component/firstcomponent.vue'
```

### 2. 注册

在 标签内的 data 代码块后面加上 components: { firstcomponent }。

```js
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { firstcomponent }
}
```

### 3. 使用

在 `<template></template>` 内加上

```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <firstcomponent></firstcomponent>
  </div>
</template>
```
