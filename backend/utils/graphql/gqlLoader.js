const { getOptions } = require('loader-utils')
module.exports = function loader (source) {
  const options = getOptions(this)
  return 'module.exports =' + '`' + source + '`'
}