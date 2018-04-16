function getRandomColor() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}

Page({
    data: {
        inputValue: 'hello,小程序'
    },
    onReady: function (res) {
        this.videoContext = wx.createVideoContext('myVideo')
    },
    inputChange: function(e) {
        this.setData({
            inputValue: e.detail.value.replace(/\d+/, '')
        })
    },
    bindSendDanmu: function () {
        this.videoContext.sendDanmu({
            text: this.data.inputValue,
            color: getRandomColor()
        })
    },
    playVideo: function() {
        this.videoContext.play();
    },
    pauseVideo: function () {
        this.videoContext.pause();
    },
    gotoPosition: function () {
        this.videoContext.seek(95);
    },
    playByRate: function () {
        this.videoContext.playbackRate(1.5);
    },
    requestFullScreen: function () {
        this.videoContext.requestFullScreen({
            direction: 90
        });
        setTimeout(() => {
            this.videoContext.exitFullScreen(); // 退出全屏
        }, 3000);
    }
})