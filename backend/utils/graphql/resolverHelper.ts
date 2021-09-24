import systemConfig from '@/config/system.config'
import jwt from 'jsonwebtoken'
import { ForbiddenError } from 'apollo-server-koa'

export const Query = function () {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor):void {
    descriptor.value['meta'] = 'Query'
  }
}
export const Mutation = function () {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor):void {
    descriptor.value['meta'] = 'Mutation'
  }
}

export const JWT = function () {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor):void {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      try {
        const beareString = args[2].koaContext.headers.authorization
        const decode_token = jwt.verify(beareString?.split(' ')[1], systemConfig.secret)
        return originalMethod.call(this, ...args, decode_token)
      }catch(err) {
        if(err.name === 'JsonWebTokenError') {
          throw new ForbiddenError('token不正确')
        }else if(err.name === 'TokenExpiredError') {
          throw new ForbiddenError('token过期')
        }else {
          throw err
        }
      }
    }
  }
}


export class Resolver {
  getAllResolvers () {
    const methods:any = Reflect.getPrototypeOf(this) ?? {}
    const keys = Reflect.ownKeys(methods)
    const res:any = {
      Query: {},
      Mutation: {}
    }
    keys.forEach(key => {
      const method = methods[key]
      if(method.meta == 'Query') {
        res.Query[key] = method
      }else if(method.meta == 'Mutation'){
        res.Mutation[key] = method
      }
    })
    return res
  }
}

export function createResolver (resolver: typeof Resolver) {
  const res = (new resolver()).getAllResolvers()
  return res
}
