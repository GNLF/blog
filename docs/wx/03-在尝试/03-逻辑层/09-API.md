# API

小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。详细介绍请参考 API 文档。

通常，在小程序 API 有以下几种类型：

### 事件监听 API

以 on 开头的 API 用来监听某个事件是否触发，如：wx.onSocketOpen，wx.onCompassChange 等。

这类 API 接受一个回调函数作为参数，当事件触发时会调用这个回调函数，并将相关数据以参数形式传入。

代码示例

```js
wx.onCompassChange(function (res) {
  console.log(res.direction)
})
```

### 同步 API

以 Sync 结尾的 API 都是同步 API， 如 wx.setStorageSync，wx.getSystemInfoSync 等。此外，也有一些其他的同步 API，如 wx.createWorker，wx.getBackgroundAudioManager 等，详情参见 API 文档中的说明。

同步 API 的执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常。

```js
try {
  wx.setStorageSync('key', 'value')
} catch (e) {
  console.error(e)
}
```

### 异步 API

大多数 API 都是异步 API，如 wx.request，wx.login 等。这类 API 接口通常都接受一个 Object 类型的参数，这个参数都支持按需指定以下字段来接收接口调用结果：

Object 参数说明

| 参数名   | 类型     | 必填 | 说明                                             |
| -------- | -------- | ---- | ------------------------------------------------ |
| success  | function | 否   | 接口调用成功的回调函数                           |
| fail     | function | 否   | 接口调用失败的回调函数                           |
| complete | function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |
| 其他     | Any      | -    | 接口定义的其他参数                               |

#### 回调函数的参数

success，fail，complete 函数调用时会传入一个 Object 类型参数，包含以下字段：

| 属性    | 类型   | 说明                                                         |
| ------- | ------ | ------------------------------------------------------------ |
| errMsg  | string | 错误信息，如果调用成功返回 ${apiName}:ok                     |
| errCode | number | 错误码，仅部分 API 支持，具体含义请参考对应 API 文档，成功时为 0。 |
| 其他    | Any    | 接口返回的其他数据                                           |

异步 API 的执行结果需要通过 Object 类型的参数中传入的对应回调函数获取。部分异步 API 也会有返回值，可以用来实现更丰富的功能，如 wx.request，wx.connectSockets 等。

```js
wx.login({
  success(res) {
    console.log(res.code)
  }
})
```

## 基础定时器

- setInterval
- clearInterval
- setTimeout
- clearTimeout

## 界面-交互

加载动画、提示信息

- wx.showToast
- wx.hideToast
- wx.showLoading
- wx.hideLoading
- wx.showModal 对话框
- wx.showActionSheet 显示操作菜单

## 界面-导航栏

- wx.setNaivgationBarTitle 设置界面标题

```js
Page({
  setNaivgationBarTitle() {
    const title = 'hello UEK';
    console.log(title)
    wx.setNavigationBarTitle({
      title,
      success() {
        console.log('setNavigationBarTitle success')
      },
      fail(err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    })
    return false
  }
})
```

- wx.showNavigationBarLoading 标题栏显示
- wx.hideNavigationBarLoading 隐藏加载动画

## 界面 -Tabba

- wx.showTabBarRedDot 显示某一项右上角红点
- wx.hideTabBarRedDot 隐藏某一项右上角红点
- wx.setTabBarStyle 设置tabbar的样式
- wx.setTabBarItem 动态修改某一个tabbar的内容
- wx.hideTabBar 隐藏tabbar

