import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/myApp/screens/OnboardingComponent/AppSplashScreen";
import Login from "./src/myApp/screens/auth/Login";
import Onboarding from "@/myApp/screens/OnboardingComponent/Onboarding";
import AppSignUpScreen from "@/myApp/screens/OnboardingComponent/AppSignUpScreen";
import AuthSignUp from "@/myApp/screens/auth/AuthSignUp";
import AuthLogin from "@/myApp/screens/auth/AuthLogin";

function RouthPage() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
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
        name="loginscreen"
        component={AuthLogin}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      <Stack.Screen
        name="signupScreen"
        component={AuthSignUp}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      {/* onboarding end */}

      {/* auth section start  */}
      
      <Stack.Screen
        name="auth/login"
        component={Login}
        options={{
          headerShown: false,
          animation: "slide_from_left",
        }}
      />
      {/* auth section end */}
    </Stack.Navigator>
  );
}

export default RouthPage;
