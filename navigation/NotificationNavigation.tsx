import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import NotificationMessageScreen from "@/myApp/screens/Notification/NotificationMessageScreen";


function NotificationNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="notificationMessageScreen"
      screenOptions={{
        animation: "slide_from_left",
      }}
    >
     
     <Stack.Screen
        name="notificationMessageScreen"
        component={NotificationMessageScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}

export default NotificationNavigation;
