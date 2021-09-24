module.exports = {
  client: {
    service: {
      name: 'next',
      skipSSLValidation: true
    },
    includes: ['./backend/models/graphql/**/*.gql'],
  }
}
