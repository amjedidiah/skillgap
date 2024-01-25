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
import AppTextRecoveryOtp from "@/myApp/components/AppTextRecoveryOtp";



export default function AuthRecovery() {


const navigation = useNavigation()
 
   
// const  email = useSelector(state => state?.userReducer.userData.email)
    const [otp, setOtp] = useState("");
    const [userMail, setUserMail] = useState("qu**********72@gmail.com");
//  console.log("this is the otp created",otp)

    const [color, setColor] = useState(true)
  
  return (
    <SafeAreaView className={`bg-gray-100`}>
      <View className="flex flex-col h-screen px-6  justify-between py-4 pb-6 "
      >
       <View className="mt-4">
       <AuthHeader  />
        <View className="mt-12 
        flex items-center justify-center
        ">
        <AppTextHeading   classText="text-left" text="Recover Account" />
        </View>

        <View className="mt-4 w-full">
            <AppTextContent classText="text-left" text={`Input OTP that was sent to ${userMail}. check your email account.`} />
        </View>

       
       
        
        <View className="mt-4 flex-row justify-center w-full ">
        <AppTextRecoveryOtp 
        otp={otp}
        setOtp={setOtp}
        />
        </View>

        <View className="mt-4 flex-row space-x-2 ">
          <Text className="text-neutral-900 text-sm font-medium font-['General Sans Variable']">ETA</Text>
          <Text className="text-gray-950 text-sm font-medium font-['GeneralSans-Regular Variable'] leading-tigh">04:00 AET</Text>
        </View>
      
        

    <View className="mt-[80px]">
        <AppButton   ButtonViewStyle="bg-sky-500" text="Proceed" handleOnpress={
            () => {
                navigation.navigate("authResetPassword")
            }
        } />
    </View>
     

       </View>
      
       
      </View>
    </SafeAreaView>
  );
}
