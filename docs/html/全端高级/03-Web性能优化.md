# Web性能优化

> 你遇到过性能很差的网页吗？
> 这种网页响应非常缓慢，占用大量的CPU和内存，浏览起来常常有卡顿，页面的动画效果也不流畅。

![img](/blog/img/html/test.png)

## 为什么要优化？

1. 从用户角度而言，优化能够让页面加载得更快、对用户的操作响应得更及时，能够给用户提供更为友好的体验。
2. 从服务商角度而言，优化能够减少页面请求数、或者减小请求所占带宽，能够节省可观的资源。

## 提升网页性能策略

提升网页加载速度我们需要从以下几个方面考虑：

- 减少http请求次数
- 减少页面内容

### 减少http请求次数

> 80%的响应时间花在下载网页内容(images,stylesheets,javascripts,scripts,flash等)。减少请求次数是缩短响应时间的关键！可以通过简化页面设计来减少请求次数，但页面内容较多可以采取一些技巧：

chrome浏览器在同一时间内向同域至多发起6个请求。之后的请求，需要等待前6个返回后才能技术发送。即同一时间针对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。

大多数的浏览器都有一个并发请求数不能超过6个的限制。这意味着，如果一个网页里嵌入了过多的外部资源，这些请求会导致整个页面的加载延迟。

#### 技巧1：合并文件——减少页面文件引用

css、JavaScript文件优化 建议把页面中多个脚本文件、css文件合并为一个文件减少文件的下载次数。 css中减少 导入样式 `@import url();` 不合理：

```html
<link rel="stylesheet" href="a.css">
<link rel="stylesheet" href="b.css">
<link rel="stylesheet" href="c.css">
```

合理：

```html
<link rel="stylesheet" href="all.css">
```

#### 技巧2：合并图标

- 采用css精灵技术： 网页中一些背景图片整合到一张图片文件中，再利用CSS的background-position用数字精确的定位出背景图片的位置。 优化css精灵，尽量做到 图片紧凑、文件小

- 采用iconfont技术： 优点：可以兼容IE6-11 chrome 谷歌、尺寸和颜色可以用css来控制
  缺点：只支持纯色。

- 采用base64技术：(建议小图片使用) 简单地说，它把一些 8-bit 数据翻译成标准 ASCII 字符，我们把图像文件的内容直接写在了HTML 文件中，这样做的好处是，节省了一个HTTP 请求。

  Base64目前主要用于HTML5、移动开发等不考虑IE6的场景中。 目前，IE8、Firfox、Chrome、Opera浏览器都支持这种小文件嵌入。 举个图片的例子：

  网页中一张图片可以这样显示,代码如下:

  ```html
  <img src="/blog/img/html/log.gif" />
  ```

  Base64 代码如下:

  ```html
  <img src="data:image/gif;base64,R0lGODlhAgACAIAAAP///wAAACwAAAAAAgACAAACAoRRADs="/>
  ```

### 减少页面内容

核心问题：页面内容量 网页中元素过多对网页的加载和脚本的执行都是沉重的负担，500个元素和5000个元素在加载速度上必然会有很大差别。

#### 技巧1：压缩Javascript和CSS

压缩就是将Javascript或CSS中的空格和注释全去掉， 在线压缩工具网址：<http://tool.oschina.net/jscompress>

```css
body{
    margin:0;
}
ol, ul {
    list-style: none;
}
```

压缩后版本：

```css
body{margin:0;}ol,ul{list-style:none}
```

据统计表明压缩后的文件大小平均减少了21%，即使在应用Gzip的文件也会减少5%。

#### 技巧2：内容优化

通常情况下页面的内容的多少我们决定不了，但是我们可以通过合理规范的书写代码来优化加载速度。

尽可能的减少DOM层级、合理书写代码。

#### 技巧2：合理图片格式

各方面比较

| 类别         | 结果            |
| :----------- | :-------------- |
| 大小比较     | PNG ≈ JPG > GIF |
| 透明性       | PNG > GIF > JPG |
| 色彩丰富程度 | JPG > PNG >GIF  |
| 兼容程度     | GIF ≈ JPG > PNG |

一般网站中图片肯定是不可或缺的。如果图片不经过处理，那么会导致加载速度很慢，并且浪费流量

##### 1. 使用PhotoShop压缩

