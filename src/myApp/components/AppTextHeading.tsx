import { View, Text } from 'react-native'
import React from 'react'
import { AppTextProp } from '../types'

const AppTextHeading = ({text} : AppTextProp) => {
  return (
    <View>
      <Text className="text-gray-950 text-2xl font-bold font-['SpaceGrotesk-SemiBold'] leading-loose">{text}</Text>
    </View>
  )
}

export default AppTextHeading