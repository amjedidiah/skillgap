import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'



import { transactionHomeData, transactionTypeListData } from 'utils/data'
import { WalletTransactionComponent } from '@/myApp/components/WalletComponents'
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppTextContent from '@/myApp/components/AppTextContent'
import AppTextHeading from '@/myApp/components/AppTextHeading'
import { useNavigation } from '@react-navigation/native'







const WalletHomeScreen = () => {
  const naviagtion = useNavigation()
  return (
   <SafeAreaView className='flex-1 bg-gray-100'>

<View className="px-[20px] flex-1 py-4">
  <TouchableOpacity onPress={() => naviagtion.goBack()}>
  <MaterialIcons name="arrow-back-ios" size={24} color="black" />
  </TouchableOpacity>
  {/* wallet balance start */}
  <View className="flex-row items-start justify-between w-full mt-4">
<View>
<AppTextContent text="Wallet Balance" classText='text-gray-950 text-[12px]' />
<View  style={{
   alignSelf: 'flex-start'
}} className=' h-[32px]  flex-row mt-2'  >
<Text className="text-gray-950  text-[32px] font-bold font-['Space Grotesk'] leading-[32px]">$600</Text>
<Text className="text-gray-950  text-[16px] font-bold font-['Space Grotesk'] leading-loose  absolute  -right-[23px] top-[5px]">.24</Text>
</View>


</View>
<View>
<View   className="w-4 h-4 rounded-md">
  <Image
  source={require("../../../../assets/images/flag.png")}
  className="w-6 h-6"
  
  />
</View>
</View>



  </View>

  {/* wallet balace ends */}
  {/* transaction type starts */}
  <View className='w-full flex-row justify-between  mt-4'>
{
  transactionTypeListData.map(item => <TouchableOpacity
  activeOpacity={0.8}
  onPress={() => {
    naviagtion.navigate("walletTransactionScreen")
  }}
     key={item.id}
    className="w-[100px] flex-row space-x-1 h-[34px] pl-3 pr-[11px] py-[5px] bg-indigo-100 rounded-[40px] justify-center items-center inline-flex">
      <Image
      source={item.img}
      className='w-[15px] h-[15px]'
      />
  <Text className="text-sky-500 text-[10px] font-medium font-['Generalans-Regular'] leading-none">{item.text}</Text>
  </TouchableOpacity>)
}
  
</View>

  {/* transaction type ends */}




{/* transaction section starts */}

<View className='w-full flex-row justify-between items-center mt-12 '>
  <View>
  <AppTextHeading text="Transactions" classText='text-[16px]' />
   <View className="flex-row items-center">
   <Text className="text-neutral-400 text-sm font-medium font-['GeneralSans-Regular'] leading-none">In: </Text>
    <Text className="text-gray-950 text-sm font-medium font-['General Sans Variable'] leading-none">$800</Text>
   </View>
  </View>
  <View>
  <AppTextHeading text="See all"  classText="text-sky-500 text-[16px]" />
   <View className="flex-row items-center">
   <Text className="text-neutral-400 text-sm font-medium font-['GeneralSans-Regular'] leading-none">Out: </Text>
    <Text className="text-gray-950 text-sm font-medium font-['General Sans Variable'] leading-none">$800</Text>
   </View>
  </View>


</View>
<ScrollView className=' flex-1 mt-4 w-full '>
      {
        transactionHomeData.map(item => <View key={item.id}>
          <WalletTransactionComponent
        amount={item.amount}
        sendeOrReceiver={item.sendeOReceiver}
        img={item.img}
        time={item.time}
        transactionStatus={item.transactionStatus}
        transactionType={item.transactionType}
        imageDivBgColor={item.imageDivBgColor}
            />
        </View>)
      }
    </ScrollView>

{/* transaction section ends */}



</View>


   
   </SafeAreaView>
  )
}

export default WalletHomeScreen