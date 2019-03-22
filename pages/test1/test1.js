// pages/test1/test1.js
const util = require('../../utils/util.js')

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
    wx.navigateTo({
      url: 'table2'
    })
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
  tapMap: function () {

    // 调用wx.login获取微信登录凭证
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        //data.latitude = res.latitude
        //data.longtitude =res.longitude  
        //this.setData({ latitude: res.latitude });
 
        //wx.showToast({
        //  title: res.latitude + ',' + res.longitude,
        //})

        console.log(res);

        wx.navigateTo({ 
          url: 'test2?latitude=' + res.latitude + '&longtitude=' + res.longitude,
          //data: { latitude: 30, longitude: 108}
          //data: { latitude: res.latitude, longitude: res.longitude}
        })
      },
    })

   
  },
  tapBluetooth:function(){
      console.log('开始获取蓝牙信息...');
      wx.getBluetoothAdapterState({
        success: function(res) {
          console.log(res);
        },
      })
  },
  tapDetail:function(){
    wx.navigateTo({
      url: 'detail'  
    })
  },
  tapTable: function () {
    wx.navigateTo({
      url: 'table2' 
    })
  },
  formSubmit:function(e){ 
    console.log(e)
    console.log(e.detail.formId)

    var keyword=[];
    keyword.push(1);
    keyword.push(2);
    keyword.push(3);
    keyword.push(4);
    keyword.push(5);
    keyword.push(6);

    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=19_AVDUKM3saihuwbvYzHXLjcNZNiBUKi1etLRhQ7mc19X0M4pnEtbrGxAPCRY__eK9Yys496WfcgP6wY-EKQmlQkykHQ2fWVgbF1MQQS-h8godOTroGw1W_tyCvz7wPHzl1LaxsfNBnH19ZRX_LNLhABAEGE',
      method:'POST',
      data: {              
        touser:'oqSXI5RPznFnTh_L2sqTgbltsH-8',
        template_id:'OFQYAhZmjP35WrW_cRMBbtDdc1ANfslMv5vrGK1ca08',
        form_id: e.detail.formId,
        data: { "keyword1": { "value": "订单111111" }, 
                   "keyword2": { "value": "西瓜" }, 
                   "keyword3": { "value": "100.00"  }, 
                   "keyword4": { "value": "XX软件园"}, 
                   "keyword5": { "value": "GOOD" }, 
                   "keyword6": { "value": util.formatTime(new Date()),  }, 
                   } 
        //keyword1: '1', 
        //keyword2: '2', 
        //keyword3: '3', 
        //keyword4: '4', 
        //keyword5: '5', 
        //keyword6: '6'
        //emphasis_keyword:'keyword1.DATA'
      },  
    success(res){
        console.log(res.data)
      } ,
      fail(res){
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  launchAppError:function(){},
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