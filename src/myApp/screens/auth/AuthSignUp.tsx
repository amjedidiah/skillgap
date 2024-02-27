// third part imports starts
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { Magic } from "@magic-sdk/react-native-expo";
// third party imports ends


// imports from app starts
import { Country, authSignupCompProps } from "@/myApp/types";
import AuthHeader from "@/myApp/components/AuthHeader";
import CountryCodePicker from "@/myApp/components/CountryCode";
import { Entypo } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { registerApi, validateMagicApi } from "@/api/authApi";
import AlertMessage from "@/myApp/components/AlertMessage";
import { validationSchemaSignUp } from "utils/YubValidation";
// imports  from app ends


const AuthSignUp = () => {
  // state management
  const [showCountryPickerModal, setShowCountryPickerModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorType, setErrorType] = useState(null);
const [formData, setFormData] = useState(null)
  const [errorMessage, setErrorMessage] = useState("");
  const [updateRegister, setUpdateRegister] = useState(false);
  const [country, setCountry] = useState<Country>({
    callingCode: ["234"],
    cca2: "NG",
    currency: ["NGN"],
    flag: "flag-ng",
    name: "Nigeria",
    region: "Africa",
    subregion: "Western Africa",
  });

  // instanciating navigation hook
const navigation = useNavigation();


  // seting up magic
  const magic = new Magic("pk_live_AF0A2FCCABF5C8EF");

// controling when to display indicating for isPending, isError and success

 // the set update state controls when to set comIsPending state, compIsError state and setCompIsSuccess state
 const [update, setUpdate] = useState(false)
  
// response from server 
const registerMutation = useMutation({
  mutationKey:["user-register"],
  mutationFn:registerApi
})
const { data, error, isError, isPending, isSuccess} = registerMutation
  

const  validateMagicMutation= useMutation({
  mutationKey:["user-magic-validate"],
  mutationFn: validateMagicApi

})

const { data:magicData, error:magicError, isError:magicIsError, isPending:magicIsPending, isSuccess:magicIsSuccess} = validateMagicMutation
//  rect hook form section starts


const handleRegister = async() => {
   if(magicData){
    const region = JSON.stringify(country);
    await   registerMutation.mutateAsync({...formData,region, jwt:magicData?.jwt})
   }
  
}

useEffect(() => {
  console.log("code arn use Effect 33")
  handleRegister()
}, [updateRegister])

console.log("this are the data from magic api", magicData,magicError, magicIsError,magicIsPending, magicIsSuccess )
// form state data
const [form, setForm] = useState<authSignupCompProps>({
  firstName: "",
  lastName: "",
  email: "",
  region: "",
  phoneNumber: "",
  userName:""
});

const formOptions = { resolver: yupResolver(validationSchemaSignUp) };




const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);
 // onSubmit function for submiting forms
  const onSubmit = async(data: any) => {
    try{
    setFormData(data)
      setUpdate(true)
      // verify email from magic.link
      console.log("code ran in submit")
      const magicToken = await magic.auth.loginWithEmailOTP({
        email: data?.email,
      });
  console.log("magicToken from signup", magicToken)

 await  validateMagicMutation.mutateAsync({magicToken, validateMagic: true})
 setUpdateRegister(!updateRegister)
   
   
     
    }catch(err){
     console.log(err.message)
    }
   
  };

 
 

// useEffect for controlling loading, error, success state of the form
useEffect(() =>{
  if(isError || magicIsError && update){
      setShowModal(true)
      setErrorType("error")
     const errorMessage  = error?.response?.data.message || error?.message
     const errorMagicMessage  = magicError?.response?.data.message || magicError?.message
     setErrorMessage(errorMessage || errorMagicMessage)
      console.log("ran error")
  } 
  if(isPending || magicIsPending  && update){
      setShowModal(true)
      setErrorType("loading")
      setErrorMessage("")
      console.log("ran loading")
      
  }
  if(isSuccess && update){
    setShowModal(true)
    setErrorType("success")
    setErrorMessage("")
  
    setTimeout(() => {
      setShowModal(false)
      setUpdate(false)
      console.log(data)
      navigation.navigate("loginScreen", {data: data?.email})
      reset()
    },2000)
   
    console.log("ran success")
  }

}, [isError, isPending, isSuccess, magicIsError, magicIsPending, magicIsSuccess])




