(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{414:function(t,a,r){"use strict";r.r(a);var v=r(17),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"面向对象编程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向对象编程"}},[t._v("#")]),t._v(" 面向对象编程")]),t._v(" "),r("blockquote",[r("p",[t._v("面向对象即OOP(Object Oriented Programming)，是计算机的一种编程思想，OOP的基本原则是计算机是由子程序作用的单个或者多个对象组合而成，包含属性和方法的对象是类的实例.")])]),t._v(" "),r("p",[t._v("JavaScript也支持面向对象编程，它通过原型继承和属性和方法的方式实现面向对象编程，同样可以写出可复用，可封装的代码。")]),t._v(" "),r("p",[t._v("对象就是人对各种具体物体抽象之后的概念，人们每天都在跟各种各样的对象打交道，比如说一本书就是一个对象。")]),t._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),r("ol",[r("li",[t._v("封装：能够将一个实体的信息、功能、响应都封装到一个单独对象中的特性。")]),t._v(" "),r("li",[t._v("继承：在不改变源程序的基础上进行扩充，原功能得以保存，并且对子程序进行扩展，避免重复代码编写")]),t._v(" "),r("li",[t._v("抽象：提取现实世界中某事物的关键特性，为该事物构建模型的过程。对同一事物在不同的需求下，需要提取的特性可能不一样。得到的抽象模型中一般包含：属性（数据）和操作（行为）。这个抽象模型我们称之为类。对类进行实例化得到对象。")]),t._v(" "),r("li",[t._v("多态：多态是在继承的基础上实现的。多态的三个要素：继承、重写和父类引用指向子类对象。父类引用指向不同的子类对象时，调用相同的方法，呈现出不同的行为；就是类多态特性。多态可以分成编译时多态和运行时多态。")])]),t._v(" "),r("h2",{attrs:{id:"面向对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),r("ol",[r("li",[t._v("对象：对象是一个整体，对外提供一些操作。")]),t._v(" "),r("li",[t._v("面向对象：使用对象时，只关注对象提供的功能，不关注其内部细节。")]),t._v(" "),r("li",[t._v("JS的对象组成：方法 和 属性")])]),t._v(" "),r("h2",{attrs:{id:"面向过程与面向对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向过程与面向对象"}},[t._v("#")]),t._v(" 面向过程与面向对象")]),t._v(" "),r("blockquote",[r("p",[t._v("面向对象并不是一种技术，而是一种思想，是一种解决问题的最基本的思维方式。")])]),t._v(" "),r("h3",{attrs:{id:"面向过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向过程"}},[t._v("#")]),t._v(" 面向过程")]),t._v(" "),r("p",[t._v("面向过程专注于如何去解决一个问题的过程步骤。编程特点是由一个个函数去实现每一步的过程步骤，没有类和对象的概念。")]),t._v(" "),r("h3",{attrs:{id:"面向对象-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向对象-2"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),r("p",[t._v("专注于由哪一个对象来解决这个问题，编程特点是出现了一个类，从类中拿到对象，由这个对象去解决具体问题。\n对于调用者来说，面向过程需要调用者自己去实现各种函数。而面向对象，只需要告诉调用者，对象中具体方法的功能，而不需要调用者了解方法中的实现细节。")]),t._v(" "),r("h3",{attrs:{id:"二者的比较"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二者的比较"}},[t._v("#")]),t._v(" 二者的比较")]),t._v(" "),r("ul",[r("li",[t._v("都可以实现代码重用和模块化编程，面向对象的模块化更深，数据也更封闭和安全")]),t._v(" "),r("li",[t._v("面向对象的思维方式更加贴近现实生活，更容易解决大型的复杂的业务逻辑")]),t._v(" "),r("li",[t._v("从前期开发的角度来看，面向对象比面向过程要更复杂，但是从维护和扩展的角度来看，面向对象要远比面向过程简单！")]),t._v(" "),r("li",[t._v("面向过程的代码执行效率比面向对象高。")])]),t._v(" "),r("h2",{attrs:{id:"面向对象编程的思想"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向对象编程的思想"}},[t._v("#")]),t._v(" 面向对象编程的思想")]),t._v(" "),r("p",[t._v("就是将一切的东西看作对象，将其中的行为封装为方法，特征封装为属性。\njavascript以前使用构造函数来进行封装，我们使用它来模拟其他言语中的类(如果你了解过其他语言的话)，ES6之后有了类，我们可以使用class关键字来创建类，然后将某种事物的特征和行为抽象出来，我们可以在需要使用的时候，通过实例化类来创建我们的对象。\n面向对象的核心思想是：不仅仅是简单的将功能进行封装（封装成函数），更是对调用该功能的主体进行封装，实现某个主体拥有多个功能，在使用的过程中，先得到对应的主体，再使用主体去实现相关的功能。")]),t._v(" "),r("h2",{attrs:{id:"面向对象分析实现过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面向对象分析实现过程"}},[t._v("#")]),t._v(" 面向对象分析实现过程")]),t._v(" "),r("ol",[r("li",[t._v("分析哪些动作是由哪些实体发出的")]),t._v(" "),r("li",[t._v("定义这些实体，为其增加相应的属性和功能")]),t._v(" "),r("li",[t._v("让实体去执行相应的功能|动作")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/jiejiejy/p/7666091.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/jiejiejy/p/7666091.html"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/libin-1/p/5911190.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/libin-1/p/5911190.html"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);