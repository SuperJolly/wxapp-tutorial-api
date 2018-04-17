const uploadFileUrl = require('../../../../../config').uploadFileUrl

Page({
  chooseImage: function() {
    var self = this

    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function(res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths[0])

        var imageSrc = res.tempFilePaths[0]

        var uploadTask = wx.uploadFile({
            url: uploadFileUrl,
            filePath: imageSrc,
            name: 'data',
            success: function(res) {
              console.log('uploadImage success, res is:', res)

              wx.showToast({
                title: '上传成功',
                icon: 'success',
                duration: 1000
              })

              self.setData({
                imageSrc
              })
            },
            fail: function({errMsg}) {
              console.log('uploadImage fail, errMsg is', errMsg)
            }
          });
        uploadTask.onProgressUpdate((res) => {
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesSent)
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        });
      },
      fail: function({errMsg}) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  }
})
