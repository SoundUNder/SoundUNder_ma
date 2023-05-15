import { View, Text, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { ImageBackground } from 'react-native'
import background from '../../assets/background.jpg'
import styles from './styleRP'
import TextInputForm from '../../components/TextInputForm'
import ButtonForm from '../../components/ButtonForm'
import { RESETPASSWORD } from '../../services/auth/mutationAuth'
import { useMutation } from '@apollo/client'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useRef } from 'react'

const RestorePassword = () => {
  const email = useRef(null)
  const router = useRouter()
  const [restorePassword, { data, loading, error }] = useMutation(RESETPASSWORD)

  const RestorePassSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  })

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: RestorePassSchema,
      initialValues: {
        email: '',
      },
      onSubmit: (values) => {
        restorePassword({
          variables: {
            email: values.email,
          },
        })
      },
    })

  if (!loading && data) {
    if (data?.restorePassword) {
      router.push('/signin')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      <ImageBackground source={background} style={styles.backgroundImage}>
        <Text style={styles.textTitle}>RestorePassword</Text>
        <View style={styles.inputForm}>
          <TextInputForm
            ref={email}
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
            onSubmitEditing={() => handleSubmit()}
          />
          <View style={styles.buttonForm}>
            <ButtonForm label={'Send'} onPress={() => handleSubmit()} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default RestorePassword
