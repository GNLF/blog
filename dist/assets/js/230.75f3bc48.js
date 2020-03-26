(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{633:function(t,e,v){"use strict";v.r(e);var _=v(17),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"web服务基础知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web服务基础知识"}},[t._v("#")]),t._v(" Web服务基础知识")]),t._v(" "),v("h2",{attrs:{id:"什么是服务器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务器"}},[t._v("#")]),t._v(" 什么是服务器")]),t._v(" "),v("blockquote",[v("p",[t._v("服务器可以是专业服务器，也可以是个人电脑。")])]),t._v(" "),v("p",[t._v("服务器：能够在特定(IP)服务器的特定端口上监听客户端的请求，并根据请求的路径返回响应结果。")]),t._v(" "),v("p",[t._v("客户端：只要能向特定IP服务器的特定端口发起请求，并接受响应的都叫客户端。")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("|         |     发请求--\x3e                |         |\n|  客户端  |<---------------------------\x3e|  服务器  |\n|         |     <--发响应                |         |\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("p",[t._v("服务器和客户端之间传递数据。")]),t._v(" "),v("p",[t._v("让形形色色的机器能够通过网络进行交互，我们需要指明一种协议(http和https)，和一种数据封装格式(html/json)。")]),t._v(" "),v("h2",{attrs:{id:"http介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http介绍"}},[t._v("#")]),t._v(" HTTP介绍")]),t._v(" "),v("p",[t._v("1.HTTP是一种超文本传送协议（HyperText Transfer Protocol），是一套计算机在网络中通信的一种规则。在TCP/IP体系结构中，HTTP属于应用层协议，位于TCP/IP协议的顶层。")]),t._v(" "),v("p",[t._v("2.HTTP是一种无状态的协议，意思是指在Web 浏览器（客户端）和 Web 服务器之间不需要建立持久的连接。整个过程就是当一个客户端向服务器端发送一个请求（request），然后Web服务器返回一个响应（response），之后连接就关闭了，在服务端此时是没有保留连接的信息。")]),t._v(" "),v("p",[t._v("3.HTTP 遵循请求/响应（request/response）模型的，所有的通信交互都被构造在一套请求和响应模型中。")]),t._v(" "),v("p",[t._v("4.浏览Web时，浏览器通过HTTP协议与Web服务器交换信息，Web服务器向Web浏览器返回的文件都有与之相关的类型，这些信息类型的格式由MIME定义。")]),t._v(" "),v("p",[v("a",{attrs:{href:"http://www.runoob.com/http/http-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP教程"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"请求-响应（request-response）模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求-响应（request-response）模型"}},[t._v("#")]),t._v(" 请求/响应（request/response）模型")]),t._v(" "),v("h3",{attrs:{id:"请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[t._v("#")]),t._v(" 请求")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("     方法  请求URL   协议版本\n    | GET    /      HTTP/1.1\n请  | Host: localhost:8888\n求  | Connection: keep-alive // 保持活动连接\n头  | Content-type: application/x-www-form-urlencoded //内容类型 告诉服务器，发送数据的内容类型\n    | Content-Length: 25\n    | User-Agent: curl/7.51.0\n    | Accept: */*\n\n请求体|name=zhangsan&age=19 //请求数据\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br")])]),v("h3",{attrs:{id:"响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("  协议     状态码   状态码短语\n  | HTTP/1.1  200    OK\n响| Date: Mon, 20 Mar 2017 14:17:45 GMT\n应| Connection: keep-alive\n头| Content-Length: 3        //响应长度\n  | Content-type: text/html  //响应类型\n\n响| <html>\n应| ....\n体|\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br")])]),v("h3",{attrs:{id:"http-消息结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-消息结构"}},[t._v("#")]),t._v(" HTTP 消息结构")]),t._v(" "),v("h4",{attrs:{id:"客户端请求消息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#客户端请求消息"}},[t._v("#")]),t._v(" 客户端请求消息")]),t._v(" "),v("p",[t._v("客户端发送一个HTTP请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成，下图给出了请求报文的一般格式。")]),t._v(" "),v("p",[v("img",{attrs:{src:"amWiki/images/node/request.png",alt:"请求消息"}})]),t._v(" "),v("ol",[v("li",[t._v("请求行 请求行由请求方法字段、URL字段和HTTP协议版本字段3个字段组成，它们用空格分隔。")])]),t._v(" "),v("p",[t._v("如：GET /index.html HTTP/1.1。 请求方法有以下几种：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("GET")]),t._v(" "),v("td",[t._v("请求获取Request-URI所标识的资源")])]),t._v(" "),v("tr",[v("td",[t._v("POST")]),t._v(" "),v("td",[t._v("在Request-URI所标识的资源后附加新的数据")])]),t._v(" "),v("tr",[v("td",[t._v("PUT")]),t._v(" "),v("td",[t._v("请求服务器存储一个资源，并用Request-URI作为其标识")])]),t._v(" "),v("tr",[v("td",[t._v("DELETE")]),t._v(" "),v("td",[t._v("请求服务器删除Request-URI所标识的资源")])])])]),t._v(" "),v("p",[t._v("常用的为GET和POST方法")]),t._v(" "),v("ol",[v("li",[t._v("请求头部 请求头部由key/value键值对组成，每行一对，关键字和值用英文冒号“:”分隔。请求头部通知服务器有关于客户端请求的信息，典型的请求头有：")]),t._v(" "),v("li",[t._v("User-Agent：产生请求的浏览器类型。")]),t._v(" "),v("li",[t._v("Accept：客户端可识别的内容类型列表。")]),t._v(" "),v("li",[t._v("Host： 请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。")]),t._v(" "),v("li",[t._v("空行 最后一个请求头之后是一个空行，发送回车符和换行符，通知服务器以下不再有请求头信息。")]),t._v(" "),v("li",[t._v("请求数据 请求数据是在POST方法中使用。POST方法适用于需要客户填写表单的场合。与请求数据相关的最常使用的请求头是Content-Type和Content-Length。")])]),t._v(" "),v("h4",{attrs:{id:"服务器响应消息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务器响应消息"}},[t._v("#")]),t._v(" 服务器响应消息")]),t._v(" "),v("p",[t._v("HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。 "),v("img",{attrs:{src:"amWiki/images/node/response.png",alt:"响应消息"}})]),t._v(" "),v("ol",[v("li",[t._v("响应状态码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：")]),t._v(" "),v("li",[t._v("1xx：指示信息--表示请求已接收，继续处理")]),t._v(" "),v("li",[t._v("2xx：成功--表示请求已被成功接收、理解、接受")]),t._v(" "),v("li",[t._v("3xx：重定向--要完成请求必须进行更进一步的操作")]),t._v(" "),v("li",[t._v("4xx：客户端错误--请求有语法错误或请求无法实现")]),t._v(" "),v("li",[t._v("5xx：服务器端错误--服务器未能实现合法的请求")])]),t._v(" "),v("p",[t._v("常见状态代码、状态描述、说明：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("状态码")]),t._v(" "),v("th",[t._v("状态描述")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("200")]),t._v(" "),v("td",[t._v("OK")]),t._v(" "),v("td",[t._v("客户端请求成功")])]),t._v(" "),v("tr",[v("td",[t._v("400")]),t._v(" "),v("td",[t._v("Bad Request")]),t._v(" "),v("td",[t._v("客户端请求有语法错误，不能被服务器所理解")])]),t._v(" "),v("tr",[v("td",[t._v("401")]),t._v(" "),v("td",[t._v("Unauthorized")]),t._v(" "),v("td",[t._v("请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用")])]),t._v(" "),v("tr",[v("td",[t._v("403")]),t._v(" "),v("td",[t._v("Forbidden")]),t._v(" "),v("td",[t._v("服务器收到请求，但是拒绝提供服务")])]),t._v(" "),v("tr",[v("td",[t._v("404")]),t._v(" "),v("td",[t._v("Not Found")]),t._v(" "),v("td",[t._v("请求资源不存在，eg：输入了错误的URL")])]),t._v(" "),v("tr",[v("td",[t._v("500")]),t._v(" "),v("td",[t._v("Internal Server Error")]),t._v(" "),v("td",[t._v("服务器发生不可预期的错误")])]),t._v(" "),v("tr",[v("td",[t._v("503")]),t._v(" "),v("td",[t._v("Server Unavailable")]),t._v(" "),v("td",[t._v("服务器当前不能处理客户端的请求，一段时间后可能恢复正常")])])])]),t._v(" "),v("p",[t._v("如：HTTP/1.1 200 OK （CRLF）")]),t._v(" "),v("ol",[v("li",[t._v("消息报头与请求报头类似，不同在于请求报头附带的是关于请求的相关信息，而消息报头则附带的是服务端应答的相关信息。")])]),t._v(" "),v("h2",{attrs:{id:"网站访问的过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网站访问的过程"}},[t._v("#")]),t._v(" 网站访问的过程")]),t._v(" "),v("ol",[v("li",[t._v("浏览器(或其他客户端，如微信)向服务器发出一个http请求")]),t._v(" "),v("li",[t._v("先把域名解析为IP地址 (通过DNS服务器获取服务器IP地址)")]),t._v(" "),v("li",[t._v("客户端通过随机端口向服务器发起TCP三次握手，建立TCP连接")]),t._v(" "),v("li",[t._v("TCP连接建立后，浏览器就可以发送请求了")]),t._v(" "),v("li",[t._v("服务器接受到HTTP请求，解析请求的路径和参数，经过处理之后，生成响应页面")]),t._v(" "),v("li",[t._v("服务器将生成的页面作为HTTP响应体，根据不同的处理结果生成响应头 发回客户端")]),t._v(" "),v("li",[t._v("客户端(浏览器)接收到 HTTP 响应,从请求中得到的 HTTP 响应体里 是HTML代码，于是对HTML代码开始 解析")]),t._v(" "),v("li",[t._v("解析过程中遇到 引用的服务器上的资源 (额外的 CSS、JS代码，图 片、音视频，附件等)，再向服务器发送请求")]),t._v(" "),v("li",[t._v("浏览器解析HTML包含的内容，用得到的 CSS 代码进行外观上的进一 步 渲染 ，JS 代码也可能会对外观进行一定的 处理")]),t._v(" "),v("li",[t._v("当用户与 页面交互 (点击，悬停等等)时，JS 代码对此作出一定的反 应，添加特效与动画 交互的过程中可能需要向服务器索取或提交额外的数据(局部的刷 新),一般不是跳转就是通过 JS 代码(响应某个动作或者定时)向服务器 发送 AJAX 请求")]),t._v(" "),v("li",[t._v("服务器再把客户端需要的资源返回，客户端用得到的资源来实现动态效 果或 修改DOM结构 。")])]),t._v(" "),v("h2",{attrs:{id:"请求方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),v("p",[t._v("每条http请求报文都包括一个方法表示本次将要进行何种类型的操作, 如读取一个页面，删除一个资源")]),t._v(" "),v("ul",[v("li",[t._v("get 系请求用来从服务器获取数据，没有请求体,不会影响服务器端的 数据")]),t._v(" "),v("li",[t._v("post 系用来将数据发送到服务器， post 会把要发送的数据放到请求 体中，可能会影响服务器端的数据")])]),t._v(" "),v("h2",{attrs:{id:"mime媒体类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mime媒体类型"}},[t._v("#")]),t._v(" MIME媒体类型")]),t._v(" "),v("p",[t._v("MIME类型就是告诉浏览器用什么方式来处理这个数据。 MIME类型是一种文本标记，表示一种主要的对象类型和一个特定的子 类型，中间由一条斜杠来分隔。如 text/html")]),t._v(" "),v("p",[t._v("MIME类型在HTTP协议中的表现为 Request Header 或 者 Response Header 中的 Content-Type")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("文件类型")]),t._v(" "),v("th",[t._v("MIME类型")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("html格式的文本文档")]),t._v(" "),v("td",[t._v("text/html")])]),t._v(" "),v("tr",[v("td",[t._v("普通的ASCII文本文档")]),t._v(" "),v("td",[t._v("text/plain")])]),t._v(" "),v("tr",[v("td",[t._v("JPEG格式的图片")]),t._v(" "),v("td",[t._v("image/jpeg")])]),t._v(" "),v("tr",[v("td",[t._v("GIF格式的图片")]),t._v(" "),v("td",[t._v("image/gif")])]),t._v(" "),v("tr",[v("td",[t._v("表单")]),t._v(" "),v("td",[t._v("application/x-www-form-urlencoded")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);