import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { PROFILE } from '../../services/auth/queryAuth'
import { Stack } from 'expo-router'
import styles from './styleDashboard'
import { TextInput } from 'react-native-gesture-handler'
import { set } from 'react-native-reanimated'
import { UPDATEPROFILE } from '../../services/auth/mutationAuth'

const Dashboard = () => {
  const { data, loading } = useQuery(PROFILE)
  const [updateUser] = useMutation(UPDATEPROFILE)
  const [username, setUsername] = useState(data?.myAccount?.username)
  const [gender, setGender] = useState(data?.myAccount?.gender)
  const [changeData, setChangeData] = useState(false)

  const [user, setUser] = useState(null)

  if (loading) return <Text>Loading...</Text>

  const updateProfile = async () => {
    await updateUser({
      variables: {
        // password: password === '' ? null : password,
        username: username === '' ? null : username,
        gender: gender === '' ? null : gender,
      },
    })
    setChangeData(false)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <View style={styles.body}>
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
