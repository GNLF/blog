(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{612:function(e,t,s){"use strict";s.r(t);var a=s(17),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"express-搭建restfulapi服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#express-搭建restfulapi服务器"}},[e._v("#")]),e._v(" Express 搭建RESTfulAPI服务器")]),e._v(" "),s("h2",{attrs:{id:"请求头设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求头设置"}},[e._v("#")]),e._v(" 请求头设置")]),e._v(" "),s("h3",{attrs:{id:"解决跨域问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域问题"}},[e._v("#")]),e._v(" 解决跨域问题")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('//该资源可以被任意外域访问\nres.header("Access-Control-Allow-Origin", "*");  \n\n//该资源仅允许来自 http://foo.example 访问\nres.header("Access-Control-Allow-Origin", "http://foo.example");\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"允许的请求类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#允许的请求类型"}},[e._v("#")]),e._v(" 允许的请求类型")]),e._v(" "),s("p",[e._v("首部字段 "),s("code",[e._v("Access-Control-Allow-Methods")]),e._v(" 表明服务器允许客户端使用 PUT,POST,GET,DELETE 和 OPTIONS 方法发起请求。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"利用中间件配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用中间件配置"}},[e._v("#")]),e._v(" 利用中间件配置")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("app.use(function(req, res, next) {  \n    res.setHeader('Access-Control-Allow-Origin', '*');\n    res.setHeader('Access-Control-Allow-Methods', \"PUT,POST,GET,DELETE,OPTIONS\");\n    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization,x-access-token');\n    next();  \n});\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("参数")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("描述")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Access-Control-Allow-Origin")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Access-Control-Allow-Headers")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers"),s("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);