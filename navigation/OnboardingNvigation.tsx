import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from 'expo-notifications';



import Onboarding from "@/myApp/screens/OnboardingComponent/Onboarding";
import AppSignUpScreen from "@/myApp/screens/OnboardingComponent/AppSignUpScreen";
import AuthSignUp from "@/myApp/screens/auth/AuthSignUp";
import AuthLogin from "@/myApp/screens/auth/AuthLogin";
import ButtonTapNavigation from "./ButtomNavigation";
import { HomeStackNavigatorParamList } from "type";
import OnboardingSliderScreen from "@/myApp/screens/onboarding/OnboardingSliderScreen";




function OnboardingNavigtion() {

  const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

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
        name="onboardingSlider"
        component={OnboardingSliderScreen}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
    

     

      


    </Stack.Navigator>
  );

}



export default OnboardingNavigtion;
