# 导出excel表格

Vue实现导出excel表格的功能。

如果想要导出Excel

在src目录下创建一个文件(vendor)进入 Blob.js 和 Export2Excel.js

用来生成文件的web应用程序

```js
npm install -S file-saver
```

电子表格格式的解析器

```js
npm install -S xlsx
```

将js挂在在全局下

```js
npm install -D script-loader
```

- <https://www.jb51.net/article/137422.htm>

如果想要导出Excel

- 在src目录下创建一个文件(vendor)进入 Blob.js 和 Export2Excel.js
- npm install -S file-saver 用来生成文件的web应用程序
- npm install -S xlsx 电子表格格式的解析器
- npm install -D script-loader 将js挂在在全局下

**表结构**
渲染页面中的表结构是由 columns 列 和 tableData 行，来渲染的 columns 为表头数据 tableData 为表实体内容

[?](https://www.jb51.net/article/137422.htm#)

```js
columns1: [     {     title:  '序号' ,     key:  'serNum'     },     {     title:  '选择' ,     key:  'choose' ,     align:  'center' ,     render: (h, params) => {      if (params.row.status !==  '1' && params.row.status !==  '2' ) {      return h( 'div' , [       h( 'checkbox' , {       props: {        type:  'selection'       },       on: {        'input' : (val) => {        console.log(val)        }       }       })      ])      }  else {      return h( 'span' , {       style: {       color:  '#587dde' ,       cursor:  'pointer'       },       on: {       click: () => {         this.$router.push({name: '', query: { id: params.row.id }})       }       }      },  '查看订单' )      }     }     },     ...    ]
```

tableData 就不写了，具体数据结构查看[iViewAPI](https://www.iviewui.com/components/table)

在build 目录下 webpack.base.conf.js 配置 我们要加载时的路径

```js
alias: {
    src: path.resolve(__dirname, '../src'),}
```

在当前页面中引入依赖

```js
require('script-loader!file-saver')// 转二进制用
require('script-loader!src/vendor/Blob')// xlsx核心
require('script-loader!xlsx/dist/xlsx.core.min')
```

当我们要导出表格执行 @click 事件调用 handleDownload 函数

```js
handleDownload() {
    this.downloadLoading = true
    require.ensure([], () => {
        const {export_json_to_excel} = require('src/vendor/Export2Excel')
        const tHeader = Util.cutValue(this.columns1, 'title')
        const filterVal = Util.cutValue(this.columns1, 'key')
        const list = this.tableData1
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '列表excel')
        this.downloadLoading = false
        }
    )
},
formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => v[j]))
}
```

Util.cutValue 是公共方法，目的是为了将，tHeader 和filterVal 的值转成数组从而生成表格

```js
//Util module 
// 截取value值
utils.cutValue = function (target, name) {
    let arr = []
    for(let i = 0; i < target.length; i++) {
        arr.push(target[i][name])
    }
    return arr
}   
```

[Export2Excel.js/Blob.js 的代码]

**下面再看下vue中excel表格的导入和导出**
注意：vue中要实现表格的导入与导出，首先要install两个依赖，

`npm install -S file-saver xlsx`  和 `npm install -D script-loader`。其次，在项目src目录下新建一个文件夹vendor（名字随意），在此文件夹下放置两个文件Blob.js和Export2Excal.js（下载地址：<http://files.cnblogs.com/files/wangyunhui/vendor.rar>）。之后就可以愉快的导入导出了微笑。

1、导入

 ```html
<input id= "upload" type= "file" @change="importfxx(this)" accept= ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />  
<script>
importfxx(obj) {  
    let _this =  this;
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx1");  
    let inputDOM =  this .$refs.inputer;  // 通过DOM取文件数据  
    this.file = event.currentTarget.files[0];  
    var rABS =  false ;  //是否将文件读取为二进制字符串  
    var f =  this .file;  
    var reader =  new FileReader();  
    if (!FileReader.prototype.readAsBinaryString) {  
        FileReader.prototype.readAsBinaryString =  function (f) {  
            var binary =  "" ;  
            var rABS =  false ;  //是否将文件读取为二进制字符串  
            var pt =  this ;  
            var wb;  //读取完成的数据  
            var outdata;  
            var reader =  new FileReader();  
            reader.onload =  function (e) {  
                var bytes =  new Uint8Array(reader.result);  
                var length = bytes.byteLength;  
                for ( var i = 0; i < length; i++) {  
                    binary += String.fromCharCode(bytes[i]);  
                }  
                var XLSX = require( 'xlsx' );  
                if (rABS) {  wb = XLSX.read(btoa(fixdata(binary)), {  //手动转化  
                    type:  'base64' 
                    });  
                }  else { 
                     wb = XLSX.read(binary, {  type:  'binary' });  
                }  
                outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); //outdata就是你想要的东西  
            }  
            reader.readAsArrayBuffer(f);  
        }  if (rABS) {  reader.readAsArrayBuffer(f);  }  else {  reader.readAsBinaryString(f);  }  
    }
</script>
```
**2.导出**

```js
inportexcel:  
function () {　 //兼容ie10哦！ 
 require.ensure([], () => {　　　　　　　　 
      const { export_json_to_excel } = require( '../../vendor/Export2Excel' );　　 //引入文件　　　　　　  
      const tHeader = [ '用户名' ,  '姓名' ,  '部门' ,  '职位' ,  '邮箱' ,  '充值' ];  //将对应的属性名转换成中文  
      const tHeader = [];  　　　　　　　　  
      const filterVal = [ 'userName' ,  'realName' ,  'department' ,  'position' ,  'email' ,  'money' ]; //table表格中对应的属性名
      const list =  this .sels;　　　　　　　　  
      const data =  this .formatJson(filterVal, list);　　　　　　　　  
      export_json_to_excel(tHeader, data,  '列表excel' );　　　　　　  
    }) 
}
```
