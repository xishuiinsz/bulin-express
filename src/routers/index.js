const path = require('path')
const registerRoute = (app) => {
  // 储蓄账号
  const creditInfo = require(path.join(__dirname, 'creditInfo.js'))
  app.use('/creditInfo', creditInfo)

  // 客户信息
  const customerInfo = require(path.join(__dirname, 'customerInfo.js'))
  app.use('/customerInfo', customerInfo)

  // 文件上传
  const upload = require(path.join(__dirname, 'upload.js'))
  app.use('/upload', upload)
}

module.exports = {
  registerRoute
}
