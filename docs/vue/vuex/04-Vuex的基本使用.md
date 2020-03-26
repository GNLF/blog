# 四个核心概念

| 概念      | 解释                                                         |
| --------- | ------------------------------------------------------------ |
| State     | Vuex仓库中的数据。                                           |
| Getter    | 类似于Vue实例中的计算属性，Getter就是普通的获取state包装函数。 |
| Mutations | Vuex 的 store 中的状态更改的唯一方法是提交 mutation。Vuex 中的 mutations 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。 |
| Action    | action可以触发Mutations，不能直接改变state。(store.dispatch('nameAsyn')) |

## state

> 每个应用将有且只有一个 `store` 实例，是一个 "唯一数据源".

state就是全局的状态（数据源）

我们可以用以下方式在Vue 组件中获得Vuex的state状态

```js
new Vuex.Store({
    state:{
        count:0
    }
})
# template  
<div>{{ $store.state.count }}</div>

# javascript
console.log(this.$store.state.count)
```

## getters

getters其实可以认为是 store 的计算属性，用法和计算属性差不多。

```js
new Vuex.Store({
    getters:{
        getCount:(state)=>{
            return state.count+5;
        }
    }
})
# template
<div>{{ $store.getters.getCount}}</div>

# javascript
console.log(this.$store.getters.getCount)
```

## mutations

mutations是操作state的唯一方法，即只有mutations方法能够改变state状态值。

### 基本操作

```js
new Vuex.Store({
    mutations:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        }
    }
})

this.$store.commit('increment')

this.$store.commit('decrement')
```

### 传递参数

```js
new Vuex.Store({
    mutations:{
        increment:(state,n)=>{
            state.count+n;
        },
        decrement:(state,n)=>{
            state.count-n;
        }
    }
})

this.$store.commit('increment',5)

this.$store.commit('decrement',10)
```

这里只是传了一个数字，在大多数情况下，传递的是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读。

> 注意：mutations方法必须是同步方法！

## actions

之前说mutations方法必须只能是同步方法，为了处理异步方法，actions出现了。

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

```js
new Vuex.Store({
    mutations:{
        increment:(state)=>{
            state.count++;
        }
    },
    actions:{
        incrementAsync:(store)=>{
            setTimeout(function(){
                store.commit("increment")
            },2000)
        }
    }
})

# 不同于mutations使用commit方法，actions使用dispatch方法。
this.$store.dispatch('incrementAsync')
```

## mapState、mapGetters、mapActions

很多时候 , $store.state.dialog.show 、$store.dispatch('switch_dialog') 这种写法又长又臭 , 很不方便 , 我们没使用 vuex 的时候 , 获取一个状态只需要 this.show , 执行一个方法只需要 this.switch_dialog 就行了 , 使用 vuex 使写法变复杂了 ?

使用 mapState、mapGetters、mapActions 就不会这么复杂了。

```html
<template>
  <el-dialog :visible.sync="show"></el-dialog>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed:{

    //这里的三点叫做 : 扩展运算符
    ...mapState({
      show:state=>state.dialog.show
    }),
  }
}
</script>
```

相当于 :

``` js
Vuex基本使用
Vuex 中 Store 的模板化定义如下：

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    //应用状态的数据结构
    state: {
    },
    //
    actions: {
    },
    mutations: {
    },
    getters: {
    },  
    modules: {

    }
})
export default store
上述代码中包含了定义 Vuex Store 时关键的 5 个属性：

state
state 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。

state: {
  projects: [],
  userProfile: {}
}
actions
Actions 即是定义提交触发更改信息的描述，常见的例子有从服务端获取数据，在数据获取完成后会调用store.commit()来调用更改 Store 中的状态。可以在组件中使用dispatch来发出 Actions。

actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
      axios.get('/secured/projects').then((response) => {
        commit('SET_PROJECT_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  }
mutations
调用 mutations 是唯一允许更新应用状态的地方。

mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list
    }
  }
getters
Getters 允许组件从 Store 中获取数据，譬如我们可以从 Store 中的 projectList 中筛选出已完成的项目列表：

getters: {
 completedProjects: state => {
  return state.projects.filter(project => project.completed).length
 }
}
modules
使用单一状态树，导致应用的所有状态集中到一个很大的对象。但是，当应用变得很大时，store 对象会变得臃肿不堪。 为了解决以上问题，Vuex 允许我们将 store 分割到模块（module）。每个模块拥有自己的 state、mutation、action、getters、甚至是嵌套子模块——从上至下进行类似的分割：

const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

mapGetters、mapActions 和 mapState 类似 , mapGetters 一般也写在 computed 中 , mapActions 一般写在 methods 中。
