import { Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LeaderModalPropType } from "../types"
import AppTextHeading from './AppTextHeading'
import AppTextContent from './AppTextContent'
import AppButton from './AppButton'
import { Ionicons } from '@expo/vector-icons'


const LeaderModalComp = ({showModal, setShowModal}: LeaderModalPropType) => {

const data = [{
  name:"No. of disbutes",
  value: 1,
  key: 1
},
{
  name:"No. of Contest",
  value: 52,
  key: 2
},

{
  name:"No. of Wins",
  value: 1,
  key: 3
},
{
  name:"No. of Loses",
  value: 6,
  key: 4
},

]


  return (
    <Modal 
    animationType="slide"
    transparent={true}
    visible={showModal}
    >
    <View className="h-screen mx-auto justify-end w-full">
      <View className='w-full bg-white h-max'>
        
      <View className='w-full h-200px rounded-tr-[20px] rounded-tl-[30px]  mt-4 overflow-hidden mx-auto'>
        <View className="absolute top-[40px] left-[40px] w-[40px] h-[40px] bg-red-400">
        <Ionicons name="chevron-back-outline" size={40} color="red" />
        </View>
        <Image
        source={require("../../../assets/images/gamePic2.png")}
        className="w-screen h-[200px] round-md"
        
        />
    
      </View>
    
    {/* userdata start */}
    <View className='items-center rounded-full w-[104px] h-[104px] relative -top-[30px] left-[13px]'>
          <Image
            source={require("../../../assets/images/userProfile.png")}
            className="w-[104px] h-[104px]"
            
            />
            <View className='absolute bottom-[10px] right-[5px] w-4 h-4 bg-emerald-500 rounded-full border border-white z-5'  />
          </View>

    {/* user date end */}
    <View className="px-[13px] w-full">
   <View className='flex-row items-center justify-between w-full'>
      <View className="flex-1 ">
        <AppTextHeading text='Wokoma John'  classText="text-gray-950 text-[20px] font-semibold font-['GeneralSans-Regular'] leading-[20px]" />

        <AppTextContent  text='@fkgkgk' classText="w-max" />

      </View>
      <View className='flex-row items-center  space-x-[15px]'>
      <TouchableOpacity onPress={() => {
        console.log("youtube")
      }}>
      <Image
            source={require("../../../assets/images/youtube.png")}
            className="w-[24px] h-[24px]"
            
            />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        console.log("youtube")
      }}>
      <Image
            source={require("../../../assets/images/twitter.png")}
            className="w-[20px] h-[20px]"
            
            />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        console.log("youtube")
      }}>
      <Image
            source={require("../../../assets/images/facebook.png")}
            className="w-[24px] h-[24px]"
            
            />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        console.log("youtube")
    
      }}>
      <Image
            source={require("../../../assets/images/instagram.png")}
            className="w-[24px] h-[24px]"
            
            />
      </TouchableOpacity>
      </View>
      <View>

      </View>
    </View>
   </View>
   
   <View className="flex-row mt-4 justify-between items-center px-[16px] w-full">
    {
      data.map(item => <View key={item.key} className='flex-1 space-y-1 '>
      <Text className="text-gray-950 text-[12px] font-medium font-['General Sans Variable']">{item.name}</Text>
      <Text className="text-gray-950 text-[10px] font-normal font-['GeneralSans-Regular ']">{item.value}</Text>
    </View>)
    }
   </View>

 
   {/* user data end */}
   <View className=" mt-[18px] px-[16px]">
 <Text className="text-gray-950 text-[18px] font-medium font-['GeneralSans-Regular'] leading-[20px]">
  Bio
 </Text>
 <Text className=" text-neutral-400 mt-1 text-[13px] font-normal font-['General Sans Variable'] leading-[18px]">
 I have been particularly impressed by your contributions in the team. Your skills and qualities have been invaluable to the team, and I am grateful for your contributions.

 </Text>
   </View>


   {/*  */}
  <View className='mt-24 w-full px-[16px] mb-8'>
  <AppButton text='Invite for contest' ButtonViewStyle='bg-sky-500' handleOnpress={() => {
    setShowModal(!showModal)
    console.log('invite button')
  }} />
  </View>
      </View>
    </View>
 
    </Modal>
  )
}

export default LeaderModalComp

const styles = StyleSheet.create({})