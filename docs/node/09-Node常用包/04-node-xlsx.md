# Node XLSX

[![npm version](https://img.shields.io/npm/v/node-xlsx.svg?style=flat)](https://www.npmjs.com/package/node-xlsx) [![license](https://img.shields.io/github/license/mgcrea/node-xlsx.svg?style=flat)](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0) [![build status](http://img.shields.io/travis/mgcrea/node-xlsx/master.svg?style=flat)](http://travis-ci.org/mgcrea/node-xlsx) [![dependencies status](https://img.shields.io/david/mgcrea/node-xlsx.svg?style=flat)](https://david-dm.org/mgcrea/node-xlsx) [![devDependencies status](https://img.shields.io/david/dev/mgcrea/node-xlsx.svg?style=flat)](https://david-dm.org/mgcrea/node-xlsx#info=devDependencies) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/5bbea5e7b2084c2586e5599cda6aefc8)](https://www.codacy.com/app/mgcrea/node-xlsx?utm_source=github.com&utm_medium=referral&utm_content=mgcrea/node-xlsx&utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/5bbea5e7b2084c2586e5599cda6aefc8)](https://www.codacy.com/app/mgcrea/node-xlsx?utm_source=github.com&utm_medium=referral&utm_content=mgcrea/node-xlsx&utm_campaign=Badge_Coverage) [![npm downloads](https://img.shields.io/npm/dm/node-xlsx.svg)](https://www.npmjs.com/package/node-xlsx)

Excel file parser/builder that relies on [js-xlsx](https://github.com/SheetJS/js-xlsx).

## 导出为xlsx

```
var xlsx = require("node-xlsx");
var fs = require("fs");
var data =  [
    ['未激活','信息部','testname','123@qq.com','2019-11-09','管理员'],
    ['未激活','信息部','testname2','12345@qq.com','2019-11-09','普通成员']
];
var buffer = xlsx.build([{name:'test',data:data}])
fs.writeFileSync('./1.xlsx',buffer)
var xlsx = require("node-xlsx");
var fs = require("fs");

var arr= [
    {name:"张三",age:19},
    {name:"李四",age:18}
]
//将 arr中的对象处理为数组
var data = arr.map(function(index, elem) {
    console.log(index)
    return Object.values(index);
})
//获取表头，添加到数组中第一个
data.unshift(Object.keys(arr[0]))

var buffer = xlsx.build([{name:'test',data:data}])
fs.writeFileSync('./2.xlsx',buffer)
```

## 导入xlsx

```
var xlsx = require("node-xlsx");
var fs = require("fs");

var data = xlsx.parse('./2.xlsx');
console.log(data[0].data)
```

### 另外：其他支持读写Excel的Node.js模块有：

- node-xlsx: 可读写excel文件，仅支持xlsx格式文件；
- excel-parser: 仅可读excel文件，支持xls及xlsx格式文件；
- excel-export: 仅可导出excel文件，生成文件格式为xlsx；
- node-xlrd: 仅可读excel文件，仅支持xls格式文件；

- <http://www.dengzhr.com/node-js/1400>


  