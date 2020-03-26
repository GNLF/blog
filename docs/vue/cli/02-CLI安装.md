# CLI安装

## 安装命令行工具

> Node 版本要求：Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。

安装

```js
$npm install -g @vue/cli
```

检查版本

```js
$vue -V
```

## 命令行工具介绍

```js
$ vue -h

  Usage: vue <command> [options]

  Options:

    -V, --version                         output the version number
    -h, --help                            output usage information

  Commands:

    create [options] <app-name>           create a new project powered by vue-cli-service  
                                          创建一个由vue-cli-service支持的新项目
    add <plugin> [pluginOptions]          install a plugin and invoke its generator in an already created project
                                          在已创建的项目中添加插件
    invoke <plugin> [pluginOptions]       invoke the generator of a plugin in an already created project
                                          在开发者模式下以零配置运行一个js或vue文件
    inspect [options] [paths...]          inspect the webpack config in a project with vue-cli-service
                                          在vue-cli-service的项目中检查webpack配置
    serve [options] [entry]               serve a .js or .vue file in development mode with zero config
                                          简单理解为开发环境下启动命令
    build [options] [entry]               build a .js or .vue file in production mode with zero config
                                          在生产模式下以零配置构建一个js或vue文件
    ui [options]                          start and open the vue-cli ui
                                          启动 打开 vue可视化工具
    init [options] <template> <app-name>  generate a project from a remote template (legacy API, requires @vue/cli-init)
                                          旧api 需要@vue/cli-init   就是原来的vue-cli init <template> <app-name>
    config [options] [value]              inspect and modify the config


  Run vue <command> --help for detailed usage of given command.
```

### vue create 搭建新项目

vue create 命令有一些可选项，你可以通过运行以下命令进行探索：

```js
vue create --help
用法：create [options] <app-name>

创建一个由 `vue-cli-service` 提供支持的新项目


选项：

  -p, --preset <presetName>       忽略提示符并使用已保存的或远程的预设选项
  -d, --default                   忽略提示符并使用默认预设选项
  -i, --inlinePreset <json>       忽略提示符并使用内联的 JSON 字符串预设选项
  -m, --packageManager <command>  在安装依赖时使用指定的 npm 客户端
  -r, --registry <url>            在安装依赖时使用指定的 npm registry
  -g, --git [message]             强制 / 跳过 git 初始化，并可选的指定初始化提交信息
  -n, --no-git                    跳过 git 初始化
  -f, --force                     覆写目标目录可能存在的配置
  -c, --clone                     使用 git clone 获取远程预设选项
  -x, --proxy                     使用指定的代理创建项目
  -b, --bare                      创建项目时省略默认组件中的新手指导信息
  -h, --help                      输出使用帮助信息
```
