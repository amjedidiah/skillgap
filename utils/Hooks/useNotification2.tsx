import React, { useEffect, useRef, useState } from "react";
import { Platform, Text } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import { getAllNotification } from "../../redux/slices/userSlice"
import navigationHook from "../../navigation/NavigationRef";
import { useSelector } from "react-redux";
import { saveExpoToken } from "../../src/api/authApi";



Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const   useNotification2 = () => {
    console.log("code ran on useNotification2" )
  
    const [expoPushToken, setExpoPushToken] = useState("");
    const [notification, setNotification] = useState(false);

    const notificationListener = useRef();
    const responseListener = useRef();

    const user = useSelector(data => data?.authReducer?.user) || ""

    useEffect(() => {
        const handleNotification = async () => {
            try {
               const newToken = await  registerForPushNotificationsAsync()
          console.log("expo push token sent", newToken)
               setExpoPushToken(newToken)
          const tokenResponse = await saveExpoToken({
           email:user?.userEmail,
           expoToken: newToken
           })
   
   
           console.log("token response from server: " + JSON.stringify(tokenResponse))
           // This listener is fired whenever a notification is received while the     useNtifiation2 is foregrounded
           notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
               setNotification(notification);
           });
   
           // This listener is fired whenever a user taps on or interacts with a notification (works when  notification is foregrounded, backgrounded, or killed)
           responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
            navigationHook("Notification")
               const {
                  
                   notification: {
                       request: {
                           content: {
                               data: { screen },
                           },
                       },
                   },
               } = response;
   
               // When the user taps on the notification, this line checks if they //are suppose to be taken to a particular screen
               if (screen) {
                   navigationHook("Notification")
                   // props.navigation.navigate(screen);
               }
               })
            } catch (error) {
                console.log(error.message)
            }
    } 
   handleNotification()

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

   
};

async function registerForPushNotificationsAsync() {
    let token;

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
            console.log("existingStatus", existingStatus);
        }

        if (finalStatus !== "granted") {
            alert("Failed to get push token for push notification!");
            console.log("finalStatus", finalStatus);
            return;
        }

        // Project ID can be found in   useNtifiation2.json |   useNtifiation2.config.js; extra > eas > projectId
        // token = (await Notifications.getExpoPushTokenAsync({ projectId: "YOUR_PROJECT_ID" })).data;
        token = (await Notifications.getExpoPushTokenAsync()).data;

        // The token should be sent to the server so that it can be used to send push notifications to the device
        console.log("new token",token);
    
    } else {
        alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            showBadge: true,
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FE9018",
        });
    }

    return token;
}

export default  useNotification2;
