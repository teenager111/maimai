Page({

  /**
   * 页面的初始数据
   */
  data: {
    shiming: 'https://testadmin.meckeeper.com/static/business/public/img/manager.png',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    function formatTime(date) {
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()

      var hour = date.getHours()
      var minute = date.getMinutes()
      var second = date.getSeconds()

      return year + '-' + month + '-' + day;
    }

    var that = this;
    var picurl = 'http://meckeeper-test.oss-cn-shanghai.aliyuncs.com/';

    wx.request({
      url: 'https://testadmin.meckeeper.com/business/v6/sell/detail',
      data: {
        jsondata: '{"sell_id":2102}'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // picurl+=selldetail.shop_icon;

        that.setData({
          selldetail: res.data.data,
          shopICON: picurl + res.data.data.shop_icon,
          rtime: formatTime(new Date(res.data.data.ctime * 1000))
        })


      }
    })

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