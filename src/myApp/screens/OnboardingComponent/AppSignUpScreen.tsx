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
        className={`h-screen w-screen bg-red-400 `}
      >
        <View className={`w-full bg-white mb-0 pb-0  mx-auto  justify-center items-center`} style={{
          height: deviceHeight * 3.1 / 5 
        }}>
        
          <Image
            source={require("../../../../assets/images/Onboarding4.png")}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className={`bg-white rounded-tl-2xl p-8  rounded-tr-2xl  absolute bottom-0  w-full   `} 
        style={{
          height: deviceHeight * 1.9 / 5  + 10
        }}
        > 
        <View className=" justify-center items-center mb-2 ">
            <AppTextHeading text={"Skillgap"} />
           
          </View>
          <View className="text-center">
          <AppTextContent classText="text-center text-neutral-400 text-2xl font-medium font-['SpaceGrotesk-Regular'] leading-loose"  text={"Win cash completing bets in your favourite skill"} />
          </View>
        
      <View className="mt-4 space-y-4">
    <AppButton  
    text="Sign Up"
    handleOnpress={() => {
      navigation.navigate("SignUpScreen");
    }}

    />
      </View>

      <View className="mt-4">
  
<AppButton  
    text="Sign Up"
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
