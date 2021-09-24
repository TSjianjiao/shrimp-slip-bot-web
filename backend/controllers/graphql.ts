import path from 'path'

import { composeResolvers } from '@graphql-tools/resolvers-composition'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import resolverMap from '@/models/graphql'

const typesArray = loadFilesSync(path.join(__dirname, '../models/graphql'), {extensions: ['gql']})
const resolverArray = Object.keys(resolverMap).map(key => resolverMap[key])

export const typeDefs = mergeTypeDefs(typesArray)
export const resolvers = composeResolvers(resolverArray)
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
