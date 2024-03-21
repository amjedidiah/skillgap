import { View, Text, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthHeader from '@/myApp/components/AuthHeader'
import AppTextHeading from '@/myApp/components/AppTextHeading'
import AppTextContent from '@/myApp/components/AppTextContent'
import AppButton from '@/myApp/components/AppButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { WalletTransferSuccessModalComp } from '@/myApp/components/WalletComponents'
import { WalletTransferPreviewTransactionProptypes } from '@/myApp/types'

const WalletTransferPreviewTransactionScreen = () => {
const [showPaymentSuccesModal, setShowPaymentSuccesModal] = useState<boolean>(false)


const [paymentDetails, setPaymentDetails] = useState<WalletTransferPreviewTransactionProptypes>({amount:"3000", transactionType:"transfer", receiverName:"Agness Winifred Benson",receiverTag:"qubigs"})


const {amount,transactionType,receiverName,receiverTag} = paymentDetails
const route = useRoute()
console.log("this is the route", route)
// Alert.alert(route.params)

useEffect(() => {
  const {data} = route.params
setPaymentDetails({...paymentDetails, ...data})
},[])
  return (
    <SafeAreaView className='flex-1 '>
      
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
      {
        showPaymentSuccesModal && <WalletTransferSuccessModalComp setShowPaymentSuccesModal={setShowPaymentSuccesModal} showPaymentSuccesModal={showPaymentSuccesModal} 
        transactionStatus='success'
        />
      }
    <View className='flex-1 px-[16px] py-[12px] bg-neutral-100'>
    <AuthHeader  />
<View className='w-full flex-row items-center justify-center mt-[35.63px]'>
  
    <View className='w-[68.45px] h-[80.67px]  bg-sky-600 rounded-[4.89px]'>
     <View className='w-[68px] h-[80px] absolute top-1 left-1 justify-center items-center'>
      <Image
      source={require("../../../../assets/images/previewFrame.png")}
      className='w-[68px] h-[80px]'
      />
      <View className='absolute top-[14px] left-[8px]'>
      <Image
      source={require("../../../../assets/images/scan.png")}
      className='w-[75px] h-[77px]'
      />
      </View>

     </View>
    </View>  
   
</View>

<View className='mt-2'>
      <AppTextHeading text='Preview Transaction' classText='text-center text-[16px]' />
      <AppTextContent text={`${transactionType === 'withdraw' ? `You want to transfer $${amount} to @${receiverTag}`:`You want to withdraw $${amount} from your account`}`}  classText='text-center w-8/10' />
       {/* design section starts */}
    <View
    className='w-full absolute -top-[40px] -z-20 h-[150px] bg-white rounded-t-[40px] justify-end'>
      <View style={{
       borderStyle:"dashed",
       borderWidth: 1,
      borderColor:"gray",

    }} className='w-full'/>
    </View>
    {/* design section ends */}

    </View>
   
    <View className='w-full bg-white mt-[104px] py-[27px] px-[16px] rounded-b-[40px]'>
      <AppTextHeading text='Transaction Details' classText='text-[16px] ' />

    {/* recipant name start */}
    <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
                Recipant Name
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
               {receiverName}
                </Text>
              </View>
     
      {/* recipant name ends */}

      {/* recipant tag starts */}
      <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
                Recipant Tag
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
                @{receiverTag}
                </Text>
      </View>
      {/* recipant tag ends */}
      {/* transaction type starts */}
      <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
                Transaction Type
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
                {transactionType}
                </Text>
      </View>
      {/* transaction type ends */}
      
{/* amunt start */}


<View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
              Amount
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
                -${amount}
                </Text>
      </View>

{/* amount ends */}

    </View>
    <AppButton text='Confirm Payment' ButtonViewStyle='mt-[64px] bg-sky-500' handleOnpress={() => {
     setShowPaymentSuccesModal(true)
    }} />
    </View>
    </SafeAreaView>
  )
}

export default WalletTransferPreviewTransactionScreen