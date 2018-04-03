// map.js
Page({
    data: {
        markers: [{
            id: 1,
            latitude: 22.540822,
            longitude: 113.934457,
            name: '腾讯大厦',
            label: {
                content: '这是腾讯大厦',
                color: '#333',
                x: 4,
                y: 0,
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 5,
                bgColor: '#fff',
                padding: 2,
                textAlign: 'center'
            }
        }, {
            id: 2,
            latitude: 39.892778,
            longitude: 116.421915,
            name: '北京',
            callout: {
                content: '这是祖国首都',
                color: '#fff',
                fontSize: 15,
                borderRadius: 10,
                bgColor: '#000',
                display: 'ALWAYS'
            }
        }],
    },
    onReady: function (e) {
        // 使用 wx.createMapContext 获取 map 上下文
        this.mapCtx = wx.createMapContext('myMap')
    },
    getCenterLocation: function () {
        this.mapCtx.getCenterLocation({
            success: function (res) {
                console.log(res.longitude)
                console.log(res.latitude)
            }
        })
    },
    moveToLocation: function () {
        this.mapCtx.moveToLocation()
    },
    translateMarker: function () {
        this.mapCtx.translateMarker({
            markerId: 1,
            autoRotate: true,
            duration: 1000,
            destination: {
                latitude: 22.940822,
                longitude: 113.934457,
            },
            animationEnd() {
                console.log('animation end')
            }
        })
    },
    includePoints: function () {
        this.mapCtx.includePoints({
            padding: [10],
            points: [{
                latitude: 22.540822,
                longitude: 113.934457,
            }, {
                latitude: 22.840822,
                longitude: 114.234457,
            }]
        })
    },
    getRegion: function() {
        this.mapCtx.getRegion({
            success: function(res) {
                console.log('当前视野范围信息', res);
            }
        });
    },
    getScale: function() {
        this.mapCtx.getScale({
            success: function(res) {
                console.log('当前视野缩放级别', res);
            }
        });
    }
})