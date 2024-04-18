import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Image } from "react-native";

import NativeSafeAreaView from "@/components/shared/native-safe-area-view";

export default function SplashScreen() {
  return (
    <NativeSafeAreaView viewColor="#1D9BF0">
      <Image
        source={{
          uri: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1713398738/splash_gkpken.png",
        }}
        className="flex-1"
      />
      <ExpoStatusBar style="auto" />
    </NativeSafeAreaView>
  );
}
