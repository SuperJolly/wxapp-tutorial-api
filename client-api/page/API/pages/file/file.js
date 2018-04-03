Page({
  onLoad: function () {

  },
  data: {
    tempFilePath: '',
    savedFilePath: '',
    dialog: {
      hidden: true
    }
  },
  downloadFile: function () {
    var that = this;
    wx.downloadFile({
      url: 'http://sznk.fcloud.store.qq.com/store_raw_download?buid=16821&uuid=d404ff17c1f74a4a95a33b3324d98922&fsname=demo.pdf',
      success: function(res) {
        console.log('download file',res);          
        if(res.tempFilePath) {
          wx.getFileInfo({
            filePath: res.tempFilePath,
            digestAlgorithm: 'sha1',// md5 or sha1
            success: function (res) {
              console.log('getFileInfo',res);
            },
            fail: function (res) {
              console.log('获取文件信息失败', res);
            },
          });
          that.setData({
            tempFilePath: res.tempFilePath
          })
        }
      }
    })
    
  },
  saveFile: function () {
    if (this.data.tempFilePath.length > 0) {
      var that = this
      wx.saveFile({
        tempFilePath: this.data.tempFilePath,
        success: function (res) {
          that.setData({
            savedFilePath: res.savedFilePath
          })
          that.setData({
            dialog: {
              title: '保存成功',
              content: '文件保存成功',
              hidden: false
            }
          })
        },
        fail: function (res) {
          that.setData({
            dialog: {
              title: '保存失败',
              content: '文件保存失败',
              hidden: false
            }
          })
        }
      })
    }
  },
  clear: function () {
    var that = this;
    wx.removeSavedFile({
      filePath: that.data.savedFilePath,
      success: function(res) {
        that.setData({
          dialog: {
            title: '删除文件成功',
            content: '删除已保存文件',
            hidden: false
          }
        });
        that.setData({
          tempFilePath: '',
          savedFilePath: ''
        })
      }
    })

  },
  confirm: function () {
    this.setData({
      'dialog.hidden': true
    })
  },
  openFile: function() {
    wx.getSavedFileList((res) => {
      console.log('已保存文件::',res);
    });
    wx.openDocument({
      filePath: this.data.savedFilePath,// 临时文件和本地文件均可
      fileType: 'pdf',
      success: function(res) {
        console.log('打开文件成功', res);
      },
      fail: function (res) {
        console.log('打开文件失败', res);
      }
    })
  }
})
