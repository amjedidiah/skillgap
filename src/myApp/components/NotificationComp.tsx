import { Text, TouchableOpacity, View } from "react-native";
import { NotificationMessageCompPropTypes } from "../types";
import { Image } from "react-native";
import { useState } from "react";
import AppButton from "./AppButton";
import { useNavigation } from "@react-navigation/native";




export const NotificationMessageComp = ({category, content, img, time, heading, userName, isContest = true}:NotificationMessageCompPropTypes) => {
  const navigation = useNavigation();

const [showFullText, setShowFullText] = useState(false)

const truncatedText = showFullText ? content : `${content.slice(0,50)}`

    return <View className=" w-full mt-4 flex-row space-x-2 ">
  <View className="w-10 h-10 rounded-full">
    <Image
    source={img}
    className="w-full h-full"
    />
    <View className="w-2.5 h-2.5 bg-emerald-500 rounded-[5px] border border-white absolute right-0 bottom-1"  />
  </View>
  <View className="flex-1 ">
    <View className="w-max flex-row ">
        <Text className="flex-1 text-gray-900 text-xs font-medium font-['General Sans Variable'] leading-tight">
             {heading} {" "}
             <Text className="text-gray-500 text-xs font-normal font-['General Sans Variable'] leading-tigh"> {time}</Text>
        </Text>
        <Text className="text-gray-950 text-[10px] font-medium font-['GeneralSans-Regular'] leading-[14px]">
            {category}
        </Text>
       
    </View>
    <TouchableOpacity onPress={() => {
        setShowFullText(true)
    }} className="mt-1">
      <Text className="text-sky-500 text-xs font-normal font-['GeneralSans-Regular'] leading-[18px]" >
        {userName}
        <Text className="text-gray-500 text-xs font-normal font-['General Sans Variable'] leading-[18px]">{truncatedText}<Text className="text-sky-500">
           
            {`${!showFullText ? "...See mroe" : " "}`}</Text></Text>
        
      </Text>
    </TouchableOpacity>
    {
      isContest && <View className="flex-row items-center justify-between mt-4">
      <AppButton ButtonViewStyle="w-[140px] h-10 py-0 bg-white border-sky-500 border" ButtonTextStyle="text-sky-500" text="Decline" />
      <AppButton handleOnpress={() => {
           navigation.navigate('Wallet', { screen: 'walletWithDrawScreen' });
      }} ButtonViewStyle="w-[140px] py-0 bg-sky-500 h-10" text="Accept" />
    </View>
    }
  </View>

    </View>

}