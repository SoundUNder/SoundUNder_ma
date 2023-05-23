import { View, SafeAreaView, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GETPLAYLISTSBYOWNER } from '../services/library/queryLibrary'
import homeStyles from './home.styles'
import { useEffect, useState } from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import PlayLists from '../components/Playlists/Playlists'
import Login from '../components/Login/Login'

const Home = () => {
  const router = useRouter()
  const { getItem, setItem, removeItem } = useAsyncStorage('username')
  const [loadingUser, setLoadingUser] = useState(true)
  const [user, setUser] = useState()
  const [showLogin, setShowLogin] = useState(true)

  const [getPlayLists, {data, loading}] = useLazyQuery(GETPLAYLISTSBYOWNER)

  // try to get token on first load
  useEffect(() => {
    getItem().then(result => {
      setLoadingUser(false)
      
      if (result) {
        setUser(result)
        getPlayLists({
          variables: { 
            owner: result
          },
        })
        setShowLogin(false)
      }
      
    })
  }, [])

  const logOut = () => {
    removeItem()
    setShowLogin(true)
  }

  const hideLogin = () => {
    setShowLogin(false)
  }

  return (
    <SafeAreaView style={homeStyles.container}>
      <Stack.Screen 
        options={{
          headerTitle: 'SoundUNder'
        }}
      />

      {
        loadingUser 
        ? <ActivityIndicator size='large' color={"#74CC08"} />
        : showLogin
          ? <Login hideLogin={hideLogin}/>
          : <PlayLists data={data} user={user} loading={loading} logOut={logOut}/>
      }
      
    </SafeAreaView>
  )
}

export default Home