```html
<view class="btn-area">
  <button bindtap="setTabBarBadge">
    {{ !hasSetTabBarBadge ? '设置tab徽标' : '移除tab徽标' }}
  </button>
  <button bindtap="showTabBarRedDot">
    {{ !hasShownTabBarRedDot ?  '显示红点' : '移除红点'}}
  </button>
  <button bindtap="customStyle">
    {{ !hasCustomedStyle ? '自定义Tab样式' : '移除自定义样式'}}
  </button>
  <button bindtap="customItem">
    {{ !hasCustomedItem ? '自定义Tab信息' : '移除自定义信息' }}
  </button>
  <button bindtap="hideTabBar">
    {{ !hasHiddenTabBar ? '隐藏TabBar' : '显示TabBar' }}
      </button>
</view>
Page({
  data:{
    hasSetTabBarBadge: false,
     hasShownTabBarRedDot: false,
     hasCustomedStyle: false,
     hasCustomedItem: false,
     hasHiddenTabBar: false,
  },
   setTabBarBadge() {
     if (this.data.hasSetTabBarBadge) {
       this.removeTabBarBadge()
       return
     }
     this.setData({
       hasSetTabBarBadge: true
     })
     wx.setTabBarBadge({
       index: 1,
       text: '1',
     })
   },

   removeTabBarBadge() {
     this.setData({
       hasSetTabBarBadge: false
     })
     wx.removeTabBarBadge({
       index: 1,
     })
   },
   showTabBarRedDot() {
     if (this.data.hasShownTabBarRedDot) {
       this.hideTabBarRedDot()
       return
     }
     this.setData({
       hasShownTabBarRedDot: true
     })
     wx.showTabBarRedDot({
       index: 1
     })
   },

   hideTabBarRedDot() {
     this.setData({
       hasShownTabBarRedDot: false
     })
     wx.hideTabBarRedDot({
       index: 1
     })
   },

   showTabBar() {
     this.setData({hasHiddenTabBar: false})
     wx.showTabBar()
   },

   hideTabBar() {
     if (this.data.hasHiddenTabBar) {
       this.showTabBar()
       return
     }
     this.setData({hasHiddenTabBar: true})
     wx.hideTabBar()
   },

   customStyle() {
     if (this.data.hasCustomedStyle) {
       this.removeCustomStyle()
       return
     }
     this.setData({hasCustomedStyle: true})
     wx.setTabBarStyle({
       color: '#FFF',
       selectedColor: '#1AAD19',
       backgroundColor: '#000000',
     })
   },

   removeCustomStyle() {
     this.setData({hasCustomedStyle: false})
     wx.setTabBarStyle(defaultTabBarStyle)
   },

   customItem() {
     if (this.data.hasCustomedItem) {
       this.removeCustomItem()
       return
     }
     this.setData({hasCustomedItem: true})
     wx.setTabBarItem({
       index: 1,
       text: 'API'
     })
   },
   removeCustomItem() {
     this.setData({hasCustomedItem: false})
     wx.setTabBarItem({
       index: 1,
       text: defaultItemName
     })
   }  
})
```

## 界面下拉刷新

- wx.startPullDownRefresh
- wx.stopPullDownRefresh

## 动画

利用小程序中动画API可以对组件的位置，2D转换，3D转换、颜色、透明度进行动画。

小程序中创建动画有两种方式

- 通常可以使用 CSS 渐变 和 CSS 动画 来创建简易的界面动画。更多详情请查看组件部分动画章节。
- 可以使用 wx.createAnimation 接口来动态创建简易的动画效果。创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。

### 具体实现

- 创建动画对象并设置相关参数
- 设置动画类型并执行动画
- 导出并设置数据
- 将设置的动画数据动态配置相应的组件，以此实现组件的动画效果

```html
  <view style="width:300rpx;height:300rpx;background:#cccc" animation="{{animation}}" bindclick="moveFn">
Page({
  data:{
     animation:''
  },
  moveFn(){
     //  1
     let animation = wx.createAnimation({
        duration:3000,
        delay: 0,
        timingFunction: "ease",
        transformOrigin:'50% 50% 0'
     })
     // 2  
     animation.translate((this.data.widthScreen - 60), 0).step({duration: 3000})
     // 3
     this.setData({
       moveData:animation.export()
     })
  },
  // 在此处定义了 旋转、缩放、平移、斜切、旋转同时斜切、旋转结束斜切、多种变幻、还原动画，使用时将布局中的函数替换即可。
rotate() {
  this.animation.rotate(Math.random() * 720 - 360).step()
  this.setData({animation: this.animation.export()})
},
 scale() {
   this.animation.scale(Math.random() * 2).step()
   this.setData({animation: this.animation.export()})
 },
 translate() {
   this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
   this.setData({animation: this.animation.export()})
 },
 skew() {
   this.animation.skew(Math.random() * 90, Math.random() * 90).step()
   this.setData({animation: this.animation.export()})
 },
 rotateAndScale() {
   this.animation.rotate(Math.random() * 720 - 360)
     .scale(Math.random() * 2)
     .step()
   this.setData({animation: this.animation.export()})
 },
 rotateThenScale() {
   this.animation.rotate(Math.random() * 720 - 360).step()
     .scale(Math.random() * 2).step()
   this.setData({animation: this.animation.export()})
 },
 allInQueue() {
   this.animation.rotate(Math.random() * 720 - 360).step()
     .scale(Math.random() * 2).step()
     .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
     .step()
     .skew(Math.random() * 90, Math.random() * 90)
     .step()
   this.setData({animation: this.animation.export()})
 },
 reset() {
   this.animation.rotate(0, 0)
     .scale(1)
     .translate(0, 0)
     .skew(0, 0)
     .step({duration: 0})
   this.setData({animation: this.animation.export()})
 }
})
```

