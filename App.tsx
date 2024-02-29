import NativeSafeAreaView from "@/myApp/components/native-safe-area-view";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import RouthPage from "./navigation/RoutePage";
import { QueryClientProvider,   QueryClient  } from '@tanstack/react-query' 
import { store } from "redux/store/store";



export default function App() {
  
const queryClient = new QueryClient();
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
   <NavigationContainer>
      <RouthPage />
      <StatusBar style="auto" />
    </NavigationContainer>
    </QueryClientProvider>
    </Provider>
  );
}
