import React from 'react'
import { ImageBackground, Text, TextInput, View } from 'react-native'
import { Link } from 'react-router-native'
import styles from './styleSignin'
import background from '../../../assets/background.jpg'
import Button from '../../components/Button'

const Signin = () => {
  return (
    <ImageBackground source={background}>
      <View style={styles.body}>
        <View>
          <Text style={styles.textTitle}>{'Inicia Sesión'}</Text>
        </View>
        <View style={styles.inputForm}>
          <TextInput
            placeholder='Email'
            style={styles.textInput}
            placeholderTextColor='#8d8d8d32'
          />
          <TextInput
            placeholder='Password'
            style={styles.textInput}
            placeholderTextColor='#8d8d8d32'
          />
        </View>
        <View style={styles.buttonForm}>
          <Button title='Ingresar' />
        </View>
        <View>
          <Link to='/restorePassword'>
            <Text style={styles.questionText}>¿Olvidaste tu contraseña?</Text>
          </Link>
        </View>
        <Text style={styles.questionText}>¿No tienes cuenta?</Text>
        <View style={styles.links}>
          <Link to='/signup'>
            <Text style={styles.textLink}>Registrate</Text>
          </Link>
          <Link to='/'>
            <Text style={styles.textLink}>Regresar</Text>
          </Link>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Signin
