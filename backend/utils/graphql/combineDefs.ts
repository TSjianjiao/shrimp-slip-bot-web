import { gql } from 'apollo-server-koa'
export default (defs: {[key:string]: string}) => {
  let res = ''
  for(let key in defs) {
    res += defs[key]
  }
  return gql(res)
}