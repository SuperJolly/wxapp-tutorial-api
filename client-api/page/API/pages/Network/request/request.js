const requestUrl = require('../../../../../config').requestUrl
const duration = 2000

Page({
  makeRequest: function() {
    var self = this

    self.setData({
      loading: true
    })

    var requestTask = wx.request({
      url: requestUrl,
      // header: {
      //   referer: 'https://www.qq.com'
      // },
      // header: {
      //   'content-type': 'application/x-www-form-urlencoded'
      // },
      method: 'GET',
      dataType: 'text',
      data: {
        currentTime: Date.now(),
        requestText: '你好'
      },
      success: (result) => {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: duration
        })
        this.setData({
          loading: false,
          responseText: JSON.stringify(result.data)
        });
        console.log('request success', result)
      },

      fail: function({errMsg}) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    });
    // requestTask.abort()
    console.log('requestTask is:',requestTask)
  }
})
