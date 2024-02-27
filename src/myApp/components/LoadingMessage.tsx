import React from "react";

import { Text, TouchableOpacity, View } from "react-native";


import { MaterialIcons } from "@expo/vector-icons";
import LotieLoadingAnimation from "./LOtieLoadingAnimation";

const LoadingMessage = ({ message, setShowModal }: {
  type:string, message:string | null
}) => {
    return <TouchableOpacity onPress={() => {
        setShowModal(false)
      }}   className="h-screen w-screen   justify-center items-center px-4">
      <View className="bg-red-100 text-red-700  flex-row h-20 rounded-md justify-center px-4 w-full items-center">
      <MaterialIcons name="error" size={44} color="red" />
     <Text className="text-sm font-medium text-left w-[200px] ml-2">
     {
      message
     }
     
     </Text>
      </View>
      </TouchableOpacity>
   

}

export default LoadingMessage;


