Page({
  navigateTo: function () {
    wx.navigateTo({ 
      url: './navigator',
      complete: function() {
        console.log('打开页面后当前页面栈', getCurrentPages());
      }
    });
    setTimeout(() => {
      console.log('打开页面后当前页面栈123', getCurrentPages());
    }, 1000);
  },
  navigateBack: function () {
    wx.navigateBack();
    setTimeout(() => {
      console.log('返回后当前页面栈', getCurrentPages());
    }, 1000);
  },
  redirectTo: function () {
    wx.redirectTo({ 
      url: './navigator'
    });
    setTimeout(() => {
      console.log('返回后当前页面栈456', getCurrentPages());
    }, 1000);
  }
})
