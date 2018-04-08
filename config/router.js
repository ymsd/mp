/*
  api
  https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html#wxnavigatetoobject

  url 页面路由
  method 跳转方式
  isLogin 是否需要登录
  event 后退时需要触发的事件
*/

const router = {
  // 首页
  home : {
    url       : 'pages/index/index',
    method : 'switchTab',
  },
    // 个人中心
  my   : {
    url       : 'pages/my/index',
    method : 'switchTab',
    event     : 'userInfoReload',
    isLogin   : true
  },
  // 店铺
  store : {
    url       : 'pages/store/index',
    method : 'switchTab',
  },
  // 商品详情
  detail : { //商城商品详情页©
    url       : 'pages/detail/index',
    method : 'navigateTo'
  },
  // 确认订单页
  confirmorder: {
    url       : 'pages/confirmorder/index',
    method  : 'navigateTo',
    isLogin   : true
  },
  //收货地址
  // addrList     : {
  //   url       : 'pages/address/index',
  //   method  : 'navigateTo',
  //   isLogin: 'true'
  // },
  //订单列表
  orderList    : {
    url       : 'pages/orders/list',
    method : 'redirectTo',
    isLogin   : true,
  },
  //订单详情
  orderDetail  : {
    url       : 'pages/orders/detail',
    method : 'redirectTo',
    isLogin   : true
  },
  // 搜索页面
  // searchList   : {
  //   url       : 'pages/search/index',
  //   method : 'navigateTo'
  // },
  // 我的优惠券页面
  // myCoupon     : {
  //   url       : 'pages/coupon/index',
  //   isLogin : true,
  //   method : 'navigateTo'
  // },
  //物流
  // express      : {
  //   url       : 'pages/express/index',
  //   isLogin : true,
  //   method : 'navigateTo'
  // },
  //售后选择
  // refundChoice    : {
  //   url       : 'pages/refund/choice',
  //   isLogin   : true,
  //   method : 'redirectTo'
  // },
  //售后原因
  // refundReason    : {
  //   url       : 'pages/refund/reason',
  //   isLogin   : true,
  //   method : 'redirectTo'
  // },
  // //售后申请
  // refundApply    : {
  //   url       : 'pages/refund/apply',
  //   isLogin   : true,
  //   method : 'redirectTo'
  // },
  // //售后详情
  // refundDetail    : {
  //   url       : 'pages/refund/detail',
  //   isLogin   : true,
  //   method : 'redirectTo'
  // },
  // //售后二维码
  // refundCode    : {
  //   url       : 'pages/refund/code',
  //   isLogin   : true,
  //   method : 'redirectTo'
  // },
  // // index
  // index        : {
  //   url       : 'pages/index/index',
  //   method : 'redirectTo'
  // },
};

module.exports = router;