## 路由API

用脚本的方式进行跳转

- wx.switchTab
- wx.reLaunch
- wx.redirectTo
- wx.navigateTo
- wx.navigateBack

## 网络 - 发起请求

- wx.request

## 网络 - 下载

- wx.downloadFile
- UploadTask

```js
wx.downloadFile({
  url: 'https://example.com/audio/123', // 仅为示例，并非真实的资源
  success(res) {
    // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    if (res.statusCode === 200) {
      wx.playVoice({
        filePath: res.tempFilePath
      })
    }
  }
})
```

## 网络 - 上传

- wx.uploadFile
- UploadTask

```js
wx.chooseImage({
  success(res) {
    const tempFilePaths = res.tempFilePaths
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        user: 'test'
      },
      success(res) {
        const data = res.data
        // do something
      }
    })
  }
})
```

## 数据缓存

小程序中数据缓存类似于js中的本地存储。

- wx.setStorageSync wx.setStorage
- wx.getStorageSync wx.getStorage
- wx.removeStorageSync wx.removeStorage
- wx.clearStorageSync wx.clearStorage
- wx.getSystemInfoSync wx.getSystemInfo

## 多媒体

地图 图片 视频 音频 背景音频 实时音视频 录音 相机

## 多媒体 - 图片

- wx.saveImageToPhotosAlbum 保存图片到系统相册
- wx.previewImage 在新页面中全屏预览图片
- wx.getImageInfo 获取图片信息
- wx.compressImage 压缩图片
- wx.chooseMessageFile 从客户端会话获取文件
- wx.chooseImage 从本地相册选择图片或使用相机拍照。

## 多媒体 - 相机

- wx.createCameraContext 创建 camera 上下文 CameraContext 对象。
- CameraContext.startRecord 开始录像
- CameraContext.stopRecord 结束录像
- CameraContext.takePhoto 拍照

## 文件

- wx.saveFile 保存文件到本地

  > saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用

- wx.getSavedFileList 获取该小程序下已保存的本地缓存文件列表

- wx.removeSavedFile 删除本地缓存文件

- wx.getSavedFileInfo 获取本地文件的文件信息。

  > 此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo() 接口。

- wx.getFileInfo 获取文件信息

- wx.openDocument 新开页面打开文档

- wx.getFileSystemManager 获取全局唯一的文件管理器 返回 FileSystemManager

  > FileSystemManager 对象中的方法类似nodejs中fs模块

  - 判断文件/目录是否存在
  - 写文件、追加内容、复制、保存文件、重命名(移动)、删除
  - 创建目录、移除目录、读取文件列表、
  - 文件stat对象
    - 判断文件是目录、文件

```js
// 选择文件保存
wx.chooseImage({
  success(res) {
    const tempFilePaths = res.tempFilePaths
    wx.saveFile({
      tempFilePath: tempFilePaths[0],
      success(res) {
        const savedFilePath = res.savedFilePath
      }
    })
  }
})
// 获取保存路径和删除
wx.getSavedFileList({
  success(res) {
    if (res.fileList.length > 0) {
      wx.removeSavedFile({
        filePath: res.fileList[0].filePath,
        complete(res) {
          console.log(res)
        }
      })
    }
  }
})

// 打开文件
wx.downloadFile({
  // 示例 url，并非真实存在
  url: 'http://example.com/somefile.pdf',
  success(res) {
    const filePath = res.tempFilePath
    wx.openDocument({
      filePath,
      success(res) {
        console.log('打开文档成功')
      }
    })
  }
})
```

