/**
 * @Author: GN_凉风
 * @Time: 2020/4/3 15:48:23
 * @ProjectName: myVuePress
 * @FileName: music163.js
 * @Description: 引用网易云的外链播放器
 */
window.onload = function () {
  function isPC() {  
    const userAgentInfo = navigator.userAgent 
    const agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
    return !agents.some(item => userAgentInfo === item) 
  }
  if (isPC()) {
    let music = document.createElement('div')
    music.className = 'musicBox'
    let musicShadow = document.createElement('div')
    musicShadow.className = 'musicShadow'
    music.appendChild(musicShadow)
    let iframe = document.createElement('iframe')
    iframe.className = 'music163'
    iframe.setAttribute('frameborder', 'no')
    iframe.setAttribute('border', 0)
    iframe.setAttribute('marginwidth', 0)
    iframe.setAttribute('marginheight', 0)
    iframe.setAttribute('width', 330)
    iframe.setAttribute('height', 450)
    iframe.setAttribute('src', '//music.163.com/outchain/player?type=0&id=4949542136&auto=0&height=430')
    music.appendChild(iframe)
    document.body.appendChild(music)
    
    function addClass() {
      musicShadow.classList.add('shadowHidden')
      music.classList.add('show')
      document.body.addEventListener('click', function(event) {
        if(event.target !== musicShadow) {
          musicShadow.classList.remove('shadowHidden')
          music.classList.remove('show')
        }
      })
    }
    musicShadow.addEventListener('click', addClass)
  }   
}
