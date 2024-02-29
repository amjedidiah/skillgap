import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "@/myApp/screens/Onboarding/Screen1";
import Screen2 from "@/myApp/screens/Onboarding/Screen2";
import Screen3 from "@/myApp/screens/Onboarding/Screen3";




function OnboardingNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="onBoardingScreen1"
      screenOptions={{
        animation: "slide_from_left",
      }}
    >
    
  
      <Stack.Screen
        name="onBoardingScreen1"
        component={Screen1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="onBoardingScreen2"
        component={Screen2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="onBoardingScreen3"
        component={Screen3}
        options={{
          headerShown: false,
        }}
      />
    
    </Stack.Navigator>
  );
}

export default OnboardingNavigation;
