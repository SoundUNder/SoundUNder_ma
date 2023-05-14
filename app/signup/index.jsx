import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Pressable,
  Platform,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import background from '../../assets/background.jpg'
import styles from './styleSignup'
import { useRef, useState } from 'react'
import TextInputForm from '../../components/TextInputForm'
import ButtonForm from '../../components/ButtonForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import DateTimePicker from '@react-native-community/datetimepicker'
import { SIGNUP } from '../../services/auth/mutationAuth'
import { useMutation } from '@apollo/client'

const Signup = () => {
  const router = useRouter()
  const password = useRef(null)
  const username = useRef(null)
  const birthdate = useRef(null)
  const gender = useRef(null)

  /** Mutation */
  const [registerUser, { data, loading, error }] = useMutation(SIGNUP)

  const writeItemToStorage = async (token) => {
    if (token) {
      await setItem(token)
      setToken(token)
    }
  }

  console.log('***************')
  console.log(data)
  console.log(loading)
  console.log(error)
  console.log('***************')

  /** date */
  const [dateOfBirth, setDateOfBirth] = useState('')

  const [date, setDate] = useState(new Date())
  const [showpicker, setShowpicker] = useState(false)

  const toggleDatePicker = () => {
    setShowpicker(!showpicker)
  }

  const onChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate
      setDate(currentDate)
      if (Platform.OS === 'android') {
        toggleDatePicker()
        setDateOfBirth(formatDate(currentDate))
      }
    } else {
      toggleDatePicker()
    }
  }

  const formatDate = (rawDate) => {
    let date = new Date(rawDate)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    month = month < 10 ? `0${month}` : month
    day = day < 10 ? `0${day}` : day
    return `${year}-${month}-${day}`
  }

  /** Gender */
  const [showPickerGender, setShowPickerGender] = useState(false)
  const [genderUser, setGenderUser] = useState('')
  const togglePickerGender = () => {
    setShowPickerGender(!showPickerGender)
  }

  const selectGender = (valueGender) => {
    setGenderUser(valueGender)
    togglePickerGender()
  }

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    // birthDate: Yup.date().required('Required'),
    // gender: Yup.string().required('Required'),
  })

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: RegisterSchema,
      initialValues: {
        email: '',
        password: '',
        username: '',
        birthdate: '',
        gender: '',
      },
      onSubmit: (values) => {
        try {
          values.birthdate = dateOfBirth
          values.gender = genderUser
          registerUser({
            variables: {
              email: values.email,
              password: values.password,
              username: values.username,
              birthdate: values.birthdate,
              gender: values.gender,
            },
          })
          console.log(values)
        } catch (error) {
          console.error(error.message)
        }
      },
    })

  if (!loading && data && error === undefined) {
    try {
      writeItemToStorage(data?.loginUser?.token)
      setTimeout(() => {
        router.push('/dashboard')
      }, 500)
      // console.log(data?.registerUser?.token)
    } catch (error) {
      console.error(error.message)
    }
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
            <TextInputForm
              icon={'mail'}
              placeholder='Enter your email'
              autoCapitalize='none'
              autoCompleteType='email'
              keyboardType='email-address'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
              placeholderTextColor='#d4c5c584'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              onSubmitEditing={() => password.current?.focus()}
            />
            <TextInputForm
              ref={password}
              icon={'key'}
              placeholder='Enter your password'
              secureTextEntry
              autoCompleteType='password'
              autoCapitalize='none'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
              placeholderTextColor='#d4c5c584'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              onSubmitEditing={() => username.current?.focus()}
            />
            <TextInputForm
              ref={username}
              icon={'user'}
              placeholder='Enter your username'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
              placeholderTextColor='#d4c5c584'
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              error={errors.username}
              touched={touched.username}
              onSubmitEditing={() => toggleDatePicker()}
            />
            {showpicker && (
              <DateTimePicker
                mode='date'
                display='spinner'
                value={date}
                onChange={onChange}
                maximumDate={new Date('2009-01-01')}
                minimumDate={new Date('1925-01-01')}
              />
            )}
            {!showpicker && (
              <Pressable onPress={toggleDatePicker} style={styles.textInput}>
                <TextInputForm
                  ref={birthdate}
                  editable={false}
                  icon={'calendar'}
                  placeholder='Enter your birthdate'
                  keyboardAppearance='dark'
                  returnKeyType='next'
                  returnKeyLabel='next'
                  placeholderTextColor='#d4c5c584'
                  value={dateOfBirth.toString()}
                  onChangeText={handleChange('birthdate')}
                  onBlur={handleBlur('birthdate')}
                  error={errors.birthDate}
                  touched={touched.birthDate}
                  onSubmitEditing={() => console.log('date', birthdate)}
                />
              </Pressable>
            )}
            {showPickerGender && (
              <View style={styles.modalGender}>
                <View style={styles.viewGender}>
                  <Pressable
                    style={styles.areaFieldGender}
                    onPress={togglePickerGender}
                  >
                    <Text
                      style={styles.textGender}
                      onPress={() => selectGender('Male')}
                    >
                      Male
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.areaFieldGender}
                    onPress={togglePickerGender}
                  >
                    <Text
                      style={styles.textGender}
                      onPress={() => selectGender('Female')}
                    >
                      Female
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.areaFieldGender}
                    onPress={togglePickerGender}
                  >
                    <Text
                      style={styles.textGender}
                      onPress={() => selectGender('No binary')}
                    >
                      No binary
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.areaFieldGender}
                    onPress={togglePickerGender}
                  >
                    <Text
                      style={styles.textGender}
                      onPress={() => selectGender('Other')}
                    >
                      Other
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.areaFieldGender}
                    onPress={togglePickerGender}
                  >
                    <Text
                      style={styles.textGender}
                      onPress={() => selectGender(`Prefer don't say`)}
                    >
                      Prefer don't say
                    </Text>
                  </Pressable>
                </View>
              </View>
            )}
            {!showPickerGender && (
              <Pressable onPress={togglePickerGender} style={styles.textInput}>
                <TextInputForm
                  ref={gender}
                  editable={false}
                  icon={'user'}
                  placeholder='Enter your gender'
                  keyboardAppearance='dark'
                  returnKeyType='go'
                  returnKeyLabel='go'
                  placeholderTextColor='#d4c5c584'
                  value={genderUser}
                  onChangeText={handleChange('gender')}
                  onBlur={handleBlur('gender')}
                  error={errors.gender}
                  touched={touched.gender}
                  onSubmitEditing={() => handleSubmit()}
                />
              </Pressable>
            )}

            <View style={styles.buttonForm}>
              <ButtonForm label={'Register'} onPress={() => handleSubmit()} />
            </View>
            <Text style={styles.questionText}>¿Ya tienes cuenta?</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Signup
