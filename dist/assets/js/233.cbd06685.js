(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{637:function(a,t,r){"use strict";r.r(t);var v=r(17),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"各种前端build工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#各种前端build工具"}},[a._v("#")]),a._v(" 各种前端build工具")]),a._v(" "),r("blockquote",[r("p",[a._v("Node, NPM, Grunt, Gulp, Bower, Webpack, Browserify, Yeoman, Brunch…… 前端目前有很多很多名词，看着这些感觉永远也学不完。 不要被这些名词吓唬住，这些工具出现的目的是让我们的工作更加简单。")])]),a._v(" "),r("h2",{attrs:{id:"快速掌握build工具秘诀"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速掌握build工具秘诀"}},[a._v("#")]),a._v(" 快速掌握build工具秘诀")]),a._v(" "),r("p",[a._v("快速掌握这些工具，抓住几个核心概念：")]),a._v(" "),r("blockquote",[r("p",[a._v("帮助你安装\n帮助你做事")])]),a._v(" "),r("p",[a._v("当你接触到一个新的开发工具的时候，你首先需要搞清楚一个东西：“这个工具的目的是帮我安装东西，还是帮我做事？”")]),a._v(" "),r("h3",{attrs:{id:"安装类的工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装类的工具"}},[a._v("#")]),a._v(" 安装类的工具")]),a._v(" "),r("p",[a._v("npm、Bower和Yeoman几乎什么东西都能装，它们可以用来安装前端库，例如Angular.js或是React.js。它们还可以为你的开发环境安装服务器。它们可以安装测试库。它们甚至可以帮你安装其他的前端开发工具。")]),a._v(" "),r("h3",{attrs:{id:"做事类的工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#做事类的工具"}},[a._v("#")]),a._v(" 做事类的工具")]),a._v(" "),r("p",[a._v("Grunt、Webpack、Require.js、Brunchu和Gulp则更加复杂一点。这类工具的目标，是在web开发中帮你完成自动化。有的时候，这类工具所做的事情，被称为“任务（task）”")]),a._v(" "),r("p",[a._v("为了完成这些任务，这类工具经常需要自己的包和插件生态。每一个工具都会使用不同的方式来完成任务。这些工具所做的事情也不尽相同。一些工具，擅长处理那些你所指定的任务，例如Grunt和Gulp等工具。还有一些工具，只只专注于一件事情，例如处理JavaScript的依赖，例如Browserify和Require.js等工具。")]),a._v(" "),r("h2",{attrs:{id:"build工具的-祖宗-是node和npm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build工具的-祖宗-是node和npm"}},[a._v("#")]),a._v(" build工具的“祖宗”是Node和npm")]),a._v(" "),r("p",[a._v("Node和npm负责安装和运行所有这些工具，因此你的所有项目中都会有它们的身影。由于这个原因，很多开发者在安装新的工具之前，都会尽可能的尝试使用这两个工具解决问题。")]),a._v(" "),r("p",[a._v("它们两个一个负责安装，一个负责帮你做事情。")]),a._v(" "),r("ul",[r("li",[a._v("Node是做事工具")]),a._v(" "),r("li",[a._v("npm则是安装工具")])]),a._v(" "),r("p",[a._v("npm可以安装Angular.js和React.js等库。它还可以安装服务器，让你的应用在开发阶段可以在本地运行。它还可以安装很多其他工具，帮你完成很多事情，例如简化代码。")]),a._v(" "),r("p",[a._v("而Node，则是帮你完成事情的，例如运行JavaScript文件，以及服务器等。")]),a._v(" "),r("p",[a._v("如果你刚刚开始学习，那么Node和npm都是必学的东西。随着你的项目不断丰富，你将会逐渐知道这两个工具的极限能力。当它们无法满足你的需要的时候，就是你需要开始安装其他工具的时候了。")]),a._v(" "),r("h2",{attrs:{id:"build其实就是production-ready版本的应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build其实就是production-ready版本的应用"}},[a._v("#")]),a._v(" build其实就是production-ready版本的应用")]),a._v(" "),r("p",[a._v("开发者经常会把JavaScript和CSS拆分成独立的文件。")]),a._v(" "),r("p",[a._v("独立文件的好处，是让你可以专注于编写针对性较强的代码，让每一部分代码只针对一个问题，以免日后代码多到让你自己都难以管理。但是当你的应用准备好被推向市场的时候，项目内存在多个JavaScript或是CSS文件并不是一个好主意。当用户访问你的网站的时候，每一个文件都需要独立的HTTP请求，这会让站点加载速度下降。")]),a._v(" "),r("p",[a._v("解决方法就是，给项目创建“build”，它要将所有CSS文件合并成一个文件，然后再合并JavaScript文件。这样一来，你就可以将文件完成最小化。要想创建这个build，你需要使用build工具。")]),a._v(" "),r("h2",{attrs:{id:"最正确工具组合-这么个东西不存在"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最正确工具组合-这么个东西不存在"}},[a._v("#")]),a._v(" “最正确工具组合”这么个东西不存在")]),a._v(" "),r("p",[a._v("使用哪些工具，完全是你自己说了算的事情。")]),a._v(" "),r("p",[a._v("你也可以选择什么工具都不用。但是要记住，随着项目的发展，复制、黏贴、整合、开启服务器等事情会让你慢慢手忙脚乱起来。")]),a._v(" "),r("p",[a._v("你也可以只使用Node和npm，其他工具一概不用。对于新手来说，这种方式很好，但是和上一条一样，慢慢你会开始感到力不从心。")]),a._v(" "),r("p",[a._v("或者，除了Node和npm之外，你也可以使用少数几个其他工具。那么，你的开发过程将会以Node和npm为核心，然后搭配Grunt和Bower，或是Webpack或是Gulp和Bower。")]),a._v(" "),r("p",[a._v("使用正确的工具，能够帮你将很多繁琐的事情实现自动化。但是使用工具的代价，就是你需要付出学习成本。")]),a._v(" "),r("h2",{attrs:{id:"build工具学习成本较高，因此你只需要学习你用的上的工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build工具学习成本较高，因此你只需要学习你用的上的工具"}},[a._v("#")]),a._v(" build工具学习成本较高，因此你只需要学习你用的上的工具")]),a._v(" "),r("p",[a._v("项目开发本身就已经很复杂了，你可能要使用新的语言或是框架。你可能需要应付复杂的业务逻辑。而引入新的工具，只会让你的学习成本变得更高。")]),a._v(" "),r("p",[a._v("对此，我的建议是，只学习那些你用的上的工具，其他的就先缓一缓吧。")]),a._v(" "),r("p",[a._v("学习任何一种新东西，最好的方式就是进行实践。例如，不要为了学习Grunt而去学习，你可以在你的项目中去尝试运用。")])])}),[],!1,null,null,null);t.default=_.exports}}]);