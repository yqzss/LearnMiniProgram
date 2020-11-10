// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'hello world',
    age: 18,
    students: [
      {id: 110, name: 'tom', age: 30},
      {id: 111, name: 'jerry', age: 33},
      {id: 112, name: 'james', age: 35},
      {id: 113, name: 'jay', age: 37},
    ],
    counter: 0
  },
  handleBtnClick() {
    // 错误方法，界面不会刷新
    this.data.counter++

    // this。setData()
    // if(tag != 0){
      this.setData({
        counter: this.data.counter--
      })
    // }
    // else{
    //   this.setData({
    //     counter: this.data.counter++
    //   })
    // }
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