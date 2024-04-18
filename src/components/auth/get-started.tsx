import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

import OnboardingLayout from "@/components/onboarding/onboarding-layout";

export default function GetStarted() {
  const navigation = useNavigation();

  return (
    <OnboardingLayout
      title="SkillGap"
      description="Win cash completing bets using your favourite skill"
      source="https://res.cloudinary.com/dv3jszmrc/image/upload/v1713436048/last-spash-screen_atz7ay.jpg"
      center
    >
      <View className="gap-4">
        <TouchableOpacity
          className="bg-dm-l1 rounded-[40px] py-4 px-[10px]"
          onPress={() => navigation.navigate("SignUp" as never)}
        >
          <Text
            style={{ fontFamily: "GeneralSans-Medium" }}
            className="text-center text-white text-sm leading-6 -tracking-[0.14px]"
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-dm-l1 rounded-[40px] py-4 px-[10px]">
          <Text
            style={{ fontFamily: "GeneralSans-Medium" }}
            className="text-center text-dm-l1 text-sm leading-6 -tracking-[0.14px]"
            onPress={() => navigation.navigate("SignIn" as never)}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </OnboardingLayout>
  );
}
