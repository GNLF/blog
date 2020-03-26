(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{283:function(t,v,_){"use strict";_.r(v);var e=_(17),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"基础组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础组件"}},[t._v("#")]),t._v(" 基础组件")]),t._v(" "),_("p",[t._v("框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件文档"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("p",[t._v("什么是组件：")]),t._v(" "),_("ul",[_("li",[t._v("组件是视图层的基本组成单元。")]),t._v(" "),_("li",[t._v("组件自带一些功能与微信风格一致的样式。")]),t._v(" "),_("li",[t._v("一个组件通常包括 "),_("code",[t._v("开始标签")]),t._v(" 和 "),_("code",[t._v("结束标签")]),t._v("，"),_("code",[t._v("属性")]),t._v(" 用来修饰这个组件，"),_("code",[t._v("内容")]),t._v(" 在两个标签之内。")])]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<tagname property="value">\n  Content goes here ...\n</tagname>\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("p",[_("strong",[t._v("注意：所有组件与属性都是小写，以连字符-连接")])]),t._v(" "),_("h3",{attrs:{id:"属性类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性类型"}},[t._v("#")]),t._v(" 属性类型")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("注解")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("布尔值")]),t._v(" "),_("td",[t._v("组件写上该属性，不管是什么值都被当作 "),_("code",[t._v("true")]),t._v("；只有组件上没有该属性时，属性值才为"),_("code",[t._v("false")]),t._v("。如果属性值为变量，变量的值会被转换为Boolean类型")])]),t._v(" "),_("tr",[_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("数字")]),t._v(" "),_("td",[_("code",[t._v("1")]),t._v(", "),_("code",[t._v("2.5")])])]),t._v(" "),_("tr",[_("td",[t._v("String")]),t._v(" "),_("td",[t._v("字符串")]),t._v(" "),_("td",[_("code",[t._v('"string"')])])]),t._v(" "),_("tr",[_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("数组")]),t._v(" "),_("td",[_("code",[t._v('[ 1, "string" ]')])])]),t._v(" "),_("tr",[_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("对象")]),t._v(" "),_("td",[_("code",[t._v("{ key: value }")])])]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("事件处理函数名")]),t._v(" "),_("td",[_("code",[t._v('"handlerName"')]),t._v(" 是 "),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Page"),_("OutboundLink")],1),t._v(" 中定义的事件处理函数名")])]),t._v(" "),_("tr",[_("td",[t._v("Any")]),t._v(" "),_("td",[t._v("任意属性")]),t._v(" "),_("td")])])]),t._v(" "),_("h3",{attrs:{id:"公共属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#公共属性"}},[t._v("#")]),t._v(" 公共属性")]),t._v(" "),_("p",[t._v("所有组件都有以下属性：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("注解")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("id")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("组件的唯一标示")]),t._v(" "),_("td",[t._v("保持整个页面唯一")])]),t._v(" "),_("tr",[_("td",[t._v("class")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("组件的样式类")]),t._v(" "),_("td",[t._v("在对应的 WXSS 中定义的样式类")])]),t._v(" "),_("tr",[_("td",[t._v("style")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("组件的内联样式")]),t._v(" "),_("td",[t._v("可以动态设置的内联样式")])]),t._v(" "),_("tr",[_("td",[t._v("hidden")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("组件是否显示")]),t._v(" "),_("td",[t._v("所有组件默认显示")])]),t._v(" "),_("tr",[_("td",[t._v("data-*")]),t._v(" "),_("td",[t._v("Any")]),t._v(" "),_("td",[t._v("自定义属性")]),t._v(" "),_("td",[t._v("组件上触发的事件时，会发送给事件处理函数")])]),t._v(" "),_("tr",[_("td",[t._v("bind "),_("em",[t._v("/ catch")])]),t._v(" "),_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("组件的事件")]),t._v(" "),_("td",[t._v("详见"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件"),_("OutboundLink")],1)])])])]),t._v(" "),_("h3",{attrs:{id:"特殊属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特殊属性"}},[t._v("#")]),t._v(" 特殊属性")]),t._v(" "),_("p",[t._v("几乎所有组件都有各自定义的属性，可以对该组件的功能或样式进行修饰，请参考各个"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件"),_("OutboundLink")],1),t._v("的定义。")])])}),[],!1,null,null,null);v.default=r.exports}}]);