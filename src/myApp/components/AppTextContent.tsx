import { View, Text } from 'react-native'
import React from 'react'
import { AppTextProp } from '../types'



const AppTextContent = ({text, classText, fontFamily = "GeneralSans-Regular"} : AppTextProp) => {
  return (
    <View>
      <Text 
      style={{
        fontFamily
      }}
      className={`w-[327px] text-neutral-400 text-base font-normal leading-snug ${classText && classText}`}>{text}</Text>
    </View>
  )
}

export default AppTextContent