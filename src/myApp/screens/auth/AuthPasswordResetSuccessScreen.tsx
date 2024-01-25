import { View, Image, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";



// import { TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";
import AppTextHeading from "@/myApp/components/AppTextHeading";
import AppTextContent from "@/myApp/components/AppTextContent";




export default function AuthPasswordResetSuccessScreen() {


const navigation = useNavigation()
 
   

  return (
    <SafeAreaView className={`bg-gray-100`}>
      <View className="flex h-screen px-6  justify-center items-center py-4"
      >
   
   <Image
   source={require("../../../../assets/images/passwordResetSuccess.png")}
   className="w-[100px] h-[92px]"
   />
   <AppTextHeading text="Congratulations" classText="w-full text-center mt-[40px]" />

   <AppTextContent text="Your password reset was successful" classText="w-full text-center text-slate-700" />
       

  <TouchableOpacity activeOpacity={8} onPress={() => navigation.navigate("buttonTapNavigation")} >
  <AppTextContent text="Proceed to dashboard" classText="mt-[38px] w-full text-center text-sky-500 text-medium" />
  </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
