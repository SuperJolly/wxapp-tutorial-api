const tunnelUrl = require('../../../../../config').tunnelUrl

function showModal(title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

function showSuccess(title) {
  wx.showToast({
    title,
    icon: 'success',
    duration: 1000
  })
}

Page({
  data: {
    socketStatus: 'closed',
    isOpen: false,
    sendText: 'hello, 小程序'
  },
  socketMsgQueue: [],
  // 注册连接打开事件
  registerOpen() {
    wx.onSocketOpen((res) => {
      console.log('当前webscoket通道已打开并开始发送数据', res);
      this.sendAllMessage();
      this.setData({
        socketStatus: 'connected',
        isOpen: true
      });
    });
  },
  // 注册接受到websocket消息事件
  registerReceive() {
    wx.onSocketMessage(function (res) {
      console.log('收到服务器内容：' + res.data)
    })
  },
  // 注册socket出错事件
  registerError() {
    wx.onSocketError((res) => {
      this.setData({
        socketStatus: 'closed',
        isOpen: false
      })
      console.log('socket连接出错，原因是:', res);
    });
  },
  // 切换switch开关
  toggleSocket: function(e) {
    if(e.detail.value) {
      wx.connectSocket({
        url: tunnelUrl,
        protocols: ['echo-protocol'],
        success: (res) => {
          console.log('打开一个socket连接',res);
          this.registerOpen();
          this.registerReceive();
          this.registerError();
        }
      });
    } else {
      wx.closeSocket({
        success: (res) => {
          console.log('关闭socket连接: ', res);
          wx.onSocketClose((res) => {
            console.log('当前socket通道已关闭', res);
            this.setData({
              socketStatus: 'closed',
              isOpen: false
            });
          })
        },
        fail: (res) => {
          console.log('关闭socket通道出错,原因是:', res);
        },
        complete: (res) => {
          console.log('操作完成！')
        }
      });
    }
    
  },
  // 点击按钮发送消息
  sendMessage: function() {
      let text = this.data.sendText;
      this.sendSingleMessage(text+Math.random()*100);
  },
  // 发送单条websocket消息
  sendSingleMessage: function(text) {
    let isOpen = this.data.isOpen;
    if (isOpen) {
      wx.sendSocketMessage({
        data: text
      })
    } else {
      this.socketMsgQueue.push(text)
    }
  },
  // 发送队列所有websocket消息
  sendAllMessage: function() {
    for (var i = 0; i < this.socketMsgQueue.length; i++) {
      this.sendSingleMessage(this.socketMsgQueue[i])
    }
    this.socketMsgQueue = []
  }
  
})
