//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '开始冒险',
    userInfo: {},
    hasUserInfo: false,
    welcome:'陌生人，你已进入了塔罗冒险屋。这里拥有神秘的力量。',
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
  }
})
