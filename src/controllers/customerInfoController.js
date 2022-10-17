const path = require('path')
const { logRed, logGreen } = require('../utils')
const camelCase = require('lodash/camelCase')
/**
 * 获取 客户  信息列表数据
 */
exports.getCustomerInfoList = (req, res) => {
  const { pageIndex = 1, pageSize = 10, name, address } = req.query
  const dbFile = path.join(__dirname, '../database/chinook.db')
  const Database = require('better-sqlite3')
  const db = new Database(dbFile, { verbose: logGreen })
  const sqlStr = `SELECT * FROM customer order by customerId`
  let customerInfo = db.prepare(sqlStr).all()
  customerInfo = customerInfo.map((employee) => {
    const customerOption = {}
    for (const key in employee) {
      if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key]
        const newKey = camelCase(key)
        customerOption[newKey] = element
      }
    }
    return customerOption
  })
  if (name.trim()) {
    const nameQuery = name.trim()
    customerInfo = customerInfo.filter((employee) => {
      return (
        employee.firstName.toLowerCase().includes(nameQuery.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(nameQuery.toLowerCase())
      )
    })
  }
  if (address.trim()) {
    const addressQuery = address.trim()
    customerInfo = customerInfo.filter((employee) => {
      return employee.address.toLowerCase().includes(addressQuery.toLowerCase())
    })
  }
  const pageTotal = customerInfo.length
  customerInfo = customerInfo.slice(
    (pageIndex - 1) * pageSize,
    (pageIndex - 1) * pageSize + 1 * pageSize
  )
  res.send({
    list: customerInfo,
    pageTotal
  })
  db.close()
}

/**
 * 更新 客户  信息列表数据
 */
exports.updateCustomerInfoList = (req, res) => {
  const {
    address,
    customerId,
    firstName,
    lastName,
    company,
    city,
    state,
    country,
    email
  } = req.query
  const dbFile = path.join(__dirname, '../database/chinook.db')
  const Database = require('better-sqlite3')
  const db = new Database(dbFile, { verbose: logGreen })
  let sqlStr = 'UPDATE customer SET'
  sqlStr += ' firstName =@firstName'
  sqlStr += ' ,lastName =@lastName'
  sqlStr += ' ,company =@company'
  sqlStr += ' ,address =@address'
  sqlStr += ' ,city =@city'
  sqlStr += ' ,state =@state'
  sqlStr += ' ,country =@country'
  sqlStr += ' ,email =@email'
  sqlStr += ' WHERE customerId =@customerId'
  const updatedo = db.prepare(sqlStr)
  const result = updatedo.run({
    firstName,
    lastName,
    company,
    address,
    city,
    state,
    country,
    email,
    customerId
  })

  if (result && result.changes) {
    res.send({
      code: '0',
      msg: '更新成功'
    })
  } else {
    res.send({
      code: '1',
      msg: '更新失败'
    })
  }

  db.close()
}
/**
 * 删除 客户  信息列表数据
 */
exports.deleteCustomerInfoList = (req, res) => {
  const { customerId } = req.query
  const dbFile = path.join(__dirname, '../database/chinook.db')
  const Database = require('better-sqlite3')
  const db = new Database(dbFile, { verbose: logGreen })
  let sqlStr = 'DELETE from customer '
  sqlStr += ' WHERE customerId =@customerId'
  const updatedo = db.prepare(sqlStr)
  let result
  try {
    result = updatedo.run({
      customerId
    })
  } catch (error) {
    logRed(error.message)
  }
  if (result && result.changes) {
    res.send({
      code: '0',
      msg: '删除成功'
    })
  } else {
    res.send({
      code: '1',
      msg: '删除失败'
    })
  }

  db.close()
}
