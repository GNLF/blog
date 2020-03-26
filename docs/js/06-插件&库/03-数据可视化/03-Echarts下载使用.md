# Echarts下载使用

## 下载

### 浏览器引入

1. 官网下载界面：<http://echarts.baidu.com/download.html>

   - 可自由选择下载不同版本、不同主题、所需地图数据，根据需求进行个性化定制。
   - 刚开始学习和开发环境建议下载源代码版本，因为该版本包含了常见的警告和错误提示。
   - 在线定制可以选择需要的图表、坐标系、组件、以及是否压缩等一些其他选项。

2. 也可以通过cdn引入，国内bootcdn：<https://www.bootcdn.cn/echarts/>

   ```html
   <script src="https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts.min.js"></script>
   ```

### 模块化引入

可以使用如下命令通过 npm 安装 ECharts

```
$ npm install echarts --save
```

引入 ECharts

```
var echarts = require('echarts');
```

按需引入 ECharts 图表和组件
默认使用 require('echarts') 得到的是已经加载了所有图表和组件的 ECharts 包，因此体积会比较大，如果在项目中对体积要求比较苛刻，也可以只按需引入需要的模块。

```js
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
```

## 使用

Echarts这个框架的配置内容很是多，所以不要尝试着把这个框架中的方法都给记住。Echarts的官方文档介绍十分详细，所以使用的时候查看官方文档就可以 <http://echarts.baidu.com/>

### 基本使用步骤

1. 引入依赖JavaScript文件 首先将

   ```
   echarts.js
   ```

   引入,然后为echarts提供一个DOM容器

   ```html
   <script src="echarts.js"></script>
   <div id="chart" style="width: 800px;height:400px;"></div>
   ```

2. 初始化echarts 基于准备好的dom，初始化echarts

   ```js
   # 引入echarts.js后，可获得全局 `echarts` 对象 即 `window.echarts`
   # 初始化DOM容器，用echarts.init()函数
   var myChart = echarts.init(document.getElementById('chart'));
   ```

3. 设置图表的配置项和数据

   echarts的图形化呈现主要是通过配置方法来实现的(setOption),然后是对图形标签进行初始化，最后把配置方法(setOption)赋值到初始化图形中。 ```

### 配置数据选项

```js
var options={

title:{},//图表的标题 }

myChart.setOption(options);

```

### 简单图表示例

按照上面的流程就可以实现一个简单的图表，完整代码如下

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ECharts展示</title>
    <script src="echarts.min.js"></script>
</head>
<body>
    <div id="chart" style="width: 800px;height:400px;"></div>
</body>
<script>
    var myChart = echarts.init(document.getElementById('chart'));
    var options={  
        series:[{
                type:'pie',
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:274, name:'联盟广告'},
                    {value:235, name:'视频广告'},
                    {value:400, name:'搜索引擎'}
                ]
        }]
    }
    myChart.setOption(options);
</script>
</html>
```
