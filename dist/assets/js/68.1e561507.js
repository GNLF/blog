(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{389:function(n,t,s){"use strict";s.r(t);var v=s(17),l=Object(v.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"svn-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svn-简介"}},[n._v("#")]),n._v(" svn 简介")]),n._v(" "),s("ol",[s("li",[n._v("SVN全称：Subversion;")]),n._v(" "),s("li",[n._v("它是开放源代码的版本控制器；")]),n._v(" "),s("li",[n._v("它采用了分支管理系统，目标是取代CVS，是cvs的重写版和改进版；")]),n._v(" "),s("li",[n._v("通俗地讲，它用于多个人共同开发同一项目，共用资源的目的；")]),n._v(" "),s("li",[n._v("svn服务器有2种运行方式：独立服务器和借助apache运行。两种方式各有利弊，用户可以自行选择")]),n._v(" "),s("li",[n._v("svn存储版本数据也有2种方式：BDB(一种事务安全型表类型)和FSFS(一种不需要数据库的存储系统)。因为BDB方式在服务器中断时，有可能锁住数据，所以还是FSFS方式更安全一点。")]),n._v(" "),s("li",[n._v("集中式管理的工作流程如下图： 集中式代码管理的核心是服务器，所有开发者在开始新一天的工作之前必须从服务器获取代码，然后开发，最后解决冲突，提交。所有的版本信息都放在服务器上。如果脱离了服务器，开发者基本上可以说是无法工作的。下面举例说明： 开始新一天的工作：\n"),s("img",{attrs:{src:"/blog/img/html/svn.png",alt:"svn原理"}}),n._v("\n1）从服务器下载项目组最新代码。\n2）进入自己的分支，进行工作，每隔一个小时向服务器自己的分支提交一次代码（很多人都有这个习惯。因为有时候自己对代码改来改去，最后又想还原到前一个小时的版本，或者看看前一个小时自己修改了哪些代码，就需要这样做了）。\n3）下班时间快到了，把自己的分支合并到服务器主分支上，一天的工作完成，并反映给服务器。\n这就是经典的svn工作流程，从流程上看，有不少缺点，但也有优点。")])])])}),[],!1,null,null,null);t.default=l.exports}}]);