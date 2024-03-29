import { View, Text, Image, Modal, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import {  homeLeaderPropType } from '../types'



const LeaderComp = ({amount,img,name, active, setShowModal, showModal, ranking}:homeLeaderPropType) => {
  
  return (<View>
       <TouchableOpacity onPress={() =>{
        setShowModal(!showModal)
       }} className={`w-[80px] items-center space-y-[8px] mt-2`}>
      <View className='w-4 h-4 absolute -top-[1px] left-[40px] z-10 -translate-x-[6px] justify-center items-center '>
     
      <Text className="text-white  text-center z-10 text-[10px] font-medium font-['General Sans Variable'] leading-[10px]">{ranking}</Text>

      <Image 
      source={require("../../../assets/images/leaderRanking.png")}
      className='w-4 h-4 absolute top-0 left-0 right-0 bottom-0'
      />
      </View>
      <View className='items-center rounded-full w-[60px] h-[60px] '>
     
           <Image
             source={img}
             className={`w-[60px] h-[60px] rounded`}
             />
             
             <View className={ `absolute bottom-[1px] right-[3px] w-3.5 h-3.5 bg-emerald-500 rounded-full  border-white border-2 z-5 ${!active && "bg-neutral-400"}`}  />
           </View>
    <Text style={{
      fontFamily:"GeneralSans-Regular"
     }} className="text-gray-950 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px]">{name}</Text>
    <View className="w-full flex-row items-center justify-center space-x-[5px]">
     <View className='w-[20px] h-[20px] bg-yellow-500 rounded-full justify-center items-center '>
     <Image
             source={require("../../../assets/images/skill_gap_coin.png")}
             className="w-[16px] h-[16px]"
             />
     </View>
     <Text style={{
      fontFamily:"GeneralSans-Regular"
     }} className="text-neutral-400 text-[12px] font-medium font-['GeneralSans-Regular'] ">{amount}</Text>
    </View>
 
     </TouchableOpacity>
  </View>
  )
}

export default LeaderComp