const path = require('path')
const fs = require('fs')
/**
 * 获取 图片 列表数据
 */
exports.getImagesList = (req, res) => {
  const jsonFile = path.join(__dirname, '../database/images.json')
  const list = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'))
  const total = list.length
  const { pageIndex = 1, pageSize = 15 } = req.query
  const data = list.slice((pageIndex - 1) * pageSize, pageIndex * pageSize).map((item) => {
    return { ...item, url: `//windows10.microdone.cn:3000/images/${item.name}` }
  })
  const resp = {
    code: '0',
    msg: '查询成功',
    total,
    data,
  }
  res.send(resp)
}
