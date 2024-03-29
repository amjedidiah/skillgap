import { View, Text } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AppButton from "@/myApp/components/AppButton";
import AppTextHeading from "@/myApp/components/AppTextHeading";
import { Modal } from "react-native";


const ArenaContestSuccess = () => {

const [showModal, setShowModal] = useState(false)

  return (
    <View className="flex-1 bg-neutral-100 items-center justify-center">
      <View className="w-full px-4">
        <View className="flex-row justify-center items-center ">
          <View className="w-[108px] h-[108px] z-10 relative -right-[10px] ">
            <Image
              source={require("../../../../assets/images/contest1.png")}
              className="w-full h-full"
            />
          </View>
          <View className="w-[108px] h-[108px]  text-center bg-gray-200 text-base font-normal font-['GeneralSans-Regular'] leading-normal rounded-full justify-center items-center">
            <AntDesign name="question" size={34} color="black" />
          </View>
        </View>
        <View className="mt-4 mx-auto w-full">
          <AppTextHeading
          text="It’s about to get real"
          classText="text-center w-full"
          />
      
          <Text className="text-center font-[GeneralSans-Regular]  text-neutral-400 text-base font-normal leading-snug">Your contest request has been sent to <Text className="text-sky-500 0 ">@qubigs</Text> successfully. You will be notified once he give a response </Text>
        </View>
        <AppButton 
        text="My contest"
         ButtonViewStyle="w-full mt-[40px] bg-sky-500"
         handleOnpress={() => setShowModal(!showModal)}
        
        />
      </View>
      {
        showModal  && <Modal visible={showModal} transparent={true}>
          <View className="h-screen w-screen bg-blue-400 justify-center items-center">
          <View className="rounded-[15px] bg-white w-[313px] h-[278px] items-center justify-center">
            <Image
            source={require("../../../../assets/images/success.png")}
           className="w-[79.8] h-[79.8]"
            />
             <View className="mt-4 mx-auto w-full">
          <AppTextHeading
          text="Congratulations"
          classText="text-center w-full"
          />
      
          <Text className="text-center font-[GeneralSans-Regular]  text-neutral-400 text-base font-normal leading-snug">Your contest has been posted successfully.</Text>
        </View>
        <AppButton 
        text="View Contest"
         ButtonViewStyle="bg-sky-500 w-[200px] mt-4"
         handleOnpress={() => setShowModal(!showModal)}
        
        />

          </View>
          </View>

        </Modal>
      }
    </View>
  );
};

export default ArenaContestSuccess;
