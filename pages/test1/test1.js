// pages/test1/test1.js
Page({
  onPullDownRefresh() {
    console.log('pushed');
    wx.showToast({
      title: '刷新完成',
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    loading: false
  },
 tap2:function(){
   wx.showLoading()
   wx.request({

     url: 'https://www.qq.com/',

     success: function (res) {

       console.log(res)// 服务器回包信息
       //wx.navigateTo({
       //  url: 'https://www.qq.com/',
       //}) 
     },
     fail: function (res) {

       wx.showToast({ title: '系统错误'+res.errMsg })

     },
     complete: function (res) {

       wx.hideLoading() 

     }
   })
 },
  tap: function () {
 
    wx.showModal({

      title: '标题',

      content: '告知当前状态，信息和解决方法',

      confirmText: '主操作',

      cancelText: '次要操作',

      success: function (res) {

        if (res.confirm) {

          console.log('用户点击主操作')

        } else if (res.cancel) {

          console.log('用户点击次要操作')

        }

      }})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    const systemInfo = wx.getSystemInfoSync();
    console.log(systemInfo);

    /*wx.chooseImage({
        success: function(res) {
          const filePath = res.tempFilePaths[0]
          wx.saveFile({
            tempFilePath: filePath,
          })
        },
      })   

    wx.previewImage({
      current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
      urls: [ // 所有图片的URL列表，数组格式
        'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
        'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
        'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
      ],
      success: function (res) {
        console.log(res)
      }
    });*/

    wx.chooseContact({
      success: function(res) {
        const filePath = res.displayName + res.phoneNumber
        console.log(filePath)
      }
    });
  },
  tapScan: function () {

    // 调用wx.login获取微信登录凭证

    wx.scanCode({

      success: function (res) {

        var num = res.result // 获取到的num就是餐桌的编号
        console.log(res)
      }

    })

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})