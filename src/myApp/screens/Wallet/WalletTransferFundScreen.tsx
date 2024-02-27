import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthHeader from '@/myApp/components/AuthHeader'
import AppTextContent from '@/myApp/components/AppTextContent'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchemaTransfer } from 'utils/YubValidation'
import { walletTransaferPropTypes } from '@/myApp/types'
import { Controller, useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import AppButton from '@/myApp/components/AppButton'

const WalletTransferFundScreen = () => {

  const [form, setForm] = useState<walletTransaferPropTypes>({
    userTag: "",
    amount: ""
  });



  const formOptions = { resolver: yupResolver(validationSchemaTransfer) };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data: string) => {
    console.log(data)
  
  };



  const navigation = useNavigation();




  return (
    <SafeAreaView className='flex-1'>
    <View className='px-[16px] py-[12px] flex-1 bg-neutral-50'>
  
      <AuthHeader  />
{/* amount section starts */}
      <View className='flex-row  mt-4 justify-between items-end'>
        <View className=' flex-1'>
          <AppTextContent text='Transfer Funds' classText='text-gray-950 text-base w-max' />
        </View>
        <View className='flex-1'>
          <Text className="text-neutral-400 text-sm font-medium font-['General Sans Variable'] leading-none text-right">Balance</Text>
        <View className=' mr-4'>
        <Text className="text-gray-950 text-2xl font-medium font-['Space Grotesk'] leading-[26px] w-full  text-right">
          {"$30,000"}</Text>
          <Text className='absolute -right-[20px] bottom-[2px]'>.21</Text>
        </View>
        </View>
      </View>
{/* amount section ends */}

{/* form section starts */}
{/* usertag section starts */}
<View className="w-full mt-4">
              <View className="items-start space-y-[10px] w-full">
                <View className="items-start mb-2">
                  <Text className="text-black text-sm font-normal font-['Noto Sans']">
                    {"User Skill Gap Tag"}
                  </Text>
                </View>
  
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 ">
                      <TextInput
                        onChangeText={(data) => {
                          setForm({
                            ...form, userTag: data
                           })
                            onChange(data)
                        }
                         
                        }
                        value={value}
                        placeholder={"@qubigs"}
                        placeholderTextColor={"gray"}
                        cursorColor={"gray"}
                        className="flex-1 text-gary-900"
                        onBlur={onBlur}
                      />
                    </View>
                  )}
                  name={"userTag"}
                />
  
                <View className="w-[327px]">
                  {errors.userTag && (
                    <Text
                      className="text-red-500
                      font-bold "
                    >
                      {errors.userTag.message}
                    </Text>
                  )}
                </View>
              </View>
            </View>
{/* usertag section ends */}


{/* amount section starts */}
<View className="w-full mt-4">
              <View className="items-start space-y-[10px] w-full">
                <View className="items-start mb-2">
                  <Text className="text-black text-sm font-normal font-['Noto Sans']">
                    {"Amount"}
                  </Text>
                </View>
  
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 ">
                      <TextInput
                        onChangeText={(data) => {
                          setForm({
                            ...form, amount: data
                           })
                            onChange(data)
                        }
                         
                        }
                        value={value}
                        placeholder={"$500 USDT"}
                        placeholderTextColor={"gray"}
                        cursorColor={"gray"}
                        className="flex-1 text-gary-900"
                        onBlur={onBlur}
                        keyboardType='number-pad'
                      />
                    </View>
                  )}
                  name={"amount"}
                />
  
                <View className="w-[327px]">
                  {errors.amount && (
                    <Text
                      className="text-red-500
                      font-bold "
                    >
                      {errors.amount.message}
                    </Text>
                  )}
                </View>
              </View>
</View>
<View className='flex-row'>
  <Text className="text-lime-700 text-[10px] font-medium font-['General Sans Variable'] leading-none italic bg-green-200">Fee: </Text>
  <Text className="text-lime-800 text-[12px] font-medium font-['General Sans Variable'] leading-none">3%</Text>
</View>
{/* usertag section ends */}



<TouchableOpacity
            activeOpacity={0.5}
              onPress={handleSubmit(onSubmit)}
              className={`w-full px-2.5 py-4 bg-indigo-50 mt-[104px] rounded-[40px] justify-center items-center`}
            >
              <Text className="text-center text-sm font-medium font-['GeneralSans-Regular'] text-sky-500 leading-normal">
               Preview
              </Text>
            </TouchableOpacity>

            {/* form section ends */}
    </View>
    </SafeAreaView>
  )
}

export default WalletTransferFundScreen