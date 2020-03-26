# 浅谈 MVC、MVP 和 MVVM 架构模式

MVC/MVVM 简称 MC* 模式，其中 MVVM 是从 MVC 演进而来的。

## MVP

> MVP是对MVC的进一步改进。

MVP是从经典的MVC模式演变而来的，他们的基本思想有相通的地方：Controller/Presenter 负责逻辑的处理，Model提供数据，View负责显示。

在MVP中，Presenter完全将View和Model进行了分离，主要的程序逻辑在Presenter里面实现。而且，Presenter与具体的View是没有直接关联的，而是通过定义好的接口进行交互，从而使得在变更View的时候可以保持Presenter不变。MVP通信方式如图：

![MVP](/blog/img/vue/mvp.png)

> MVP是把MVC中的Controller换成了Presenter（呈现），目的就是为了完全切断View跟Model之间的联系，由Presenter充当桥梁，做到View-Model之间通信的完全隔离。

## MVVM（Model-View-ViewModel）

如果说MVP是对MVC的进一步改进，那么MVVM则是思想的完全变革。它是将“数据模型数据双向绑定”的思想作为核心，因此在View和Model之间没有联系，通过ViewModel进行交互，而且Model和ViewModel之间的交互是双向的，因此视图的数据的变化会同时修改数据源，而数据源数据的变化也会立即反应到View上。

![MVVM](/blog/img/vue/mvvm2.jpg)

## 参考

| 链接                                                         |
| :----------------------------------------------------------- |
| [浅谈 MVC、MVP 和 MVVM 架构模式](http://www.th7.cn/Program/IOS/201707/1206827.shtml) |
| [浅谈MVC、MVP、MVVM架构模式的区别和联系](https://www.cnblogs.com/guwei4037/p/5591183.html) |
























### 模块化

1. 解决了命名空间和文件依赖的问题

- MVC模板：PC端、移动端、H5
- SPA应用：Vue技术栈/React技术栈/Angular技术栈

#### Vue技术栈

1. PC端应用：前台页面，管理台页面

   ```
   组件库   Element-UI   iView
   ```



2. 移动端应用：WebAPP、HybirdApp

   ```
     	组件库  mint-ui   Vant   
    	组件库：mint-ui 31,347、Vant 42,701
       Hybird App   

       1. ApiCloud   
       2. Dcloud mui + h5+.js + hbuilder
       3. React Native (Facebook)
       4. ionic + Cordova
       5. Flutter (Google最新力作) 基于Dart开发
       6. ....

   ```



3. 桌面应用

技术 ;  nodejs、webpack、less、babel、axios、v-charts、Echarts

工作中遇到的技术点：

1. Flutter（谷歌）基于Dark开发,开发App。
2. TypeScript  JavaScript的超集
3. `uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可编译到iOS、Android、H5、以及各种小程序等多个平台.

Vue开发流程

1. 利用命令行工具穿件 项目，搭建开发环境

2. 项目开发前配置

   ```
   组件库选型、引入组件库
   ```

3. 项目开发阶段

   ```
   开发：页面组件；业务组件；公共组件
   ```

4. 项目打包前测试与优化

   ```
   优化：
   	1.路由  动态加载   静态加载
   	2.减少文件体积
   		1>将某些依赖包改为按需加载
   		2>删除一些不合理的包
   		3>moment功能太丰富，我们使用功能较少，使用其他包替代
   ```

5. 项目上线

   - 发布静态资源服务器
   - CDN内容分发网络
