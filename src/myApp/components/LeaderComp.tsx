import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { homeCategoryPropType, homeLeaderPropType } from '../types'
import LeaderModalComp from './LeaderModalComp'


const LeaderComp = ({amount,img,name, active, setShowModal, showModal}:homeLeaderPropType) => {
  
  return (<View>
    
       <TouchableOpacity onPress={() =>{
        setShowModal(!showModal)
       }} className='w-[100px] items-center space-y-[8px]'>
      <View className='items-center rounded-full w-[68px] h-[68px]  '>
           <Image
             source={img}
             className="w-[78px] h-[78px] rounded"
             
             />
             
             <View className={ `absolute -bottom-[5px] -right-[2px] w-3.5 h-3.5 bg-emerald-500 rounded-full  border-white border-2 z-5 ${!active && "bg-neutral-400"}`}  />
           </View>
    <Text className="text-gray-950 text-[15px] font-medium font-['GeneralSans-Regular'] leading-[18px]">{name}</Text>
    <View className="w-full flex-row items-center justify-center space-x-[5px]">
     <View className='w-[20px] h-[20px] bg-yellow-500 rounded-full justify-center items-center '>
         <Text className="text-yellow-200 text-[5.64px] font-bold font-['GeneralSans-Regular']">SKC</Text>
     </View>
     <Text className="text-neutral-400 text-[15px] font-medium font-['GeneralSans-Regular'] ">{amount}</Text>
    </View>
 
     </TouchableOpacity>
  </View>
  )
}

export default LeaderComp