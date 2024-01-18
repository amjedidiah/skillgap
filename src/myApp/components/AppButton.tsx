import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppButtonProp } from '../types'



const AppButton = ({text,handleOnpress, ButtonTextStyle, ButtonViewStyle} : AppButtonProp) => {
  return (
    <TouchableOpacity  className={`w-[343px]  px-2.5 py-4 bg-neutral-900 rounded-[40px] justify-center items-center ${ButtonViewStyle && ButtonViewStyle}`}
    onPress={handleOnpress}
    activeOpacity={0.8}
    >
      <Text className={`text-center text-white text-sm font-medium font-['GeneralSans-Regular'] leading-normal ${ButtonTextStyle && ButtonTextStyle}`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default AppButton