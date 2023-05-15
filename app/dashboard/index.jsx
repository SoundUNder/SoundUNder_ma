import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import React, { useState } from 'react'
import { ApolloClient, useMutation, useQuery } from '@apollo/client'
import { PROFILE } from '../../services/auth/queryAuth'
import { Stack, useRouter } from 'expo-router'
import styles from './styleDashboard'
import { TextInput } from 'react-native-gesture-handler'
import { Entypo as Icon } from '@expo/vector-icons'
import { UPDATEPROFILE } from '../../services/auth/mutationAuth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { client } from '../../config/apolloConfig'

const Dashboard = () => {
  const router = useRouter()
  const { data, loading } = useQuery(PROFILE)
  const [updateUser] = useMutation(UPDATEPROFILE)
  const [username, setUsername] = useState(data?.myAccount?.username)
  const [gender, setGender] = useState(data?.myAccount?.gender)
  const [changeData, setChangeData] = useState(false)

  if (loading) return <Text>Loading...</Text>

  const updateProfile = () => {
    updateUser({
      variables: {
        // password: password === '' ? null : password,
        username: username === '' ? null : username,
        gender: gender === '' ? null : gender,
      },
    })
    setChangeData(false)
  }

  clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      console.error(e)
    }
    console.log('Done.')
  }

  getAll = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (e) {
      console.error(e)
    }
  }

  const logOut = () => {
    client.resetStore()
    getAll()
    clearAll()
    getAll()
    router.push('/')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <View style={styles.body}>
        <View style={styles.logOutButton}>
          <Pressable onPress={logOut}>
            <Icon name={'log-out'} color={'#965FDD'} size={20} />
          </Pressable>
        </View>
        <Text style={styles.TextTitle}>Dashboard</Text>

        <Text style={styles.TextField}>Email</Text>
        <Text style={styles.TextValue}>
          {data ? data?.myAccount?.email : 'Loadding...'}
        </Text>
        <Text
          style={styles.TextField}
          onPress={() => setChangeData(!changeData)}
        >
          UserName
        </Text>
        {changeData ? (
          <TextInput
            style={styles.TextValueChange}
            value={username ? username : data?.myAccount?.username}
            onChangeText={setUsername}
          ></TextInput>
        ) : (
          <Text style={styles.TextValue}>
            {username
              ? username
              : data
              ? data?.myAccount?.username
              : 'Loadding...'}
          </Text>
        )}
        <Text style={styles.TextField}>Birthdate</Text>
        <Text style={styles.TextValue}>
          {data ? data?.myAccount?.birthdate : 'Loadding...'}
        </Text>
        <Text
          style={styles.TextField}
          onPress={() => setChangeData(!changeData)}
        >
          Gender
        </Text>
        {changeData ? (
          <TextInput
            style={styles.TextValueChange}
            value={gender ? gender : data?.myAccount?.gender}
            onChangeText={setGender}
          ></TextInput>
        ) : (
          <Text style={styles.TextValue}>
            {gender ? gender : data ? data?.myAccount?.gender : 'Loadding...'}
          </Text>
        )}
        <TouchableOpacity
          style={styles.TextSubTitle}
          onPress={() => updateProfile()}
        >
          <Text style={styles.TextSubTitle}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard
