const path = require('path')
const fs = require('fs')
/**
 * 获取 卡信息列表数据
 */
exports.getCreditInfoList = (req, res) => {
  const jsonFile = path.join(__dirname, '../database/creditInfoTable.json')
  const content = fs.readFileSync(jsonFile, 'utf-8')
  res.send(content)
}

/**
 * 新增一条卡信息
 */
exports.addCreditInfo = (req, res) => {
  console.log(req)
}
