(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{456:function(t,a,e){"use strict";e.r(a);var s=e(17),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" AJAX")]),t._v(" "),e("blockquote",[e("p",[t._v("Ajax是一种创建交互式网页应用的网页开发技术,当需要从服务器获取数据，并刷新页面的操作，如果不采用AJAX，则需要用提交整个表单的方式，当提交表单时，发送请求给服务器，页面需要等待服务器发送完response后，页面才能恢复操作。")])]),t._v(" "),e("h2",{attrs:{id:"什么是ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是ajax"}},[t._v("#")]),t._v(" 什么是Ajax")]),t._v(" "),e("blockquote",[e("p",[t._v("而"),e("code",[t._v("Ajax")]),t._v("是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，可以使网页实现异步更新。可以在不重新加载整个网页的情况下，对网页的某部分进行更新。")])]),t._v(" "),e("p",[e("strong",[t._v("AJAX")]),t._v(" 是异步的JavaScript和XML（Asynchronous JavaScript And XML）。简单点说，就是使用 XMLHttpRequest 对象与服务器通信")]),t._v(" "),e("p",[t._v("它可以使用JSON，XML，HTML和文本等多种格式发送和接收。")]),t._v(" "),e("p",[t._v("AJAX最吸引人的就是它的“异步”特性，也就是说AJAX可以在不重新加载整个页面的情况下，与服务器交换数据。这种异步交互的方式，使用户单击后，不必刷新页面也能获取新数据。使用Ajax，用户可以创建接近本地桌面应用的直接、高可用、更丰富、更动态的Web用户界面。")]),t._v(" "),e("h2",{attrs:{id:"用来做什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用来做什么"}},[t._v("#")]),t._v(" 用来做什么")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Ajax的唯一功能：发送数据和接收数据")])])]),t._v(" "),e("p",[t._v("你可以使用AJAX最主要的两个特性做下列事：")]),t._v(" "),e("ul",[e("li",[t._v("在不重新加载页面的情况下发送请求给服务器。")]),t._v(" "),e("li",[t._v("接受并使用从服务器发来的数据。")])]),t._v(" "),e("h2",{attrs:{id:"aajx原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aajx原理"}},[t._v("#")]),t._v(" Aajx原理")]),t._v(" "),e("p",[t._v("Ajax的工作原理相当于在用户和服务器之间加了—个中间层(AJAX引擎),使用户操作与服务器响应异步化。并不是所有的用户请求都提交给服务器,像—些数据验证和数据处理等都交给Ajax引擎自己来做, 只有确定需要从服务器读取新数据时再由Ajax引擎代为向服务器提交请求。")]),t._v(" "),e("p",[t._v("Ajax是告诉浏览器给我要发送一个HTTP请求，你给我新开个线程去执行下，完事后告诉我一声，我在其他function中执行后续操作（回调）。在线程返回结果前，我可以继续做其他事情。（异步）")]),t._v(" "),e("p",[e("img",{attrs:{src:"/blog/img/js/01-1544410570000.png",alt:"Ajax原理图"}})]),t._v(" "),e("h2",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),e("ol",[e("li",[t._v("对数据进行过滤和操纵相关数据的场景")]),t._v(" "),e("li",[t._v("添加/删除树节点")]),t._v(" "),e("li",[t._v("添加/删除列表中的某一行记录")]),t._v(" "),e("li",[t._v("切换下拉列表item")]),t._v(" "),e("li",[t._v("注册用户名重名的校验")])]),t._v(" "),e("h2",{attrs:{id:"ajax使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajax使用方法"}},[t._v("#")]),t._v(" Ajax使用方法")]),t._v(" "),e("p",[e("img",{attrs:{src:"/blog/img/js/004-ajax.jpg",alt:"Ajax的运行"}})]),t._v(" "),e("h3",{attrs:{id:"_1-实例化ajax对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-实例化ajax对象"}},[t._v("#")]),t._v(" 1. 实例化ajax对象")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Header One")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Header Two")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("xhr.abort")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取消ajax请求的方法")])])])]),t._v(" "),e("h3",{attrs:{id:"_2-open-用于配置请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-open-用于配置请求"}},[t._v("#")]),t._v(" 2. open() 用于配置请求")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("request-type")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("发送请求的类型,典型的值是 GET 或 POST，默认为GET")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("url")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("要连接的 URL")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("asynch")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("如果希望使用异步连接则为 true，否则为 false。该参数是可选的，默认为 true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("username")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("如果需要身份验证，则可以在此指定用户名。该可选参数没有默认值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("password")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("如果需要身份验证，则可以在此指定口令。该可选参数没有默认值")])])])]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("同步：提交请求->等待服务器处理->处理完毕返回 这个期间客户端浏览器不能干任何事")]),t._v(" "),e("li",[t._v("异步: 请求通过事件触发->服务器处理（这是浏览器仍然可以作其他事情）->处理完毕")])])]),t._v(" "),e("h3",{attrs:{id:"_3-send-用于发送请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-send-用于发送请求"}},[t._v("#")]),t._v(" 3. send() 用于发送请求")]),t._v(" "),e("ul",[e("li",[t._v("GET方式：如果不需要通过 send() 传递数据，则只要传递 null 作为该方法的参数即可，将传递的数据放在url地址后面进行传递。")]),t._v(" "),e("li",[t._v("POST方式："),e("strong",[t._v("需要先设置请求头信息")]),t._v("，然后将需要发送的数据放到send()的参数中进行发送。 (注：头部的设置必须在open()和send()之间)")])]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GET方式：")]),t._v("\nxhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?name=zhangsan&pwd=123456'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nxhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// POST方式：")]),t._v("\nxhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nxhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/x-www-form-urlencoded"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name=zhangsan&pwd=123456'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h3",{attrs:{id:"_4-onreadystatechange"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-onreadystatechange"}},[t._v("#")]),t._v(" 4. onreadystatechange")]),t._v(" "),e("ul",[e("li",[t._v("每次Ajax请求状态改变时都会触发这个事件")]),t._v(" "),e("li",[t._v("readyState： 请求的状态。有5个可取值")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("（未初始化）还没有调用send()方法")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("（正在载入）已调用send()方法，正在发送请求")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("（载入完成）send()方法执行完成，已经接收到全部响应内容")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("（交互中）正在解析响应内容")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("（完成）响应内容解析完成，可以在客户端调用了")])])])]),t._v(" "),e("h3",{attrs:{id:"_5-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-status"}},[t._v("#")]),t._v(" 5. status")]),t._v(" "),e("p",[t._v("当"),e("code",[t._v("readyState")]),t._v(" 的值为4的时候，说明我们和服务器的交互是成功的，但是如何判断页面返回的数据是成功的呢？我们需要再来检测一下服务器的HTTP状态码，状态码保存在一个属性"),e("code",[t._v("status")]),t._v("上")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("200")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("OK 一切正常")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("304")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Not Modified 客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("404")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Not Found 无法找到指定位置的资源")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("5xx")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("服务器错误")])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/q1056843325/article/details/53147180",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP状态码详解"),e("OutboundLink")],1)]),t._v(" "),e("ol",[e("li",[t._v("响应\n"),e("ul",[e("li",[t._v('response 响应实体的类型由 responseType 来指定， 可以是 ArrayBuffer， Blob， Document， JavaScript 对象 (即 "json")， 或者是字符串。如果请求未完成或失败，则该值为 null。')]),t._v(" "),e("li",[t._v("responesType 设置该值能够改变响应类型。就是告诉服务器你期望的响应格式。")]),t._v(" "),e("li",[t._v("responseText 此次请求的响应为文本，或是当请求未成功或还未发送时为 null。")]),t._v(" "),e("li",[t._v("responseXML 本次请求的响应是一个 Document 对象，如果是以下情况则值为 null：请求未成功，请求未发送，或响应无法被解析成 XML 或 HTML。当响应为text/xml 流时会被解析。")])])]),t._v(" "),e("li",[t._v("upload 可以在 upload 上添加一个事件监听来跟踪上传过程。")])]),t._v(" "),e("blockquote",[e("p",[t._v("ajax对象和upload对象拥有相同的事件")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("事件")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("onabort")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("当发生中止事件时触发的事件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("onerror")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("当发生加载错误是触发的事件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("onload")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("当加载结束后触发的事件，不论成功与否")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("onloadend")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("加载结束后触发的事件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("onloadstart")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("当加载开始时触发的事件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("onprogress")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在加载过程中不断触发的事件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ontimeout")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("加载超时后执行的事件")])])])]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v(" xhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("upload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onprogress")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取当前上传进度传递到progress中显示")]),t._v("\n progress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loaded"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("total"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h2",{attrs:{id:"get和post的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get和post的区别"}},[t._v("#")]),t._v(" get和post的区别")]),t._v(" "),e("ul",[e("li",[t._v("功能\n"),e("ul",[e("li",[t._v("get是从服务器上获取数据 (查)")]),t._v(" "),e("li",[t._v("post是向服务器传送数据，用于创建资源 (增)")])])]),t._v(" "),e("li",[t._v("数据量\n"),e("ul",[e("li",[t._v("get受限于浏览器url长度，IE对URL长度的限制是2083字节(2K+35)，其他浏览器的限制取决于操作系统的支持")]),t._v(" "),e("li",[t._v("post传送的数据量较大，一般被默认为不受限制")])])]),t._v(" "),e("li",[t._v("安全性\n"),e("ul",[e("li",[e("strong",[t._v("GET方式请求的数据会被浏览器缓存起来")]),t._v("，因此其他人就可以从浏览器的历史记录中读取到这些数据，例如账号和密码等。")]),t._v(" "),e("li",[t._v("POST方式相对来说就可以避免这些问题。")])])])]),t._v(" "),e("p",[t._v("若符合下列任一情况，则用"),e("code",[t._v("POST")]),t._v("方法：")]),t._v(" "),e("ul",[e("li",[t._v("请求的结果有持续性的副作用，例如，数据库内添加新的数据行。")]),t._v(" "),e("li",[t._v("若使用GET方法，则表单上收集的数据可能让URL过长。")]),t._v(" "),e("li",[t._v("要传送的数据不是采用7位的ASCII编码。")])]),t._v(" "),e("p",[t._v("若符合下列任一情况，则用"),e("code",[t._v("GET")]),t._v("方法：")]),t._v(" "),e("ul",[e("li",[t._v("请求是为了查找资源，HTML表单数据仅用来帮助搜索。")]),t._v(" "),e("li",[t._v("请求结果无持续性的副作用，如进行搜索。")]),t._v(" "),e("li",[t._v("收集的数据及HTML表单内的输入字段名称的总长不超过1024个字符。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);