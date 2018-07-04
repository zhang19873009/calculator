// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "old_config": {
      "TAX_BASIC": 3500,
      "TAX_RATE": {
        "7": {
          "low": "80000.00",
          "higt": "0.00",
          "rate": "45.00",
          "less": "13505.00",
          "after_low": "61005.00",
          "after_high": "0.00",
          "after_low_out": "62305.00",
          "after_high_out": "0.00"
        },
        "6": {
          "low": "55000.00",
          "higt": "80000.00",
          "rate": "35.00",
          "less": "5505.00",
          "after_low": "44755.00",
          "after_high": "61005.00",
          "after_low_out": "46055.00",
          "after_high_out": "62305.00"
        },
        "5": {
          "low": "35000.00",
          "higt": "55000.00",
          "rate": "30.00",
          "less": "2755.00",
          "after_low": "30755.00",
          "after_high": "44755.00",
          "after_low_out": "32055.00",
          "after_high_out": "46055.00"
        },
        "4": {
          "low": "9000.00",
          "higt": "35000.00",
          "rate": "25.00",
          "less": "1005.00",
          "after_low": "11255.00",
          "after_high": "30755.00",
          "after_low_out": "12555.00",
          "after_high_out": "32055.00"
        },
        "3": {
          "low": "4500.00",
          "higt": "9000.00",
          "rate": "20.00",
          "less": "555.00",
          "after_low": "7655.00",
          "after_high": "11255.00",
          "after_low_out": "8955.00",
          "after_high_out": "12555.00"
        },
        "2": {
          "low": "1500.00",
          "higt": "4500.00",
          "rate": "10.00",
          "less": "105.00",
          "after_low": "4955.00",
          "after_high": "7655.00",
          "after_low_out": "6255.00",
          "after_high_out": "8955.00"
        },
        "1": {
          "low": "0.00",
          "higt": "1500.00",
          "rate": "3.00",
          "less": "0.00",
          "after_low": "3500.00",
          "after_high": "4955.00",
          "after_low_out": "4800.00",
          "after_high_out": "6255.00"
        }
      }
    },
    "new_config": {
      "TAX_BASIC": 5000,
      "TAX_RATE": {
        "7": {
          "low": "80000.00",
          "higt": "0.00",
          "rate": "45.00",
          "less": "15160.00",
          "after_low": "61005.00",
          "after_high": "0.00",
          "after_low_out": "62305.00",
          "after_high_out": "0.00"
        },
        "6": {
          "low": "55000.00",
          "higt": "80000.00",
          "rate": "35.00",
          "less": "7160.00",
          "after_low": "44755.00",
          "after_high": "61005.00",
          "after_low_out": "46055.00",
          "after_high_out": "62305.00"
        },
        "5": {
          "low": "35000.00",
          "higt": "55000.00",
          "rate": "30.00",
          "less": "4410.00",
          "after_low": "30755.00",
          "after_high": "44755.00",
          "after_low_out": "32055.00",
          "after_high_out": "46055.00"
        },
        "4": {
          "low": "25000.00",
          "higt": "35000.00",
          "rate": "25.00",
          "less": "2660.00",
          "after_low": "11255.00",
          "after_high": "30755.00",
          "after_low_out": "12555.00",
          "after_high_out": "32055.00"
        },
        "3": {
          "low": "12000.00",
          "higt": "25000.00",
          "rate": "20.00",
          "less": "1410.00",
          "after_low": "7655.00",
          "after_high": "11255.00",
          "after_low_out": "8955.00",
          "after_high_out": "12555.00"
        },
        "2": {
          "low": "3000.00",
          "higt": "12000.00",
          "rate": "10.00",
          "less": "210.00",
          "after_low": "4955.00",
          "after_high": "7655.00",
          "after_low_out": "6255.00",
          "after_high_out": "8955.00"
        },
        "1": {
          "low": "0.00",
          "higt": "3000.00",
          "rate": "3.00",
          "less": "0.00",
          "after_low": "3500.00",
          "after_high": "4955.00",
          "after_low_out": "4800.00",
          "after_high_out": "6255.00"
        }
      }
    }
  
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

//表单提交
  formSubmit: function (e) {
    var money = e.detail.value.money;
    var dedu = e.detail.value.dedu;
    var new_money = money-dedu;
    var old_tax = this.computer(new_money,1); 
    var new_tax = this.computer(new_money, 2); 
    console.log(old_tax);
    console.log(new_tax);
    console.log(old_tax - new_tax);
  },

  //计算个税
  computer: function (money,flg) {
    if (flg == 1){ //旧的
      var config = this.data.old_config;
    }else{  //新的
      var config = this.data.new_config;
    }
    var tax_money = money - config.TAX_BASIC;
    config = config.TAX_RATE;

    for (var index in config) {
      if (config[index]['low'] == 0) {
        // 第一阶段
        if (tax_money <= config[index]['higt']) {
          var rate = config[index]['rate'];
          var less = config[index]['less'];
          break;
        }
      } else if(config[index]['higt'] == 0){
        // 最后一个阶段
        if (tax_money > config[index]['low']) {
          var rate = config[index]['rate'];
          var less = config[index]['less'];
          break;
        }
      }else{
        // 中间阶段
        if(tax_money > config[index]['low'] && tax_money <= config[index]['higt']) {
          var rate = config[index]['rate'];
          var less = config[index]['less'];
          break;
        }
      }
    }
      return tax_money * rate / 100 - less;

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})