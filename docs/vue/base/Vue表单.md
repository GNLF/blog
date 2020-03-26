# Vue表单

## 基础用法

用 v-model 指令在表单 `<input>` 及 `<textarea>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。

```html
<div id="app">
    <input type="text" v-model="msg">
    <p>{{msg}}</p>
</div>
<script>
new Vue({
    el:"#app",
    data:{
        msg:""
    }
})
</script>
```

## 常用表单用法

### text

```html
<div id="app">
    <input type="text" v-model="msg">
    <p>{{msg}}</p>
</div>
<script>
new Vue({
    el:"#app",
    data:{
        msg:""
    }
})
</script>
```

### textarea

```html
<div id="app">
    <textarea v-model="msg"></textarea>
    <p>{{msg}}</p>
</div>
<script>
new Vue({
    el:"#app",
    data:{
        msg:""
    }
})
</script>
```

> 在文本区域插值 (`<textarea></textarea>`) 并不会生效，应用 v-model 指令来代替。

### radio

```html
<div id="app">
    性别：
    <label>
        <input type="radio" value="man" v-model="sex">
        男
    </label>
    <label>
        <input type="radio" value="woman" v-model="sex">
        女
    </label>
    <hr>
    <p>当前选中：{{sex}}</p>
</div>
<script>
new Vue({
    el:"#app",
    data:{
        sex:''
    }
})
</script>
```

### checkbox

```html
<div id="app">
    爱好：
    <label>
        <input type="checkbox" value="basketball" v-model="fav">
        篮球
    </label>

    <label>
        <input type="checkbox" value="read" v-model="fav">
        阅读
    </label>

    <label>
        <input type="checkbox" value="film" v-model="fav">
        电影
    </label>
    <hr>
    {{fav}}
</div>
<script>
new Vue({
    el:"#app",
    data:{
        fav:[]
    }
})
</script>
```

### select

```html
<div id="app">
    城市：
    <select v-model="city">
        <option disabled value="">请选择</option>
        <option :value="v" v-for="v in citys">{{v}}</option>
    </select>
    <hr>
    <p>当前选中：{{city}}</p>
</div>
<script>
new Vue({
    el:"#app",
    data:{
        citys:['北京','上海','杭州','深圳','西安','武汉'],
        city:''
    }
})
</script>
```

## 修饰符

### .lazy

在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```

### .number

如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：

```html
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。

### .trim

如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：

```html
<input v-model.trim="msg">
```
