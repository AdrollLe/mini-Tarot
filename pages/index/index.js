//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '开始冒险',
    userInfo: {},
    hasUserInfo: false,
    welcome:'陌生人，\n你已进入了塔罗冒险屋。这里拥有神秘的力量......\n\n',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ready:'准备好开始神秘之旅了吗?',

  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../selectCard/selectCard'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log('getUserInfo ' + JSON.stringify(res))
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                console.log('getUserInfo222 ' + JSOn.stringify(res));
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo
  
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onAddToFavorites: function(res) {
    return {
      title: '塔塔罗界',
      imageUrl: 'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqcxfPOeE94ldDdtLuChov1N5WvRODrxZkL8eVW6IHN89Qv1VZWkDNMIUX6TsDD1EDBsB1TPwdWYR9kyae0.SWOY!/b&bo=hACEAIQAhAABByA!&rf=viewer_4'
    }
  },
  onShareAppMessage: function() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '分享该小程序'
        })
      }, 2000)
    })
    return {
      title: '塔塔罗界',
      path: '/index/index',
      imageUrl: 'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqcxfPOeE94ldDdtLuChov1N5WvRODrxZkL8eVW6IHN89Qv1VZWkDNMIUX6TsDD1EDBsB1TPwdWYR9kyae0.SWOY!/b&bo=hACEAIQAhAABByA!&rf=viewer_4',
      promise 
    }
  },
  onShareTimeline: function() {
    
  }
})
