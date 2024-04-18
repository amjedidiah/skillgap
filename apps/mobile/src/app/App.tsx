import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import SplashScreen from "@/components/splash-screen";
import useAppFonts from "@/hooks/use-app-fonts";
import AppNavigator from "@/routes/app-navigator";

export default function App() {
  const isFontsLoaded = useAppFonts();
  if (!isFontsLoaded) return <SplashScreen />;

  return (
    <>
      <AppNavigator />
      <ExpoStatusBar style="auto" />
    </>
  );
}
