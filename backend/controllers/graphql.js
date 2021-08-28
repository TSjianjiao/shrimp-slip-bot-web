const { Context, Next } = require('koa')
const { ApolloServer, gql } = require('apollo-server-koa')
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`
const resolvers = {
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

module.exports = {
  typeDefs,
  resolvers
}
