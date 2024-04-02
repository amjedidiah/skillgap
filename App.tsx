
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";

import { QueryClientProvider,   QueryClient  } from '@tanstack/react-query' 
import { store } from "redux/store/store";
import { Text, View } from "react-native";
import { Magic } from "@magic-sdk/react-native-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ButtonTapNavigation from "navigation/ButtomNavigation";
import AuthNavigtion from "navigation/AuthNavigation";
import RouthPage from "navigation/RoutePage";
import Toast from 'react-native-toast-message';
import { navigationRef } from "./navigation/NavigationRef";



function App() {
  
const queryClient = new QueryClient();
  // seting up magic

  return (
   
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
   <NavigationContainer ref={navigationRef}>
    <RouthPage />
    <Toast />
    </NavigationContainer>
    </QueryClientProvider>
    </Provider>
  );
}

export default App