console.log("this is the show Mode",showModal, errorMessage, errorType)
  return (
    <SafeAreaView className="bg-white flex-1 py-[13px] px-[18px]">
       {/* Render the Magic iframe! */}
       <magic.Relayer />
    <Modal visible={showModal} transparent={true} animationType="fade">   
    <AlertMessage message={errorMessage} type={errorType} setShowModal = {setShowModal} />
    </Modal>
     <View className="w-full mt-4 pb-4">
       <AuthHeader />
     </View>
     <ScrollView
       className="flex-1"
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{
         flexGrow: 1,
       }}
     >
       <View className="flex flex-col gap-y-2 items-start justify-center mt-[30px] mb-[32px]">
         <Text className="text-gray-950 text-2xl font-semibold font-['General Sans Variable'] leading-loose">
           Create Account
         </Text>
       </View>
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
               <View
                 className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                   bg-white rounded-[30px] shadow border border-gray-300 
                 "
               >
                 <TextInput
                   onChangeText={(data) => {
                     setForm({
                       ...form,
                       firstName: data,
                     });
                     onChange(data);
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
       <View className="w-full mt-4">
         <View className="items-start space-y-[10px] w-full">
           <View className="items-start mb-2">
             <Text className="text-black text-sm font-normal font-['Noto Sans']">
               {"Last Name"}
             </Text>
           </View>

           <Controller
             control={control}
             rules={{
               required: true,
             }}
             render={({ field: { onChange, onBlur, value } }) => (
               <View
                 className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300 "
               >
                 <TextInput
                   onChangeText={(data) => {
                     setForm({
                       ...form,
                       lastName: data,
                     });
                     onChange(data);
                   }}
                   value={value}
                   placeholder={"Enter user name"}
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
     
       {/* user name start */}
       <View className="w-full mt-4">
         <View className="items-start space-y-[10px] w-full">
           <View className="items-start mb-2">
             <Text className="text-black text-sm font-normal font-['Noto Sans']">
               {"User Name"}
             </Text>
           </View>

           <Controller
             control={control}
             rules={{
               required: true,
             }}
             render={({ field: { onChange, onBlur, value } }) => (
               <View
                 className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300 "
               >
                 <TextInput
                   onChangeText={(data) => {
                     setForm({
                       ...form,
                       userName: data,
                     });
                     onChange(data);
                   }}
                   value={value}
                   placeholder={"Enter user name"}
                   placeholderTextColor={"gray"}
                   cursorColor={"gray"}
                   className="flex-1 text-gary-900"
                   onBlur={onBlur}
                   keyboardType={"default"}
                 />
               </View>
             )}
             name={"userName"}
           />

           <View className="w-[327px]">
             {errors.userName && (
               <Text
                 className="text-red-500
                   font-bold "
               >
                 {errors.userName.message}
               </Text>
             )}
           </View>
         </View>
       </View>
       {/* user name end */}

       {/* email start */}

       <View className="w-full mt-4">
         <View className="items-start space-y-[10px] w-full">
           <View className="items-start mb-2">
             <Text className="text-black text-sm font-normal font-['Noto Sans']">
               {"Email"}
             </Text>
           </View>

           <Controller
             control={control}
             rules={{
               required: true,
             }}
             render={({ field: { onChange, onBlur, value } }) => (
               <View
                 className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300 "
               >
                 <TextInput
                   onChangeText={(data) => {
                     setForm({
                       ...form,
                       email: data,
                     });
                     onChange(data);
                   }}
                   value={value}
                   placeholder={"qubicx72@gmail.com"}
                   placeholderTextColor={"gray"}
                   cursorColor={"gray"}
                   className="flex-1 text-gary-900"
                   onBlur={onBlur}
                   keyboardType={"email-address"}
                 />
               </View>
             )}
             name={"email"}
           />

           <View className="w-[327px]">
             {errors.email && (
               <Text
                 className="text-red-500
                   font-bold "
               >
                 {errors.email.message}
               </Text>
             )}
           </View>
         </View>
       </View>

       {/* email end */}

       {/* Region  start*/}

       <View className="w-full mt-4">
         <View className="items-start space-y-[10px] w-full">
           <View className="items-start mb-2">
             <Text className="text-black text-sm font-normal font-['Noto Sans']">
               {"Region"}
             </Text>
           </View>

           <TouchableOpacity
             onPress={() => {
               setShowCountryPickerModal(true);
             }}
             className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300 "
           >
             <View className="flex-row items-center">
               <CountryCodePicker
                 showCountryPickerModal={showCountryPickerModal}
                 setShowCountryPickerModal={setShowCountryPickerModal}
                 setCountry={setCountry}
                 country={country}
               />
               <Text className="relative -left-1">{country?.name}</Text>
             </View>
             <Entypo name="chevron-thin-down" size={24} color="black" />
           </TouchableOpacity>
         </View>
       </View>

       {/* Region end */}

       {/* phoneNumber start */}

       <View className="w-full mt-4 ">
         <View className="items-start space-y-[10px] w-full">
           <View className="items-start mb-2">
             <Text className="text-black text-sm font-normal font-['Noto Sans']">
               {"Phone Number"}
             </Text>
           </View>

           <Controller
             control={control}
             rules={{
               required: true,
             }}
             render={({ field: { onChange, onBlur, value } }) => (
               <View
                 className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300 "
               >
                 <TextInput
                   onChangeText={(data) => {
                     setForm({
                       ...form,
                       phoneNumber: data,
                     });
                     onChange(data);
                   }}
                   value={value}
                   placeholder={`(+${country.callingCode}) xx xxx xxx xx`}
                   placeholderTextColor={"gray"}
                   cursorColor={"gray"}
                   className="flex-1 text-gary-900"
                   onBlur={onBlur}
                   keyboardType={"phone-pad"}
                 />
               </View>
             )}
             name={"phoneNumber"}
           />

           <View className="w-[327px]">
             {errors.phoneNumber && (
               <Text
                 className="text-red-500
                   font-bold"
               >
                 {errors.phoneNumber.message}
               </Text>
             )}
           </View>
         </View>
       </View>

       {/* phoneNumber ends */}
     

       {/* app button start */}

       <TouchableOpacity
         activeOpacity={0.5}
         onPress={handleSubmit(onSubmit)}
         className={`w-full px-2.5 py-4 bg-sky-500 rounded-[40px] justify-center items-center mt-4`}
       >
         <Text className="text-center text-white text-sm font-medium font-['GeneralSans-Regular'] leading-normal">
           SignUp
         </Text>
       </TouchableOpacity>

       {/* APP BUTTON END */}
     </ScrollView>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthSignUp;
