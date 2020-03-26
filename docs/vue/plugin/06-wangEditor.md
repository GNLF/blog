# wangEditor

> wangEditor —— 轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器。

## 介绍

wangEditor基于javascript和css开发的 Web富文本编辑器， 轻量、简洁、易用、开源免费

- [访问wangEditor文档](https://www.kancloud.cn/wangfupeng/wangeditor3/content)

### 什么是富文本编辑器

富文本编辑器，Rich Text Editor, 简称 RTE, 它提供类似于 Microsoft Word 的编辑功能，容易被不会编写 HTML 的用户并需要设置各种文本格式的用户所喜爱。它的应用也越来越广泛。最先只有 IE 浏览器支持，其它浏览器相继跟进，在功能的丰富性来说，还是 IE 强些。虽然没有一个统一的标准，但对于最基本的功能，各浏览器提供的 API 基本一致，从而使编写一个跨浏览器的富文本编辑器成为可能。

## 安装

### NPM

```js
npm install wangeditor
```

### 下载

[点击进入下载页面](https://github.com/wangfupeng1988/wangEditor/releases)

## 使用

### 浏览器引入

只需要一个 div 元素，用 JavaScript 代码启用即可 HTML 结构如下：

```html
<div id="editor"></div>
```

JavaScript 启用代码如下：

```js
var E = window.wangEditor;
var editor = new E('#editor');
editor.create();
```

### Vue使用

在需要使用wangEditor的Vue页面中导入该插件：

```js
import WangEditor from 'wangeditor'
```

在模板中添加div标签：

```html
<template>
    <div>
        <div ref="editor" style="text-align:left"></div>
    </div>
</template>
```

JavaScript:

```html
<script>
    import E from 'wangeditor'
    export default {
      name: 'editor',
      data () {
        return {
          editorContent: ''
        }
      },
      mounted() {
        var editor = new E(this.$refs.editor)
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
      }
    }
</script>
```
