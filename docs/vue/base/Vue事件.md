# Vue事件

> v-on 指令来绑定并监听 DOM 事件。

## 事件绑定

Vue给DOM元素绑定事件是通过v-on指令来绑定并监听的，Vue基本支持DOM所有事件。

```
<a v-on:click="doSomething"></a>
<div v-on:mouseover="doSomething"></div>
<div v-on:dblclick="doSomething"></div>
<div v-on:keydown="doSomething"></div>
```

v-on很常用，可缩写为`@`，例如：

```
<a @click="doSomething"></a>
<div @mouseover="doSomething"></div>
```

## 事件处理方法

事件监听可以传入两种类型：方法 和 表达式。

### 表达式

```html
<div id="demo">
    <button @click="num++">+</button>
    <div class="text">{{num}}</div>
    <button @click="num--">-</button>
</div>
new Vue({
    el:"#demo",
    data:{
        num:0
    }
})
```

<iframe src="https://jsrun.pro/kMqKp/embedded/all/light/" id="JSREMB_18136" width="100%" height="280" frameborder="0" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" style="box-sizing: border-box;"></iframe>

### 方法

```html
<div id="demo">
    <button @click="increment">+</button>
    <div class="text">{{num}}</div>
    <button @click="minus">-</button>
    <button @click="reset">reset</button>
</div>
new Vue({
    el:"#demo",
    data:{
        num:0
    },
    methods:{
        increment:function(){
            this.num++;
        },
        minus:function(){
            this.num--;
        },
        reset:function(){
            this.num = 0;
        }
    }
})
```

<iframe src="https://jsrun.pro/YMqKp/embedded/all/light/" id="JSREMB_18136" width="100%" height="280" frameborder="0" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" style="box-sizing: border-box;"></iframe>

## 事件对象与传递参数

### 事件对象

```
//第一种
<div @click="fn"></div>
new Vue({
    methods:{
        fn(e){
            //e 事件对象
        }
    }
})

//第二种
<div @click="fn($event)"></div>
new Vue({
    methods:{
        fn(e){
            //e 事件对象
        }
    }
})
```

当你要访问事件对象时，你可以传递一个 $event 参数进去：

```html
<div id="demo">
    <div id="box" @mousemove="color($event)" :style="{backgroundColor:`rgb(${r},${g},${b})`}">
        R{{r}},G{{g}},B{{b}}
    </div>
</div>
new Vue({
    el:"#demo",
    data:{
        r:0,
        g:0,
        b:0
    },
    methods:{
        color:function(ev){
            this.r = Math.floor(ev.offsetX/1.5);
            this.g = Math.floor(ev.offsetY/1.5);
            this.b = Math.abs(ev.offsetX-ev.offsetY);
        }
    }
})
```

<iframe src="https://jsrun.pro/qMqKp/embedded/all/light/" id="JSREMB_18136" width="100%" height="302" frameborder="0" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" style="box-sizing: border-box;"></iframe>

### 传递参数

```html
<div id="demo">
    <ul>
        <li v-for="(v,i) in lists">
            <span>{{v}}</span>
            <button @click="del(i)">DEL</button>
        </li>
    </ul>
</div>
new Vue({
    el:"#demo",
    data:{
        lists:['前端工程师','Python工程师','全栈工程师','大数据工程师','UI/UX设计师']
    },
    methods:{
        del:function(i){
            this.lists.splice(i,1)
        }
    }
})
```

<iframe src="https://jsrun.pro/gMqKp/embedded/all/light/" id="JSREMB_18136" width="100%" height="280" frameborder="0" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" style="box-sizing: border-box;"></iframe>

## 修饰符

在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在 `methods`(计算属性) 中轻松实现这点，但更好的方式是：methods 只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题， Vue.js 为 `v-on` 提供了 事件修饰符。通过由点`.`表示的指令后缀来调用修饰符。

### 事件修饰符

| 常用事件修饰符 | 作用                                       |
| -------------- | ------------------------------------------ |
| .stop          | event.stopPropagation()，阻断冒泡事件流    |
| .prevent       | event.preventDefault()，阻止浏览器默认动作 |
| .once          | 表示该事件只调用一次                       |

```
<!-- 阻止单击事件冒泡 -->  
<a v-on:click.stop="doThis"></a>  

<!-- 点击事件只能执行一次 -->  
<a v-on:click.once="doThis"></a>  

<!-- 提交事件不再重载页面 -->  
<form v-on:submit.prevent="onSubmit"></form>  

<!-- 修饰符可以串联 -->  
<a v-on:click.stop.prevent="doThat">  

<!-- 只有修饰符 -->  
<form v-on:submit.prevent></form>
```

#### 阻止事件冒泡

```html
<div id="demo">
    <div @click="show(2)">
        外面div
        <div @click.stop="show(1)">
            里面div
        </div>
    </div>
</div>
new Vue({
    el:"#demo",
    methods:{
        show:function(v){
            alert(v);
        }
    }
})
```

#### 阻止默认动作

```html
<div id="demo">
    <form action="a.php">
        <div>
            <span>用户名</span>
            <input type="text" name="user">
        </div>
        <div>
            <span>密码</span>
            <input type="password" name="password">
        </div>
        <div>
            <input type="submit" @click.prevent value="登录">
        </div>
    </form>
</div>
new Vue({
    el:"#demo",
    methods:{
        show:function(v){
            alert(v);
        }
    }
})
```

#### 一次性事件

```html
<div id="demo">
    <button @click.once="show('hi')">只能执行一次</button>
</div>
new Vue({
    el:"#demo",
    methods:{
        show:function(v){
            alert(v);
        }
    }
})
```

### 按键修饰符

在监听键盘事件时，我们经常需要监测常见的键值。 Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符： `<input v-on:keyup.13="submit">`

记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：

| 按键修饰符 | 捕获按键                 |
| ---------- | ------------------------ |
| .enter     | 回车                     |
| .tab       | Tab键                    |
| .ctrl      | Ctrl键 (2.1版本新增)     |
| .shift     | Shift键 (2.1版本新增)    |
| .esc       | Esc键                    |
| .delete    | 捕获 “删除” 和 “退格” 键 |
| .up        | 上                       |
| .down      | 下                       |
| .left      | 左                       |
| .right     | 右                       |
| .space     | 空格                     |
| .alt       | Alt键 (2.1版本新增)      |
| .meta      | 菜单键 (2.1版本新增)     |

按键也可以组合使用，例如：Alt + c

```
<input @keyup.alt.67="clear">
```


  