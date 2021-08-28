import logger from '@/utils/logger'
import mongoose from 'mongoose'
import DBConfig from './config/db.config'
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

export default mongoose
