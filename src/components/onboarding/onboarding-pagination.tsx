import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

import OnboardingPaginationItem from "@/components/onboarding/onboarding-pagination-item";

type Props = {
  length: number;
  x: Animated.SharedValue<number>;
};

export default function OnboardingPagination({ length, x }: Props) {
  return (
    <View className="flex-row justify-center items-center">
      {Array.from({ length }).map((_, index) => {
        return <OnboardingPaginationItem index={index} key={index} x={x} />;
      })}
    </View>
  );
}
