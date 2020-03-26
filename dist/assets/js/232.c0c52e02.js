(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{636:function(s,t,n){"use strict";n.r(t);var a=n(17),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),n("p",[s._v("不管是小项目还是大项目，将配置与代码分离是一个非常好的做法。我们通常将配置写到一个配置文件里，如 config.js 或 config.json ，并放到项目的根目录下。但实际开发时我们会有许多环境，如本地开发环境、测试环境和线上环境等，不同环境的配置不同（如：MongoDB 的地址），我们不可能每次部署时都要去修改引用 config.test.js 或者 config.production.js。config-lite 模块正是你需要的。")]),s._v(" "),n("h2",{attrs:{id:"config-lite"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config-lite"}},[s._v("#")]),s._v(" config-lite")]),s._v(" "),n("p",[s._v("URL: "),n("a",{attrs:{href:"https://www.npmjs.com/package/config-lite",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/package/config-lite"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("config-lite 是一个轻量的读取配置文件的模块。config-lite 会根据环境变量（NODE_ENV）的不同加载 config 目录下不同的配置文件。如果不设置 NODE_ENV，则读取默认的 default 配置文件，如果设置了 NODE_ENV，则会合并指定的配置文件和 default 配置文件作为配置，config-lite 支持 .js、.json、.node、.yml、.yaml 后缀的文件。")]),s._v(" "),n("p",[s._v("如果程序以 NODE_ENV=test node app 启动，则 config-lite 会依次降级查找 config/test.js、config/test.json、config/test.node、config/test.yml、config/test.yaml 并合并 default 配置;")]),s._v(" "),n("p",[s._v("如果程序以 NODE_ENV=production node app 启动，则 config-lite 会依次降级查找 config/production.js、config/production.json、config/production.node、config/production.yml、config/production.yaml 并合并 default 配置。")]),s._v(" "),n("p",[s._v("config-lite 还支持冒泡查找配置，即从传入的路径开始，从该目录不断往上一级目录查找 config 目录，直到找到或者到达根目录为止。")]),s._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ npm i config-lite --save\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[s._v("#")]),s._v(" 引用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const config = require('config-lite')(__dirname);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),n("p",[s._v("在 myblog 下新建 config 目录，在该目录下新建 default.js，添加如下代码：")]),s._v(" "),n("p",[s._v("config/default.js")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  session"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    secret"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myblog'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    key"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myblog'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    maxAge"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2592000000")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  mongodb"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mongodb://localhost:27017/myblog'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("配置释义：")]),s._v(" "),n("ul",[n("li",[s._v("port: 程序启动要监听的端口号")]),s._v(" "),n("li",[s._v("session: express-session 的配置信息，后面介绍")]),s._v(" "),n("li",[s._v("mongodb: mongodb 的地址，以 mongodb:// 协议开头，myblog 为 db 名")])])])}),[],!1,null,null,null);t.default=e.exports}}]);