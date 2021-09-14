import _ from 'lodash'
import combineDefs from '@/utils/graphql/combineDefs'

import loginDefs from '@/models/graphql/login/login.gql'
import booksDefs from '@/models/graphql/books/books.gql'
import userDefs from '@/models/graphql/users/users.gql'

import booksResolvers from '@/models/graphql/books/books.resolver'
import loginResolvers from '@/models/graphql/login/login.resolver'

export const typeDefs = combineDefs({
  booksDefs,
  userDefs,
  loginDefs
})
export const resolvers = _.merge({},
  loginResolvers,
  booksResolvers
)
