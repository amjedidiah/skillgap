import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, Switch, TextInput, Alert, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchemaUserProfile } from 'utils/YubValidation'
import { Controller, useForm } from 'react-hook-form'
import * as ImagePicker from "expo-image-picker"


import { UserProfileFormPropTypes } from '@/myApp/types'
import AppTextContent from '@/myApp/components/AppTextContent'
import { useNavigation } from '@react-navigation/native'
import { updateUserProfileApi } from '@/api/userApi'
import { useMutation } from '@tanstack/react-query'
import AlertMessage from '@/myApp/components/AlertMessage'
import { useSelector } from 'react-redux'







const ProfileSettingScreen = () => {

// state to control error display
const appData = useSelector(data => data?.authReducer?.user)


const [userProfileState, setUserProfileState] = useState(null)

useEffect(() => {
  setUserProfileState(appData)
},[])


const [showModal, setShowModal] = useState(false);
const [errorType, setErrorType] = useState(null);
const [errorMessage, setErrorMessage] = useState("");




  const userProfileUpdateMutation = useMutation({
    mutationKey:["user-profileUpdate"],
    mutationFn:updateUserProfileApi
    })


    const { data, isPending, isError, isSuccess} = userProfileUpdateMutation
 



// upload image from gallary starts here
const [profilePic, setProfilePic] = useState<string | null>(null);

// upload coverImage from gallary starts here
const [coverImage, setCoverImage] = useState<string | null>(null);



const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });



  if (!result.canceled) {

    const imageStringLenght = result.assets[0].uri.length 
  const lastThreeDigit =  result.assets[0].uri.slice(  imageStringLenght - 3,  imageStringLenght) 
  const lastFourDigit =   result.assets[0].uri.slice(  imageStringLenght - 4,  imageStringLenght)
 
  if(lastFourDigit !== "jpeg" && lastThreeDigit !== "png"){
    Alert.alert("Error", "Uploaded image can only be jpeg or png format.")
  }
    setProfilePic(result.assets[0].uri);
  } else{
    Alert.alert("Error", "Failed to load profile picture please tr again")
  }
};



const pickCoverImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });



  if (!result.canceled) {

    const imageStringLenght = result.assets[0].uri.length 
  const lastThreeDigit =  result.assets[0].uri.slice(  imageStringLenght - 3,  imageStringLenght) 
  const lastFourDigit =   result.assets[0].uri.slice(  imageStringLenght - 4,  imageStringLenght)
 
  if(lastFourDigit !== "jpeg" && lastThreeDigit !== "png"){
    Alert.alert("Error", "Cover image can only be jpeg or png format.")
  }
  setCoverImage(result.assets[0].uri);
  } else{
    Alert.alert("Error", "Failed to load profile picture please tr again")
  }
};



    const deviceWidth = (Dimensions.get("window").width)/2 - 50


    const [form, setForm] = useState<UserProfileFormPropTypes>({
      firstName: userProfileState?.firstName || "",
      lastName: userProfileState?.lastName || "",
      skillGap: userProfileState?.skillGap ||"",
      twitter: userProfileState?.twitter || "",
      tikTok: userProfileState?.tikTok || "",
      facebook: userProfileState?.facebook ||"",
     youtube: userProfileState?.youtube || ""
    });
  
  
  
    const formOptions = { resolver: yupResolver(validationSchemaUserProfile) };
  
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm(formOptions);
  
    const navigation = useNavigation()
    const onSubmit = (data: string) => {
      console.log(data)
      // navigation.navigate("profileHomeScreen")

    };
  
  
  
   

  return (
    <View className='flex-1 bg-neutral-100'>
       <Modal visible={showModal} transparent={true} animationType="fade">   
               <AlertMessage message={errorMessage} type={errorType} setShowModal = {setShowModal} />
         </Modal>
     
      <ScrollView
      >
        <View className='w-full h-[120px]'>
        <Image
      source={coverImage ? {uri:coverImage} : require("../../../../assets/images/arenaContest.png")}
      className='w-full h-full'
      />
         <TouchableOpacity
      onPress={() => {
        pickCoverImage();
      }}
      className='flex-row   bg-white rounded-md absolute bottom-2  right-2 items-center justify-center  w-[110px] space-x-1 '>
      <Image 
      source={require("../../../../assets/images/edit.png")}
      className='w-4 h-4'
      />
        <AppTextContent text='Change cover' classText='text-[12px] text-left w-[80px]' />
      </TouchableOpacity>
        </View>


    <View style={{
        left: deviceWidth,
        top: 80
    }} className='w-[100px] h-[100px]    mx-auto absolute top-[100px] z-30  justify-center items-center '>
         <View className='w-[100px] h-[100px] rounded-full border-2 border-white overflow-hidden justify-center items-center '>
         <Image
      source={profilePic ? {uri:profilePic} : require("../../../../assets/images/contest1.png")}
      className='w-[100px] h-[100px]'
      />
   
         </View>
    <TouchableOpacity onPress={() => {
      pickImage()
    }} className='w-5 h-5 rounded-full absolute right-2 bottom-3' >
      <Image 
      source={require("../../../../assets/images/edit.png")}
      className='w-full h-full'
      />
    </TouchableOpacity>
    </View>
    <View className='px-[16px] mt-16'>
 
    {/* first name start */}
    <View className="w-full mt-4">
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans']">
                  {"First Name"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, firstName: data
                       })
                        onChange(data)
          
                      }}

                      value={value}
                      placeholder={"Wisdome"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900"
                      onBlur={onBlur}
                      keyboardType={"default"}
                    
                    />
                  </View>
                )}
                name={"firstName"}
              />

              <View className="w-[327px]">
                {errors.firstName && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.firstName.message}
                  </Text>
                )}
              </View>
            </View>
          </View>
     {/* first name end */}

      {/* last name start */}
    <View className="w-full mt-2">
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans']">
                  {"Last Name"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, lastName: data
                       })
                        onChange(data)
          
                      }}

                      value={value}
                      placeholder={"Wisdome"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900"
                      onBlur={onBlur}
                      keyboardType={"default"}
                    
                    />
                  </View>
                )}
                name={"lastName"}
              />

              <View className="w-[327px]">
                {errors.lastName && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.lastName.message}
                  </Text>
                )}
              </View>
            </View>
          </View>
     {/* last name end */}

      {/* skillgap  start */}
    <View className="w-full mt-2">
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans']">
                  {"Skill Gap Tag"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, skillGap: data
                       })
                        onChange(data)
          
                      }}

                      value={value}
                      placeholder={"Wisdome"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900"
                      onBlur={onBlur}
                      keyboardType={"default"}
                    
                    />
                  </View>
                )}
                name={"skillGap"}
              />

              <View className="w-[327px]">
                {errors.skillGap && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.skillGap.message}
                  </Text>
                )}
              </View>
            </View>
            <View className='flex-row items-center'>
              <Image
              source={require("../../../../assets/images/exclamation.png")}
              className='w-6 h-6'
              
              />
              <AppTextContent text=" Your skill gap tag can only be changed twice in 12 months (a year)" classText='text-[10px] text-red-500' />
             
            
            </View>
          </View>
     {/* skillgap end */}
 {/* twitter start */}
 <View className="w-full mt-2">
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2 w-full">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans'] w-full">
                  {"Twitter(X)"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, twitter: data
                       })
                        onChange(data)
          
                      }}

                      value={value}
                      placeholder={"Paste link here"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900"
                      onBlur={onBlur}
                      keyboardType={"default"}
                    
                    />
                  </View>
                )}
                name={"twitter"}
              />

              <View className="w-[327px]">
                {errors.twitter && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.twitter.message}
                  </Text>
                )}
              </View>
            </View>
          </View>
     {/* twitter end */}

 {/* tiktok start */}
 <View className="w-full mt-2">
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2 w-full">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans'] w-full">
                  {"Tiktok"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, tikTok: data
                       })
                        onChange(data)
          
                      }}

                      value={value}
                      placeholder={"Paste link here"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900"
                      onBlur={onBlur}
                      keyboardType={"default"}
                    
                    />
                  </View>
                )}
                name={"tikTok"}
              />

              <View className="w-[327px]">
                {errors.tikTok && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.tikTok.message}
                  </Text>
                )}
              </View>
            </View>
          </View>
     {/* tiktok end */}

    {/* facebook start */}
 <View className="w-full mt-2">
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans']">
                  {"Facebook"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, facebook: data
                       })
                        onChange(data)
          
                      }}

                      value={value}
                      placeholder={"Paste link here"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900"
                      onBlur={onBlur}
                      keyboardType={"default"}
                    
                    />
                  </View>
                )}
                name={"facebook"}
              />

              <View className="w-[327px]">
                {errors.facebook && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.facebook.message}
                  </Text>
                )}
              </View>
            </View>
          </View>
     {/* facebook end */}  

       {/* facebook start */}
 <View className="w-full mt-2">
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans']">
                  {"Youtube"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, facebook: data
                       })
                        onChange(data)
          
                      }}

                      value={value}
                      placeholder={"Paste link here"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900"
                      onBlur={onBlur}
                      keyboardType={"default"}
                    
                    />
                  </View>
                )}
                name={"youtube"}
              />

              <View className="w-[327px]">
                {errors.youtube && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.youtube.message}
                  </Text>
                )}
              </View>
            </View>
          </View>
     {/* facebook end */} 
   
 {/* submit button starts */}

 <TouchableOpacity
          activeOpacity={0.5}
            onPress={handleSubmit(onSubmit)}
            className={`w-full px-2.5 py-4 bg-sky-500 rounded-[40px] justify-center items-center mt-4 mb-8`}
          >
            <Text className="text-center text-white text-sm font-medium font-['GeneralSans-Regular'] leading-normal">
             Update Changes
            </Text>
          </TouchableOpacity>

{/* submit button ends */}
    </View>
      </ScrollView>
    </View>
  )
}

export default ProfileSettingScreen