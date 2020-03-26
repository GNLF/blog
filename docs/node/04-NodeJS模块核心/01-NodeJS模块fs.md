# Nodejs fs模块

fs模块用于对系统文件及目录进行操作，它提供了文件的读取、写入、更名、删除、遍历目录等文件系统操作。与其他模块不同的是，fs 模块中所有的操作都提供了异步的和 同步的两个版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。

## 使用fs模块

要使用fs模块需要通过如下命令该模块。

```js
var fs = require('fs')
```

> 模块中所有方法都有同步和异步两种形式。

异步形式始终以完成回调作为它最后一个参数。 传给完成回调的参数取决于具体方法，但第一个参数总是留给异常。 如果操作成功完成，则第一个参数会是 `null` 或 `undefined`。

当使用同步形式时，任何异常都会被立即抛出。 可以使用 `try/catch` 来处理异常，或让它们往上冒泡。

## 异步编程和同步编程

### 异步编程

Node.js异步编程的直接体现就是通过回调函数来实现。 **[注意]** 异步编程依赖于回调来实现，但不代表使用了回调函数程序就异步化了

非阻塞代码的实现，即异步编程

创建example.txt文件，如下：

```js
异步和同步
```

创建main.js文件，如下：

```js
var fs=require("fs");  
fs.readFile("example.txt","utf-8",function(error,data){   
   if(err) throw err;  
   console.log(data.toString());  
});
console.log("end");
```

执行结果如下：

> $ node main.js
> end
> 异步和同步

### 同步编程

```js
var fs=require("fs");  
var con=fs.readFileSync("input.txt");   
console.log(con.toString());   
condole.log("end");
```

执行结果如下：

> $ node main.js
> 异步和同步
> end

以上例子第一个实例不需要等待文件读取完成，就可以在读取文件的同时执行接下来的代码，大大提高了程序的性能。
第二个例子在文件读取完成之后才执行完程序。

故：阻塞代码是按照顺序依次执行的，而非阻塞的代码不需要按顺序，所以如果需要处理回调函数的参数，就需要写在回调函数内。

## 常用操作

文件的操作：读取、写入、追加、删除、拷贝

| 方法                                           | 描述                 |
| ---------------------------------------------- | -------------------- |
| fs.readFile(filename,[option],callback)        | 异步读取文件         |
| fs.readFileSync(file[, options])               | 同步读取文件         |
| fs.writeFile(filename,data,[options],callback) | 异步写入文件         |
| fs.writeFileSync(file, data[, options])        | 同步写入文件         |
| fs.appendFile(file,data,[,options],callback()) | 异步追加写入文件末尾 |
| fs.appendFileSync(file, data[, options])       | 同步追加写入文件末尾 |
| fs.unlink(path,callback)                       | 异步删除文件         |
| fs.unlinkSync(path)                            | 同步删除文件         |
| fs.copyFile(src, dest[, flags], callback)      | 异步拷贝文件         |
| fs.copyFileSync(src, dest[, flags])            | 同步拷贝文件         |

文件夹的操作：创建、删除、读取

| 方法                            | 描述                                     |
| ------------------------------- | ---------------------------------------- |
| fs.mkdir(path,[mode],callback)  | 异步创建目录(创建目录时，父目录必须存在) |
| fs.mkdirSync(path[, mode])      | 同步创建目录                             |
| fs.rmdir(path,callback)         | 异步删除目录                             |
| fs.rmdirSync(path)              | 同步删除目录                             |
| fs.readdir(path,callback)       | 异步读取目录下所有文件                   |
| fs.readdirSync(path[, options]) | 同步读取目录下所有文件                   |

其它常用文件操作

| 方法                                | 描述                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| fs.existsSync(path)                 | 判断文件/文件夹是否存在，如果文件存在，则返回 true，否则返回 false。 |
| fs.rename(oldPath,newPath,callback) | 异步重命名文件/文件夹                                        |
| fs.renameSync(oldPath, newPath)     | 同步重命名文件/文件夹                                        |
| fs.stat(path, callback)             | 异步查看文件或文件夹状态 callback(err,stats)                 |
| fs.statSync(path)                   | 同步的查看文件或文件夹状态，返回一个 fs.Stats 实例           |
| stats.isFile()                      | 判断是否为文件                                               |
| stats.isDirectory()                 | 判断是否为目录                                               |

## 文件操作

flags参数可以是一下值：

