import React from "react";
import { View } from "react-native";
import { SharedValue } from "react-native-reanimated";

import OnboardingPaginationItem from "./onboarding-pagination-item";
import { isiOS } from "../../lib/constants";

type Props = {
  length: number;
  x: SharedValue<number>;
};

export default function OnboardingPagination({ length, x }: Props) {
  return (
    <View
      className={`flex-row justify-center items-center ${isiOS ? "mb-4" : ""}`}
    >
      {Array.from({ length }).map((_, index) => {
        return <OnboardingPaginationItem index={index} key={index} x={x} />;
      })}
    </View>
  );
}
