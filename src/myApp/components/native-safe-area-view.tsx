import { PropsWithChildren } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

export default function NativeSafeAreaView({ children }: PropsWithChildren) {
  return (
    <SafeAreaView
      style={{
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
