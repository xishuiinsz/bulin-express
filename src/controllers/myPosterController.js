const path = require('path')
const fs = require('fs')
/**
 * 获取 在线海报图层 列表数据
 */
exports.getLayerList = (req, res) => {
  const jsonFile = path.join(__dirname, '../database/layerData.json')
  const content = fs.readFileSync(jsonFile, 'utf-8')
  res.send(content)
}
