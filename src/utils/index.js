const chalk = require('chalk')

// 红色字体输入
const logRed = (str) => {
  console.log(
    `${chalk.red('!!!')} ${chalk.redBright.bold(str)} ${chalk.red('!!!')}`
  )
}

// 黄色字体输出
const logYellow = (str) => {
  console.log(
    `${chalk.yellow('!!')} ${chalk.yellow(str)} ${chalk.yellow('!!')}`
  )
}

// 绿色字体输出
const logGreen = (str) => {
  console.log(
    `${chalk.green('###')} ${chalk.green.bold(str)} ${chalk.green('###')}`
  )
}

const getRangeInteger = (min, max) => {
  if (min > max) {
    // eslint-disable-next-line no-extra-semi
    ;[min, max] = [max, min] // 交换
  }
  min = Math.floor(min)
  max = Math.ceil(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = {
  logRed,
  logYellow,
  logGreen,
  getRangeInteger
}
