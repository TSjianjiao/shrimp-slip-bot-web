import { parse } from 'url'
import fs from 'fs/promises'
import { ApolloServer } from 'apollo-server-koa'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { typeDefs, resolvers, schema } from '@/controllers/graphql'

import './db'
const dev = process.env.NODE_ENV !== 'production'
const port = 3003

// koa
import Koa from 'koa'
const koaApp = new Koa()

// jwt
import koajwt from 'koa-jwt'
import jwt from 'jsonwebtoken'

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
  const graphqlServer = new ApolloServer({
    schema,
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
    ],
    context: ({ ctx }: {ctx: Koa.Context}) => {
      // Note: This example uses the `req` argument to access headers,
      // but the arguments received by `context` vary by integration.
      // This means they vary for Express, Koa, Lambda, etc.
      //
      // To find out the correct arguments for a specific integration,
      // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

      // Get the user token from the headers.
      // const token = ctx.headers.authorization || ''
      // Try to retrieve a user with the token
      // const user = getUser(token)
      // Add the user to the context
      return {
        koaContext: ctx
      }
    },
  })
  await graphqlServer.start()

  // 一定要在下面的中间件之前引入
  // 不然路由就被next的拦截了
  graphqlServer.applyMiddleware({ app: koaApp })

  koaApp.use(async (ctx, next) => {
    const parsedUrl = parse(ctx.req.url, true)
    await handle(ctx.req, ctx.res, parsedUrl)
    ctx.respond = false
  })

  koaApp.listen(port, () => {
    console.log(`
      🚀graphql：http://localhost:${ port }${ graphqlServer.graphqlPath }
      🧠next服务： http://localhost:${ port }
    `)
  })
})
