import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { homeCategoryPropType } from '../types'
import { useNavigation } from '@react-navigation/native'

const Categories = ({heading, img, numOfBets, numOfUsers}:homeCategoryPropType) => {

    const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("gameScreen")
    }}
    className='w-[138px]'>
      <Image
      source={img}
      className='w-[138px] h-[138.89px] rounded-md'
      />
      <View className='space-y-[3px] mt-1'>
        <Text className="text-gray-950 text-xs font-medium font-['General Sans Variable'] leading-[18px]">{heading}</Text>
   <View className='flex-row justify-between items-center w-full' >
  <View className='flex-row items-end'>
  <Text className="text-gray-950 text-[12px] font-medium font-['General Sans Variable'] leading-[18px]">Bets:</Text>
  <Text className="text-neutral-400 text-[10px] font-medium font-['General Sans Variable'] leading-[18px] pl-1">{numOfBets}</Text>
  </View>
    <View className='flex-row items-end'>
  <Text className="text-gray-950 text-[12px] font-medium font-['General Sans Variable'] leading-[18px]">Users:</Text>
  <Text className="text-neutral-400 text-[10px] font-medium font-['General Sans Variable'] leading-[18px] pl-1">{numOfBets}</Text>
  </View>
   </View>
      </View>

    </TouchableOpacity>
  )
}

export default Categories