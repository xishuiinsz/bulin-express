/**
 * 注册和登录的处理
 */
const express = require('express')
const path = require('path')

// 创建路由对象
const creditInfoRouter = express.Router()

// 导入控制器模块
const creditInfoController = require(path.join(
  __dirname,
  '../controllers/creditInfoController.js'
))

// 获取注册页面的请求
creditInfoRouter.get('/', creditInfoController.getCreditInfoList)
// 注册
creditInfoRouter.post('/', creditInfoController.addCreditInfo)

// 导出路由对象
module.exports = creditInfoRouter
