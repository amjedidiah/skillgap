import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

import AppTextContent from "@/myApp/components/AppTextContent";
import AppTextHeading from "@/myApp/components/AppTextHeading";
import { AntDesign } from "@expo/vector-icons";
import { onboardingType } from "@/myApp/types";
import { loadFont } from "utils/fontDownload";

const AppOnboardingComp = ({
  img,
  heading,
  content,
  progressArray,
  handleOnboardingFunc
}: onboardingType) => {
  

const deviceHeight = Dimensions.get("window").height

  return (

   // className={`${heading == "You rock!" ? "w-full h-full" : heading == "Yo Champ!" ? "w-[213px] h-[280px]" : "w-[205px] h-[280px]"}`}

  //  ${heading == "You rock!" ? "bg-blue-900" : heading == "Yo Champ!" ? "bg-sky-500" : "bg-blue-950"}
      <View
        className={`h-screen w-screen bg-red-400 `}
      >
        <View className={`w-full bg-white mb-0 pb-0  mx-auto  justify-center items-center`} style={{
          height: deviceHeight * 3.5 / 5 
        }}>
        
          <Image
            source={img}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className={`bg-white rounded-tl-2xl px-2 rounded-tr-2xl justify-around absolute bottom-0  w-full`} 
        style={{
          height: deviceHeight * 1.5 / 5  + 10
        }}
        > 
         <View className=" bg-white  w-full px-[24px] py-[21px]">
          <View className="gap-x-4 mb-[26px] ">
            <AppTextHeading text={heading} />
            <AppTextContent text={content} />
          </View>
        </View>

        <View className="flex-row items-center bg-white justify-between w-full px-8  ">
          <View className="flex-row space-x-2">
            {progressArray.map((item) => (
              <View key={item.i}>
                {item.active ? (
                  <View className="w-[30px] h-1 bg-gray-950 rounded-lg" />
                ) : (
                  <View className="w-4 h-1 bg-gray-300 rounded-lg" />
                )}
              </View>
            ))}
          </View>
          <View className="flex-row items-center gap-x-4">
            {heading !== "Yo Champ!" && (
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                  handleOnboardingFunc("previous")
                  console.log("left");
                }}
                className="border border-gray-950 rounded-full p-2"
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => {
                handleOnboardingFunc("next")
                console.log("right");
              }}
              className="border border-gray-950 rounded-full p-2"
            >
              <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View> 
         </View> 
      
      </View>

  );
};

export default AppOnboardingComp;
