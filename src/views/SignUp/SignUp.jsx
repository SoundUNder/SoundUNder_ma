import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { Link } from 'react-router-native'
import CalendarPicker from 'react-native-calendar-picker'
import { Picker } from '@react-native-picker/picker'
import { ImageBackground } from 'react-native'
import background from '../../../assets/background.jpg'
import Button from '../../components/Button'

const SignUp = () => {
  const maxDate = new Date() // Today
  const minDate = new Date(1923, 1, 1)
  const [birthDate, setBirthDate] = useState(null)
  const [gender, setGender] = useState('Masculino')
  console.log(birthDate)

  return (
    <ImageBackground source={background}>
      <View style={styles.body}>
        <View>
          <Text style={styles.textTitle}>SignUp</Text>
        </View>
        <View style={styles.inputForm}>
          <TextInput placeholder='Email' style={styles.textInput} />
          <TextInput placeholder='Contraseña' style={styles.textInput} />
          <TextInput placeholder='Nombre de Usuario' style={styles.textInput} />
          <Text style={styles.textfield}>
            Selecciona tu fecha de Nacimiento
          </Text>
          {/* <CalendarPicker
            minDate={minDate}
            maxDate={maxDate}
            todayBackgroundColor='#f2e6ff'
            selectedDayColor='#7300e6'
            selectedDayTextColor='#FFFFFF'
            onDateChange={(date) => setBirthDate(date.format('YYYY-MM-DD'))}
          /> */}
          <Text style={styles.textfield}>Selecciona tu Genero</Text>
          <Picker
            selectedValue={gender}
            style={{ height: 50, width: 210, marginTop: -30 }}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          >
            <Picker.Item label='Masculino' value='Masculino' />
            <Picker.Item label='Femenino' value='Femenino' />
            <Picker.Item label='No binario' value='No binario' />
            <Picker.Item label='Otro' value='Otro' />
            <Picker.Item
              label='Prefiero no decirlo'
              value='Prefiero no decirlo'
            />
          </Picker>
          <Button title='Registrarse' />
          <Text>¿Ya tienes cuenta?</Text>
        </View>
        <View style={styles.links}>
          <Link to='/signin'>
            <Text style={styles.textLink}>Ingresa</Text>
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexGrow: 1,
    width: ScreenWidth,
    height: ScreenHeight,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000a0',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    gap: 10,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  inputForm: {
    width: 300,
    alignItems: 'center',
    gap: 20,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#fefefe',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonForm: {
    width: 300,
    marginTop: 20,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginBottom: 20,
    marginTop: -90,
  },
  textfield: {
    height: 40,
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
})

export default SignUp
