
const { parse } = require('url')
const { ApolloServer } = require('apollo-server-koa')
const { typeDefs, resolvers } = require('./controllers/graphql')
const mongoose = require('./db')
const logConfig = require('./config/logger.config')
const dev = process.env.NODE_ENV !== 'production'
const port = 3003

// log
const log4js = require('log4js')
log4js.configure(logConfig)
const logger= log4js.getLogger()
global.logger = logger

// koa
const Koa = require('koa')
const koaApp = new Koa()

// koa router
const apiRouter = require('./router/api')

// body
const koaBody = require('koa-body')

// next
const next = require('next')
const app = next({ dev, dir: './web/'})
const handle = app.getRequestHandler()

// err
const errHandler = require('./utils/errHandler')

// 中间件
koaApp.use(errHandler)

koaApp.use(koaBody())

koaApp
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods())

app.prepare().then(async () => {

  // graphql
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()

  koaApp.use(async (ctx, next) => {
    const parsedUrl = parse(ctx.req.url, true)
    await handle(ctx.req, ctx.res, parsedUrl)
    ctx.respond = false
  })

  server.applyMiddleware({ app: koaApp })
  await new Promise(resolve => koaApp.listen(port, resolve))
  console.log(`
    🚀graphql：http://localhost:${ port }${ server.graphqlPath }
    🧠next服务： http://localhost:${ port }
  `)
})
