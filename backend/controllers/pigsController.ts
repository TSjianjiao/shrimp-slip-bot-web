import { Context, Next } from 'koa'
import Pigs from '@/models/pigs'
import Controller from './index'
class PigController extends Controller {
  constructor () {
    super()
    /** @type { import('../../types/beckend').ControllerRouter[] } */
    this.routers = [
      {
        path: '/addNewPig',
        handle: this.addNewPig,
        method: 'post'
      },
      {
        path: '/getAllPigs',
        handle: this.getAllPigs,
        method: 'get'
      },
    ]
  }
  /**
   * 插入新数据
   * @param {Context & {request: { body: any }}} ctx
   * @param {Next} next
   */
  async addNewPig (ctx, next) {
    const body = ctx.request.body
    const res = await new Pigs(body).save()
    ctx.response.body = {
      success: '插入成功'
    }
  }

  /**
   * 查询所有的数据
   * @param {Context & {request: { body: any }}} ctx
   * @param {Next} next
   */
  async getAllPigs (ctx, next) {
    const data = await Pigs.find({}).select({name: true, age: true})
    ctx.response.body = {
      success: '查询成功',
      data
    }
  }
}

export default new PigController()
