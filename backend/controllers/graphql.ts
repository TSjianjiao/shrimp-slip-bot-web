import combineDefs from '@/utils/graphql/combineDefs'
import booksDefs from '@/models/graphql/books/books.gql'
import booksResolvers from '@/models/graphql/books/books'


export const typeDefs = combineDefs({
  booksDefs
})
export const resolvers = {...booksResolvers}

