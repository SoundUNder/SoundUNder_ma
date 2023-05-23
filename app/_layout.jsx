import { Stack } from 'expo-router'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const Layout = () => {
  // TODO: check config
  const client = new ApolloClient({
    // The ip below is converted in android
    // emulator to the machine's localhost
    uri: 'http://34.170.117.191:4000/graphql',
    cache: new InMemoryCache()
  })

  return(
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  )
}
export default Layout