const path = require('path')
const registerRoute = (app) => {
  const creditInfo = require(path.join(__dirname, 'creditInfo.js'))
  app.use('/creditInfo', creditInfo)
  const customerInfo = require(path.join(__dirname, 'customerInfo.js'))
  app.use('/customerInfo', customerInfo)
}

module.exports = {
  registerRoute
}
