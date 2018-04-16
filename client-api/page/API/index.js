var utils = require('../../util/util');
Page({
  data: {
    list: [
      {
        id: 'page',
        name: '界面',
        open: false,
        pages: [
          {
            zh: '设置导航条',
            url: 'navigation-bar-loading/navigation-bar-loading'
          }, {
            zh: '设置tabBar',
            url: 'tabBar/index',
          }, {
            zh: '页面跳转',
            url: 'navigator/navigator'
          }, {
            zh: '页面滚动',
            url: 'scrollPage/index'
          }, {
            zh: '下拉刷新',
            url: 'pull-down-refresh/pull-down-refresh'
          }, {
            zh: '创建动画',
            url: 'animation/animation'
          }, {
            zh: '创建绘画',
            url: 'canvas/canvas'
          }, {
            zh: '显示操作菜单',
            url: 'action-sheet/action-sheet'
          }, {
            zh: '显示模态弹窗',
            url: 'modal/modal'
          }, {
            zh: '显示消息提示框',
            url: 'toast/toast'
          }
        ]
      }, {
        id: 'device',
        name: '设备',
        open: false,
        pages: [
          {
            zh: '获取手机系统信息',
            url: 'get-system-info/get-system-info'
          }, {
            zh: '获取手机网络状态',
            url: 'get-network-type/get-network-type'
          }, {
            zh: '监听重力感应数据',
            url: 'on-accelerometer-change/on-accelerometer-change'
          }, {
            zh: '监听罗盘数据',
            url: 'on-compass-change/on-compass-change'
          }, {
            zh: '打电话',
            url: 'make-phone-call/make-phone-call'
          }, {
            zh: '扫码',
            url: 'scan-code/scan-code'
          }
        ]
      }, {
        id: 'network',
        name: '网络',
        open: false,
        pages: [
          {
            zh: '发起一个请求',
            url: 'request/request'
          }, {
            zh: 'WebSocket',
            url: 'web-socket/web-socket'
          }, {
            zh: '上传文件',
            url: 'upload-file/upload-file'
          }, {
            zh: '下载文件',
            url: 'download-file/download-file'
          }
        ]
      }, {
        id: 'media',
        name: '媒体',
        open: false,
        pages: [
          {
            zh: '图片',
            url: 'image/image'
          }, {
            zh: '录音',
            url: 'voice/voice'
          }, {
            zh: '背景音频',
            url: 'background-audio/background-audio'
          }, {
            zh: '文件',
            url: 'file/file'
          }, {
            zh: '视频',
            url: 'video/video'
          }, {
            zh: '视频管理',
            url: 'videoManager/index'
          }
        ]
      }, {
        id: 'location',
        name: '位置',
        open: false,
        pages: [
          {
            zh: '获取当前位置',
            url: 'get-location/get-location'
          }, {
            zh: '使用原生地图查看位置',
            url: 'open-location/open-location'
          }, {
            zh: '使用原生地图选择位置',
            url: 'choose-location/choose-location'
          }, {
            zh: '控制地图组件',
            url: 'mapManager/index'
          }
        ]
      }, {
        id: 'storage',
        name: '数据缓存',
        url: 'storage/storage'
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if(list[i].url){
          wx.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
})
