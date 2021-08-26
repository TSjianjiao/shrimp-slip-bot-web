const mongoose = require('mongoose')
const DBConfig = require('./config/db.config')
mongoose.set('useFindAndModify', false)

mongoose.connect(DBConfig.uri, DBConfig.connectionOptions, err => {
  if (err) {
    console.log('[Mongoose🦢] 连接失败')
    logger.error('[Mongoose🦢] 连接失败', err)
  } else {
    console.log('[Mongoose🦢] 连接成功')
    logger.info('[Mongoose🦢] 连接成功')
  }
})

module.exports = mongoose
