import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHomeScreen from "@/myApp/screens/Profile/ProfileHomeScreen";
import ProfileSettingScreen from "@/myApp/screens/Profile/ProfileSettingScreen";
import PersonalisedSettingScreen from "@/myApp/screens/Profile/PersonalisedSettingScreen";





function ProfileNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="profileHomeScreen"
      screenOptions={{
        animation: "slide_from_left",
      }}
    >
     
     
      <Stack.Screen
        name="profileHomeScreen"
        component={ProfileHomeScreen}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="profileSettingsScreen"
        component={ProfileSettingScreen}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="personalisedSettingScreen"
        component={PersonalisedSettingScreen}
        options={{
          headerShown: false,
        }}
      />

{/* */}

    
    </Stack.Navigator>
  );
}

export default ProfileNavigation;
