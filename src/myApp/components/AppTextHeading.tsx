
import { View, Text } from 'react-native'
import React from 'react'
import { AppTextProp } from '../types'

const AppTextHeading = ({text, classText} : AppTextProp) => {
 
  return (
    <View className='w-full'>
      <Text style={{
        fontFamily:"GeneralSans-SmiboldItalic"
      }} className={`text-gray-950 text-2xl font-bold   w-full leading-loose ${classText}`}>{text}</Text>
    </View>
  )
}

export default AppTextHeading