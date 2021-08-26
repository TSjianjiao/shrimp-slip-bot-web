// @ts-check
const path = require('path')
const requireAll = require('require-all')
const Router = require('@koa/router')
// 加载所有Controllers
const controllers = requireAll({
  dirname     :  path.join(__dirname, '../controllers'),
  filter      :  /(.+Controller)\.js$/,
  recursive   : true
})
const router = new Router({
  prefix: '/api'
})

// 注入路由
for(let i in controllers) {
  const controller = controllers[i]
  controller.routers.forEach(route => {
    router[route.method](route.path, route.handle)
  })
}
module.exports = router