载入图片 -> 点击"文件"-"保存为WEB格式文件"(快捷键 ctrl + alt + shift + S) -> 参数配置(图片格式、压缩质量、压缩级别、图片大小) -> 点击”存储”进行导出

![img](/blog/img/html/04-1542062901000.png)

##### 2. 在线压缩

| 类别                                             | 描述                                         |
| :----------------------------------------------- | :------------------------------------------- |
| [picdiet在线压缩](https://www.picdiet.com/zh-cn) | 可以批量处理，效果还不错，但是只支持jpg/jpeg |
| [智图](https://zhitu.isux.us/)                   | 可在线进行图片压缩，也可下载客户端本地使用。 |

##### 3. 本地压缩(智图)

智图能够自动为你选择压缩率压缩并且在合适的情况下为你选择正确的图片格式。操作十分简单，与此同时，智图也会为你上传的图片转换一份webP格式的图片。

下载地址：[智图下载](https://zhitu.isux.us/index.php/preview/download) 安装教程：[智图安装教程](https://zhitu.isux.us/index.php/preview/install)

客户端界面

![img](/blog/img/html/zhitu.jpg)

客户端右上角 设置 还支持生成WebP、替换原图、深度压缩。

只需要将要优化的图片拉至首页的拖拽区域后，系统会自动上传图片并经过智图压缩，返回新的图片。你也可以根据自己的实际使用情况选择不同的压缩率。

### 缓存技术

### 其他优化思想

#### 恰当放置 CSS

> 把css外部文件引入的时候放入到head标签中，这并没有提升页面的加载速度，但是它不会让访问者长时间看着空白屏幕或者无格式的文本（FOUT）等待。如果网页大部分可见元素已经加载出来了，访问者才更有可能等待加载整个页面，从而带来对前端的优化效果。这就是知觉性能。

#### 使用外部的CSS

> 内联脚本或者样式可以减少HTTP请求，按理来说可以提高页面加载的速度。然而在实际情况中，当脚本或者样式是从外部引入的文件，浏览器就有可能缓存它们，从而在以后加载的时候能够直接使用缓存，而HTML文档的大小减小，从而提高加载速度。

#### 语义化HTML

好处在于可以使代码简洁清晰，支持不同设备，利于搜索引擎，便于团队开发

```html
<header></header>
<footer></footer>
<nav></nav>
<article></article>
```

#### 优化css性能

1. 不要使用@import 指令 来引入外部样式表。这是一个过时的方法，它会阻止浏览并行下载。link 标签才是最好的选择，它也能提高网站的前端性能
2. 浏览器时从右向左匹配选择符的，所以我们把权重大的选择器放在后面
3. 尽量避免后代选择器 （通常后代选择器是开销最高的，如果可以，请使用子选择器代替。）
4. 依靠继承,合并相同的类
5. 属性缩写
6. 减少查询层级和减少查询范围
7. 避免使用 CSS Filter（CSS滤镜）
8. 不要使用通配符
9. 避免使用后代选择器,少用子选择器

属性缩写

```css
#ffffff ->#fff
0px ->0
padding-top:10px;padding-left:10px;padding-bottom:10px;padding-right:10px; => padding:10px;
```





## Internet Explorer 8 和 9

Internet Explorer 8 和 9 是被支持的，然而，你要知道，很多 CSS3 属性和 HTML5 元素 -- 例如，圆角矩形和投影 -- 是肯定不被支持的。另外， **Internet Explorer 8 需要 Respond.js 配合才能实现对媒体查询（media query）的支持。**

| Feature         | Internet Explorer 8 | Internet Explorer 9     |
| :-------------- | :------------------ | :---------------------- |
| `border-radius` | 不支持              | 支持                    |
| `box-shadow`    | 不支持              | 支持                    |
| `transform`     | 不支持              | 支持, with `-ms` prefix |
| `transition`    | 不支持              |                         |
| `placeholder`   | 不支持              |                         |

请参考 [Can I use...](http://caniuse.com/) 以获取详细的 CSS3 和 HTML5 特性在各个浏览器上的支持情况。

## Internet Explorer 8 与 Respond.js

在开发环境和生产（线上）环境需要支持 Internet Explorer 8 时，请务必注意下面给出的警告。

### Respond.js 与 跨域（cross-domain） CSS 的问题

如果 Respond.js 和 CSS 文件被放在不同的域名或子域名下面（例如，使用CDN）时需要一些额外的设置。请参考 [Respond.js 文档](https://github.com/scottjehl/Respond/blob/master/README.md#cdnx-domain-setup) 获取详细信息。

### Respond.js 与 `file://` 协议

由于浏览器的安全机制，Respond.js 不能在通过 `file://` 协议（打开本地HTML文件所用的协议）访问的页面上发挥正常的功能。如果需要测试 IE8 下面的响应式特性，务必通过 http 协议访问页面（例如搭建 apache、nginx 等）。请参考 [Respond.js 文档](https://github.com/scottjehl/Respond/blob/master/README.md#support--caveats)获取更多信息。

### Respond.js 与 `@import` 指令

Respond.js 不支持通过 `@import` 指令所引入的 CSS 文件。例如，Drupal 一般被配置为通过 `@import` 指令引入CSS文件，Respond.js 对其将无法起到作用。请参考 [Respond.js 文档](https://github.com/scottjehl/Respond/blob/master/README.md#support--caveats)获取更多信息。

## Internet Explorer 8 与 box-sizing 属性

当 `box-sizing: border-box;` 与 `min-width`、`max-width`、`min-height` 或 `max-height` 一同使用时，IE8 不能完全支持 box-sizing 属性。由于此原因，从 Bootstrap v3.0.1 版本开始，我们不再为 `.container` 赋予 `max-width` 属性。

## Internet Explorer 8 与 @font-face

当 `@font-face` 与 `:before` 在 IE8 下共同使用时会出现问题。由于 Bootstrap 对 Glyphicons 的样式设置使用了这一组合方式，如果某个页面被浏览器缓存了，并且此页面不是通过点击“刷新”按钮或通过 iframe 加载的，那么就会导致字体文件尚未加载的情况下就开始绘制此页面。当鼠标滑过页面（body）时，页面上的某些图标就会显现，鼠标滑过其他没有显现的图标时，这些图标就能显示出来了。请参考 [issue #13863](https://github.com/twbs/bootstrap/issues/13863) 了解详细信息。

## IE 兼容模式

Bootstrap 不支持 IE 古老的兼容模式。为了让 IE 浏览器运行最新的渲染模式下，建议将此 `<meta>` 标签加入到你的页面中：

```
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

按 F12 键打开 IE 的调试工具，就可以看到 IE 当前的渲染模式是什么。

此 meta 标签被包含在了所有 Bootstrap 文档和实例页面中，为的就是在每个被支持的 IE 版本中拥有最好的绘制效果

## 国产浏览器高速模式

国内浏览器厂商一般都支持兼容模式（即 IE 内核）和高速模式（即 webkit 内核），不幸的是，所有国产浏览器都是默认使用兼容模式，这就造成由于低版本 IE （IE8 及以下）内核让基于 Bootstrap 构建的网站展现效果很糟糕的情况。幸运的是，国内浏览器厂商逐渐意识到了这一点，某些厂商已经开始有所作为了！

将下面的 `<meta>` 标签加入到页面中，可以让部分国产浏览器默认采用高速模式渲染页面：

```html
<meta name="renderer" content="webkit">
```

目前只有[360浏览器](http://se.360.cn/v6/help/meta.html)支持此 `<meta>` 标签。希望更多国内浏览器尽快采取行动、尽快进入高速时代！

## Windows 8 中的 Internet Explorer 10 和 Windows Phone 8

Internet Explorer 10 并没有对 **屏幕的宽度** 和 **视口（viewport）的宽度** 进行区分，这就导致 Bootstrap 中的媒体查询并不能很好的发挥作用。为了解决这个问题，你可以引入下面列出的这段 CSS 代码暂时修复此问题：

```css
@-ms-viewport       { width: device-width; }
```

然而，这样做并不能对 Windows Phone 8 [Update 3 (a.k.a. GDR3)](http://blogs.windows.com/windows_phone/b/wpdev/archive/2013/10/14/introducing-windows-phone-preview-for-developers.aspx) 版本之前的设备起作用，由于这样做将导致 Windows Phone 8 设备按照桌面浏览器的方式呈现页面，而不是较窄的“手机”呈现方式，为了解决这个问题，还需要**加入以下 CSS 和 JavaScript 代码来化解此问题**。

```css
@-ms-viewport       { width: device-width; }
@-o-viewport        { width: device-width; }
@viewport           { width: device-width; }
// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
```
