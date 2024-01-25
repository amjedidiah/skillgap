import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../src/myApp/screens/OnboardingComponent/AppSplashScreen";
import Login from "../src/myApp/screens/auth/Login";
import Onboarding from "@/myApp/screens/OnboardingComponent/Onboarding";
import AppSignUpScreen from "@/myApp/screens/OnboardingComponent/AppSignUpScreen";
import AuthSignUp from "@/myApp/screens/auth/AuthSignUp";
import AuthLogin from "@/myApp/screens/auth/AuthLogin";
import AuthOTP from "@/myApp/screens/auth/AuthOTP";
import AuthRecovery from "@/myApp/screens/auth/AuthRecovery";
import AuthResetPassword from "@/myApp/screens/auth/AuthResetPassword";
import AuthPasswordResetSuccessScreen from "@/myApp/screens/auth/AuthPasswordResetSuccessScreen";
import ButtonTapNavigation from "./ButtomNavigation";

function RouthPage() {
  const Stack = createNativeStackNavigator();

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
        name="authResetPassword"
        component={AuthResetPassword}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />

      <Stack.Screen
        name="authResetPasswordSuccess"
        component={AuthPasswordResetSuccessScreen}
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
      {/* //  AuthOTP */}

      <Stack.Screen
        name="authOtpScreen"
        component={AuthOTP}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />

      <Stack.Screen
        name="authRecoveryScreen"
        component={AuthRecovery}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />

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
