# Vue CLI 3 介绍

> 注意：这份文档是对应 @vue/cli 3.x 版本的。

| 名称         | 地址                        |
| :----------- | :-------------------------- |
| VueCLI3 文档 | <https://cli.vuejs.org/zh/> |

## 介绍

Vue-cli这个命令行工具可以帮助我们快速构建足以支撑实际项目开发的Vue环境，Vue-cli的存在将项目的初始化工作复杂度降到最低。

提供：

- CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue 命令。它可以通过 vue create 快速创建一个新项目的脚手架，或者直接通过 vue serve 构建新想法的原型。
- 你也可以通过 vue ui 通过一套图形化界面管理你的所有项目。
- CLI 服务是构建于 webpack 和 webpack-dev-server 之上的。
- CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等。Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件) 开头，非常容易使用。

### 使用概览

安装：

```js
npm install -g @vue/cli
```

创建一个项目：

```js
# 命令方式创建项目
vue create my-project
# OR
# 图形界面方式创建项目
vue ui
```
