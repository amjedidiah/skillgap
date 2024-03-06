import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from 'expo-notifications';



import Onboarding from "@/myApp/screens/OnboardingComponent/Onboarding";
import AppSignUpScreen from "@/myApp/screens/OnboardingComponent/AppSignUpScreen";
import AuthSignUp from "@/myApp/screens/auth/AuthSignUp";
import AuthLogin from "@/myApp/screens/auth/AuthLogin";
import ButtonTapNavigation from "./ButtomNavigation";
import { HomeStackNavigatorParamList } from "type";
import OnboardingSliderScreen from "@/myApp/screens/onboarding/OnboardingSliderScreen";
import { useSelector } from "react-redux";




function AuthNavigtion() {

  const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

  const [loggedInState, setLoggedInState] = useState(null)

  const isLoggedIn = useSelector(data => data?.authReducer?.isLoggedIn)
  const isLoaded = useSelector(data => data?.authReducer?.isLoaded)

  const appState = useSelector(data => data?.authReducer)





useEffect(() => {
  console.log("this are the states", "isLoggedIn", isLoggedIn, "isLoaded", isLoaded, "appState", appState)
   if(isLoaded){
   setLoggedInState(true)
   }else{
    setLoggedInState(false)
   }
}, [isLoggedIn, isLoaded])


  return (
    <Stack.Navigator
      initialRouteName={"appSignUp"}
      screenOptions={{
        animation: "slide_from_right",
      }}
    >
     <Stack.Screen
        name="appSignUp"
        component={AppSignUpScreen}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      
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

    </Stack.Navigator>
  );

}



export default AuthNavigtion;
