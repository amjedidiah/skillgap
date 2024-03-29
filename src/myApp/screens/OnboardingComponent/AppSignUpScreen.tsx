import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { useCallback, useEffect, useState } from "react";
import AppTextContent from "@/myApp/components/AppTextContent";
import AppTextHeading from "@/myApp/components/AppTextHeading";
import AppButton from "@/myApp/components/AppButton";
import { useNavigation } from "@react-navigation/native";




const AppSignUpScreen = () => {
  const navigation = useNavigation()

const deviceHeight = Dimensions.get("window").height


  return (
      <View
        className={`flex-1 w-screen `}
      >
        <View className={`w-full bg-white mb-0 pb-0  mx-auto  justify-center items-center `} style={{
          height: deviceHeight * 3.1 / 5 
        }}>
        
          <Image
            source={require("../../../../assets/images/onboardingDefault.png")}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className={`bg-white rounded-tl-2xl px-8 pt-8 pb-8  rounded-tr-2xl  absolute bottom-0   w-full justify-end`} 
        style={{
          height: deviceHeight * 1.9 / 5  + 30
        }}
        > 
        <View className=" justify-center  text-center items-center mb-2 ">
            <AppTextHeading text={"Skillgap"} classText="text-center" />
           
          </View>
          <View className="text-center">
          <AppTextContent fontFamily="SpaceGrotesk-Medium" classText="text-center text-neutral-400 text-2xl font-medium font-['SpaceGrotesk-Regular'] leading-loose  w-full"  text={"Win cash completing bets in your favourite skill"} />
          </View>
        
      <View className="mt-4 space-y-4">
    <AppButton  
    text="Sign Up"
    handleOnpress={() => {
      navigation.navigate("signUpScreen");
    }}

    />
      </View>

      <View className="mt-4">
  
<AppButton  
    text="Sign In"
    handleOnpress={() => {
      navigation.navigate("loginScreen");
    }}
    ButtonViewStyle="bg-white border border-neutral-900"
    ButtonTextStyle="text-neutral-900  font-medium  leading-normal"

    />
      </View>
     

       
         </View> 
      
      </View>

  );
};

export default AppSignUpScreen;
