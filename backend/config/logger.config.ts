import path from 'path'

export default {
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
  },
  categories: {
    default: { appenders: ['defualt'], level: 'info' },
    // error: { appenders: ['info', 'email'], level: 'error' },
    error: { appenders: ['defualt'], level: 'error' },
  }
}
