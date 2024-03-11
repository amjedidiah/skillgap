import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function LotieLoadingAnimation({url}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        source={url} // Replace with the path to your loading animation JSON file
        autoPlay
        loop={true}
        style={{ width: 200, height: 200 }}
        speed={2}
        
      />
    </View>
  );
}
