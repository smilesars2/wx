// pages/test1/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cdata: { "code": "120", "text": "70", "je": "100", "address": "test1", "date": "2018-03-21", "bz": "备注1" },
    date: '', 
    type:false
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var value = e.detail.value;
    //wx.redirectTo({
    //  url: 'table2?i1=' + value.input1 + '&i2=' + value.input2 + '&i3=' + value.input3 + '&i4=' + //value.input4 + '&i5=' + value.input5 + '&i6=' + value.input6  +'&type='+this.data.type
 //   })
  var app= getApp()
  var curData = {
      "code": value.input1, "text": value.input2, "je": value.input3, "address": value.input5, "date": value.input4, "bz": value.input6
    }

    if (!this.data.type) {
      //添加数据 
      let threeArray = [];
      let len = app.globalData.listData.length;
      for (let i = 0; i < len; i++)
        threeArray.push(app.globalData.listData[i]); 
      threeArray.push(curData); 
      app.globalData.listData = threeArray; 
    }
    else {
      //编辑数据 
      let threeArray = [];
      let len = app.globalData.listData.length;
      for (let i = 0; i < len; i++) {
        if (app.globalData.listData[i].code == value.input1)
          threeArray.push(curData); 
        else
          threeArray.push(app.globalData.listData[i]);
      } 
      app.globalData.listData = threeArray; 
    }

    wx.navigateBack({ 
    })
  },
  formReset() {
    console.log('form发生了reset事件') 
  },
  bindDateChange(e){
    this.setData({date:e.detail.value});
  },
  bindTimeChange(e) {
    this.setData({ time: e.detail.value });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (options) {
      var addData = {
        "code": options.i1, "text": options.i2, "je": options.i3, "address": options.i4, "date": options.i5, "bz": options.i6 
      }
      console.log(addData, options.type)
      this.setData({ cdata: addData});
      if(options.type)
        this.setData({ type: true }); 

      console.log(this.data)
    }
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