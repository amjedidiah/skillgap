import { View, Text, Image, Modal, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { gameModelCompPropType} from '../types'

import { useNavigation } from '@react-navigation/native'
import { gameMessageCompData } from 'utils/data'


// height:modalHeight,
// minHeight: divHeight
const GameModalComp = ({data}:gameModelCompPropType ) => {

    
    const divHeight = gameMessageCompData.length * 30
    const modalHeight = (Dimensions.get("window").height * 3)/5

    console.log("hello tobe22",gameMessageCompData.length)
  return (
<View style={{
    minHeight: divHeight,
    maxHeight: modalHeight
}}>
<ScrollView className="flex-1"
showsVerticalScrollIndicator={false}
>
   {
    data.map(item => <View className='flex-row items-center justify-between mt-6 h-3' key={item.key}>
        <View className='flex-row items-center space-x-1'>
  <Image 
  source={item.img}
  className='w-[24px] h-[20px]'
  />
  <Text className="text-gray-950 text-xs font-medium font-['General Sans Variable'] leading-[14px]">
    {item.ballNumber} Ball
    
  </Text>
  <View className=" px-0.5 py-0.5  bg-green-100 rounded-[39px] border border-green-400 justify-center items-center  ml-4">
          <Text className="text-lime-700 text-[6px] font-medium font-['General Sans Variable'] leading-[6px]">online</Text>
          </View>
        </View>
        <View>
            <Text className="text-neutral-400 text-[12px] font-medium font-['GeneralSans-Regular'] leading-[14px]">
                {item.activeBetNumber} Active Bet
            </Text>
        </View>

    </View>)
   }
</ScrollView>
</View>
  )
}

export default GameModalComp