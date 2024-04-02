import {useEffect} from "react"
import * as  Notifications from 'expo-notifications';
import {saveExpoToken} from "../../src/api/authApi"
import { useDispatch, useSelector } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationHook from "../../navigation/NavigationRef";

import { getAllNotification } from "../../redux/slices/userSlice"

const useNotificationHooks = () => {
    const user = useSelector(data => data?.authReducer?.user) || ""
  const dispatch = useDispatch()
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
     
     const expoToken =   await  Notifications.getExpoPushTokenAsync()
     console.log("expoToken: " + expoToken)
  // save expo token
  const tokenResponse = await saveExpoToken({
  email:user?.userEmail,
  expoToken: expoToken?.data
  })
  
    if(tokenResponse.status){
         await AsyncStorage.setItem("expoToken", tokenResponse?.expoToken)
    }
  console.log("response from server: " + JSON.stringify(tokenResponse))
     Notifications.setNotificationHandler({
      handleNotification:async() => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      })
     })
     console.log("this is the expo token",expoToken)
        
      } catch (error) {
        console.log(error.message)
      }
    }
  
  
  useEffect(() =>{
    
   registerForPushNotification()
   const subscribe = Notifications.addNotificationReceivedListener(notification => {
    const {content} = notification.request
   dispatch(getAllNotification(content?.data?.opponentData))
    console.log("nofication subscription", content?.data )
    navigationHook("Notification", content?.data)
   })
   return () => subscribe.remove()
  },[]);
  
}

export default useNotificationHooks