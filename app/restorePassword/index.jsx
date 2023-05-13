import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { ImageBackground } from 'react-native'
import background from '../../assets/background.jpg'
import styles from './styleRP'
import TextInputForm from '../../components/TextInputForm'

const RestorePassword = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <ImageBackground source={background} style={styles.backgroundImage}>
        <Text style={styles.textTitle}>RestorePassword</Text>
        <View style={styles.inputForm}>
          <TextInputForm
            icon={'mail'}
            placeholder='Enter your email'
            autoCapitalize='none'
            autoCompleteType='email'
            keyboardType='email-address'
            keyboardAppearance='dark'
            returnKeyType='next'
            returnKeyLabel='next'
            // style={styles.textInput}
            // placeholderTextColor='#8d8d8d32'
            placeholderTextColor='#d4c5c584'
          />
          <TouchableOpacity
            style={{
              borderRadius: 8,
              height: 50,
              width: 245,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#965FDD',
              // backgroundColor: '#e94832',
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.textLink}>Regresar</Text>
        </TouchableOpacity> */}
      </ImageBackground>
    </SafeAreaView>
  )
}

export default RestorePassword
