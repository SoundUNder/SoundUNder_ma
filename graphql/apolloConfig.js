import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'


const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const tokenStorage = await AsyncStorage.getItem('token')
    const token = JSON.parse(tokenStorage)
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const httpLink = createHttpLink({
    uri: 'http://192.168.5.110:4000/graphql',
    credentials: 'include',
})

// TODO: check config
export const client = new ApolloClient({
    // The ip below is converted in android
    // emulator to the machine's localhost
    uri: 'http://192.168.5.110:4000/graphql',
    // uri: 'http://10.0.2.2.:4000/graphql',
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
})