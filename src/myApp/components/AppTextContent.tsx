import { View, Text } from 'react-native'
import React from 'react'
import { AppTextProp } from '../types'



const AppTextContent = ({text, classText} : AppTextProp) => {
  return (
    <View>
      <Text className={`w-[327px] text-neutral-400 text-base font-normal font-['GeneralSans-Regular'] leading-snug ${classText && classText}`}>{text}</Text>
    </View>
  )
}

export default AppTextContent