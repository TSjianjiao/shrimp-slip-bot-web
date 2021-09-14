import Koa from 'koa'
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
export default {
  Query: {
    login: (parent, args, { koaContext }: {koaContext: Koa.Context}, info) => {
      const find = users.find(user => user.password === args.password && args.username === user.username)
      if(find) {
        // koaContext.response.body = {
        //   token: '1231312313'
        // }
        return {
          token: '1231312313'
        }
      }else {
        return {
          error: '登录失败'
        }
      }
    },
  },
}
