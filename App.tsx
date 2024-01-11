import NativeSafeAreaView from "@/components/native-safe-area-view";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

export default function App() {
  return (
    <NativeSafeAreaView>
      <Text>SkillGap!</Text>
      <StatusBar style="auto" />
    </NativeSafeAreaView>
  );
}
