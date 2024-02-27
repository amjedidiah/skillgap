import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppTextHeading from '@/myApp/components/AppTextHeading'
import { personalSettingHeadingData } from 'utils/data'
import { Controller, useForm } from 'react-hook-form'
import { validationSchemaBlockUser } from 'utils/YubValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { BlockUserModalComp, PersonalSettingBlockUserListComp } from '@/myApp/components/UserProfileComp'
import { BlockUserModalCompPropTypes } from '@/myApp/types'
import { useNavigation } from '@react-navigation/native'

const PersonalisedSettingScreen = () => {

    const [blockUser, setBlockUser] = useState<{
        id: number,
        text:string,
        active:boolean
    }[]>(personalSettingHeadingData)

    const [showBlockedUsers, setShowBlockedUsers] = useState<boolean>(false)
    


    const handleTransactionListUpdate = (i:number) => {
        const filterData = blockUser.filter(item => {
        if(item.id ===  i){
            item.active = true
            if(item.text === "View Block List"){
                  setShowBlockedUsers(true)
            }else{
                setShowBlockedUsers(false)
            }
          
            return item
        }else{
            item.active = false
            return item
        }
        })
    
        setBlockUser(filterData)
    
    }
    


    const [form, setForm] = useState<{blockUser:string}>({
        blockUser: "",
      });
  
    
    
    const [showBlockUserModal, setShowBlockUserModal] = useState<boolean>(false);
  
    
    
const formOptions = { resolver: yupResolver( validationSchemaBlockUser) };
     const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm(formOptions);
    
      const onSubmit = (data: string) => {
        console.log(data)
        setShowBlockUserModal(true)
      
      };
    

const navigation = useNavigation()

  return (
   <SafeAreaView className='px-[16px] py-[12px]'>
   <BlockUserModalComp showBlockUserModal={showBlockUserModal} setShowBlockUserModal={setShowBlockUserModal}   />
    {/* header section starts */}
    <View className='w-full flex-row items-center justify-center'>
        <TouchableOpacity
        onPress={() => {
         navigation.goBack()
        }}
        className='absolute left-0'>
        <Image 
      source={require("../../../../assets/images/arrow-left.png")}
      className='w-[24px] h-[24px]'
      />
        </TouchableOpacity>
        <AppTextHeading
        text='Personalised Settings'
        classText='text-center text-[18px] text-bold'
        />
    </View>
    {/* header section ends */}
    {/*block and view block users starts*/}
   <View className='mt-4  h-10 bg-gray-200 justify-center flex-row items-center rounded-[40px] px-2 '>
   {
  blockUser.map(item => <TouchableOpacity
  activeOpacity={0.8}
  onPress={() => {
    handleTransactionListUpdate(item.id)
  }}
     key={item.id}
    className={`flex-1 flex-row space-x-1 h-[34px]   justify-center items-center   rounded-[40px] ${item.active && "bg-white"}`}>
  <Text className="text-[12px] font-medium font-['Generalans-Regular'] leading-none text-neutral-400 capitalize">{item.text}</Text>
  </TouchableOpacity>)
}


   </View>
    {/*block and view block users ends*/}
    
   {
    !showBlockedUsers ? 
    <View>
         {/* form filed starts */}
    <View className="w-full mt-4">
              <View className="items-start space-y-[10px] w-full">
                <View className="items-start mb-2 w-full">
                  <Text className="text-black text-sm mb-1 font-normal font-['Noto Sans']   w-full">
                    {"Block a user"}
                  </Text>
                  <Text className="text-neutral-400 text-sm font-normal font-['Noto Sans'] text-[11px] leading-[16px] w-full">
                  If you block this user you wont be able to see and partake in any contest hosted by them.
                  </Text>
                </View>
  
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View className={`w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 ${errors.blockUser && "border-red-500" }`}>
                      <TextInput
                        onChangeText={(data) => {
                          setForm({
                            ...form, blockUser: data
                           })
                            onChange(data)
                        }
                         
                        }
                        value={value}
                        placeholder={"Types skill gap tag here"}
                        placeholderTextColor={"gray"}
                        cursorColor={"gray"}
                        className="flex-1 text-gary-900"
                        onBlur={onBlur}
                        keyboardType={"email-address"}
                      />
                     {
                        errors.blockUser &&  <Image
                        className='w-4 h-4'
                        source={require("../../../../assets/images/exclamation2.png")}
                        />
                     }
                    </View>
                  )}
                  name={"blockUser"}
                />
  
                <View className="w-full ">
                  {errors.blockUser && (
                    <Text
                      className="text-red-500
                      font-bold text-[10px]"
                    >
                      {errors.blockUser.message}
                    </Text>
                  )}
                </View>
              </View>
            </View>
  {/* for field ends */}
            {/* confirm starts */}
            <TouchableOpacity
            activeOpacity={0.5}
              onPress={handleSubmit(onSubmit)}
              className={`w-full px-2.5 py-4 bg-sky-500 rounded-[40px] justify-center items-center mt-4`}
            >
              <Text className="text-center text-white text-sm font-medium font-['GeneralSans-Regular'] leading-normal">
               Confirm
              </Text>
            </TouchableOpacity>

            {/* confirm ends */}
    </View> : <PersonalSettingBlockUserListComp />
   }
  
   </SafeAreaView>
  )
}

export default PersonalisedSettingScreen