import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import background from '../../assets/background.jpg'
import styles from './styleSignup'
import { useState } from 'react'

const Signup = () => {
  const router = useRouter()

  const [birthDate, setBirthDate] = useState(null)
  const [gender, setGender] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date)
    hideDatePicker()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <ImageBackground source={background}>
        <View style={styles.body}>
          <View>
            <Text style={styles.textTitle}>SignUp</Text>
          </View>
          <View style={styles.inputForm}>
            <TextInput
              placeholder='Email'
              style={styles.textInput}
              placeholderTextColor='#8d8d8d32'
            />
            <TextInput
              placeholder='Contraseña'
              style={styles.textInput}
              placeholderTextColor='#8d8d8d32'
            />
            <TextInput
              placeholder='Nombre de Usuario'
              style={styles.textInput}
              placeholderTextColor='#8d8d8d32'
            />
            <Button title='Fecha de Nacimiento' onPress={showDatePicker} />
            {/* <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode='date'
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              minimumDate={new Date(1923, 1, 1)}
              maximumDate={new Date()}
              isDarkModeEnabled={true}
              style={styles.calendar}
            />
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              mode='dialog'
              style={styles.pickerGender}
            >
              <Picker.Item label='Selecciona tu Genero' value='Unknown' />
              <Picker.Item label='Masculino' value='Masculino' />
              <Picker.Item label='Femenino' value='Femenino' />
              <Picker.Item label='No binario' value='No binario' />
              <Picker.Item label='Otro' value='Otro' />
              <Picker.Item
                label='Prefiero no decirlo'
                value='Prefiero no decirlo'
              />
            </Picker> */}
            <Button title='Registrarse' />
            <Text style={styles.questionText}>¿Ya tienes cuenta?</Text>
          </View>
          <View style={styles.links}>
            <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text style={styles.textLink}>Ingresa</Text>
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

export default Signup
