(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{631:function(s,a,t){"use strict";t.r(a);var n=t(17),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"javascript异常处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript异常处理"}},[s._v("#")]),s._v(" JavaScript异常处理")]),s._v(" "),t("p",[s._v("try 语句测试代码块的错误。")]),s._v(" "),t("p",[s._v("catch 语句处理错误。")]),s._v(" "),t("p",[s._v("throw 语句创建自定义错误。")]),s._v(" "),t("h2",{attrs:{id:"错误一定会发生"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误一定会发生"}},[s._v("#")]),s._v(" 错误一定会发生")]),s._v(" "),t("p",[s._v("当 JavaScript 引擎执行 JavaScript 代码时，会发生各种错误：")]),s._v(" "),t("p",[s._v("可能是语法错误，通常是程序员造成的编码错误或错别字。")]),s._v(" "),t("p",[s._v("可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）。")]),s._v(" "),t("p",[s._v("可能是由于来自服务器或用户的错误输出而导致的错误。")]),s._v(" "),t("p",[s._v("当然，也可能是由于许多其他不可预知的因素。")]),s._v(" "),t("h2",{attrs:{id:"javascript-测试和捕捉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript-测试和捕捉"}},[s._v("#")]),s._v(" JavaScript 测试和捕捉")]),s._v(" "),t("p",[s._v("try 语句允许我们定义在执行时进行错误测试的代码块。")]),s._v(" "),t("p",[s._v("catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。")]),s._v(" "),t("p",[s._v("JavaScript 语句 try 和 catch 是成对出现的。")]),s._v(" "),t("p",[s._v("语法")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("try{\n  //在这里运行代码\n}\ncatch(err){\n  //在这里处理错误\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"throw-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#throw-语句"}},[s._v("#")]),s._v(" Throw 语句")]),s._v(" "),t("p",[s._v("throw 语句允许我们创建自定义错误。")]),s._v(" "),t("p",[s._v("正确的技术术语是：创建或抛出异常（exception）。")]),s._v(" "),t("p",[s._v("如果把 throw 与 try 和 catch 一起使用，那么您能够控制程序流，并生成自定义的错误消息。")]),s._v(" "),t("p",[s._v("语法")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("throw exception\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("异常可以是 JavaScript 字符串、数字、逻辑值或对象。 本例检测输入变量的值。如果值是错误的，会抛出一个异常（错误）。catch 会捕捉到这个错误，并显示一段自定义的错误消息：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<script>\nfunction myFunction()\n{\ntry\n  {\n  var x=document.getElementById("demo").value;\n  if(x=="")    throw "empty";\n  if(isNaN(x)) throw "not a number";\n  if(x>10)     throw "too high";\n  if(x<5)      throw "too low";\n  }\ncatch(err)\n  {\n  var y=document.getElementById("mess");\n  y.innerHTML="Error: " + err + ".";\n  }\n}\n<\/script>\n\n<h1>My First JavaScript</h1>\n<p>Please input a number between 5 and 10:</p>\n<input id="demo" type="text">\n<button type="button" onclick="myFunction()">Test Input</button>\n<p id="mess"></p>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);