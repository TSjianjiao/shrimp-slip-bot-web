import { Context, Next } from 'koa'
import Router from '@koa/router'
export interface ControllerRouter {
  path: string,
  handle: (ctx: Context & {request: { body: any }}, next: Next) => any,
  method: string
}
