module.exports = [
    { text: '首页', link: '/' },
    {
        text: '前端基础',
        items: [
            { text: '全站开发', link: '/html/'},
            { text: 'JavaScript', link: '/js/'},
        ]
    },
    {
        text: '前端框架',
        items: [
            {
                text: 'Vue全家桶',
                items: [
                    { text: 'Vue', link: '/vue/' },
                    { text: 'Vuex', link: '/vuex/' },
                    { text: 'VueRouter', link: '/vuerouter/' },
                    { text: 'Vue风格指南', link: '/style-guide/'},
                    { text: 'VueAPI', link: '/vue-api/'}
                ]
            },
            {
                text: '其他框架',
                items: [
                    { text: 'Node', link: '/node/' },
                    { text: 'Mock', link: '/mockjs/' },
                    { text: 'ELectron', link: '/eLectron/' }
                ]
            }
        ]
    },
    {
        text: '移动端',
        items: [
            { text: 'Uni-App', link: '/uniapp/'},
            { text: '微信小程序', link: '/wx/'}
        ]

    },
    { text: '文章收集', link: '/article/' },
    { text: 'Gitee', link: 'https://gitee.com/gnlf/blog' }
]
