# HTML

> html 是一种规范，一种标准，它通过**标记符号**来标记要显示的网页中的各个部分。可以告诉浏览器如何显示其中的内容，他是一种由浏览器解释执行的语言。（如：文字如何处理，画面如何安排，图片如何显示等

## HTML介绍

### html（hyper text markup language）超文本标记语言

html 是一种规范，一种标准，它通过**标记符号**来标记要显示的网页中的各个部分。可以告诉浏览器如何显示其中的内容，他是一种由浏览器解释执行的语言。（如：文字如何处理，画面如何安排，图片如何显示等。

html是制作网页的标准语言，由蒂姆·伯纳斯里在1990年提出，其目的是方便地把一台电脑中的文本或图形，与另一台电脑中的文本或图形联系在一体，形成一个有机的整体。超文本，就是指图像、视频、动画、声音、表格、链接等多媒体的内容。

> 注意：浏览器按顺序阅读网页文件，然后根据标记符解释和显示其标记的内容，对书写出错的标记将不指出其错误，且不停止其解释执行过程，编制者只能通过显示效果来分析出错原因和出错部位

### html标准版本历史

> 当前使用的HTML版本为 HTML5，2014年10月由万维网联盟（W3C）完成标准制定

- 超文本标记语言（第一版）——1993年6月作为互联网工程工作小组（IETF）工作草案发布（并非标准）
- HTML 2.0——1995年11月作为IETF RFC 1866发布
- HTML 3.2——1996年1月14日作为W3C推荐标准发布
- HTML 4.0——1997年12月18日作为W3C推荐标准发布
- HTML 4.01——1999年12月24日，W3C推荐标准
- XHTML 1.0——2000年1月26日发布，是W3C推荐标准，后来经过修订于2002年8月1日重新发布
- XHTML 1.1——2001年5月31日作为W3C推荐标准发布
- HTML 5.0——2014年10月28日作为W3C推荐标准发布

### html特性

- 可以使用.html与.htm做为html文件的扩展名。
- HTML由于比较简单，是一种描述性的语言，没有逻辑性。
- 可以使用任意文本编辑器创建HTML所以学习起来非常容易。

## html语法

### 标签

标签符中的标签元素用尖括号括起来，带斜杠的元素表示该标签结束;大多数标签需成对使用，以表示作用的起始和结束。 结束标签一定要以"/"结束，标签之间不能交叉嵌套。

```html
 ├ 开始 ┤         ├ 结束 ┤
  <span>这是文字标签</span>
```

### 属性

必须放在开始标签里面，属性可以为标签提供更多样化的特性。

```html
     ├属性名┤
<span class='wenzi'> 这是字体标签 </span>
            ├属性值┤
```

### 元素

开始和结束标签连同包含在他们之间内容，我们通常叫做元素。

```html
├───────────────── 元素 ─────────────────┤

├────── 开始标签 ────┤           ├ 结束 ┤
<span class='wenzi'> 这是字体标签 </span>
                    ├── 内容 ───┤
```

## html基本标签

### 注释标签

注释标签用于在源代码中插入注释，为编写的HTML代码提示说明文字，注释不会显示在浏览器中。也可以用于临时停用部分代码。

```html
 <!-- 注释内容 -->
```

### html主体结构

html的结构包括“头”部分（英语:Head）和“主体”部分（英语Body），其中“头”部提供关于网页的信息,“主体”部分提供网页的具体内容。

```html
<html>
<head>
<!-- 对html文档进行诠释、定义、描述不会显示在文档当中-->
</head>
<body>
<!-- 对页面内容进行排版、编辑、显示在页面当中，是html页面的主体-->
</body>
</html>
```

#### head标签

```html
<head>
    <title>标题</title>
    <meta name="keywords" content="关键词，多个关键词用英文逗号隔
    开"/>
    <meta name="description" content="本篇网页的概述，一段话"，对网
    站的进一步描述/>
    <meta name="author" content="网页作者的资料"
    <meta name='robots' content=none/>
    <!--  "all" 本页以及本页面的所有链接都可被查询
    "none" 表示不给检索
    "index" 本文件将被检索 -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 　
    <!-- 网页常用编码方式为utf-8 -->
</head>
```

### body标签

