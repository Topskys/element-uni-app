const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数模块
const homeHandler = require('../router_handler/home')

// 登录
router.get('/login', homeHandler.login)

// categoryList
router.get('/catelist', homeHandler.categoryList)

// 首页商家列表
router.get('/shoplist', homeHandler.shopList)


// 商家详情
router.get('/shopdetail', homeHandler.shopDetail)


// goodCates
router.get('/goodcates', homeHandler.goodCateList)



// 商品信息
router.get('/good', homeHandler.goodInfo)


// 支付
router.get('/pay',homeHandler.pay)


// 获取订单信息
router.get('/order',homeHandler.orderInfo)






// 获取banners
router.get('/banner', homeHandler.banner)

// 获取goods
router.get('/goods', homeHandler.goods)

// 获取imgcates
router.get('/imgcates', homeHandler.imgcates)

// 获取goods
router.get('/imgs/:id', homeHandler.imgs)

// 获取news
router.get('/newslist', homeHandler.newslist)

// 获取newsDetail
router.get('/newsdetail/:id', homeHandler.newsDetail)


// 将路由对象共享出去
module.exports = router
