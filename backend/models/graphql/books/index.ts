import { Context } from 'koa'
import { createResolver, Query, Resolver, JWT } from '@/utils/graphql/resolverHelper'
import { Token } from '@/types'

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
]

class BookResolver extends Resolver{
  @Query()
  @JWT()
  books (parent:any, args:any, ctx:Context, info:any, token: Token) {
    return books
  }
  @Query()
  @JWT()
  titles () {
    return books.map(i => i.title)
  }

}

export default createResolver(BookResolver)
