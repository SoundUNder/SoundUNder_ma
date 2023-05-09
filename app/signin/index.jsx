import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import background from '../../assets/background.jpg'
import styles from './styleSignin'

const Signin = () => {
  // * This is how routes are done! create a folder that matches the route and place
  // * the necessary files inside (either an index or the file used for dynamic routing).
  // * For an example of dynamic routing see player, and be careful: the route name needs
  // * to be an exact match of the folder's name

  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />

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
            <TouchableOpacity onPress={() => router.push('/restorePassword')}>
              <Text style={styles.questionText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.questionText}>¿No tienes cuenta?</Text>
          <View style={styles.links}>
            <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text style={styles.textLink}>Registrate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.textLink}>Regresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Signin
