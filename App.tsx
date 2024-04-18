import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import SplashScreen from "@/components/splash-screen";
import useAppFonts from "@/hooks/use-app-fonts";
import Onboarding from "@/routes/onboarding";

export default function App() {
  const isFontsLoaded = useAppFonts();
  if (!isFontsLoaded) return <SplashScreen />;

  return (
    <>
      <Onboarding />
      <ExpoStatusBar style="auto" />
    </>
  );
}
