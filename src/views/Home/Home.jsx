import React from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import { Link } from 'react-router-native'
import background from '../../../assets/background.jpg'
import logo from '../../../assets/logo.svg'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Button'
import styles from './styleHome'

const Home = () => {
  const goTo = (path) => {
    console.log(path)
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

export default Home
