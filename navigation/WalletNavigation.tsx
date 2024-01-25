import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// wallet screens

import WalletHomeScreen from "@/myApp/screens/Wallet/WalletHomeScreen";
import WalletTransactionScreen from "@/myApp/screens/Wallet/WalletTransactionScreen";


function WalletNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="walletHomeScreen"
      screenOptions={{
        animation: "slide_from_left",
      }}
    >
     
     
      <Stack.Screen
        name="walletHomeScreen"
        component={WalletHomeScreen}
        options={{
          headerShown: false,
        }}
      />


     <Stack.Screen
        name="walletTransactionScreen"
        component={WalletTransactionScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}

export default WalletNavigation;
