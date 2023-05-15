import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import background from '../../assets/background.jpg'
import styles from './styleSignin'
import { useFormik } from 'formik'
import ButtonForm from '../../components/ButtonForm'
import TextInputForm from '../../components/TextInputForm'
import * as Yup from 'yup'
import React, { useEffect, useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import { SIGNIN } from '../../services/auth/mutationAuth'
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage'

const Signin = () => {
  // * This is how routes are done! create a folder that matches the route and place
  // * the necessary files inside (either an index or the file used for dynamic routing).
  // * For an example of dynamic routing see player, and be careful: the route name needs
  // * to be an exact match of the folder's name

  const password = useRef(null)
  const router = useRouter()
  const [token, setToken] = useState('Token not set')
  const [loginUser, { data, loading }] = useMutation(SIGNIN)
  const [valueStorage, setValueStorage] = useState(null)
  const { getItem, setItem } = useAsyncStorage('token')

  const readItemFromStorage = async () => {
    const itemStorage = await getItem()
    const item = JSON.parse(itemStorage)
    setValueStorage(item)
  }

  const writeItemToStorage = async (token) => {
    if (token) {
      await setItem(JSON.stringify(token))
      setToken(token)
    }
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
  })

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: (values) => {
        loginUser({
          variables: {
            email: values.email,
            password: values.password,
          },
        })
      },
    })

  useEffect(() => {
    if (!loading && data && data.loginUser.token) {
      writeItemToStorage(data?.loginUser?.token)
      setTimeout(() => {
        router.push('/dashboard')
      }, 500)
    }
  }, [data])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <ImageBackground source={background}>
        <View style={styles.body}>
          <View>
            <Text style={styles.textTitle}>{'Login'}</Text>
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
              // style={styles.textInput}
              // placeholderTextColor='#8d8d8d32'
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
              returnKeyType='go'
              returnKeyLabel='go'
              // placeholderTextColor='#8d8d8d32'
              placeholderTextColor='#d4c5c584'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              onSubmitEditing={() => handleSubmit()}
            />
          </View>
          <View style={styles.buttonForm}>
            <ButtonForm label={'Login'} onPress={() => handleSubmit()} />
          </View>
          <View>
            <TouchableOpacity onPress={() => router.push('/restorePassword')}>
              <Text style={styles.questionText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.questionText}>New to SoundUNder?</Text> */}

          {/* <View style={styles.links}>
            <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text style={styles.textLink}>Sign up</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Signin
