Page({
  showNavigationBarLoading: function () {
    wx.showNavigationBarLoading()
  },
  hideNavigationBarLoading: function () {
    wx.hideNavigationBarLoading()
  },
  setNavigationBarTitle: function () {
    wx.setNavigationBarTitle({
      title: '这是设置后的标题'
    });
  },
  setNavigationBarColor: function () {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#f28500',
      animation: {
        duration: 500,
        timingFunc: 'linear'
      }
    })
  }
})
