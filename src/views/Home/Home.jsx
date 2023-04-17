import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native'
import { Link } from 'react-router-native'
import background from '../../../assets/background.jpg'
import logo from '../../../assets/logo.svg'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import Button from '../../components/Button'

const Home = () => {
  const goTo = (path) => {
    console.log(path)
    return <Link replace to={path} />
  }
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <StatusBar style='light' />
      <View style={styles.body}>
        <View>
          <Image source={logo} style={styles.image} />
        </View>
        <View>
          <Text style={styles.textTitle}>Millions of Songs</Text>
          <Text style={styles.textTitle}>Free on</Text>
          <Text style={styles.textLogo}>SoundUNder</Text>
        </View>
        <View style={{ gap: 20 }}>
          {/* <Button title='Sign up free' onPress={() => goTo('/signup')} /> */}
          <Button title='Sign up free' onPress={() => goTo('/signup')} />
          <Button title='Continue whit Google' />
        </View>
        <Link to='/signin'>
          <Text style={styles.textLink}>Log in</Text>
        </Link>
      </View>
    </ImageBackground>
  )
}

let ScreenHeight = Dimensions.get('window').height
let ScreenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
    marginTop: Constants.statusBarHeight,
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
  },
  textLogo: {
    color: '#965FDD',
    // color: '#855999',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textDecorationLine: 'underline',
    zIndex: 10,
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
    width: '100%',
    height: '150%',
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#000000a0',
  },
})

export default Home
