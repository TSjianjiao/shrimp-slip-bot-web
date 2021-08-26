const path = require('path')

module.exports = {
  appenders: {
    defualt: {
      type: 'dateFile',
      category: 'dateFileLog',
      filename: path.join(__dirname, '../log/info/'),
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      layout: {
        type: 'coloured'
      }
    },
    // email: {
    //     type: '@log4js-node/smtp',
    //      //发送邮件的邮箱
    //     sender: '1092946821@qq.com',
    //      //标题
    //     subject: 'Latest error report',
    //     SMTP: {
    //         host: 'smtp.qq.com',
    //         auth: {
    //           user: '1092946821@qq.com',
    //           pass: 'dfsbopdkwbwmgcfd',
    //         },
    //     },
    //     recipients: '929175050@qq.com'
    // }
  },
  categories: {
    default: { appenders: ['defualt'], level: 'info' },
    // error: { appenders: ['info', 'email'], level: 'error' },
    error: { appenders: ['defualt'], level: 'error' },
  }
}
