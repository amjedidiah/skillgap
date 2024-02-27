import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthHeader from '@/myApp/components/AuthHeader'
import AppTextContent from '@/myApp/components/AppTextContent'
import AppButton from '@/myApp/components/AppButton'
import { ContestModalComp } from '@/myApp/components/ArenaComponents'

const ArenaContestScreen = () => {
    const [showModal, setShowModal ] = useState(true)

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
        <Text className="text-sky-500 text-base font-semibold font-['General Sans Variable']">Table tennis</Text>
        <Text className="text-yellow-300 text-[10px] font-medium font-['General Sans Variable'] leading-[12px]">Pending</Text>
        </View>
        {/* constestaant1 Vs ? starts */}
        <View className=" justify-center items-center gap-4 flex-row mt-4">
    <View className="rounded flex-col justify-center items-center  w-28 h-[122px] bg-neutral-50 pt-[6.93px] pb-[6.07px]">
     
       <Image
       className="w-16 h-16 relative rounded-[500px] border-2 border-white"
       source={require("../../../../assets/images/contest1.png")}
       />
        <View className="flex-col justify-start items-center gap-1.5">
            <Text className="text-sky-500 text-xs font-medium font-['General Sans Variable'] leading-none">@qubigs</Text>
            <View className="w-[58px] p-2 bg-indigo-50 rounded justify-center items-center  inline-flex">
                <Text className="text-sky-500 text-xs font-medium font-['General Sans Variable'] leading-[16px]">$500</Text>
            </View>
        </View>
    </View>
    <Text className="text-neutral-400 text-xs font-medium font-['Sportypo'] leading-normal">VS</Text>
    <View className="w-28 h-[122px] bg-neutral-50 rounded flex-col justify-center items-center inline-flex">
        <View className="w-16 h-16 pt-[6.93px] pb-[6.07px] bg-indigo-50 rounded-[500px] border-2 border-white justify-center items-center inline-flex">
            <Text className="w-[83.57px] text-center text-slate-600 text-[33.43px] font-normal font-['GeneralSans-Regular'] leading-[50.14px]">?</Text>
        </View>
        <View className="flex-col justify-start items-center gap-1.5 flex">
            <Text className="text-sky-500 text-xs font-medium font-['GeneralSans-Regular'] leading-none">?</Text>
            <View className="w-[58px] p-2 bg-indigo-50 rounded justify-center items-center inline-flex">
                <Text className="text-sky-500 text-xs font-medium font-['General Sans Variable'] leading-[16px]">$500</Text>
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
    <Text className="left-[16px] top-[16px] absolute text-gray-950 text-sm font-medium font-['General Sans Variable'] leading-[14px]">Description</Text>
    <Text className="w-[307px] left-[16px] top-[38px] absolute text-neutral-400 text-[11px] font-normal font-['General Sans Variable'] leading-none">Bank (Amount, bank, account no) crypto (Network, address, scan QR code, amount, available balance, fee per $ ) Preview </Text>
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

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular']  leading-[15px] text-left capitalize">
                @qubigs
                </Text>
              </View>
      {/* created at ends */}

      {/* date&time starts */}
      <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
                Date & Time:
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
                13 Nov, 2023 | 12:42am
                </Text>
      </View>
      {/* date&time ends */}

      {/* contact id starts */}
      <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
                Contest ID:
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
                sdsd-dfbkq-bjhede-jjahc-hdj
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


<View className="h-[38px] mx-[16px] mt-6 flex-1 border-l-[6px] border-rose-600 pl-1 pr-1 rounded-l-md flex-row bg-rose-100 "><Text className="text-red-500 text-[10px] font-normal font-['Inter'] leading-[15px]">We advice you keep all records and evidence during this the contest for dispute resolution 
<Text className="text-red-500 text-[10px] font-bold font-['Inter'] underline leading-[15px]"> Learn More</Text>
</Text>
</View>

<View className='flex-row mt-8 px-[16px] justify-between items-center'>
    <AppButton handleOnpress={() => {
        console.log("comment clicked")
    }} ButtonTextStyle="text-sky-500" text='Comment' ButtonViewStyle='border-sky-500 rounded-[32px] w-2/5 border border-sky-500 justify-center items-center bg-white ' />

    <AppButton ButtonTextStyle="" text='Join' ButtonViewStyle='border-sky-500 rounded-[32px] border border-sky-500 justify-center items-center bg-sky-500 w-2/5' handleOnpress={() => {
      setShowModal(true)
    }} />
</View>

</ScrollView>
    </SafeAreaView>
  )
}

export default ArenaContestScreen