| Flag |                        描述                        |
| ---- | :------------------------------------------------: |
| r    |     以读取模式打开文件，如果文件不存在抛出异常     |
| r+   |     以读写模式打开文件，如果文件不存在抛出异常     |
| rs   |                以同步的方式读取文件                |
| rs+  |             以同步的方式读取和写入文件             |
| w    |      以写入模式打开文件，如果文件不存在则创建      |
| wx   |   类似'w'，但是如果文件路径存在，则文件写入失败    |
| w+   |      以读写模式打开文件，如果文件不存在则创建      |
| wx+  |   类似'w+'，但是如果文件路径存在，则文件读写失败   |
| a    |      以追加模式打开文件，如果文件不存在则创建      |
| ax   |   类似'a'，但是如果文件路径存在，则文件追加失败    |
| a+   |    以读取追加模式打开文件，如果文件不存在则创建    |
| ax+  | 类似'a+'，但是如果文件路径存在，则文件读取追加失败 |

## 文件操作

### readFile异步读取文件

fs.readFile(filename,[encoding],[callback(err,data)])是最简单的读取 文件的函数。它接受一个必选参数 filename，表示要读取的文件名。第二个参数 encoding 是可选的，表示文件的字符编码。callback 是回调函数，用于接收文件的内容。

```js
fs.readFile(filename,[option],callback)
```

参数说明：

- filename String 文件名
- option Object
  - encoding String |null default=null 如果字符编码未指定，则返回原始的 buffer。
  - flag String default='r'
- callback Function 回调有两个参数 (err, data)，其中 data 是文件的内容。

```js
var fs = require('fs');
fs.readFile('./test.txt',function(err,data){
    if(err){
        console.error(err);
        return ;
    }
    console.log(data);
})
console.log('OK')
```

结果:

```js
OK
<Buffer 68 65 6c 6c 6f 21>
```

如果字符编码未指定，则返回原始的 buffer。

> 异步方法不会阻塞主进程，不会影响后续代码执行

### readFileSync同步读取文件

```js
fs.readFileSync(file[, options])
```

参数说明：

- filename String 文件名
- option Object
  - encoding String |null default=null 如果字符编码未指定，则返回原始的 buffer。
  - flag String default='r'

```js
var fs = require('fs');
try{
    var data = fs.readFileSync('./test.txt');
    console.log(data);
}catch (err){
    console.error(err);
}
console.log('OK')
```

结果

```js
<Buffer 68 65 6c 6c 6f 21>
OK
```

> 同步方法会阻塞主进程的执行，在数据没有返回之前不能执行后续代码 同步方法不需要传递回调函数，通过函数返回值接受结果

### writeFile异步写入文件

```js
fs.writeFile(filename,data,[options],callback)
```

异步地写入数据到文件，如果文件已经存在，则替代文件。 data 可以是一个字符串或一个 buffer。

如果 data 是一个 buffer，则忽略 encoding 选项。它默认为 'utf8'。

参数说明：

- filename String 文件名
- data String buffer
- option Object
  - encoding String |null default='utf-8'
  - mode Number default=438(aka 0666 in Octal) 表示当前文件的操作权限
  - flag Stringdefault='w'
- callback Function

```js
var fs = require('fs');
var buf = Buffer.from('hello');
// 写入文件内容（如果文件不存在会创建一个文件）
// 写入时会先清空文件
fs.writeFile('./test.txt',buf,function (err) {
    if(err)throw err;
})
fs.writeFile('./test.txt','ok?',{flag:'a'},function (err) {
    if(err)throw err;
})
```

### writeFileSync同步写入文件

```js
fs.writeFileSync(file, data[, options])
```

参数说明：

- file String Buffer
- data String Buffer
- options Object String
  - encoding String Null 默认 = 'utf8'
  - mode Integer 默认 = 0o666
  - flag String 默认 = 'w'

fs.writeFile() 的同步版本。返回 undefined。

### appendFile异步追加写入文件末尾

```js
fs.appendFile(file,data,[,options],callback())
```

参数说明：

- file String Buffer
- data String Buffer
- options Object String
  - encoding String Null 默认 = 'utf8'
  - mode Integer 默认 = 0o666
  - flag String 默认 = 'a'
- callback Function

异步地追加数据到一个文件，如果文件不存在则创建文件。 data 可以是一个字符串或 buffer。

```js
fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```

同步调用方法：fs.appendFileSync(file, data[, options]) 返回 undefined。

### rename重命名文件

```js
fs.rename(oldPath,newPath,callback)
```

修改文件名字

- olaPath：原来的名字
- newPath：新的名字
- callback：修改完成后执行的回调函数

实例：

