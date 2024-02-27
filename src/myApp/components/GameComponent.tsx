import { View, Text, Image } from 'react-native'
import React from 'react'
import { gameComponentPropType } from '../types'
import { AntDesign } from '@expo/vector-icons'
import AppTextHeading from './AppTextHeading'


const GameComponent = ({active, amount, img, name, time, userName}: gameComponentPropType) => {
  return (
    <View className='w-full flex-row justify-between items-start mt-[18px] '>
        <View className='flex-row space-x-2 items-start'>
            {/* contestant img start */}
         <View className='flex-row'>
            <View className='relative left-[10px] w-[44px] h-[44px] z-10 '>
            <Image
            source={img}
            className='w-full h-full'
            />
            </View>
            <View className="w-[44px] h-[44px]  text-center bg-gray-200 text-base font-normal font-['GeneralSans-Regular'] leading-normal rounded-full justify-center items-center">
            <AntDesign name="question" size={24} color="black" />
            </View>
         </View>
         {/* contestant img end */}
         <View className="">
            <AppTextHeading  text={name} classText="text-gray-950 text-[16px] font-medium font-['General Sans Variable'] leading-[16px]" />
            <View className='flex-row items-center space-x-1'>
                <Text className="text-neutral-400 text-[12px] font-medium font-['GeneralSans-Regular'] leading-[21px]">{userName}</Text>
                <Text className="text-neutral-900 text-[12px] font-medium font-['GeneralSans-Regular'] leading-[12px]">vs</Text>
                <AntDesign name="question" size={15} color="black" />
            </View>
            <View>

            </View>
         </View>
         <View className={`px-1 py-0.5 bg-indigo-50 rounded-[39px] border  justify-center border-sky-500 items-center  ml-4 ${active && "border-green-400"}`}>
          <Text className={` text-[6px] font-medium font-['GeneralSans-Regular '] text-sky-500 leading-3 ${active && "text-lime-700" }`}>{active ? "online" : "offline"}</Text>
          </View>
        </View>
        <View>
<Text className="text-neutral-400 text-[12px] font-medium font-['GeneralSans-Regular'] leading-[12px]">{time} ago</Text>
<Text className="text-sky-500 text-[15px] font-medium font-['GeneralSans-Medium Variable'] leading-[15px] py-1">${amount}</Text>

        </View>
    </View>
  )
}

export default GameComponent