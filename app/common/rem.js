(function (doc, win) {
    var docEl = doc.documentElement
    // 手机旋转事件,大部分手机浏览器都支持 onorientationchange 如果不支持，可以使用原始的 resize
    var resizeEvt = 'orientationchange' in window
      ? 'orientationchange'
      : 'resize'
    var recalc = function () {
      // clientWidth: 获取对象可见内容的宽度，不包括滚动条，不包括边框
      var clientWidth = docEl.clientWidth
      if (!clientWidth) {
        return false;
      }
      if (clientWidth > 640) {
        docEl.style.fontSize = '18px'
        window.rem = '18px'
      } else {
        docEl.style.fontSize = clientWidth / 37.5 + 'px'
        window.rem = clientWidth / 37.5
      }
    }
  
    recalc()
    // 判断是否支持监听事件 ，不支持则停止
    if (!doc.addEventListener) {
      return
    }
    // 注册翻转事件
    win.addEventListener(resizeEvt, recalc, false)
  })(document, window)
  