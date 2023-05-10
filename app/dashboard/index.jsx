import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { PROFILE } from '../../services/auth/queryAuth'

const Dashboard = () => {
  const { data, loading } = useQuery(PROFILE)

  const [user, setUser] = useState(null)

  if (loading) return <Text>Loading...</Text>

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>{data ? data?.myAccount?.email : 'Loadding...'}</Text>
      <Text>{data ? data?.myAccount?.username : 'Loadding...'}</Text>
      <Text>{data ? data?.myAccount?.birthdate : 'Loadding...'}</Text>
      <Text>{data ? data?.myAccount?.gender : 'Loadding...'}</Text>
    </View>
  )
}

export default Dashboard
