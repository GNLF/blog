# vue基础介绍

[[toc]]

## Vue.js 是什么

:::tip 介绍
Vue.js是一套构建用户界面的**渐进式框架**。 从根本上采用最小成本、渐进增量的设计。Vue 的核心库只专注于视图层，并且很容易与其他第三方库或现有项目集成。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供有力驱动。
:::

## 声明式渲染

Vue.js 的核心是，可以采用简洁的模板语法来声明式的将数据渲染为 DOM：

```html
<div id="app">
  {{ message }}
</div>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

## 生命周期

![Vue 声明周期](/blog/img/vue/lifecycle.png)

## computed属性和watcher

### 1.computed与method的区别

**computed 属性会基于它所依赖的数据进行缓存。**每个 computed 属性，只有在它所依赖的数据发生变化时，才会重新取值(re-evaluate)。这就意味着，只要 `message` 没有发生变化，多次访问 computed 属性 `reversedMessage`，将会立刻返回之前计算过的结果，而不必每次都重新执行函数。

每当触发重新渲染(re-render)时，method 调用方式将**总是**再次执行函数。

### 2.computed 属性中设置 setter

computed 属性默认只设置 getter 函数，不过在需要时，还可以提供 setter 函数：

```js
// ...
computed: {
  fullName: {
    // getter 函数
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter 函数
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```

现在当你运行 `vm.fullName = 'John Doe'`，将会调用 setter，然后会对应更新 `vm.firstName` 和 `vm.lastName`。

## class 和 style 绑定

### 对象语法

动态地切换 class：

```html
<div v-bind:class="{ active: isActive }"></div>
```

`active` 这个 class 的存在与否，取决于 `isActive` 这个 data 属性的 [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) 值。

class 和 style 与某个 computed 属性绑定在一起，此 computed 属性所对应的 getter 函数需要返回一个对象。

### 数组语法

可以向 `v-bind:class` 传入一个数组，来与 class 列表对应：

```html
<div v-bind:class="[activeClass, errorClass]"></div>
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

会被渲染为：

```html
<div class="active text-danger"></div>
```

## 与内联 style 绑定

### 对象语法

CSS 属性名称可以使用驼峰式(camelCase)或串联式(kebab-case)（使用串联式需要加引号）：

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}
```

直接与 data 中的 style 对象绑定，这样模板看起来更清晰：

```html
<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

再次申明，`v-bind:style` 的对象语法，通常也会和 computed 属性结合使用，此 computed 属性所对应的 getter 函数需要返回一个对象。

### 数组语法

`v-bind:style` 的数组语法，可以在同一个元素上，使用多个 style 对象：

```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

### 自动添加前缀

在 `v-bind:style` 中使用具有浏览器厂商前缀(vendor prefixes)的 CSS 属性时（例如 `transform`），Vue 会自动检测并向 style 添加合适的前缀。

可以为每个 style 属性提供一个含有多个（前缀）值的数组，例如：

```html
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

## `v-if` 和 `v-show`

`v-if` 是“真实”的条件渲染，因为它会确保条件块(conditional block)在切换的过程中，完整地销毁(destroy)和重新创建(re-create)条件块内的事件监听器和子组件。

`v-if` 是**惰性的(lazy)**：如果在初始渲染时条件为 false，它不会执行任何操作 - 在条件第一次变为 true 时，才开始渲染条件块。

相比之下，`v-show` 要简单得多 - 不管初始条件如何，元素始终渲染，并且只是基于 CSS 的切换。

通常来说，`v-if` 在切换时有更高的性能开销，而 `v-show` 在初始渲染时有更高的性能开销。因此，如果需要频繁切换，推荐使用 `v-show`，如果条件在运行时改变的可能性较少，推荐使用 `v-if`。

## 对象变化检测注意事项

受现代 Javascript 的限制， **Vue 无法检测到对象属性的添加或删除**

Vue 不允许在已经创建的实例上，动态地添加新的根级响应式属性。然而，可以使用 `Vue.set(object, key, value)` 方法，将响应式属性添加到嵌套的对象上。

可以向嵌套的 `userProfile` 对象，添加一个新的 `age` 属性：

```js
Vue.set(vm.userProfile, 'age', 27)
```

还可以使用 `vm.$set` 实例方法，这也是全局 `Vue.set` 方法的别名：

```js
vm.$set(vm.userProfile, 'age', 27)
```

在已经存在的对象上添加一些新的属性，可以使用 `Object.assign()`

例如：通过如下方式，添加新的响应式属性：

```js
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

## 带有 `v-if` 的 `v-for`

当它们都处于同一节点时，`v-for` 的优先级高于 `v-if`。这意味着，`v-if` 将分别在循环中的每次迭代上运行

## 事件修饰符

```html
<!-- 停止点击事件冒泡 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重新载入页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以链式调用 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时，使用事件捕获模式 -->
<!-- 也就是说，内部元素触发的事件先在此处处理，然后才交给内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只有在 event.target 是元素自身时，才触发处理函数。 -->
<!-- 也就是说，event.target 是子元素时，不触发处理函数 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

使用修饰符时的顺序会产生一些影响，因为相关的代码会以相同的顺序生成。所以，使用 `v-on:click.prevent.self` 会阻止**所有点击**，而 `v-on:click.self.prevent` 只阻止元素自身的点击。

### `.passive`修饰符

> -----被动，对应 `addEventListener` 的 `passive` 选项。

```html
<!-- 滚动事件的默认行为（滚动）将立即发生， -->
<!-- 而不是等待 `onScroll` 完成后才发生， -->
<!-- 以防在滚动事件的处理程序中含有 `event.preventDefault()` 调用 -->
<div v-on:scroll.passive="onScroll">...</div>
```

`.passive` 修饰符对于提高移动设备的性能尤其有用。

不要将 `.passive` 和 `.prevent` 放在一起使用，因为 `.prevent` 将被忽略，并且浏览器可能会显示一条警告。记住，`.passive` 会向浏览器传达的意思是，你_并不_希望阻止事件的默认行为。

#### `.exact` 修饰符

`.exact` 修饰符可以控制触发事件所需的系统辅助按键的准确组合。

```html
<!-- 如果 Alt 键或 Shift 键与  Ctrl 键同时按下，也会触发事件 -->
<button @click.ctrl="onClick">A</button>

<!-- 只在 Ctrl 按键按下，其他按键未按下时，触发事件 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 只在没有系统辅助按键按下时，触发事件 -->
<button @click.exact="onClick">A</button>
```

## 为什么监听器放在HTML中

Vue 事件处理器函数和表达式，都严格绑定在处理当前视图(view)的 ViewModel 上，所以不会造成任何维护上的困难。实际上，使用 `v-on` 有几个好处：

1. 通过浏览 HTML 模板，就能很方便地找到在 JavaScript 代码里对应的处理函数。
2. 由于无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，并且和 DOM 完全解耦，更易于测试。
3. 当一个 ViewModel 被销毁时，所有的事件监听器都会被自动删除。你无须担心如何自己清理它们。

## 修饰符

### `.lazy`

默认情况下，`v-model` 会在每次 `input` 事件触发之后，将数据同步至 input 元素中（除了[上述](https://vue.docschina.org/v2/guide/forms.html#vmodel-ime-tip)提到的输入法组合文字时不会）。可以添加 `lazy` 修饰符，从而转为在触发 `change` 事件后同步：

```html
<!-- 在触发 "change" 事件后同步，而不是在触发 "input" 事件后更新 -->
<input v-model.lazy="msg" >
```

### `.number`

如果想要将用户的输入，自动转换为 Number 类型（译注：如果转换结果为 NaN 则返回字符串类型的输入值），可以在 `v-model` 之后添加一个 `number` 修饰符，来处理输入值：

```html
<input v-model.number="age" type="number">
```

这通常很有用，因为即使是在 `type="number"` 时，HTML 中 input 元素也总是返回一个字符串类型的值。

### `.trim`

如果想要将用户的输入，自动过滤掉首尾空格，可以在 `v-model` 之后添加一个 `trim` 修饰符，来处理输入值：

```html
<input v-model.trim="msg">
```

