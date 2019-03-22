// pages/test1/table2.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    currentSelectedIndex:-1
  },
  reLoadData:function(){
    var app = getApp();
    var appData = getApp().globalData.listData;
    if (appData)
      this.setData({ listData: appData });
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({ currentSelectedIndex: e.detail.value})
  },

  tapAdd: function () {
    wx.navigateTo({
      url: 'detail'
    })
  },
  tapEdit: function () {
    //获取选中的行 
    if (this.data.currentSelectedIndex<0)
      {
        wx.showToast({
          title: '没有选中任何行',
        })
        return;
      }
   
     var o = this.data.listData[this.data.currentSelectedIndex];
     if(o)
      {
        wx.navigateTo({
        url: 'detail?i1=' + o.code + '&i2=' + o.text + '&i3=' + o.je + '&i4=' +o.address+ '&i5=' + o.date   + '&i6=' + o.bz + '&type=1'  
      })
     }
  }, 
  tapDelete:function() {
    //获取选中的行 
    if (this.data.currentSelectedIndex < 0) {
      wx.showToast({
        title: '没有选中任何行',
      })
      return;
    }
    let threeArray = [];
    var app = getApp();
    let len = app.globalData.listData.length;
    for (let i = 0; i < len; i++)
      threeArray.push(app.globalData.listData[i]); 

    threeArray.splice(this.data.currentSelectedIndex,1); 
    app.globalData.listData = threeArray; 
    this.setData({ listData: threeArray });
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    this.reLoadData(); 
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.reLoadData(); 
  },
  tapRefresh: function () {
    this.reLoadData(); 
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})