import Log4js from 'log4js'
import logConfig from '@/config/logger.config'
Log4js.configure(logConfig)
export default Log4js.getLogger()

