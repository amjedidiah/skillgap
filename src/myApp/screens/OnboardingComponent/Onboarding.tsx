import { View, Dimensions, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

import { onboardingType } from "@/myApp/types";
import { loadFont } from "utils/fontDownload";
import AppOnboardingComp from "@/myApp/components/AppOnboardingComp";
import AppSplashScreen from "@/myApp/screens/OnboardingComponent/AppSplashScreen";
import { onboardingArray } from "utils/data";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProps } from "type";
import OnboardingSliderScreen from "../onboarding/OnboardingSliderScreen";


const Onboarding = () => {

  SplashScreen.preventAutoHideAsync();

  const navigation = useNavigation<HomeScreenNavigationProps>()
  // Keep the splash screen visible while we fetch resources


  const [appIsReady, setAppIsReady] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(0);



  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
          await loadFont();
          console.log("font loaded sucessfully");
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
          // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        // console.log("font loaded");
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  if (appIsReady) {
    setTimeout(() => {
      //  setAnimate(true);
    }, 6500)
  }



  return (
    <View className="w-full flex-1" onLayout={onLayoutRootView}>
     <OnboardingSliderScreen  /> 
     {/* {
      animate ?  <OnboardingSliderScreen  /> : <AppSplashScreen />
     } */}
    </View>
  );
};

export default Onboarding;
