import { View, Text, Image } from 'react-native'
import React from 'react'
import { homeContestantPropType } from '../types'

const ContestantComp = ({content1Img, content2Img, cont1Name, cont2Name, active, heading}:homeContestantPropType ) => {

  return (
    <View className='w-full flex-row justify-start items-center mt-4 space-x-2'>
      <View className='flex-row items-center'>
<View className="w-[54px] h-[54px] z-10 relative -right-[10px] ">
<Image 
source={content1Img}
className="w-full h-full"
/>
</View>
<Image 
source={content2Img}
className="w-[54px] h-[54px] "
/>
      </View>

      <View className="h-[54px]  justify-around">
        <View className='flex-row items-center w-full'>
          <Text className="text-gray-950 text-[15px] font-medium font-['GeneralSans-Regular'] leading-[15px]">{heading}</Text>
          <View className=" px-2 py-0.5 bg-green-100 rounded-[39px] border border-green-400 justify-center items-center  ml-4">
          <Text className="text-lime-700 text-[6px] font-medium font-['General Sans Variable'] leading-3">online</Text>
          </View>
        </View>
        <View className='flex-row space-x-1'>
          <Text className="text-neutral-400 text-[12px] font-medium font-['GeneralSans-Regular'] leading-[12px]">@{cont1Name}</Text>
          <Text className="text-black text-[12px] font-medium font-['GeneralSans-Regular'] leading-[12px]">vs</Text>
          <Text className="text-neutral-400 text-[12px] font-medium font-['General Sans Variable'] leading-[12px]">@{cont2Name}</Text>
        </View>
      </View>
    

    </View>
  )
}

export default ContestantComp