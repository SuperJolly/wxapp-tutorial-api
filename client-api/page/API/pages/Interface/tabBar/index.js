Page({
    hideTabBar() {
        wx.hideTabBar({
            animation: true
        });
    },
    showTabBar() {
        wx.showTabBar({
            animation: true
        });
    },
    setFirstTab() {
        wx.setTabBarBadge({
            index: 0,
            text: 'abc'
        })
    },
    setSecondTab() {
        wx.showTabBarRedDot({
            index: 1
        })
    }
})