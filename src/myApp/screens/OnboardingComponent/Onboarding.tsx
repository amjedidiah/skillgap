import { View, Dimensions, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";




import { onboardingType } from "@/myApp/types";
import { loadFont } from "utils/fontDownload";
import AppOnboardingComp from "@/myApp/components/AppOnboardingComp";
import AppSplashScreen from "@/myApp/screens/OnboardingComponent/AppSplashScreen";
import { onboardingArray } from "utils/data";
import { useNavigation } from "@react-navigation/native";

const Onboarding = ({
  img,
  heading,
  content,
  progressArray,
}: onboardingType) => {
  const { width, height } = Dimensions.get("window");


  const navigation = useNavigation()
  // Keep the splash screen visible while we fetch resources
  SplashScreen.preventAutoHideAsync();

  const [appIsReady, setAppIsReady] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(0);


console.log("this is the state",showOnboarding)

  const  handleOnboardingFunc = (i:string) => {
    console.log(i)
   if(i === "previous" && showOnboarding > 0){
          setShowOnboarding(showOnboarding - 1)
   }
  if(showOnboarding === 2){
    navigation.navigate("appSignUp")
  }

   if( i === "next" && showOnboarding < 2){
    setShowOnboarding(showOnboarding + 1)
   }
  }


  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await loadFont();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
         await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        console.log("font loaded");
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
      setAnimate(true);
    }, 6500)
  }


  // function fadeOut() {
  //   Animated.timing(opacity, {
  //     toValue: 0,
  //     duration: 2500,
  //     useNativeDriver: true,
  //   }).start();
  // }


  return (
    <View className="w-full h-full pb-12" onLayout={onLayoutRootView}>
     {
      animate ?  <AppOnboardingComp  handleOnboardingFunc={handleOnboardingFunc } {...onboardingArray[showOnboarding]}   /> : <AppSplashScreen />
     }
    </View>
  );
};

export default Onboarding;
