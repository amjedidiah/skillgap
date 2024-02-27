import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";




import WalletHomeScreen from "@/myApp/screens/Wallet/WalletHomeScreen";
import WalletTransactionScreen from "@/myApp/screens/Wallet/WalletTransactionScreen";
import WalletTransferFundScreen from "@/myApp/screens/Wallet/WalletTransferFundScreen";
import WalletTransferPreviewTransaction from "@/myApp/screens/Wallet/WalletTransferPreviewTransactionScreen";
import WalletWithDrawScreen from "@/myApp/screens/Wallet/WalletWithDrawScreen";


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
     <Stack.Screen
        name="walletTransferFundScreen"
        component={WalletTransferFundScreen}
        options={{
          headerShown: false,
        }}
      />
     <Stack.Screen
        name="walletTransferPreviewTransactionScreen"
        component={WalletTransferPreviewTransaction}
        options={{
          headerShown: false,
        }}
      />
     <Stack.Screen
        name="walletWithDrawScreen"
        component={WalletWithDrawScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}

export default WalletNavigation;
