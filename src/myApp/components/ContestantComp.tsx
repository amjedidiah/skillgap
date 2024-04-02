import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { homeContestantPropType } from '../types'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const ContestantComp = ({content1Img, content2Img, cont1Name, cont2Name, active, heading, amount, contestStatus, allItem, contestType, opponentProfilePicAndSkillGapTagArray}:homeContestantPropType ) => {

  const appUserStore = useSelector(data => data?.authReducer?.user)
// console.log("allIten from inner now", allItem)
const data = {allItem}
const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("Arena",
      {
        screen: "arenaContestScreen",
        params: {data}
       }
      )
    }} className='w-full flex-row justify-between items-center mt-4 '>
     <View className="flex-row  justify-start items-center space-x-2">
      <View className='flex-row items-center'>
<View className="w-[54px] h-[54px] z-10 relative -right-[10px] ">
<Image 
source={appUserStore?.profilePic ? {
 uri: appUserStore.profilePic
}:require("../../../assets/images/contest1.png")}
className="w-full h-full rounded-[500px] "
/>
</View>
{
  contestType == "public" ?  <View className="w-[54px] h-[54px]  text-center bg-gray-200 text-base font-normal font-['GeneralSans-Regular'] leading-normal rounded-full justify-center items-center">
  <AntDesign name="question" size={24} color="black" />
  </View> : contestType == "private" ? <Image 
source={{uri: opponentProfilePicAndSkillGapTagArray[0]?.profilePic} || require("../../../assets/images/contest2.png")}
className="w-[54px] h-[54px] rounded-[500px] "
/> : <Image 
source={content2Img || require("../../../assets/images/contest2.png")}
className="w-[54px] h-[54px] "
/>
}

      </View>

      <View className="h-[54px]  justify-around">
        <View className='flex-row items-center w-full'>
          <Text className="text-gray-950 text-[15px] font-medium font-['GeneralSans-Regular'] leading-[15px]">{heading}</Text>
          <View className=" px-2 py-0.5 bg-green-100 rounded-[39px] border border-green-400 justify-center items-center  ml-4">
          <Text className="text-lime-700 text-[6px] font-medium font-['General Sans Variable'] leading-3">online</Text>
          </View>
        </View>
        <View className='flex-row space-x-1 w-full'>
          <Text className="text-neutral-400 text-[12px] font-medium font-['GeneralSans-Regular'] leading-[12px]">@{cont1Name}</Text>
          <Text className="text-black text-[12px] font-medium font-['GeneralSans-Regular'] leading-[12px]">vs</Text>
          <Text className="text-neutral-400 text-[12px] font-medium font-['General Sans Variable'] leading-[12px] flex-1">{
          contestType == "private" ? "@" + opponentProfilePicAndSkillGapTagArray[0]?.userName : contestType == "public" ? "?" : "Group"
          
          }</Text>
        </View>
      </View>
      </View>
      <View className="space-y-[9px] items-end">
          {
            contestStatus == "pending" ?   <Text className="text-yellow-500 text-[10px] font-medium font-['General Sans Variable'] leading-[10px] italic" >Pending</Text> :  contestStatus === "ongoing" ? <Text className="text-lime-700 text-[10px] font-medium font-['General Sans Variable'] leading-[10px] italic">Ongoing</Text>  :  <Text className="text-red-700 text-[10px] font-medium font-['General Sans Variable'] leading-[10px] italic">Lost</Text> 
          }
          <Text  className="text-sky-500 text-[10px] font-medium font-['General Sans Variable'] leading-[10px]">${amount}</Text>
        </View>
    

    </TouchableOpacity>
  )
}

export default ContestantComp