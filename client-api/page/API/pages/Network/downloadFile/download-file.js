const downloadFileUrl = require('../../../../../config').downloadFileUrl

Page({
  downloadImage: function() {
    var self = this

    var downloadTask = wx.downloadFile({
      url: downloadFileUrl,
      success: function(res) {
        console.log('downloadFile success, res is', res)

        self.setData({
          imageSrc: res.tempFilePath
        })
      },
      fail: function({errMsg}) {
        console.log('downloadFile fail, err is:', errMsg)
      }
    });
    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  }
})
