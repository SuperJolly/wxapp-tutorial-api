var utils = require('../../util/util');
Page({
  data: {
    list: [
      {
        id: 'device',
        name: '设备',
        open: false,
        pages: [
          {
            zh: '网络状态',
            url: 'Device/getNetworkType/get-network-type',
          },
          {
            zh: '系统信息',
            url: 'Device/getSystemInfo/get-system-info',
          },
          {
            zh: '加速度计',
            url: 'Device/accelerometer/on-accelerometer-change'
          }, 
          {
            zh: '罗盘',
            url: 'Device/compass/on-compass-change',
          }, 
          {
            zh: '拨打电话',
            url: 'Device/makePhoneCall/make-phone-call'
          }, 
          {
            zh: '扫码',
            url: 'Device/scanCode/scan-code'
          }
        ]
      }, {
        id: 'file',
        name: '文件',
        open: false,
        pages: [
          {
            zh: '文件',
            url: 'File/file'
          }
        ]
      }, {
        id: 'interface',
        name: '界面',
        open: false,
        pages: [
          {
            zh: '提示框',
            url: 'Interface/toast/toast'
          },
          {
            zh: '模态框',
            url: 'Interface/modal/modal'
          },
          {
            zh: '操作菜单',
            url: 'Interface/actionSheet/action-sheet'
          },
          {
            zh: '导航条',
            url: 'Interface/navigationBar/navigation-bar-loading'
          },
          {
            zh: '导航',
            url: 'Interface/navigator/navigator'
          },
          {
            zh: '动画',
            url: 'Interface/animation/animation'
          },
          {
            zh: '页面滚动',
            url: 'Interface/scrollPage/index'
          },
          {
            zh: '绘图',
            url: 'Interface/canvas/canvas'
          },
          {
            zh: '下拉刷新',
            url: 'Interface/pullDownRefresh/pull-down-refresh'
          }
        ]
      }, {
        id: 'location',
        name: '位置',
        open: false,
        pages: [
          {
            zh: '获取位置',
            url: 'Location/getLocation/get-location'
          }, 
          {
            zh: '选择位置',
            url: 'Location/chooseLocation/choose-location'
          }, 
          {
            zh: '查看位置',
            url: 'Location/openLocation/open-location'
          }, 
          {
            zh: '地图组件控制',
            url: 'Location/mapManager/index'
          }
        ]
      }, {
        id: 'media',
        name: '媒体',
        open: false,
        pages: [
          {
            zh: '图片',
            url: 'Media/image/image'
          }, 
          {
            zh: '音频播放控制',
            url: 'Media/voice/voice'
          }, 
          {
            zh: '音乐播放控制',
            url: 'Media/backgroundAudio/background-audio'
          }, 
          {
            zh: '视频',
            url: 'Media/video/video'
          }, 
          {
            zh: '视频组件控制',
            url: 'Media/videoManager/index'
          }
        ]
      }, {
        id: 'storage',
        name: '数据缓存',
        url: 'Storage/storage'
      }, {
        id: 'network',
        name: '网络',
        open: false,
        pages: [
          {
            zh: '发起请求',
            url: 'Network/request/request'
          },
          {
            zh: '上传文件',
            url: 'Network/uploadFile/upload-file'
          },
          {
            zh: '下载文件',
            url: 'Network/downloadFile/download-file'
          },
          {
            zh: 'websocket',
            url: 'Network/websocket/web-socket'
          }
        ]
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
