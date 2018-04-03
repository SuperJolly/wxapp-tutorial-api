Page({
  data: {
    hasNetworkType: false
  },
  onLoad() {
    // 监听网络变化
    wx.onNetworkStatusChange((res) => {
      console.log('网络变化', res);
    })
  },
  getNetworkType: function () {
    var that = this
    wx.getNetworkType({
      success: function (res) {
        console.log(res)
        that.setData({
          hasNetworkType: true,
          networkType: res.subtype || res.networkType
        })
      }
    })
  },
  clear: function () {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  }
})