```js
var fs = require('fs');
var root = __dirname;
fs.rename(root + 'oldername.txt', root + 'newname.txt', function() {
    if (err) throw err;
    console.log('rename complete');
});
```

被指定的文件被重命名为newname.txt

同步调用方法：fs.renameSync(oldPath, newPath) 返回 undefined。

### unlink删除文件

```js
fs.unlink(path,callback)
```

删除文件

- path：要删除的文件的名字
- callback：删除完成后执行的回调函数

```js
var fs = require('fs');
var root = __dirname;
fs.stat(root + 'duang.txt', function( err ) {
    if (err) throw err;
});
```

同步调用方法：fs.unlinkSync(path) 返回 undefined。

### 练习：文件拷贝copy

```js
function copy(src,target){
    //实现
}
```

## 文件夹操作

### mkdir创建目录

```js
fs.mkdir(path,[mode],callback)
```

- path：创建的目录
- mode：目录的模式
- callback：回调函数

创建目录时，父目录必须存在

同步调用方法：fs.mkdirSync(path[, mode])

### 练习：创建深层次的目录及文件

实现思路

1. 将目录转换为数组
2. 依次判断目录，如果存在跳过否则创建
3. 最后创建一个最终目录

需要自定义，如下：

```js
function makedir(path,callback) {
    var all = path.split('/');
    var p ="";
    all.forEach(function (v,i) {
        p+=v+'/';
        var f = fs.existsSync(p);
        if(!f){
            fs.mkdir(p,function(err){
                if(err){
                    console.log('创建失败')
                }else{
                    console.log('创建成功')
                }
            })
        }else{
            console.log('目录存在')
        }
    })
}
```

### 删除目录

```js
fs.rmdir(path,callback)
```

- path：要删除的目录
- callback：删除后执行的回调函数

同步调用方法：fs.rmdirSync(path)

### 判断文件或文件夹是否存在

```js
fs.existsSync(path)
```

如果文件存在，则返回 true，否则返回 false。

### 读取目录下所有文件

```js
fs.readdir(path,callback)
```

### 查看文件或文件夹状态

```js
fs.stat(path, callback)
```

- path
- callback err,stat

```js
fs.stat('./test',function(err,stats){
    stats.isFile() //判断是否为文件
    stats.isDirectory() //判断是否为目录
})
fs.statSync(path)
```

- path 返回一个 fs.Stats 实例。

```js
{
  dev: 115759,
  mode: 16822,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 7881299347905749,
  size: 0,
  blocks: undefined,
  atimeMs: 1498637534631.3472,
  mtimeMs: 1498637534631.3472,
  ctimeMs: 1498637534631.3472,
  birthtimeMs: 1498637534631.3472,
  atime: 2017-06-28T08:12:14.631Z,
  mtime: 2017-06-28T08:12:14.631Z,
  ctime: 2017-06-28T08:12:14.631Z,
  birthtime: 2017-06-28T08:12:14.631Z
}
```

| 参数      | 描述                                                    |
| --------- | ------------------------------------------------------- |
| dev       | 文件或者目录所在设备ID                                  |
| ino       | 文件或者目录的索引编号                                  |
| mode      | 使用数值形式代表的文件或目录的权限标志                  |
| nlink     | 文件或者目录的硬连接数量                                |
| uid       | 文件或者目录的所有者的用户ID                            |
| gid       | 文件或目录的所有者的组ID                                |
| rdev      | 字符设备文件或块设备文件所在设备ID                      |
| size      | 文件尺寸(即文件中的字节数)                              |
| atime     | "访问时间" - 文件数据最近被访问的时间                   |
| mtime     | "修改时间" - 文件数据最近被修改的时间                   |
| ctime     | "变化时间" - 文件状态最近更改的时间（修改索引节点数据） |
| birthtime | "创建时间" - 文件创建的时间。 当文件被创建时设定一次    |

### 练习：删除非空文件夹

1. 文件夹必须为空才能删除 rmdir()
2. 删除文件夹的所有文件或文件夹

```js
removeDir('images')
function removeDir(path){
    //读取文件夹
    var files= fs.readdirSync(path);
    //判断有没有内容
    if(files.length>0){
        //有
        for(let i=0;i<files.length;i++){
            var stats = fs.statSync(path+'/'+files[i]);
            if(stats.isFile()){
                //是文件 删除该文件
                fs.unlinkSync(path+'/'+files[i]);
            }else{
                removeDir(path+'/'+files[i])

            }
        }
    }
    fs.rmdirSync(path);
}
```