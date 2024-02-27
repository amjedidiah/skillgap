import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthHeader from '@/myApp/components/AuthHeader'
import AppTextContent from '@/myApp/components/AppTextContent'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchemaWidthDarw, validationSchemaWidthDrawCrypto } from 'utils/YubValidation'
import { walletWidthDrawPropTypes } from '@/myApp/types'
import { Controller, useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { WalletPaymentBankComp, WalletPaymentCryptoComp } from '@/myApp/components/WalletComponents'





const WithdrawTypeList = [{
  type:"Bank",
  active: false,
  id: 1
},
{
  type:"Crypto",
  active: true,
  id: 2
}]

const WalletWithDrawScreen = () => {

  
const [widthDrawType, setWithDrawType] = useState(WithdrawTypeList)



const handleWithdrawTypeActiveState = (i:number) => {
  const filteredData = widthDrawType.filter(item => {
      if(item.id === i){
             item.active = true;
             return item
      } else{
        item.active = false;
        return item
      }
  })

  setWithDrawType(filteredData)
}



  return (
    <SafeAreaView className='flex-1'>
    <ScrollView className='px-[16px] py-[12px] flex-1 bg-neutral-100'>
  
      <AuthHeader  />
{/* amount section starts */}
      <View className='flex-row  mt-4 justify-between items-end'>
        <View className=' flex-1'>
          <AppTextContent text='Transfer Funds' classText='text-gray-950 text-base w-max' />
        </View>
        <View className='flex-1'>
          <Text className="text-neutral-400 text-sm font-medium font-['General Sans Variable'] leading-none text-right">Balance</Text>
        <View className=' mr-[17px]'>
        <Text className="text-gray-950 text-2xl font-medium font-['Space Grotesk'] leading-[26px] w-full  text-right">
          {"$30,000"}</Text>
          <Text className='absolute -right-[18px] bottom-[2px]'>.21</Text>
        </View>
        </View>
      </View>
{/* amount section ends */}

{/* swithch between Bank and cypto withdrawz start */}

<View className='flex-row items-center mt-[17px] mb-[24px] bg-neutral-200 rounded-[40px] justify-center p-1 space-x-[3px]'>
  {
    widthDrawType.map(item => <TouchableOpacity onPress={() => {
      handleWithdrawTypeActiveState(item.id)
    }} key={item.id} activeOpacity={0.8} className={`flex-1 items-center justify-center  ${item.active && "bg-white"} rounded-[30px]  `}>
      <Text className={`text-neutral-400 text-[14px] py-[7px] font-medium font-['GeneralSans-Regular'] leading-none`}>{item.type}</Text>
    </TouchableOpacity >)
  }
</View>

{/* swithch between Bank and cypto withdraw ends */}
{
  widthDrawType[0].active ?
 <WalletPaymentBankComp />  : <WalletPaymentCryptoComp/>
}

    </ScrollView>
    </SafeAreaView>
  )
}

export default WalletWithDrawScreen