body 中放置的是网页中的主体，表示网页的主体部分，通俗的说也就是用户可以看到的内容，可以包含文本、图片、音频、视频等各种内容！

```html
<body>
</body>
```

#### 文档声明

> `<!DOCTYPE>` 声明Web 世界中存在许多不同的文档。只有了解文档的类型，浏览器才能正确地显示文档。HTML 也有多个不同的版本，只有完全明白页面中使用的确切 HTML 版本，浏览器才能完全正确地显示出 HTML 页面。这就是 <!DOCTYPE> 的用处。<!DOCTYPE> 不是 HTML 标签。它为浏览器提供一项信息（声明），即 HTML 是用什么版本编写的。

#### 编码格式

- utf-8 是一种针对Unicode的可变长度字符编码，长度3个字节，它将所有国家所有字符都收录进去，所以又称万国码。
- gb2312（ie浏览器默认编码）它是计算机可以识别的编码，适用于汉字处理、汉字通信等系统之间的信息交换。基本集共收入汉字6763个和非汉字图形字符682个。
- gkb是在国家标准GB2312基础上扩容后兼容GB2312的标准。GBK编码专门用来解决中文编码的，是双字节的。不论中英文都是双字节的。

### 字体效果标签

```html
<h1>...</h1> 一级标题(最大)
<h2>...</h2> 二级级标题
<h3>...</h3> 三级标题
<h4>...</h4> 四级标题
<h5>...</h5> 五级标题
<h6>...</h6> 六级标题(最小)

<b>...</b>粗体字
<strong>...</strong>粗体字(强调)
<i>...</i>斜体字
<em>...</em>斜体字(强调)
```

> 字体标签在SEO中的权重：标签 h1>h2>h3>h4>h5>h6 加重语气的标签 strong > b em > i

> SEO: 是指在了解搜索引擎自然排名机制的基础上， 对网站进行内部及外 部的调整优化， 改进网站在搜索引擎中的关键词自然排名， 获得更多流量， 从而达成网站销售及品牌建设的目标

### 区段标签

和上下的内容进行区分和隔离

```html
  <hr/>水平线
  <hr size='9'>水平线(设定大小)  
  <hr width='80%'>水平线(设定宽度)
  <hr color='ff0000'>水平线(设定颜色)
  <br/>(换行)
  <p>...</p> (段落)
```

### pre标签

> 元素可定义预格式化的文本。

被包围在 pre 元素中的文本通常会保留空格和换行符，在浏览器中显示时，按照编辑工具中文档预先排好的形式显示内容

```
<pre>...</pre>
```

### 实体

在html中有一些特殊符号属于html语法的关键字符，比如'<'或'>'等，为了在页面中显示这样的特殊字符，所以要使用实体来表示

语法

```html
&实体名称;
&nbsp; <!--空格-->
&lt; <!-- < 小于-->
```

| 代码     | 效果 | 代码       | 效果 |
| :------- | :--- | :--------- | :--- |
| `&quot;` | "    | `&amp;`    | &    |
| `&lt;`   | <    | `&gt;`     | >    |
| `&nbsp;` | 空格 | `&copy;`   | ©    |
| `&sect;` | §    | `&curren;` | ¤    |

### 链接标签

链接是指从一个页面指向到另一个目标体，目标体可以是一个图片，也可以是一个网页，也可以是一个文件等，超链接是网络的灵魂，使用的HTML标记是`<a>`标记

```html
<a href='index.html' target='' title=''> </a>
```

| 属性     | 描述                                                 | 版本  |
| :------- | :--------------------------------------------------- | ----- |
| href     | 链接地址                                             | HTML4 |
| traget   | 打开方式                                             | HTML4 |
| title    | 鼠标悬停提示文字                                     | HTML4 |
| download | 下载，href写文件的路径，download属性是下载文件的名字 | HTML5 |

### href 路径

#### 绝对地址

> 绝对路径是从盘符或者根目录出发的，按照文件夹结构指导目标文件或者在互联网上的一个独立地址,在任何地方通过该地址都可访问。

```js
D:\uek\index.html;
http://www.sxuek.com;
```

#### 相对地址

> 相对路径是相对于当前的文件夹或入口文件来说

```js
./css/index.css
css/index.css
../images/logo.png
```

./ 表示当前目录， ../ 表示上级目录。

#### traget

