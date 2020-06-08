(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{489:function(e,t,s){"use strict";s.r(t);var a=s(17),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("p",[e._v("要安装预编译好的的二进制文件, 请使用 "),s("a",{attrs:{href:"https://docs.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("npm")]),s("OutboundLink")],1),e._v("。 首选的方法是在项目中作为development dependency安装。")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" electron --save-dev\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("查看"),s("a",{attrs:{href:"https://www.electronjs.org/docs/tutorial/electron-versioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("versioning doc"),s("OutboundLink")],1),e._v("获取如何在你的应用中管理Electron的相关信息。")]),e._v(" "),s("h2",{attrs:{id:"全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[e._v("#")]),e._v(" 全局安装")]),e._v(" "),s("p",[e._v("您还可以在 "),s("code",[e._v("$PATH")]),e._v(" 中全局安装 "),s("code",[e._v("electron")]),e._v(" 命令:")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" electron -g\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"自定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义"}},[e._v("#")]),e._v(" 自定义")]),e._v(" "),s("p",[e._v("如果想修改下载安装的位版本(例如, 在"),s("code",[e._v("x64")]),e._v("机器上安装"),s("code",[e._v("ia32")]),e._v("位版本), 你可以使用npm install中的"),s("code",[e._v("--arch")]),e._v("标记，或者设置"),s("code",[e._v("npm_config_arch")]),e._v(" 环境变量:")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --arch"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ia32 electron\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("此外, 您还可以使用 "),s("code",[e._v("--platform")]),e._v(" 来指定开发平台 (例如, "),s("code",[e._v("win32")]),e._v("、"),s("code",[e._v("linux")]),e._v(" 等):")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --platform"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("win32 electron\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[e._v("#")]),e._v(" 代理")]),e._v(" "),s("p",[e._v("If you need to use an HTTP proxy, you need to set the "),s("code",[e._v("ELECTRON_GET_USE_PROXY")]),e._v(" variable to any value, plus additional environment variables depending on your host system's Node version:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/gajus/global-agent/blob/v2.1.5/README.md#environment-variables",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node 10 and above"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/np-maintain/global-tunnel/blob/v2.7.1/README.md#auto-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("Before Node 10"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"自定义镜像和缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义镜像和缓存"}},[e._v("#")]),e._v(" 自定义镜像和缓存")]),e._v(" "),s("p",[e._v("During installation, the "),s("code",[e._v("electron")]),e._v(" module will call out to "),s("a",{attrs:{href:"https://github.com/electron/get",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("@electron/get")]),s("OutboundLink")],1),e._v(" to download prebuilt binaries of Electron for your platform. 这将通过访问 GitHub 的发布下载页面来完成 ("),s("code",[e._v("https://github.com/electron/electron/releases/tag/v$VERSION")]),e._v(", 这里的 "),s("code",[e._v("$VERSION")]),e._v(" 是 Electron 的确切版本).")]),e._v(" "),s("p",[e._v("如果您无法访问GitHub，或者您需要提供自定义构建，则可以通过提供镜像或现有的缓存目录来实现。")]),e._v(" "),s("h4",{attrs:{id:"镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[e._v("#")]),e._v(" 镜像")]),e._v(" "),s("p",[e._v("You can use environment variables to override the base URL, the path at which to look for Electron binaries, and the binary filename. The URL used by "),s("code",[e._v("@electron/get")]),e._v(" is composed as follows:")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("ELECTRON_MIRROR")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("ELECTRON_CUSTOM_DIR")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("ELECTRON_CUSTOM_FILENAME")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("For instance, to use the China CDN mirror:")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ELECTRON_MIRROR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://cdn.npm.taobao.org/dist/electron/"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("By default, "),s("code",[e._v("ELECTRON_CUSTOM_DIR")]),e._v(" is set to "),s("code",[e._v("v$VERSION")]),e._v(". To change the format, use the "),s("code",[e._v(e._s(e.version))]),e._v(" placeholder. For example, "),s("code",[e._v("version-"+e._s(e.version))]),e._v(" resolves to "),s("code",[e._v("version-5.0.0")]),e._v(", "),s("code",[e._v(e._s(e.version))]),e._v(" resolves to "),s("code",[e._v("5.0.0")]),e._v(", and "),s("code",[e._v("v"+e._s(e.version))]),e._v(" is equivalent to the default. As a more concrete example, to use the China non-CDN mirror:")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ELECTRON_MIRROR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://npm.taobao.org/mirrors/electron/"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ELECTRON_CUSTOM_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{ version }}"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("The above configuration will download from URLs such as "),s("code",[e._v("https://npm.taobao.org/mirrors/electron/8.0.0/electron-v8.0.0-linux-x64.zip")]),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[e._v("#")]),e._v(" 缓存")]),e._v(" "),s("p",[e._v("或者，您可以覆盖本地缓存。 "),s("code",[e._v("@electron/get")]),e._v(" will cache downloaded binaries in a local directory to not stress your network. 您可以使用该缓存文件夹来提供 Electron 的定制版本，或者避免进行网络连接。")]),e._v(" "),s("ul",[s("li",[e._v("Linux: "),s("code",[e._v("$XDG_CACHE_HOME")]),e._v(" or "),s("code",[e._v("~/.cache/electron/")])]),e._v(" "),s("li",[e._v("macOS: "),s("code",[e._v("~/Library/Caches/electron/")])]),e._v(" "),s("li",[e._v("Windows: "),s("code",[e._v("$LOCALAPPDATA/electron/Cache")]),e._v(" or "),s("code",[e._v("~/AppData/Local/electron/Cache/")])])]),e._v(" "),s("p",[e._v("在使用旧版本 Electron 的环境中，您也可以在"),s("code",[e._v("~/.electron")]),e._v("中找到缓存。")]),e._v(" "),s("p",[e._v("You can also override the local cache location by providing a "),s("code",[e._v("electron_config_cache")]),e._v(" environment variable.")]),e._v(" "),s("p",[e._v("缓存包含版本的官方zip文件以及校验和，存储为文本文件。 典型的缓存可能如下所示：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├── httpsgithub.comelectronelectronreleasesdownloadv1.7.9electron-v1.7.9-darwin-x64.zip\n│   └── electron-v1.7.9-darwin-x64.zip\n├── httpsgithub.comelectronelectronreleasesdownloadv1.7.9SHASUMS256.txt\n│   └── SHASUMS256.txt\n├── httpsgithub.comelectronelectronreleasesdownloadv1.8.1electron-v1.8.1-darwin-x64.zip\n│   └── electron-v1.8.1-darwin-x64.zip\n├── httpsgithub.comelectronelectronreleasesdownloadv1.8.1SHASUMS256.txt\n│   └── SHASUMS256.txt\n├── httpsgithub.comelectronelectronreleasesdownloadv1.8.2-beta.1electron-v1.8.2-beta.1-darwin-x64.zip\n│   └── electron-v1.8.2-beta.1-darwin-x64.zip\n├── httpsgithub.comelectronelectronreleasesdownloadv1.8.2-beta.1SHASUMS256.txt\n│   └── SHASUMS256.txt\n├── httpsgithub.comelectronelectronreleasesdownloadv1.8.2-beta.2electron-v1.8.2-beta.2-darwin-x64.zip\n│   └── electron-v1.8.2-beta.2-darwin-x64.zip\n├── httpsgithub.comelectronelectronreleasesdownloadv1.8.2-beta.2SHASUMS256.txt\n│   └── SHASUMS256.txt\n├── httpsgithub.comelectronelectronreleasesdownloadv1.8.2-beta.3electron-v1.8.2-beta.3-darwin-x64.zip\n│   └── electron-v1.8.2-beta.3-darwin-x64.zip\n└── httpsgithub.comelectronelectronreleasesdownloadv1.8.2-beta.3SHASUMS256.txt\n    └── SHASUMS256.txt\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br")])]),s("h2",{attrs:{id:"跳过二进制包下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跳过二进制包下载"}},[e._v("#")]),e._v(" 跳过二进制包下载")]),e._v(" "),s("p",[e._v("当您在安装 "),s("code",[e._v("electron")]),e._v(" NPM 包时, 它会自动下载 electron 的二进制包。")]),e._v(" "),s("p",[e._v("当在CI环境中 测试另一个组件的时候，这可能是不必要的。")]),e._v(" "),s("p",[e._v("为了防止当您安装所有 npm 依赖关系时下载二进制文件，您可以设置环境变量 "),s("code",[e._v("ELECTRON_SKIP_BINARY_DOWNODD")]),e._v("。 例如:")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ELECRON_SKIP_BINARY_DOWNOAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"故障排查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#故障排查"}},[e._v("#")]),e._v(" 故障排查")]),e._v(" "),s("p",[e._v("在运行 "),s("code",[e._v("npm install electron")]),e._v(" 时，有些用户会偶尔遇到安装问题。")]),e._v(" "),s("p",[e._v("在大多数情况下，这些错误都是由网络问题导致，而不是因为 "),s("code",[e._v("electron")]),e._v(" npm 包的问题。 如 "),s("code",[e._v("ELIFECYCLE")]),e._v("、"),s("code",[e._v("EAI_AGAIN")]),e._v("、"),s("code",[e._v("ECONNRESET")]),e._v(" 和 "),s("code",[e._v("ETIMEDOUT")]),e._v(" 等错误都是此类网络问题的标志。 最佳的解决方法是尝试切换网络，或是稍后再尝试安装。")]),e._v(" "),s("p",[e._v("如果通过 "),s("code",[e._v("npm")]),e._v(" 安装失败，您可以尝试直接从 "),s("a",{attrs:{href:"https://github.com/electron/electron/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("electron/electron/releases"),s("OutboundLink")],1),e._v(" 直接下载 Electron。")]),e._v(" "),s("p",[e._v("如果安装失败并出现 "),s("code",[e._v("EACCESS")]),e._v(" 错误, 则可能需要 "),s("a",{attrs:{href:"https://docs.npmjs.com/getting-started/fixing-npm-permissions",target:"_blank",rel:"noopener noreferrer"}},[e._v("修复您的 npm 权限 "),s("OutboundLink")],1),e._v("。（例如使用 sudo ）")]),e._v(" "),s("p",[e._v("如果上述错误仍然存在, 则可能需要将参数 unsafe-perm 设置为 true")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" electron --unsafe-perm"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("在较慢的网络上, 最好使用 "),s("code",[e._v("--verbose")]),e._v(" 标志来显示下载进度:")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --verbose electron\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("如果需要强制重新下载文件, 并且 SHASUM 文件将 "),s("code",[e._v("force_no_cache")]),e._v(" 环境变量设置为 "),s("code",[e._v("true")]),e._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);