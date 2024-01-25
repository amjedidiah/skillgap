import NativeSafeAreaView from "@/myApp/components/native-safe-area-view";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import RouthPage from "./navigation/RoutePage";
import LeaderModalComp from "@/myApp/components/LeaderModalComp";


{/* <LeaderModalComp /> */}

export default function App() {
  return (
   <NavigationContainer>
      <RouthPage />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
