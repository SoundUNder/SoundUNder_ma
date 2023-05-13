import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import backgruond from '../../assets/background.jpg'
import logo from '../../assets/logo.svg'
import styles from './styleHome'

const Home = () => {
  // * This is how routes are done! create a folder that matches the route and place
  // * the necessary files inside (either an index or the file used for dynamic routing).
  // * For an example of dynamic routing see player, and be careful: the route name needs
  // * to be an exact match of the folder's name

  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <ImageBackground source={backgruond} style={styles.backgroundImage}>
        <View>
          <View>
            <Image source={logo} style={styles.image} />
          </View>
          <View>
            <Text style={styles.textTitle}>Millions of Songs</Text>
            <Text style={styles.textTitle}>Free on</Text>
            <Text style={styles.textTitle}>SoundUNder</Text>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity
              onPress={() => router.push('/signup')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign up free</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push('/signin')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                router.push('http://192.168.5.110:3000/auth/oauth/v2/google')
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>Continue whit Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Home
