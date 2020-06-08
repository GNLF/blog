const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs目录
const getSiderbar = require('./util/initPage.js')

module.exports = {
    // 多模块的管控
    '/vue/': require('../vue/sidebar'),
    '/vuex/': getSiderbar(rootpath+"/vuex"),
    '/vuerouter/': getSiderbar(rootpath+"/vuerouter"),
    '/mockjs/': getSiderbar(rootpath+"/mockjs"),
    '/catalogue/': require('../catalogue/sidebar'),
    '/html/': getSiderbar(rootpath+"/html"),
    '/js/': getSiderbar(rootpath+"/js"),
    '/node/': getSiderbar(rootpath+"/node",true),
    '/uniapp/': getSiderbar(rootpath+"/uniapp"),
    '/wx/': getSiderbar(rootpath+"/wx"),
    '/article/': getSiderbar(rootpath+"/article"),
    '/style-guide/': require('../style-guide/sidebar'),
    '/vue-api/': require('../vue-api/sidebar'),
    '/electron/': getSiderbar(rootpath+"/electron")
}
