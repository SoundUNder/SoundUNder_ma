import { Stack } from 'expo-router'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const Layout = () => {
  // TODO: check config
  const client = new ApolloClient({
    // The ip below is converted in android
    // emulator to the machine's localhost
    uri: 'http://192.168.5.110:4000/graphql',
    // uri: 'http://10.0.2.2.:4000/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  )
}
export default Layout
