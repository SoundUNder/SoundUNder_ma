import { Stack } from 'expo-router'
import { ApolloProvider } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { client } from '../config/apolloConfig'

const Layout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  )
}
export default Layout
