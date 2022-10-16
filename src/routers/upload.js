/**
 * 注册和登录的处理
 */
const express = require('express')
const path = require('path')

// 创建路由对象
const uploadRouter = express.Router()

// 导入控制器模块
const uploadController = require(path.join(
  __dirname,
  '../controllers/uploadController.js'
))

// 文件上传
uploadRouter.post('/', uploadController.uploadFile)
// 文件删除
uploadRouter.delete('/:fileId', uploadController.deleteFile)

// 导出路由对象
module.exports = uploadRouter
