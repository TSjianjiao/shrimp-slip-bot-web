import logger from '@/utils/logger'
const ErrorHandle = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    let status = err.statusCode || err.status || 200
    ctx.response.status = status
    ctx.response.body = {
      error: err.message
    }
    if (err.status === 401) {
      ctx.response.status = 401
      ctx.response.body = {
        error: err.originalError ? err.originalError.message : err.message
      }
    }else if(status === 500){
      logger.error({ err })
      return
    }
  }
}
export default ErrorHandle
