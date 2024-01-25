import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/myApp/screens/welcome/HomeScreen";
import GameScreen from "@/myApp/screens/Home/GameScreen";
import GameMessageScreen from "@/myApp/screens/Home/GameMessageScreen";


function HomeNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="onboarding"
      screenOptions={{
        animation: "slide_from_left",
      }}
    >
        {/* GameMessageScreen */}
      {/* onboarding start  */}
      <Stack.Screen
        name="onboarding"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />



<Stack.Screen
        name="gameScreen"
        component={GameScreen}
        options={{
          headerShown: false,
        }}
      />


    
      {/* bottom tab navigation links end  */}
    </Stack.Navigator>
  );
}

export default HomeNavigation;
