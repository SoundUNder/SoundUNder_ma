import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native'
import { Link } from 'react-router-native'
import signinStyle from './styleSignin'
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
          <TextInput placeholder='Email' style={styles.textInput} />
          <TextInput placeholder='Password' style={styles.textInput} />
        </View>
        <View style={styles.buttonForm}>
          <Button title='Ingresar' />
        </View>
        <View>
          <Link to='/restorePassword'>
            <Text>¿Olvidaste tu contraseña?</Text>
          </Link>
        </View>
        <Text>¿No tienes cuenta?</Text>
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

let ScreenHeight = Dimensions.get('window').height
let ScreenWidth = Dimensions.get('window').width
console.log(ScreenHeight, ScreenWidth)
const styles = StyleSheet.create({
  inputForm: {
    width: 300,
    // marginTop: 20,
    gap: 20,
  },
  backgroundImage: {
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
    justifyContent: 'center',
    zIndex: 10,
  },
  textTitle: {
    color: '#fefefe',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    marginBottom: 100,
  },
  textLink: {
    color: '#fefefe',
    fontSize: 22,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
  },
  body: {
    // flex: 1,
    width: '100%',
    height: '100%',

    backgroundColor: '#000000a0',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    gap: 10,
  },
  textInput: {
    backgroundColor: '#fefefe',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonForm: {
    backgroundColor: '#fefefe',
    borderRadius: 50,
    // marginTop: 25,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // marginTop: 200,
  },
})

export default Signin
