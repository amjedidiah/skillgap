import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from "react-native";
import HomeNavigation from "./HomeNavigation";
import WalletNavigation from "./WalletNavigation";
import ArenaNavigation from "./ArenaNavigation";
import NotificationNavigation from "./NotificationNavigation";
import ProfileNavigation from "./ProfileNavigation";
// import useNotificationHooks from "../utils/Hooks/useNotificationHook";
import useNotification2 from "../utils/Hooks/useNotification2";

const Tab = createBottomTabNavigator();

const ButtonTapNavigation = () => {
  // a function used for seting up app notification
  useNotification2();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          flexDirection: "row",
          borderTopWidth: 0.5,
          borderColor: "lightgray",
        },
        tabBarItemStyle: {
          marginHorizontal: 5,
          paddingVertical: 5,
          // backgroundColor:"red",
          justifyContent: "space-between",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          width: "100%",
          marginTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={
                !focused
                  ? require("../assets/images/home.png")
                  : require("../assets/images/homeActive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Arena"
        component={ArenaNavigation}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={
                !focused
                  ? require("../assets/images/global.png")
                  : require("../assets/images/globalActive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationNavigation}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={
                !focused
                  ? require("../assets/images/notification.png")
                  : require("../assets/images/notificationActive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletNavigation}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={
                !focused
                  ? require("../assets/images/wallet.png")
                  : require("../assets/images/walletActive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Image
              source={require("../assets/images/userProfile.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtonTapNavigation;
