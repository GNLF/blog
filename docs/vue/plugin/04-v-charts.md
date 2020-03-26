# v-charts

|       项目                                 |      版本                                              | 描述                                            | 文档地址                   | 重要性 |
| ------------------------------------ | ------------------------------------------------- | ----------------------------------------------- | -------------------------- | ------ |
| [v-charts](https://v-charts.js.org/) | ![img](https://img.shields.io/npm/v/v-charts.svg) | 基于 Vue2.0 和 echarts 封装的 v-charts 图表组件 | <https://v-charts.js.org/> | ★★★★★  |

在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。基于 Vue2.0 和 echarts 封装的 v-charts 图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

## npm安装

```js
npm i v-charts echarts -S
```

## 引入

### 完整引入

```js
// main.js
import Vue from 'vue'
import VCharts from 'v-charts'
import App from './App.vue'

Vue.use(VCharts)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 按需引入

v-charts的每种图表组件，都已经单独打包到lib文件夹下了

```js
|- lib/
    |- line.common.js  -------------- 折线图
    |- bar.common.js  --------------- 条形图
    |- histogram.common.js  --------- 柱状图
    |- pie.common.js  --------------- 饼图
    |- ring.common.js  -------------- 环图
    |- funnel.common.js  ------------ 漏斗图
    |- waterfall.common.js  --------- 瀑布图
    |- radar.common.js  ------------- 雷达图
    |- map.common.js  --------------- 地图
    |- sankey.common.js  ------------ 桑基图
    |- heatmap.common.js  ----------- 热力图
    |- scatter.common.js  ----------- 散点图
    |- candle.common.js  ------------ k线图
    |- gauge.common.js  ------------- 仪表盘
    |- tree.common.js  -------------- 树图
    |- bmap.common.js  -------------- 百度地图
    |- amap.common.js  -------------- 高德地图
```

使用时，可以直接将单个图表引入到项目中

```js
import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common'
import App from './App.vue'

Vue.component(VeLine.name, VeLine)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
