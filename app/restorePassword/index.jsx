import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { ImageBackground } from 'react-native'
import background from '../../assets/background.jpg'
import styles from './styleRP'

const RestorePassword = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <ImageBackground source={background} style={styles.backgroundImage}>
        <Text style={styles.textTitle}>RestorePassword</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder='Email' style={styles.textInput} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.textLink}>Regresar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default RestorePassword
