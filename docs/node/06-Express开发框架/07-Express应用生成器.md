# Express应用生成器

通过应用生成器工具 express 可以快速创建一个应用的骨架。

## 安装应用生成器

通过如下命令安装：

```
$ npm install express-generator -g
```

-h 选项可以列出所有可用的命令行选项：

```js
$ express -h

  Usage: express [options] [dir]


  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
```

安装所有依赖包：

```
cd myapp
npm install
```

启动这个应用（MacOS 或 Linux 平台）：

```
DEBUG=myapp npm start
```

Windows 平台使用如下命令：

```
set DEBUG=myapp & npm start
```

然后在浏览器中打开 <http://localhost:3000/> 网址就可以看到这个应用了。

## 文件结构

```js
/
├── app.js                              入口文件
│
├── views                               存放视图文件 如jade,ejs,html等
│   ├── admin                           后台视图文件
│   │   ├── login.html
│   │   └── reg.html              
│   └── index                           前台视图文件
│       ├── index.html
│       ├── header.html
│       └── footer.html
│
├── controllers/                        控制器文件
│   
├── models/                             模型文件
│     
├── routes                              存放路由文件
│   ├── index.js                       
│   └── user.js                       
│
├── public                              存放image , css , js 等静态文件
│   ├── images/
│   ├── css/
│   └── js/
│
├── node_modules                        存放模块  
│
└── package.json                        npm包配置文件，工程信息以及模块依赖
```


  