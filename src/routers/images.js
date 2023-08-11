/**
 * 注册和登录的处理
 */
const express = require('express')
const path = require('path')

// 创建路由对象
const imagesRouter = express.Router()

// 导入控制器模块
const imagesController = require(path.join(__dirname, '../controllers/imagesController.js'))

// 获取图片的请求
imagesRouter.get('/list', imagesController.getImagesList)

// 导出路由对象
module.exports = imagesRouter
