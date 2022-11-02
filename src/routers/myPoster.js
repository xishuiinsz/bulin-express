/**
 * 注册和登录的处理
 */
const express = require('express')
const path = require('path')

// 创建路由对象
const customerInfoRouter = express.Router()

// 导入控制器模块
const myPosterController = require(path.join(
  __dirname,
  '../controllers/myPosterController.js'
))

// 获取注册页面的请求
customerInfoRouter.get('/list', myPosterController.getLayerList)

// 导出路由对象
module.exports = customerInfoRouter
