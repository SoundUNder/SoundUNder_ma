import { View, Text, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import TextInputForm from './TextInputForm'
import dayjs from 'dayjs'

const DateImputForm = () => {
  const birthDate = useRef(null)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState('2005-01-01')

  const minPublishDate = dayjs().add(18, 'year').format('YYYY-MM-DD')
  const maxPublishDate = dayjs().subtract(100, 'year').format('YYYY-MM-DD')
  console.log('====================================')
  console.log(minPublishDate, maxPublishDate)
  console.log('====================================')

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  const onChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate
      //   setDate(new Date(currentDate))
      if (Platform.OS === 'android') {
        toggleDatePicker()
        setDate(formatDate(currentDate))
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

  return (
    <View>
      {showDatePicker && (
        <DateTimePicker
          mode='date'
          display='calendar'
          value={new Date(date)}
          onChange={onChange}
          maximumDate={maxPublishDate}
          minimumDate={minPublishDate}
        />
      )}
      {!showDatePicker && (
        <Pressable onPress={toggleDatePicker} style={{ width: 300 }}>
          <TextInputForm
            ref={birthDate}
            icon={'calendar'}
            value={date.toString()}
            editable={false}
            placeholder='Enter your birthdate (YYYY-MM-DD)'
            keyboardAppearance='dark'
            returnKeyType='next'
            returnKeyLabel='next'
            placeholderTextColor='#d4c5c584'
            // onChangeText={handleChange('birthDate')}
            // onBlur={handleBlur('birthDate')}
            // error={errors.birthDate}
            // touched={touched.birthDate}
            // onSubmitEditing={() => gender.current?.focus()}
          />
        </Pressable>
      )}
    </View>
  )
}

export default DateImputForm