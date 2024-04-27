import * as NavigationBar from "expo-navigation-bar";
import { PropsWithChildren } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

import { isAndroid } from "../../lib/constants";

export default function NativeSafeAreaView({
  children,
  viewColor = "white",
  width,
}: PropsWithChildren<{ viewColor?: string; width?: number }>) {
  if (isAndroid) {
    NavigationBar.setBackgroundColorAsync(viewColor);
    // NavigationBar.setPositionAsync("absolute");
  }

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: viewColor,
        width,
        ...Platform.select({
          ios: {
            paddingTop: 0,
          },
          android: {
            paddingTop: StatusBar.currentHeight,
          },
        }),
      }}
    >
      {children}
    </SafeAreaView>
  );
}
