Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '继续',
    attentionanim: '',
  },

   //事件处理函数
   bindViewTap: function() {
    wx.navigateTo({
      url: '../colorPage/colorPage'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var attentionanim = wx.createAnimation({
      delay: 0,
      duration: 1000,
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
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
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
      title: '塔塔罗界，一个塔罗牌预测运气的世界',
      path: '/index/index',
      imageUrl: 'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqcxfPOeE94ldDdtLuChov1N5WvRODrxZkL8eVW6IHN89Qv1VZWkDNMIUX6TsDD1EDBsB1TPwdWYR9kyae0.SWOY!/b&bo=hACEAIQAhAABByA!&rf=viewer_4'
    }
  },
  onShareTimeline: function() {
    
  }
})