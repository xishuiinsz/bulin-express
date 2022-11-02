const path = require('path')
const registerRoute = (app) => {
  //注册根路由
  app.get('/', (req, res) => {
    const testHtml = path.join(__dirname, '../public/views/register.html')
    res.sendFile(testHtml)
  })
  // 储蓄账号
  const creditInfo = require(path.join(__dirname, 'creditInfo.js'))
  app.use('/creditInfo', creditInfo)

  // 客户信息
  const customerInfo = require(path.join(__dirname, 'customerInfo.js'))
  app.use('/customerInfo', customerInfo)

  // 文件上传
  const upload = require(path.join(__dirname, 'upload.js'))
  app.use('/upload', upload)

  // 在线海报
  const myPoster = require(path.join(__dirname, 'myPoster.js'))
  app.use('/myPoster', myPoster)
}

module.exports = registerRoute
