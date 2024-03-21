import { View, Text, Image, TouchableOpacity, Platform, Dimensions } from 'react-native'
import React from 'react'
import { homeCategoryPropType } from '../types'
import { useNavigation } from '@react-navigation/native'

const Categories = ({heading, img, numOfBets, numOfUsers}:homeCategoryPropType) => {


  const deviceWidth = Dimensions.get("window").width

const categoryItemWidth = (deviceWidth - 16)/3
const categoryItemHeight = categoryItemWidth * 1.02

    const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("gameScreen")
    }}
    style={{
      width: categoryItemWidth
    }}
   >
      <Image
      source={img}
      style={{
        width:categoryItemWidth,
        height: 72
      }}
      className={`w-[${categoryItemWidth}]px h-[${80}]px rounded-md`}
      />
      <View className='space-y-[2px] mt-1'>
        <Text className="text-gray-950 text-xs font-medium font-['General Sans Variable'] leading-[18px]">{heading}</Text>
   <View className='flex-row justify-between items-center w-full' >
  <View className='flex-row items-end justify-start '>
  <Text style={{
    fontFamily:"GeneralSans-Regular"
  }} className="text-gray-950 text-[12px] font-medium  leading-[18px] ">Bets:</Text>
  <Text style={{
    fontFamily:"GeneralSans-Regular"
  }} className="text-neutral-400 text-[10px] font-medium font-['General Sans Variable'] leading-[18px] pl-[0.7px]">{numOfBets}</Text>
  </View>
    <View className='flex-row items-end'>
  <Text style={{
    fontFamily:"GeneralSans-Regular"
  }} className="text-gray-950 text-[12px] font-medium font-['General Sans Variable'] leading-[18px]">Users:</Text>
  <Text style={{
    fontFamily:"GeneralSans-Regular"
  }} className="text-neutral-400 text-[10px] font-medium font-['General Sans Variable'] leading-[18px] pl-[0.7px]">{numOfBets}</Text>
  </View>
   </View>
      </View>

    </TouchableOpacity>
  )
}

export default Categories