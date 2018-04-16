Page({
  data: {
    systemInfo: {}
  },
  getSystemInfo: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log('手机设备信息', res);
        that.setData({
          systemInfo: res
        });
      }
    })
  }
})
