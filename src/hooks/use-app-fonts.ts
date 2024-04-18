import {
  SpaceGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/space-grotesk";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

const customFonts = {
  "GeneralSans-Regular": require("../fonts/GeneralSans-Regular.otf"),
  "GeneralSans-Semibold": require("../fonts/GeneralSans-Semibold.otf"),
};

export default function useAppFonts() {
  const [spaceGroteskLoaded, spaceGroteskError] = useFonts({
    SpaceGrotesk_700Bold,
  });
  const [generalSansLoaded, setGeneralSansLoaded] = useState(false);

  const loadGeneralSans = async () => {
    await Font.loadAsync(customFonts);
    setGeneralSansLoaded(true);
  };

  useEffect(() => {
    loadGeneralSans();
  }, []);

  return spaceGroteskLoaded && !spaceGroteskError && generalSansLoaded;
}
