# module

使用单一状态树，导致应用的所有状态集中到一个很大的对象。但是，当应用变得很大时，store 对象会变得臃肿不堪。 为了解决以上问题，Vuex 允许我们将 store 分割到模块（module）。每个模块拥有自己的 state、mutation、action、getters、甚至是嵌套子模块——从上至下进行类似的分割：

```js
// store/index.js 文件
import moduleA from './modules/one'
import moduleB from './modules/two'

new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
// store/modules/one.js 文件:
export default{
    state: {
        title: '这是模块A'
    },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
}
// store/modules/two.js 文件:
export default{
    state: {
        title: '这是模块B'
    },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
}
// 在组件中使用模块中的内容
<template>
    <div class="hello">
        <h1>{{$store.state.a.title}}</h1>
        <h1>{{$store.state.b.title}}</h1>
    </div>
</template>
```
