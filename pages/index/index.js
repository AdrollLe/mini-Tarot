//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '开始冒险',
    leftMotto: '快乐单选',
    rightMotto: '快乐双选',
    userInfo: {},
    welcome:'陌生人，\n你已进入了塔罗冒险屋。这里拥有神秘的力量......\n\n',
    ready:'准备好开始神秘之旅了吗?',
    attentionanim: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo'), 
    hasUserInfo: false, 
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../colorPage/colorPage'
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

  onReady: function () {
    var attentionanim = wx.createAnimation({
      delay: 0,
      duration: 1500,
      timingfunction: 'ease'
    });
    this.attentionanim = attentionanim;
    var next = true;
    setInterval(() => {
      if(next){
        this.attentionanim.opacity(1).scaleX(1.3).scaleY(1.3).step()
        next = !next;
      }else{
        this.attentionanim.opacity(0.2).scaleX(0.8).scaleY(0.8).step()
        next = !next;
      }

      this.setData({
        attentionanim: attentionanim.export()
      })
    }, 1500);
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
    return {
      title: '塔塔罗界，一个塔罗牌预测运气的世界',
      path: '/index/index',
      imageUrl: 'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqcxfPOeE94ldDdtLuChov1N5WvRODrxZkL8eVW6IHN89Qv1VZWkDNMIUX6TsDD1EDBsB1TPwdWYR9kyae0.SWOY!/b&bo=hACEAIQAhAABByA!&rf=viewer_4'
    }
  },
  onShareTimeline: function() {
    return {
      title: '塔塔罗界',
      query: 'share=true',
    }
  }
})
