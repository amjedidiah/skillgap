
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";

import { QueryClientProvider,   QueryClient  } from '@tanstack/react-query' 
import { store } from "redux/store/store";
import { Text, View } from "react-native";
import { Magic } from "@magic-sdk/react-native-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from "react";
import ButtonTapNavigation from "navigation/ButtomNavigation";
import AuthNavigtion from "navigation/AuthNavigation";
import RouthPage from "navigation/RoutePage";
import Toast from 'react-native-toast-message';



export default function App() {
  
const queryClient = new QueryClient();
  // seting up magic





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
   
   const expoToken =   await  Notifications.getExpoPushTokenAsync()
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
  // registerForPushNotification()
},[]);



 
  return (
   
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
   <NavigationContainer>
    <RouthPage />
    <Toast />
    </NavigationContainer>
    </QueryClientProvider>
    </Provider>
  );
}
