import { parse } from 'url'
import fs from 'fs/promises'
import { ApolloServer } from 'apollo-server-koa'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { typeDefs, resolvers } from '@/controllers/graphql'

import './db'
const dev = process.env.NODE_ENV !== 'production'
const port = 3003

// koa
import Koa from 'koa'
const koaApp = new Koa()

// koa router
import apiRouter from './router/api'

// body
import koaBody from 'koa-body'

// next
import next from 'next'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

// err
import errHandler from './utils/errHandler'

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
              const landingPageBuffer = await fs.readFile('./backend/pages/graphqlPage_pro.html')
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
