import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from 'expo-notifications';



import Onboarding from "@/myApp/screens/OnboardingComponent/Onboarding";
import AppSignUpScreen from "@/myApp/screens/OnboardingComponent/AppSignUpScreen";
import AuthSignUp from "@/myApp/screens/auth/AuthSignUp";
import AuthLogin from "@/myApp/screens/auth/AuthLogin";
import AuthOTP from "@/myApp/screens/auth/AuthOTP";
import AuthRecovery from "@/myApp/screens/auth/AuthRecovery";
import AuthResetPassword from "@/myApp/screens/auth/AuthResetPassword";
import ButtonTapNavigation from "./ButtomNavigation";
import { HomeStackNavigatorParamList } from "type";
import OnboardingNavigation from "./OnboardingNavigation";


// @react-native-async-storage/async-storage@1.22.2 - expected version: 1.18.2
// @react-native-community/netinfo@11.3.0 - expected version: 9.3.10
// expo-image-picker@14.7.1 - expected version: ~14.3.2
// expo-notifications@0.27.6 - expected version: ~0.20.1
// expo-permissions@14.4.0 - expected version: ~14.2.1
// react-native@0.72.6 - expected version: 0.72.10
// react-native-safe-area-context@4.9.0 - expected version: 4.6.3
// react-native-webview@11.26.1 - expected version: 13.2.2
// expo-notifications@0.27.6 - expected version: ~0.20.1

function RouthPage() {

  const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();


  const registerForPushNotification = async() => {
    try {
      const { status } = await Notifications.getPermissionsAsync();
    
      if (status !== 'granted') {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== 'granted') {
          console.log('Permission to receive notifications was denied');
          return;
        }
      }
        console.log("this is th request status",status)
   
   const expoToken =    await Notifications.getExpoPushTokenAsync()
   Notifications.setNotificationHandler({
    handleNotification:async() => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    })
   })
   console.log("this is the expo token",expoToken)
      
    } catch (error) {
      console.log(error.message)
    }
  }


useEffect(() =>{
  registerForPushNotification()
},[]);


  return (
    <Stack.Navigator
      initialRouteName="onboarding"
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
      {/* onboarding start  */}
      <Stack.Screen
        name="onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      <Stack.Screen
        name="OnboardingNavigation"
        component={OnboardingNavigation}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
{/* 
      {/* AuthResetPassword */}
      <Stack.Screen
        name="appSignUp"
        component={AppSignUpScreen}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />

      {/* AuthPasswordResetSuccessScreen */}
     
      
      <Stack.Screen
        name="loginScreen"
        component={AuthLogin}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      <Stack.Screen
        name="signUpScreen"
        component={AuthSignUp}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      {/* //  AuthOTP */}

    

    

      {/* onboarding end */}

      {/* auth section start  */}

     
      {/* auth section end */}
      {/* bottom nab navigation links starts */}
      {/* ButtonTapNavigation */}
      <Stack.Screen
        name="buttonTapNavigation"
        component={ButtonTapNavigation}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
 
      {/* bottom tab navigation links end  */}
    </Stack.Navigator>
  );

}



export default RouthPage;
