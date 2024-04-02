import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StatusBar, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppTextHeading from '@/myApp/components/AppTextHeading'
import {  arenaContestHeadingData } from 'utils/data'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {useDispatch, useSelector} from "react-redux"
import ArenaCreateContestOffline from './ArenaCreateContestOffline'
import ArenaCreateContestOnline from './ArenaCreateContestOnline'


const ArenaCreateContestScreen= () => {


    const [onlineStatus, setOnlineStatus] = useState<{
        id: number,
        text:string,
        active:boolean
    }[]>(arenaContestHeadingData)

const [isOnline, setIsOnline] = useState<boolean>(true)


console.log("online status", onlineStatus)


    const handleOnlineStatusfunc = (i:number) => {
        const filterData = onlineStatus.filter(item => {
        if(item.id == i){
            item.active = true
            return item
        }else{
            item.active = false
            return item
        }
        })
        console.log("filtered items", filterData)
        setOnlineStatus(filterData)
    
    }
console.log("isOnline", isOnline)
  return (
   <SafeAreaView className='px-[16px] py-[12px]'>
  
    <ScrollView  
    showsVerticalScrollIndicator={false}>
   
  
    {/* header section starts */}
 
    <View className='w-full flex-row items-center justify-center'>
        <TouchableOpacity
        onPress={() => {
         navigation.goBack()
        }}
        className='absolute left-0  z-10 p-2'>
        <Image 
      source={require("../../../../assets/images/arrow-left.png")}
      className='w-[24px] h-[24px]'
      />
        </TouchableOpacity>
        <AppTextHeading
        text='Create Contest'
        classText='text-center text-[18px] text-bold'
        />
    </View>
    {/* header section ends */}
    {/*online status starts*/}
   <View className='mt-4  h-12   bg-gray-200 justify-center flex-row items-center rounded-[40px] px-2 w-full '>
   {
  onlineStatus.map(item => <TouchableOpacity
  activeOpacity={0.8}

  onPress={() => {
    handleOnlineStatusfunc(item.id)
    if(item.id === 2){
      setIsOnline(false)
     
    }
    if(item.id === 1){
      setIsOnline(true)
    }
  }}
     key={item.id}
    className={`flex-1 flex-row space-x-1 h-[34px]   justify-center items-center   rounded-[40px] ${item.active && "bg-white"}`}>
  <Text className="text-[12px] font-medium font-['GeneralSans-Regular'] leading-none text-neutral-400 capitalize">{item.text}</Text>
  </TouchableOpacity>)
}


   </View>
    {/*online status ends*/}
  {
    isOnline ? <ArenaCreateContestOnline /> : <ArenaCreateContestOffline />
  }

    </ScrollView>
   </SafeAreaView>
  )
}

export default ArenaCreateContestScreen