## 开发接口 - 登陆

- wx.login
- code2Session

> <https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code>

```js
const app = getApp();

Page({
  onLoad() {
     this.setData({
       hasLogin: app.globalData.hasLogin
     })
   },
   data: {},
   login() {
      wx.login({
        success:() =>{
          app.globalData.hasLogin = true
          this.setData({
            hasLogin: true
          })
        }
      })
    }
})
```

## 开发接口 - 用户信息

- wx.getUserInfo

```html
<button type="primary" open-type="getUserInfo" bindgetuserinfo="getUserInfo">获取用户信息</button>
Page({
  data:{
    userInfo:null
  },
  getUserInfo(info) {
    const userInfo = info.detail.userInfo
    this.setData({
      userInfo
    })
  }
})
```

## 支付

```js
wx.requestPayment({
  timeStamp: '',
  nonceStr: '',
  package: '',
  signType: 'MD5',
  paySign: '',
  success(res) { },
  fail(res) { }
})
```

前提：

1. 小程序已经注册完毕，各种服务器环境、https等已经配置好。
2. 你们是前后台合作，后台给主要给我们提供相应的数据、因为有些接口请求后台做要比我们做要简单，其实我更认为是小程序只有1M，更多的东西给后台吧。

小程序支付流程图

![小程序支付流程图](amWiki/images/api/pay.png)

微信小程序的商户系统一般是以接口的形式开发的，小程序通过调用与后端约定好的接口进行参数的传递以及数据的接收。在小程序支付这块，还需要跟微信服务器进行交互。过程大致是这样的：

1. 小程序调用登录接口获取code，传递给商户服务器用来获取用户的openID。通过openID来确定用户的身份。
   - 小程序调用wx.login() 获取 临时登录凭证code ，并回传到开发者服务器。
   - 开发者服务器以code换取 用户唯一标识openid 和 会话密钥session_key。
2. token的生成以及缓存
3. 调用统一下单接口，获取prepay_id,再次签名
   - 下载微信JS-SDK
   - 调用统一下单api
   - 再次签名
4. 小程序获取五个参数后，鉴权调起支付
5. 支付回调

## 转发

点击小程序右上角分享按钮转发。

```js
onShareAppMessage() {
    return {
      title: '转发标题',
      desc: '转发描述',
      path: '/pages/share/share'
    }
}
```

点击页面中按钮分享。

```html
<view class="page-body-line">
  <button bindtap="handleTapShareButton" open-type="share" class="button-share" id="share-button">click me</button>
</view>
Page({
  onShareAppMessage() {
      return {
        title: '转发按钮',
        path: 'pages/share-button/share-button'
      }
    },
  handleTapShareButton() {
      if (!((typeof wx.canIUse === 'function') && wx.canIUse('button.open-type.share'))) {
        wx.showModal({
          title: '当前版本不支持转发按钮',
          content: '请升级至最新版本微信客户端',
          showCancel: false
        })
      }
  }
})
```

## 剪切板

- wx.setClipboardData 设置剪切板
- wx.getClipboardData 设置剪切板

## WXML

- wx.createSelectorQuery 返回一个 SelectorQuery 对象实例
- SelectorQuery 查询节点信息的对象
- NodesRef 用于获取 WXML 节点信息的对象

```js
注/getRect() {
   wx.createSelectorQuery().select('#the-id').boundingClientRect(function (rect) {
     rect.id // 节点的ID
     rect.dataset // 节点的dataset
     rect.left // 节点的左边界坐标
     rect.right // 节点的右边界坐标
     rect.top // 节点的上边界坐标
     rect.bottom // 节点的下边界坐标
     rect.width // 节点的宽度
     rect.height // 节点的高度
   }).exec()
 },
 getAllRects() {
   wx.createSelectorQuery().selectAll('.a-class').boundingClientRect(function (rects) {
     rects.forEach(function (rect) {
       rect.id // 节点的ID
       rect.dataset // 节点的dataset
       rect.left // 节点的左边界坐标
       rect.right // 节点的右边界坐标
       rect.top // 节点的上边界坐标
       rect.bottom // 节点的下边界坐标
       rect.width // 节点的宽度
       rect.height // 节点的高度
     })
   }).exec()
 }
```
