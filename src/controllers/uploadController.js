const fs = require('fs')
const path = require('path')
const uniqueId = require('uuid')

/**
 * 文件上传
 */
exports.uploadFile = (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('上传文件为空')
  }
  const uploadFile = req.files.file
  const uuid = uniqueId.v4()
  const name = uploadFile.name
  // 新增目录
  fs.mkdirSync(path.join(__dirname, `../public/uploads/${uuid}`))
  const uploadPath = path.join(__dirname, `../public/uploads/${uuid}/${name}`)
  uploadFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err)
    res.send({
      code: '0',
      msg: '上传成功',
      uuid,
      name
    })
  })
}

/**
 * 文件删除
 */
exports.deleteFile = (req, res) => {
  const { fileId } = req.params
  if (!fileId || !fileId.trim()) {
    return res.status(400).send({
      code: '1',
      msg: '文件ID不能为空'
    })
  }
  const dirPath = path.join(__dirname, `../public/uploads/${fileId}`)
  if (fs.existsSync(dirPath)) {
    try {
      const files = fs.readdirSync(dirPath)
      files.length &&
        files.forEach((file) => {
          const filePath = path.join(dirPath, file)
          fs.unlinkSync(filePath)
          fs.rmdirSync(dirPath)
          res.send({
            code: '0',
            msg: '删除文件成功'
          })
        })
    } catch (error) {
      res.status(500).send({
        code: '1',
        msg: error.message
      })
    }
  } else {
    return res.status(400).send({
      code: '1',
      msg: '目录不存在'
    })
  }
}
