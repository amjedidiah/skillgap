import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const AuthHeader = () => {
  const navigation  = useNavigation()

return (
    <View className="flex-row items-center w-full justify-start ">
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
       <Image
         source={require("../../../assets/images/arrow-left.png")}
         className="w-[24px] h-[24px]"
       />
      </TouchableOpacity>

  
    </View>
  );
};


export default AuthHeader;