> `_blank` 在新窗口中打开链接； `_self`在当前窗体打开链接,此为默认值

#### title

> 鼠标悬停提示文字

#### download

下载 href写文件的路径，download属性是下载文件的名字

点击链接下载图片:

```html
<a href="/images/logo.png" download="logo.png">
```

<iframe src="http://layout.hnz.kim/caniuse/1.html?style=download" frameborder="0" style="box-sizing: border-box; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;Segoe UI&quot;, Arial, freesans, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; width: 747.429px; min-height: 300px;"></iframe>

#### name 锚链接

> 给页面当中的某个特定位置添加标记，可以通过a链接直接指向这个位置，经常用在页面内容比较多的情况。

```html
<a href="#name"></a>
<a name=""></a>
```

### 图像标签img

| 属性           | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| src            | 表示'源'的意思。"src"属性的值是所要显示图像的URL。           |
| width          | 宽度                                                         |
| height         | 高度                                                         |
| alt            | 给图像显示一个"交互文本"。 一般用于图片加载失败时的文本提示。 |
| title          | 鼠标移过时显示的文字（对SEO有帮助）                          |
| border         | 给图片加一个边框                                             |
| usemap="#name" | 用于图像地图，可以和图像地图关联起来                         |

> 图像地图：图像地图 效果的实质是把一幅图片划分为不同的作用区域，再让不同的区域链接不同的地址

```html
<map name=''>
  <area shape="" coords="" alt="" href="">
</map>
<!--
shape 形状 "rect" "circle" "poly"
coords 坐标 (相对于图片的左上角)
title鼠标经过提示的文字
href 指向的链接
target 以哪种方式打开 -->
```

### 列表标签

#### 无序列表

```html
<ul type=""><li></li></ul>
```

无序列表的type属性值有

- disc 默认值，实心圆
- circle 空心圆。
- square 实心方块。

#### 有序列表

```html
<ol type=""><li></li></ol>
```

有序列表的type属性值：

- 数字顺序的有序列表（默认值） type="1"。
- 字母顺序的有序列表，小写 type="a"。
- 字母顺序的有序列表，大写 type="A"。

#### 自定义列表

> 自定义列表不是一个项目的序列，它是一系列条目和它们的解释。有序列表以`<dl>`标签开始，自定义列表条目以`<dt>`开始，自定义列表的定义以`<dd>`开始。

### 表格元素 table

`<table>` 标签可定义表格。在 `<table>` 标签内部，你可以放置表格的标题、表格行、表格列、表格单元以及其他的表格。

```html
<table>
<tr>
  <td></td><td></td><td></td><!--td表示单元格 -->
</tr><!--tr表示行-->
</table>
```

| 标签    | 属性        | 描述                 |
| :------ | :---------- | :------------------- |
| `table` | width       | 表格宽度             |
| `table` | height      | 表格高度             |
| `table` | border      | 表格边框             |
| `table` | cellspacing | 单元格之间的距离     |
| `table` | cellpadding | 单元格的内边距       |
| `table` | align       | 表格水平对齐方式     |
| `tr`    | align       | 文本水平对齐方式     |
| `tr`    | valign      | 文本垂直对齐方式     |
| `td`    | colspan     | 横跨的列数（合并列） |
| `td`    | rowspan     | 横跨的行数（合并行） |

> 如果表格样式能使用CSS实现,则尽量使用css达到页面与效果分离

```html
<table border="1">
  <caption>支出 </caption> <!-- 表格标题-->
  <thead> <!-- 表格头部-->
    <tr>
      <th>Month</th> <!-- th 表头默认大写居中-->
      <th>Savings</th>
    </tr>
  </thead>

  <tfoot> <!-- 表格底部-->
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>

  <tbody> <!-- 表格内容-->
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table>
```

> 如果您使用 thead、tfoot 以及 tbody 元素，您就必须使用全部的元素。它们的出现次序是：thead、tfoot、tbody，这样浏览器就可以在收到所有数据前呈现页脚了。您必须在 table 元素内部使用这些标签。
>
> 注意：如果单元格数据为空在IE等浏览器中会不显示，所以要保证单元格不能为空，可以添加`&nbsp;`实体空格

### 表单form

