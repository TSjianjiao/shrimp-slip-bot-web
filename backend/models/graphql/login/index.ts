import { Context } from 'koa'
import jwt from 'jsonwebtoken'
import systemConfig from '@/config/system.config'
import { createResolver, JWT, Mutation, Resolver } from '@/utils/graphql/resolverHelper'
import { ForbiddenError } from 'apollo-server-koa'

const users = [
  {
    username: 'admin',
    password: '123',
    id: '1',
    nickName: 'admin1231'
  },
  {
    username: 'guest',
    password: '456',
    nickName: 'guest123',
    id: '2',
  },
]

class BookResolver extends Resolver{
  @Mutation()
  login (parent, args, { koaContext }: {koaContext: Context}, info) {
    const find = users.find(user => user.password === args.password && args.username === user.username)
    if(find) {
      return {
        token: jwt.sign({id: find.id}, systemConfig.secret, {
          expiresIn: '7d',
        })
      }
    }else {
      throw new ForbiddenError('登录信息错误')
    }
  }
}

export default createResolver(BookResolver)
