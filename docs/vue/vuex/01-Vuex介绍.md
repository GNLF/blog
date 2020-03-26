# Vuex介绍

> 引用 Redux 的作者 Dan Abramov 的话说就是： Flux 架构就像眼镜,您自会知道什么时候需要它。

[![Build Status](https://img.shields.io/circleci/project/vuejs/vue/dev.svg)](https://circleci.com/gh/vuejs/vue/tree/dev) [![Coverage Status](https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg)](https://codecov.io/github/vuejs/vue?branch=dev) [![Downloads](https://img.shields.io/npm/dm/vuex.svg)](https://www.npmjs.com/package/vuex) [![Version](https://img.shields.io/npm/v/vuex.svg)](https://www.npmjs.com/package/vuex) [![License](https://img.shields.io/npm/l/vuex.svg)](https://www.npmjs.com/package/vuex)

Vuex 是适用于 Vue.js 应用的状态管理库，为应用中的所有组件提供集中式的状态存储与操作，保证了所有状态以可预测的方式进行修改。

- 主要应用于Vue.js中管理数据状态的一个库。
- 通过创建一个集中的数据存储，供程序中所有的组件访问。

## 何时使用

当我们遇到下列几种情况的时候，就需要采用Vuex状态管理库：

同一个页面，不同组件使用同一数据，并操作：

![img](/blog/img/vue/vuex11.jpg)

![img](/blog/img/vue/vuex13.jpg)

不同页面，使用同一数据源：

![img](/blog/img/vue/vuex12.jpg)

来自后端的数据被不同页面使用：

![img](/blog/img/vue/vuex14.png)

### 框架核心流程

整个Vuex框架的运行流程:

![img](/blog/img/vue/vuex2.png)

Vuex为Vue Components建立起了一个完整的生态圈，包括开发中的API调用一环。围绕这个生态圈，简要介绍一下各模块在核心流程中的主要功能：

1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
