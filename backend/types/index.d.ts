const { Context, Next } = require('koa')
export interface ControllerRouter {
  path: string
  handle: (ctx: Context & {request: { body: any }}, next: Next) => any
  method: string
}

export interface Token {
  id:  string
  iat: number
  exp: number
}
