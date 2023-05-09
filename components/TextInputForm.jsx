import React, { forwardRef } from 'react'
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native'
import { Entypo as Icon } from '@expo/vector-icons'

const TextInput = forwardRef(({ icon, error, touched, ...otherProps }, ref) => {
  const validationColor = !touched ? '#a0bdca' : error ? '#FF5A5F' : '#a0bdca'
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
      }}
    >
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(34, 62, 75, 0.7)'
          color='#a0bdca'
          ref={ref}
          {...otherProps}
        />
      </View>
    </View>
  )
})

export default TextInput
