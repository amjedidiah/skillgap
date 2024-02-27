import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppComonHeaderProp } from "../types";


const AppCommonHeader = ({header, textStyle, divStyle} : AppComonHeaderProp) => {
  const navigation  = useNavigation()

return (
    <View className={`flex-row w-full items-center justify-center ${divStyle}`}>
      <TouchableOpacity
      className="absolute left-0"
        onPress={() => {
          navigation.goBack();
        }}
      >
       <Image
         source={require("../../../assets/images/arrow-left.png")}
         className="w-[24px] h-[24px]"
       />
      </TouchableOpacity>
<Text className={`text-gray-950 text-[20px] font-semibold font-['GeneralSans-Medium'] leading-normal ${textStyle}`}>
  {header}
</Text>
  
    </View>
  );
};


export default AppCommonHeader;
