import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthHeader from '@/myApp/components/AuthHeader'
import { DateFormatter } from "../../../../utils/dateFormater"
import AppButton from '@/myApp/components/AppButton'
import { ContestModalComp } from '@/myApp/components/ArenaComponents'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArenaContestantPropTypeScreen } from '@/myApp/types'
import { useSelector } from 'react-redux'

const ArenaContestScreen = ( ) => {

    // constestType, contestId, dateAndTime, description,hostImg, hostSkillGapTag = "sam2",opponentImg, stake
    const [showModal, setShowModal ] = useState(false)
    const navigation = useNavigation()
    const route = useRoute()

    const appUserStore = useSelector(data => data?.authReducer?.user)
console.log("this is the route",route)
     const {data: {allItem}} = route.params
    console.log("this is all the item", allItem)

    const {category, contestStatus, id, isOnline, opponentSkillGapTag,stake,userSkillGapTag, opponentProfilePic,opponentProfilePicAndSkillGapTagArray, termsAndDescription, createdAt, contestType, subCategory} = allItem
const userState = useSelector(state => state?.authReducer?.user)
const userName = userState?.userName || ""
const formatedDate = DateFormatter(createdAt)

    const deviceWidth = Dimensions.get("window").width - 32
 

    
  return (
    <SafeAreaView className='flex-1 w-full py-[12px] bg-white' >
        {
            showModal && <ContestModalComp
            showModal={showModal}
            setShowModal={setShowModal}
            />
        }
        <ScrollView>
       <View className='px-[16px] mb-4'>
       <AuthHeader  />
       </View>
         <View className='w-full'>
            <Image
            source={require("../../../../assets/images/arenaContest.png")}
            className='w-full h-[211.88px]'
            resizeMode='stretch'
            />
         </View>
          {/* card section start */}

        
      <View style={{
        width:deviceWidth,
        marginLeft:16
      }} className={`rounded-t-[20px]    relative -top-[40px] z-10  mx-auto p-6 bg-neutral-50`}>

        <View className='flex-row justify-between items-center bg-neutral-50'>
        <Text className="text-lime-700 text-[10px] font-medium font-['General Sans Variable'] leading-[12px]">Online</Text>
        <Text className="text-sky-500 text-base font-semibold font-['General Sans Variable']">{category}</Text>
        <Text className="text-yellow-300 text-[10px] font-medium font-['General Sans Variable'] leading-[12px]">Pending</Text>
        </View>
        {/* constestaant1 Vs ? starts */}
        <View className=" justify-center items-center gap-4 flex-row mt-4">
    <View className="rounded flex-col justify-center items-center  w-28 h-[122px] bg-neutral-50 pt-[6.93px] pb-[6.07px]">
     
       <Image
       className="w-16 h-16 relative rounded-[500px] border-2 border-white"
       source={ appUserStore?.profilePic ? {
        uri: appUserStore?.profilePic
      } : require("../../../../assets/images/userProfile.png")}
       />
        <View className="flex-col justify-start items-center gap-1.5">
            <Text className="text-sky-500 text-xs font-medium font-['General Sans Variable'] leading-none">@{userSkillGapTag} {" "}</Text>
            <View className="w-[58px] p-2 bg-indigo-50 rounded justify-center items-center  inline-flex">
                <Text className="text-sky-500 text-xs font-medium font-['General Sans Variable'] leading-[16px]">₦{stake}</Text>
            </View>
        </View>
    </View>
    <Text className="text-neutral-400 text-xs font-medium font-['general Sans variable'] leading-normal">VS</Text>
    <View className="w-28 h-[122px] bg-neutral-50 rounded flex-col justify-center items-center inline-flex">
        {
          contestType === "public" ? <View className="w-16 h-16 pt-[6.93px] pb-[6.07px] bg-indigo-50 rounded-[500px] border-2 border-white justify-center items-center inline-flex">
          <Text className="w-[83.57px] text-center text-slate-600 text-[33.43px] font-normal font-['GeneralSans-Regular'] leading-[50.14px]">?</Text>
      </View> : contestType == "private" ?  <Image
       className="w-16 h-16 relative rounded-[500px] border-2 border-white"
       source={  {
        uri: opponentProfilePicAndSkillGapTagArray[0].profilePic
      }}
       /> : <Image
       className="w-16 h-16 relative rounded-[500px] border-2 border-white"
       source={  {
        uri: opponentProfilePicAndSkillGapTagArray[0].profilePic
      }}
       />
        }
       
       
        <View className="flex-col justify-start items-center gap-1.5 flex">
            <Text className="text-sky-500 text-xs font-medium font-['GeneralSans-Regular'] leading-none">{
                contestType === "public" ? "?" : contestType === "private" ? "@" + opponentSkillGapTag : "Group"
            }</Text>
            <View className="w-[58px] p-2 bg-indigo-50 rounded justify-center items-center inline-flex">
                <Text className="text-sky-500 text-xs font-medium font-['General Sans Variable'] leading-[16px]">₦{stake}</Text>
            </View>
        </View>
    </View>
      </View>
         {/* constestaant1 Vs ? starts */}



      </View>
{/* card section ends */}
{/* description page starts */}
<View style={{
    minHeight:108
}} className="w-[343px] mx-auto relative bg-white rounded-lg border border-indigo-50">
    <Text className="left-[16px] top-[16px] absolute text-gray-950 text-sm font-medium font-['General Sans Variable'] leading-[14px]">Description {""}</Text>
    <Text className="w-[307px] left-[16px] top-[38px] absolute text-neutral-400 text-[11px] font-normal font-['General Sans Variable'] leading-none">{termsAndDescription} </Text>
    <View className="w-[311px] h-[0px] left-[16px] top-[108px] absolute border border-zinc-100"></View>
</View>
{/* description page ends */}





{/* contestant details starts */}
    {/* created at start */}
    <View className='w-full px-[16px] mt-8'>
    <Text className="text-gray-950 text-sm font-medium font-['General Sans Variable'] leading-[14px]">Contest Details</Text>
    <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
                Created by:
                </Text>

                <Text className="text-sky-400  text-[14px] font-medium font-['GeneralSans-Regular']  leading-[15px] text-left">
                @{userSkillGapTag}
                </Text>
              </View>
      {/* created at ends */}

      {/* date&time starts */}
      <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
                Date & Time:
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
                {/* 13 Nov, 2023 | 12:42am */}
            {formatedDate}
                </Text>
      </View>
      {/* date&time ends */}

      {/* contact id starts */}
      <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
                Contest ID:
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
                {id}
                </Text>
      </View>
      {/* contact id ends */}
      
    {/* skillgap start */}
        <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
              SkillGap Fee:
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
                3.0%
                </Text>
                </View>

    {/* skillgap ends */}
    </View>
{/* contestant details ends */}


<View className="h-[38px] mx-[16px] mt-6 flex-1 border-l-[6px] border-rose-600 pl-1 pr-1 pt-1 rounded-l-md flex-row bg-rose-100 "><Text className="text-red-500 text-[10px] font-normal font-['general sans variable'] leading-[15px]">We advice you keep all records and evidence during this the contest for dispute resolution 
<Text className="text-red-500 text-[10px] font-bold font-['GeneralSans-Regular'] underline leading-[15px]"> Learn More</Text>
</Text>
</View>


{
   userSkillGapTag !== userName ?
    <View className='flex-row mt-8 px-[16px] justify-between items-center '>
   <AppButton

   handleOnpress={() => {
       
       navigation.navigate("arenaChatScreen", {
        params: "jogn"
       })
   }} ButtonTextStyle="text-sky-500" text='Comment' ButtonViewStyle={`border-sky-500 rounded-[32px] border border-sky-500 justify-center items-center bg-white   w-[182px]`} />

  <AppButton
    
  ButtonTextStyle="" text='Join' ButtonViewStyle={`rounded-[32px] justify-center items-center bg-sky-500   w-[182px]`} handleOnpress={() => {
       setShowModal(true)
     }} />
 
</View> : 
<View className='flex-row mt-8 px-[16px] justify-between items-center'>
<AppButton 
  
handleOnpress={() => {
    console.log("comment clicked")
    navigation.navigate("arenaChatScreen")
}} ButtonTextStyle="text-white" text='Comment' ButtonViewStyle='rounded-[32px] justify-center items-center bg-sky-500 ' />

</View>
}

</ScrollView>
    </SafeAreaView>
  )
}

export default ArenaContestScreen