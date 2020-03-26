(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{267:function(e,t,r){"use strict";r.r(t);var a=r(17),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"组件生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期"}},[e._v("#")]),e._v(" 组件生命周期")]),e._v(" "),r("h2",{attrs:{id:"组件的主要生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件的主要生命周期"}},[e._v("#")]),e._v(" 组件的主要生命周期")]),e._v(" "),r("p",[e._v("组件的生命周期，指的是组件自身的一些函数，这些函数在特殊的时间点或遇到一些特殊的框架事件时被自动触发。")]),e._v(" "),r("p",[e._v("其中，最重要的生命周期是 "),r("code",[e._v("created")]),e._v(" "),r("code",[e._v("attached")]),e._v(" "),r("code",[e._v("detached")]),e._v(" ，包含一个组件实例生命流程的最主要时间点。")]),e._v(" "),r("ul",[r("li",[e._v("组件实例刚刚被创建好时， "),r("code",[e._v("created")]),e._v(" 生命周期被触发。此时，组件数据 "),r("code",[e._v("this.data")]),e._v(" 就是在 "),r("code",[e._v("Component")]),e._v(" 构造器中定义的数据 "),r("code",[e._v("data")]),e._v(" 。 "),r("strong",[e._v("此时还不能调用 setData 。")]),e._v(" 通常情况下，这个生命周期只应该用于给组件 "),r("code",[e._v("this")]),e._v(" 添加一些自定义属性字段。")]),e._v(" "),r("li",[e._v("在组件完全初始化完毕、进入页面节点树后， "),r("code",[e._v("attached")]),e._v(" 生命周期被触发。此时， "),r("code",[e._v("this.data")]),e._v(" 已被初始化为组件的当前值。这个生命周期很有用，绝大多数初始化工作可以在这个时机进行。")]),e._v(" "),r("li",[e._v("在组件离开页面节点树后， "),r("code",[e._v("detached")]),e._v(" 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则 "),r("code",[e._v("detached")]),e._v(" 会被触发。")])]),e._v(" "),r("h2",{attrs:{id:"定义生命周期方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定义生命周期方法"}},[e._v("#")]),e._v(" 定义生命周期方法")]),e._v(" "),r("p",[e._v("生命周期方法可以直接定义在 "),r("code",[e._v("Component")]),e._v(" 构造器的第一级参数中。")]),e._v(" "),r("p",[e._v("自小程序基础库版本 "),r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2.2.3"),r("OutboundLink")],1),e._v(" 起，组件的的生命周期也可以在 "),r("code",[e._v("lifetimes")]),e._v(" 字段内进行声明（这是推荐的方式，其优先级最高）。")]),e._v(" "),r("p",[r("strong",[e._v("代码示例：")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Component({\n  lifetimes: {\n    attached() {\n      // 在组件实例进入页面节点树时执行\n    },\n    detached() {\n      // 在组件实例被从页面节点树移除时执行\n    },\n  },\n  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容\n  attached() {\n    // 在组件实例进入页面节点树时执行\n  },\n  detached() {\n    // 在组件实例被从页面节点树移除时执行\n  },\n  // ...\n})\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br")])]),r("p",[e._v("在 behaviors 中也可以编写生命周期方法，同时不会与其他 behaviors 中的同名生命周期相互覆盖。但要注意，如果一个组件多次直接或间接引用同一个 behavior ，这个 behavior 中的生命周期函数在一个执行时机内只会执行一次。")]),e._v(" "),r("p",[e._v("可用的全部生命周期如下表所示。")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("生命周期")]),e._v(" "),r("th",[e._v("参数")]),e._v(" "),r("th",[e._v("描述")]),e._v(" "),r("th",[e._v("最低版本")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("created")]),e._v(" "),r("td",[e._v("无")]),e._v(" "),r("td",[e._v("在组件实例刚刚被创建时执行")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.6.3"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("attached")]),e._v(" "),r("td",[e._v("无")]),e._v(" "),r("td",[e._v("在组件实例进入页面节点树时执行")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.6.3"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("ready")]),e._v(" "),r("td",[e._v("无")]),e._v(" "),r("td",[e._v("在组件在视图层布局完成后执行")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.6.3"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("moved")]),e._v(" "),r("td",[e._v("无")]),e._v(" "),r("td",[e._v("在组件实例被移动到节点树另一个位置时执行")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.6.3"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("detached")]),e._v(" "),r("td",[e._v("无")]),e._v(" "),r("td",[e._v("在组件实例被从页面节点树移除时执行")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.6.3"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("error")]),e._v(" "),r("td",[r("code",[e._v("Object Error")])]),e._v(" "),r("td",[e._v("每当组件方法抛出错误时执行")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2.4.1"),r("OutboundLink")],1)])])])]),e._v(" "),r("h2",{attrs:{id:"组件所在页面的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件所在页面的生命周期"}},[e._v("#")]),e._v(" 组件所在页面的生命周期")]),e._v(" "),r("p",[e._v("还有一些特殊的生命周期，它们并非与组件有很强的关联，但有时组件需要获知，以便组件内部处理。这样的生命周期称为“组件所在页面的生命周期”，在 "),r("code",[e._v("pageLifetimes")]),e._v(" 定义段中定义。其中可用的生命周期包括：")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("生命周期")]),e._v(" "),r("th",[e._v("参数")]),e._v(" "),r("th",[e._v("描述")]),e._v(" "),r("th",[e._v("最低版本")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("show")]),e._v(" "),r("td",[e._v("无")]),e._v(" "),r("td",[e._v("组件所在的页面被展示时执行")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2.2.3"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("hide")]),e._v(" "),r("td",[e._v("无")]),e._v(" "),r("td",[e._v("组件所在的页面被隐藏时执行")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2.2.3"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("resize")]),e._v(" "),r("td",[r("code",[e._v("Object Size")])]),e._v(" "),r("td",[e._v("组件所在的页面尺寸变化时执行")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("2.4.0"),r("OutboundLink")],1)])])])]),e._v(" "),r("p",[r("strong",[e._v("代码示例：")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Component({\n  pageLifetimes: {\n    show() {\n      // 页面被展示\n    },\n    hide() {\n      // 页面被隐藏\n    },\n    resize(size) {\n      // 页面尺寸变化\n    }\n  }\n})\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);