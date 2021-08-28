import logger from '@/utils/logger'
const ErrorHandle = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    let status = err.statusCode || err.status || 200
    // --- 正常错误---
    // 数据库错误 key值重复
    if(err.code === 11000){
      logger.info({ message: err.message })
      status = 423
    }
    ctx.response.status = status
    ctx.response.body = {
      error: err.message
    }
    // ---- 严重 ---
    // 代码错误（数据库、逻辑等）
    if(status === 500){
      logger.error({ err })
      return
    }
  }
}
export default ErrorHandle
