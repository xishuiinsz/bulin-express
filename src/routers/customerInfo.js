/**
 * 注册和登录的处理
 */
const express = require('express')
const path = require('path')

// 创建路由对象
const customerInfoRouter = express.Router()

// 导入控制器模块
const customerInfoController = require(path.join(
  __dirname,
  '../controllers/customerInfoController.js'
))

// 获取注册页面的请求
customerInfoRouter.get('/', customerInfoController.getCustomerInfoList)
// 更新 客户 信息
customerInfoRouter.put('/', customerInfoController.updateCustomerInfoList)

// 导出路由对象
module.exports = customerInfoRouter
