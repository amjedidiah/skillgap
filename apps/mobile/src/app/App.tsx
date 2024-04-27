import * as SplashScreen from "expo-splash-screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useAppFonts from "../hooks/use-app-fonts";
import magic from "../lib/magic";
import AppNavigator from "../routes/app-navigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isFontsLoaded, onLayoutRootView } = useAppFonts();

  if (!magic || !isFontsLoaded) return null;

  return (
    <SafeAreaProvider className="flex-1" onLayout={onLayoutRootView}>
      <magic.Relayer />
      <AppNavigator />
      <ExpoStatusBar style="auto" />
    </SafeAreaProvider>
  );
}
