import { memo } from "react";
import { View, useWindowDimensions } from "react-native";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import NativeSafeAreaView from "@/components/shared/native-safe-area-view";

function OnboardingLayout({
  title,
  description,
  source,
  index,
  x,
}: {
  title: string;
  description: string;
  source: string;
  index: number;
  x: SharedValue<number>;
}) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const rnImageStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      width: SCREEN_WIDTH * 0.7,
      height: SCREEN_WIDTH * 0.7,
      transform: [{ translateY }],
    };
  }, [index, x]);
  const rnTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [{ translateY }],
    };
  }, [index, x]);

  return (
    <NativeSafeAreaView viewColor="white" width={SCREEN_WIDTH}>
      <View className="flex-1 -mt-20">
        <View className="flex-1">
          <Animated.Image
            source={{
              uri: source,
            }}
            style={rnImageStyle}
            alt="onboarding-1"
            className="min-w-full flex-1"
          />
        </View>
        <View className="basis-[200px] bg-white py-6 px-8 justify-between">
          <View className="gap-2">
            <Animated.Text
              style={[{ fontFamily: "SpaceGrotesk_700Bold" }, rnTextStyle]}
              className="text-black-100 text-2xl -tracking-[0.24px]"
            >
              {title}
            </Animated.Text>
            <Animated.Text
              style={[{ fontFamily: "GeneralSans-Regular" }, rnTextStyle]}
              className="text-gray leading-[22px] text-base -tracking-[0.16px]"
            >
              {description}
            </Animated.Text>
          </View>
        </View>
      </View>
    </NativeSafeAreaView>
  );
}

export default memo(OnboardingLayout);
