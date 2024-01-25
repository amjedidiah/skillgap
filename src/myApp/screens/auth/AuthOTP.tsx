import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";



// import { TextInput } from "react-native";
import { useSelector } from "react-redux";
import AuthHeader from "@/myApp/components/AuthHeader";
import AppTextOTP from "@/myApp/components/AppTextOTP";
import AppTextHeading from "@/myApp/components/AppTextHeading";
import AppTextContent from "@/myApp/components/AppTextContent";
import AppButton from "@/myApp/components/AppButton";
import { useNavigation } from "@react-navigation/native";



export default function AuthOTP() {


const navigation = useNavigation()
 
   
// const  email = useSelector(state => state?.userReducer.userData.email)
    const [otp, setOtp] = useState("");


    const [color, setColor] = useState(true)
  
  return (
    <SafeAreaView className={`${color ? "bg-white": "bg-gray-100"}`}>
      <View className="flex flex-col h-screen px-6 justify-between py-4 pb-6 "
      >
       <View className="mt-4">
       <AuthHeader  />
        <View className="mt-12 
        flex items-center justify-center
        ">
        <AppTextHeading text="Create Pin" />
        </View>

        <View className="mt-4 w-full">
            <AppTextContent classText="text-justify" text="Create a 4 digit pin for your account to help us authenticate any transaction in your account" />
        </View>
       
  
        <View className="mt-4">
        <AppTextOTP
        otp={otp}
        setOtp={setOtp}
        />
        </View>
      
    <View className="mt-[80px]">
        <AppButton   ButtonViewStyle="bg-sky-500" text="Proceed" handleOnpress={
            () => {
                navigation.navigate("loginScreen")
            }
        } />
    </View>
     

       </View>
      
       
      </View>
    </SafeAreaView>
  );
}
