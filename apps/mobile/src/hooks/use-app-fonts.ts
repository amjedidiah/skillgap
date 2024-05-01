import { SpaceGrotesk_700Bold } from "@expo-google-fonts/space-grotesk";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

const customFonts = {
  "GeneralSans-Regular": require("../fonts/GeneralSans-Regular.otf"),
  "GeneralSans-Medium": require("../fonts/GeneralSans-Medium.otf"),
  "GeneralSans-Semibold": require("../fonts/GeneralSans-Semibold.otf"),
};
const SPLASH_SCREEN_DELAY = 3000;

export default function useAppFonts() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          SpaceGrotesk_700Bold,
          ...customFonts,
        });
        await new Promise((resolve) =>
          setTimeout(resolve, SPLASH_SCREEN_DELAY)
        );
      } catch (e) {
        console.warn(e);
      } finally {
        setIsFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isFontsLoaded) await SplashScreen.hideAsync();
  }, [isFontsLoaded]);

  return { isFontsLoaded, onLayoutRootView };
}
