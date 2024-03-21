import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthHeader from '@/myApp/components/AuthHeader'
import { AntDesign } from '@expo/vector-icons'
import { ArenaMessageComp } from '@/myApp/components/ArenaComponents'
import { ArenaChatMessageList } from 'utils/data'
import { useNavigation } from '@react-navigation/native'


const ArenaChatScreen = () => {


const messageData = {
    time:"12th Oct, 2023 | 8:04pm",
    content:"Contest was created by @qubigs On 22nd Nov, 2023 | 12:24pm 32 Views 12th Oct, 2023 | 8:04pm Bank (Amount, bank, account no) crypto (Network, address, scan QR code, amount, available balance, fee per $ ) Preview  Yesterday | 10:42am Bank (Amount, bank, account no) crypto (Network, Today | 1:37pm Bank (Amount, bank, account no) crypto (Network, address, scan QR code, amount, available balance, fee per $ ) Preview Type your thoughts about this contest here",
    img:require("../../../../assets/images/userProfile.png")
}


    const deviceWidth = Dimensions.get("window").width - 32
const navigation = useNavigation()

  return (
    <SafeAreaView className='flex-1 w-full py-[12px] bg-white' >
      
      <TouchableOpacity
      activeOpacity={0.4}
      onPress={() =>{

        navigation.navigate("Arena",
        {
          screen: "arenaCreateContestScreen"
         }
        )
        }} className="w-12 h-12 px-2.5 py-2 bg-sky-500 rounded-[40px] shadow justify-center items-center absolute bottom-[50px] right-[20px] z-10 ">
        <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
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
      }} className={`rounded-t-[20px]    absolute top-[180px] z-10  mx-auto p-6 bg-neutral-50 left-[16px] `}>

        <View className='flex-row justify-between items-center bg-neutral-50'>
        <Text className="text-lime-700 text-[10px] font-medium font-['General Sans Variable'] leading-[12px]">Online</Text>
        <Text className="text-sky-500 text-base font-semibold font-['General Sans Variable']">Table tennis</Text>
        <Text className="text-yellow-300 text-[10px] font-medium font-['General Sans Variable'] leading-[12px]">Pending</Text>
        </View>

       




      </View>
 {/* createdBy and Number of views section starts */}
 <View className=' flex-row px-[16px] mt-4 mb-4  justify-between'>

<View className='flex-row items-center'>
  <Text className="text-neutral-400 text-[10px] font-normal font-['General Sans Variable'] leading-3">Contest was created by <Text className="text-sky-500 text-[10px] font-normal font-['GeneralSans-Regular'] leading-3">@qubigs <Text className="text-neutral-400 text-[8px] font-normal font-['General Sans Variable'] leading-3"> On 22nd Nov, 2023 | 12:24pm</Text></Text> </Text>
</View>
<View className='flex-row items-center space-x-1'>
<AntDesign name="eyeo" size={18} color="#1D9BF0" />
<Text className="text-neutral-400 text-[8px] font-normal font-['General Sans Variable'] leading-3">32 Views</Text>
</View>
</View>
{/* createdBy and Number of views section ends */}
      {/* messageing section start */}
      <View className='px-[16px]'>
        {
            ArenaChatMessageList.map((item) => <ArenaMessageComp key={item.key}  content={item.content} img={item.img} time={item.time} />)
        }

{/* messageing section ends */}
</View>







</ScrollView>
    </SafeAreaView>
  )
}

export default ArenaChatScreen