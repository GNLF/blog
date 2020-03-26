// .vuepress/config.js
module.exports = {
  title: '前端笔记',
  description: 'GN_凉风',
  base: '/blog/',
  dest: './dist',
  port: '9988',
  head: [
    ['link', { rel: 'icon', href: '/logo.png'}],
    ['script', { src: '/js/clicklove.js' }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/active-header-links'
  ],
  themeConfig: {
    logo: '/lufei1.png',
    nav: require('./nav'),
    sidebar: require('./sidebar'),
    smoothScroll: true,
    author: 'GN_凉风',
    record: '京ICP备17067634号-1',
    startYear: '2020',
    lastUpdated: '上次更新',
    repo: 'https://github.com/GNLF/blog',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页'
  },
  markdown: {
    lineNumbers: true
  }
}