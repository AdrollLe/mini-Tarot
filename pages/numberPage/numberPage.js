// pages/numberPage/numberPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgColor: '',
  },

  onTab(e) {
    wx.setStorageSync('numId', e.currentTarget.id); 
    wx.navigateTo({
      url: '../selectCard/selectCard'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({bgColor: wx.getStorageSync('colorId')})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

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