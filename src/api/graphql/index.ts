import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const dev = process.env.NODE_ENV !== 'production'

const httpLink = createHttpLink({
  uri: '/graphql',
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if(extensions.code === 'FORBIDDEN') {
        console.log('token有问题')
      }
    })

  if (networkError) console.log(`[Network error]: ${ networkError }`)
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${ token }` : '',
    }
  }
})

const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
})

export default client