> 表单 是Web浏览器和Web服务器进行通信的最常用的手段，即通过表单，浏览器不仅能从Web服务器中获得信息，而且还能向Web服务器反馈信息。HTML为此提供了表单(Form)元素来设计和实现这种交互界面。

```html
<form method='get' action='uek.php'>……</form>
```

| 属性   | 描述         | 值            |
| ------ | ------------ | :------------ |
| action | 数据处理文件 | php、asp、jsp |
| method | 数据提交方式 | get、post     |

### 表单元素input（控件）

> 表单形成的交互界面上有许多元素，负责收集用户输入的各种信息，这些元素一般称为控件。如：单行/多行文本、单元按钮、多选按钮、文本域、下拉菜单、按钮、重置按钮、提交按钮。

```html
<input type='text' name='user' value='uek' size='10' maxlength='20'>
```

| 属性      | 描述                                   |
| :-------- | :------------------------------------- |
| type      | 控件类型                               |
| name      | 用于数据库获取信息                     |
| value     | 指定默认值                             |
| size      | 显示文本框长度                         |
| maxlength | 用户可以出入的最多大字符数             |
| disabled  | 用来设置或获取控件是否可用             |
| readOnly  | 用来设置空间的只读属性，只能复制和读取 |

### 控件类型

| 控件类型 | 值       |
| :------- | :------- |
| 单行文本 | text     |
| 密码     | password |
| 单选按钮 | radio    |
| 复选按钮 | checkbox |
| 文件域   | file     |
| 按钮     | button   |
| 重置按钮 | reset    |
| 提交按钮 | submit   |

### 下拉框 select

```html
>HTML是通过`<select>`和`<option>`标记来定义输入列表框的。列表框标记`<select>`是成对出现标记，首标记`<select>`和尾标记</select>之间的内容就是一个列表框的内容。`<option>`标记用于定义列表框中的各个选项
```

```html
  <select name="uek" size="1" multiple>
  　　<option value="webui" selected="selected">前端工程师</>
  　　<option value="ui" selected="selected">ui设计师</>
  　　<option value="php" selected="selected">php工程师</>
  </select>
```

| 属性     | 描述                                       | 值     |
| :------- | :----------------------------------------- | ------ |
| name     | 指定列表框的文字（必填）                   | 自定义 |
| size     | 用于定义列表框的长度（可选）               | Number |
| multiple | 属性表示可以多选，按Ctrl可以多选。默认单选 | true   |

### 下拉选项 option

> 用于定义列表框中的选项。它必须嵌套在列表框标记中使用，一个列表框中有几个选项，就要有几个

| 属性     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| value    | 属性的参数值是当该项被选中并提交后，web浏览器传送给服务器的数据。缺省时，浏览器将传送选项的内容。 |
| selected | 属性用来指定选项的初始状态，表示该选项在初始时是被选中的。   |

### 文本域 textarea

> 文本域用来定义多行文本。

| 属性 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| name | 用于指定文本输入框的名字                                     |
| cols | cols属性用于规定文本输入框的宽度。属性的参数值是数字，表示一行所能显示的最大字符数 |
| rows | rows属性用于规定文本输入框的高度。属性的参数值是数字，表示该文本输入框所占的行数 |

### 自动聚焦 lable

> 用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上

```html
  <input type='radio' name='sex' value='nan' id='sex'>
  <label for='idname'> </label>
```

```html
  <label>
    <input type='radio' name='sex' value='nan' id='sex'>
  </label>
```

### fieldset

> 标签将表单内容的一部分打包，生成一组相关表单的字段。

```html
  <fieldset>
    <legend>fieldset名称</legend>
    <!-- 加入你的内容 -->
  </fieldset>
```

> fieldset 元素可将表单内的相关元素分组。 `<legend>` 标签为 fieldset 元素定义标题。

### iframe

> 可以和body体共存，用法和类似，用于早期实现异步传输等视觉效果。iframe标签是成对出现的，以 `<iframe>`开始，`</iframe>`结束iframe标签内的内容可以做为浏览器不支持iframe标签时显示。

| 属性      | 值                 |
| :-------- | :----------------- |
| width     | 宽度               |
| height    | 高度               |
| scrolling | 是否出现滚动条     |
| src       | 本框架要指向的页面 |

```html
<iframe src="https://www.baidu.com" width="" height=""></iframe>
```
