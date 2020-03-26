# CLI服务

## 命令行创建项目

### 创建项目

新建文件夹，在该文件夹下打开命令窗口，输入以下命令，

```js
vue create project-name
```

进入向导配置界面

### 利用向导进行配置

按键盘上下键选择

- 默认（default）
- 手动（Manually）

```js
vue create test-vue1


Vue CLI v3.0.0
? Please pick a preset: (Use arrow keys)
> default (babel, eslint)        # 默认配置
  Manually select features       # 自定义配置
```

方向键上下移动，空格选中，Enter确定，自定义配置中，您将会看到这些配置项：

```js
Vue CLI v3.0.0
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <s
pace> to select, <a> to toggle all, <i> to invert selec
tion)
>(*) Babel                                # ES6 -> ES5
 ( ) TypeScript                           # javascript超集
 ( ) Progressive Web App (PWA) Support    # 渐进式Web应用(PWA)
 ( ) Router                               # vue路由
 ( ) Vuex                                 # 状态管理
 ( ) CSS Pre-processors                   # css预处理
 (*) Linter / Formatter                   # 规范类型
 ( ) Unit Testing                         # 测试
 ( ) E2E Testing                          # 测试
Vue CLI v3.0.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Ro
uter, Vuex
? Use history mode for router? (Requires proper server
setup for index fallback in production) (Y/n)
Vue CLI v3.0.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Ro
uter, Vuex
? Use history mode for router? (Requires proper server
setup for index fallback in production) Yes
? Where do you prefer placing config for Babel, PostCSS
, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N)
```

### 选择配置，这时你会看见一些选项

> 注：空格键是选中与取消，A键是全选

如果你决定手动选择特性，在操作提示的最后你可以选择将已选项保存为一个将来可复用的 preset。我们会在下一个章节讨论 preset 和插件。

```js
~/.vuerc
```

被保存的 preset 将会存在用户的 home 目录下一个名为 .vuerc 的 JSON 文件里。如果你想要修改被保存的 preset / 选项，可以编辑这个文件。

在项目创建的过程中，你也会被提示选择喜欢的包管理器或使用淘宝 npm 镜像源以更快地安装依赖。这些选择也将会存入 ~/.vuerc。

### 启动项目

```js
$ cd test-vue
$ npm run serve    //运行开发环境
```

scripts命令

```js
package.json
{
    "scripts":{
        "serve": "vue-cli-service serve",   // 开发运行
        "build": "vue-cli-service build"    // 打包运行
    }
}
```

#### vue serve命令介绍

```js
vue serve
Usage: serve [options] [entry]

在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器


Options:

  -o, --open  打开浏览器
  -c, --copy  将本地 URL 复制到剪切板
  -h, --help  输出用法信息
```

#### vue build命令介绍

```js
vue build
Usage: build [options] [entry]

在生产环境模式下零配置构建一个 .js 或 .vue 文件


Options:

  -t, --target <target>  构建目标 (app | lib | wc | wc-async, 默认值：app)
  -n, --name <name>      库的名字或 Web Components 组件的名字 (默认值：入口文件名)
  -d, --dest <dir>       输出目录 (默认值：dist)
  -h, --help             输出用法信息
```

## 生成项目目录结构

```js
/
 │
 ├── public/              # 库文件等，不会被webpack的loader处理,手动管理
 │      ├── index.html    # 网站首页
 │      └── favicon.ico   # 网站站标
 │
 ├── node_modules/        # 自动生成，包含Node生产依赖以及开发依赖
 │
 ├── src/                 # 开发目录
 │      ├── App.vue
 │      ├── assets/
 │      │      └── logo.png
 │      ├── components/
 │      │      └── Hello.vue
 │      ├── router/
 │      │      └── index.js
 │      └── main.js
 │
 ├── .gitignore           # git排除文件
 │
 ├── babel.config.js
 │
 ├── package.json
 │
 └── README.md
```
