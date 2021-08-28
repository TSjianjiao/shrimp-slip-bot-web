import { Context, Next } from 'koa'
import { ApolloServer, gql } from 'apollo-server-koa'
export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`
export const resolvers = {
  Query: {
    books: () => books,
  },
}

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