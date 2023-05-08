import { Stack } from 'expo-router'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const Layout = () => {
  // TODO: check config
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  return(
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  )
}
export default Layout