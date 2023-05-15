import React from 'react'
import { Button } from 'react-native'
import { View, TextInput, Text } from 'react-native'
import { Link } from 'react-router-native'

const RestorePassword = () => {
  return (
    <View>
      <Text>RestorePassword</Text>
      <TextInput placeholder='Email' />
        <Button title='Enviar' />
        <Link to='/'>
          <Text>Regresar</Text>
        </Link>
    </View>
  )
}

export default RestorePassword
