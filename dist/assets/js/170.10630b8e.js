(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{542:function(a,s,n){"use strict";n.r(s);var e=n(17),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"开始-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始-安装"}},[a._v("#")]),a._v(" 开始&安装")]),a._v(" "),n("ul",[n("li",[a._v("npm install mockjs --save-dev")]),a._v(" "),n("li",[a._v("npm install axios --save")])]),a._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 使用 Mock")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" Mock "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mockjs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" data "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Mock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("mock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 属性 list 的值是一个数组，其中含有 1 到 10 个元素")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'list|1-10'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 属性 id 是一个自增数，起始值为 1，每次增 1")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'id|+1'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 输出结果")]),a._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[a._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br")])]),n("h1",{attrs:{id:"语法规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法规范"}},[a._v("#")]),a._v(" 语法规范")]),a._v(" "),n("p",[a._v("Mock.js 的语法规范包括两部分：")]),a._v(" "),n("ol",[n("li",[a._v("数据模板定义规范（Data Template Definition，DTD）")]),a._v(" "),n("li",[a._v("数据占位符定义规范（Data Placeholder Definition，DPD）")])]),a._v(" "),n("h2",{attrs:{id:"_1-数据模板定义规范-dtd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据模板定义规范-dtd"}},[a._v("#")]),a._v(" 1.数据模板定义规范 DTD")]),a._v(" "),n("p",[n("strong",[a._v("数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 属性名   name\n// 生成规则 rule\n// 属性值   value\n'name|rule': value\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[n("strong",[a._v("注意：")])]),a._v(" "),n("ul",[n("li",[n("p",[n("em",[a._v("属性名")]),a._v(" 和 "),n("em",[a._v("生成规则")]),a._v(" 之间用竖线 "),n("code",[a._v("|")]),a._v(" 分隔。")])]),a._v(" "),n("li",[n("p",[n("em",[a._v("生成规则")]),a._v(" 是可选的。")])]),a._v(" "),n("li",[n("p",[a._v("生成规则")]),a._v(" "),n("p",[a._v("有 7 种格式：")]),a._v(" "),n("ol",[n("li",[n("code",[a._v("'name|min-max': value")])]),a._v(" "),n("li",[n("code",[a._v("'name|count': value")])]),a._v(" "),n("li",[n("code",[a._v("'name|min-max.dmin-dmax': value")])]),a._v(" "),n("li",[n("code",[a._v("'name|min-max.dcount': value")])]),a._v(" "),n("li",[n("code",[a._v("'name|count.dmin-dmax': value")])]),a._v(" "),n("li",[n("code",[a._v("'name|count.dcount': value")])]),a._v(" "),n("li",[n("code",[a._v("'name|+step': value")])])])]),a._v(" "),n("li",[n("p",[n("strong",[a._v("生成规则 的 含义 需要依赖 属性值的类型 才能确定。")])])]),a._v(" "),n("li",[n("p",[n("em",[a._v("属性值")]),a._v(" 中可以含有 "),n("code",[a._v("@占位符")]),a._v("。")])]),a._v(" "),n("li",[n("p",[n("em",[a._v("属性值")]),a._v(" 还指定了最终值的初始值和类型。")])])]),a._v(" "),n("p",[n("strong",[a._v("生成规则和示例：")])]),a._v(" "),n("h3",{attrs:{id:"_1-属性值是字符串-string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-属性值是字符串-string"}},[a._v("#")]),a._v(" 1. 属性值是字符串 "),n("strong",[a._v("String")])]),a._v(" "),n("ol",[n("li",[n("p",[n("code",[a._v("'name|min-max': string")])]),a._v(" "),n("p",[a._v("通过重复 "),n("code",[a._v("string")]),a._v(" 生成一个字符串，重复次数大于等于 "),n("code",[a._v("min")]),a._v("，小于等于 "),n("code",[a._v("max")]),a._v("。")])]),a._v(" "),n("li",[n("p",[n("code",[a._v("'name|count': string")])]),a._v(" "),n("p",[a._v("通过重复 "),n("code",[a._v("string")]),a._v(" 生成一个字符串，重复次数等于 "),n("code",[a._v("count")]),a._v("。")])])]),a._v(" "),n("h3",{attrs:{id:"_2-属性值是数字-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-属性值是数字-number"}},[a._v("#")]),a._v(" 2. 属性值是数字 "),n("strong",[a._v("Number")])]),a._v(" "),n("ol",[n("li",[n("p",[n("code",[a._v("'name|+1': number")])]),a._v(" "),n("p",[a._v("属性值自动加 1，初始值为 "),n("code",[a._v("number")]),a._v("。")])]),a._v(" "),n("li",[n("p",[n("code",[a._v("'name|min-max': number")])]),a._v(" "),n("p",[a._v("生成一个大于等于 "),n("code",[a._v("min")]),a._v("、小于等于 "),n("code",[a._v("max")]),a._v(" 的整数，属性值 "),n("code",[a._v("number")]),a._v(" 只是用来确定类型。")])]),a._v(" "),n("li",[n("p",[n("code",[a._v("'name|min-max.dmin-dmax': number")])]),a._v(" "),n("p",[a._v("生成一个浮点数，整数部分大于等于 "),n("code",[a._v("min")]),a._v("、小于等于 "),n("code",[a._v("max")]),a._v("，小数部分保留 "),n("code",[a._v("dmin")]),a._v(" 到 "),n("code",[a._v("dmax")]),a._v(" 位。")])])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Mock.mock({\n    'number1|1-100.1-10': 1,\n    'number2|123.1-10': 1,\n    'number3|123.3': 1,\n    'number4|123.10': 1.123\n})\n// =>\n{\n    \"number1\": 12.92,\n    \"number2\": 123.51,\n    \"number3\": 123.777,\n    \"number4\": 123.1231091814\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br")])]),n("h3",{attrs:{id:"_3-属性值是布尔型-boolean"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-属性值是布尔型-boolean"}},[a._v("#")]),a._v(" 3. 属性值是布尔型 "),n("strong",[a._v("Boolean")])]),a._v(" "),n("ol",[n("li",[n("p",[n("code",[a._v("'name|1': boolean")])]),a._v(" "),n("p",[a._v("随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。")])]),a._v(" "),n("li",[n("p",[n("code",[a._v("'name|min-max': value")])]),a._v(" "),n("p",[a._v("随机生成一个布尔值，值为 "),n("code",[a._v("value")]),a._v(" 的概率是 "),n("code",[a._v("min / (min + max)")]),a._v("，值为 "),n("code",[a._v("!value")]),a._v(" 的概率是 "),n("code",[a._v("max / (min + max)")]),a._v("。")])])]),a._v(" "),n("h3",{attrs:{id:"_4-属性值是对象-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-属性值是对象-object"}},[a._v("#")]),a._v(" 4. 属性值是对象 "),n("strong",[a._v("Object")])]),a._v(" "),n("ol",[n("li",[n("p",[n("code",[a._v("'name|count': object")])]),a._v(" "),n("p",[a._v("从属性值 "),n("code",[a._v("object")]),a._v(" 中随机选取 "),n("code",[a._v("count")]),a._v(" 个属性。")])]),a._v(" "),n("li",[n("p",[n("code",[a._v("'name|min-max': object")])]),a._v(" "),n("p",[a._v("从属性值 "),n("code",[a._v("object")]),a._v(" 中随机选取 "),n("code",[a._v("min")]),a._v(" 到 "),n("code",[a._v("max")]),a._v(" 个属性。")])])]),a._v(" "),n("h3",{attrs:{id:"_5-属性值是数组-array"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-属性值是数组-array"}},[a._v("#")]),a._v(" 5. 属性值是数组 "),n("strong",[a._v("Array")])]),a._v(" "),n("ol",[n("li",[n("p",[n("code",[a._v("'name|1': array")])]),a._v(" "),n("p",[a._v("从属性值 "),n("code",[a._v("array")]),a._v(" 中随机选取 1 个元素，作为最终值。")])]),a._v(" "),n("li",[n("p",[n("code",[a._v("'name|+1': array")])]),a._v(" "),n("p",[a._v("从属性值 "),n("code",[a._v("array")]),a._v(" 中顺序选取 1 个元素，作为最终值。")])]),a._v(" "),n("li",[n("p",[n("code",[a._v("'name|min-max': array")])]),a._v(" "),n("p",[a._v("通过重复属性值 "),n("code",[a._v("array")]),a._v(" 生成一个新数组，重复次数大于等于 "),n("code",[a._v("min")]),a._v("，小于等于 "),n("code",[a._v("max")]),a._v("。")])]),a._v(" "),n("li",[n("p",[n("code",[a._v("'name|count': array")])]),a._v(" "),n("p",[a._v("通过重复属性值 "),n("code",[a._v("array")]),a._v(" 生成一个新数组，重复次数为 "),n("code",[a._v("count")]),a._v("。")])])]),a._v(" "),n("h3",{attrs:{id:"_6-属性值是函数-function"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-属性值是函数-function"}},[a._v("#")]),a._v(" 6. 属性值是函数 "),n("strong",[a._v("Function")])]),a._v(" "),n("ol",[n("li",[n("p",[n("code",[a._v("'name': function")])]),a._v(" "),n("p",[a._v("执行函数 "),n("code",[a._v("function")]),a._v("，取其返回值作为最终的属性值，函数的上下文为属性 "),n("code",[a._v("'name'")]),a._v(" 所在的对象。")])])]),a._v(" "),n("h3",{attrs:{id:"_7-属性值是正则表达式-regexp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-属性值是正则表达式-regexp"}},[a._v("#")]),a._v(" 7. 属性值是正则表达式 "),n("strong",[a._v("RegExp")])]),a._v(" "),n("ol",[n("li",[n("p",[n("code",[a._v("'name': regexp")])]),a._v(" "),n("p",[a._v("根据正则表达式 "),n("code",[a._v("regexp")]),a._v(" 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('Mock.mock({\n    \'regexp1\': /[a-z][A-Z][0-9]/,\n    \'regexp2\': /\\w\\W\\s\\S\\d\\D/,\n    \'regexp3\': /\\d{5,10}/\n})\n// =>\n{\n    "regexp1": "pJ7",\n    "regexp2": "F)\\fp1G",\n    "regexp3": "561659409"\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br")])])])]),a._v(" "),n("h2",{attrs:{id:"_2-数据占位符定义规范-dpd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据占位符定义规范-dpd"}},[a._v("#")]),a._v(" 2.数据占位符定义规范 DPD")]),a._v(" "),n("p",[n("em",[a._v("占位符")]),a._v(" 只是在属性值字符串中占个位置，并不出现在最终的属性值中。")]),a._v(" "),n("p",[n("em",[a._v("占位符")]),a._v(" 的格式为：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("@占位符\n@占位符(参数 [, 参数])\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[n("strong",[a._v("注意：")])]),a._v(" "),n("ol",[n("li",[a._v("用 "),n("code",[a._v("@")]),a._v(" 来标识其后的字符串是 "),n("em",[a._v("占位符")]),a._v("。")]),a._v(" "),n("li",[n("em",[a._v("占位符")]),a._v(" 引用的是 "),n("code",[a._v("Mock.Random")]),a._v(" 中的方法。")]),a._v(" "),n("li",[a._v("通过 "),n("code",[a._v("Mock.Random.extend()")]),a._v(" 来扩展自定义占位符。")]),a._v(" "),n("li",[n("em",[a._v("占位符")]),a._v(" 也可以引用 "),n("em",[a._v("数据模板")]),a._v(" 中的属性。")]),a._v(" "),n("li",[n("em",[a._v("占位符")]),a._v(" 会优先引用 "),n("em",[a._v("数据模板")]),a._v(" 中的属性。")]),a._v(" "),n("li",[n("em",[a._v("占位符")]),a._v(" 支持 "),n("em",[a._v("相对路径")]),a._v(" 和 "),n("em",[a._v("绝对路径")]),a._v("。")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('Mock.mock({\n    name: {\n        first: \'@FIRST\',\n        middle: \'@FIRST\',\n        last: \'@LAST\',\n        full: \'@first @middle @last\'\n    }\n})\n// =>\n{\n    "name": {\n        "first": "Charles",\n        "middle": "Brenda",\n        "last": "Lopez",\n        "full": "Charles Brenda Lopez"\n    }\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);