const { parse } = require('url')
const fs = require('fs/promises')
const { ApolloServer } = require('apollo-server-koa')
const { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageDisabled} = require('apollo-server-core')
const { typeDefs, resolvers } = require('@/controllers/graphql')
const mongoose = require('./db')
const logConfig = require('./config/logger.config')
const dev = process.env.NODE_ENV !== 'production'
const port = 3003


// koa
const Koa = require('koa')
const koaApp = new Koa()

// koa router
const apiRouter = require('./router/api')

// body
const koaBody = require('koa-body')

// next
const next = require('next')
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

// err
const errHandler = require('./utils/errHandler')

// 中间件
koaApp.use(errHandler)

koaApp.use(koaBody())

koaApp
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods())

nextApp.prepare().then(async () => {

  // graphql
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      dev ? ApolloServerPluginLandingPageLocalDefault : {
        async serverWillStart () {
          return {
            async renderLandingPage () {
              const landingPageBuffer = await fs.readFile('./src/backend/pages/graphqlPage_pro.html')
              return { html: landingPageBuffer.toString('utf-8') }
            }
          }
        }
      }
    ]
  })
  await server.start()

  // 一定要在下面的中间件之前引入
  // 不然路由就被next的拦截了
  server.applyMiddleware({ app: koaApp })

  koaApp.use(async (ctx, next) => {
    const parsedUrl = parse(ctx.req.url, true)
    await handle(ctx.req, ctx.res, parsedUrl)
    ctx.respond = false
  })

  koaApp.listen(port, () => {
    console.log(`
      🚀graphql：http://localhost:${ port }${ server.graphqlPath }
      🧠next服务： http://localhost:${ port }
    `)
  })
})
