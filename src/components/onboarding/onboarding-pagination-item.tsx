import React from "react";
import { useWindowDimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function OnboardingPaginationItem({
  index,
  x,
}: {
  index: number;
  x: Animated.SharedValue<number>;
}) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const itemRnStyle = useAnimatedStyle(() => {
    const width = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [16, 30, 16],
      Extrapolate.CLAMP
    );

    const bgColor = interpolateColor(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      ["#D0D5DD", "#020B12", "#D0D5DD"]
    );

    return {
      width,
      backgroundColor: bgColor,
    };
  }, [x]);

  return (
    <Animated.View
      style={itemRnStyle}
      className="w-[30px] h-1 rounded-lg mr-3"
    />
  );
}
