import React, { useCallback } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Props = {
  currentIndex: Animated.SharedValue<number>;
  length: number;
  flatListRef: any;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function OnboardingButton({
  currentIndex,
  length,
  flatListRef,
}: Props) {
  const rnBtnStyle = useAnimatedStyle(
    () => ({
      width: withSpring(currentIndex.value === length - 1 ? 120 : 48),
      height: 48,
    }),
    [currentIndex.value, length]
  );

  const rnTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(currentIndex.value === length - 1 ? 1 : 0),
      transform: [
        {
          translateX: withTiming(currentIndex.value === length - 1 ? 0 : 100),
        },
      ],
    };
  }, [currentIndex.value, length]);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        currentIndex.value !== length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value !== length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    };
  }, [currentIndex, length]);

  const onPrev = useCallback(() => {
    if (currentIndex.value === 0) return;

    flatListRef?.current?.scrollToIndex({
      index: currentIndex.value - 1,
    });
  }, [currentIndex.value, flatListRef]);

  const onNext = useCallback(() => {
    if (currentIndex.value === length - 1) return;

    flatListRef?.current?.scrollToIndex({
      index: currentIndex.value + 1,
    });
  }, [currentIndex.value, flatListRef, length]);

  return (
    <View className="flex-row gap-6">
      <AnimatedPressable
        className="bg-white p-3 w-12 h-12 rounded-full border border-black-100 flex items-center justify-center"
        onPress={onPrev}
      >
        <Animated.Image
          source={{
            uri: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1713319618/arrow-left_mmjewa.png",
          }}
          className="w-6 h-6"
        />
      </AnimatedPressable>
      <AnimatedPressable
        style={rnBtnStyle}
        className="bg-white p-3 rounded-full border border-black-100 flex items-center justify-center"
        onPress={onNext}
      >
        <Animated.Text
          style={[{ fontFamily: "GeneralSans-Semibold" }, rnTextStyle]}
          className="text-black-100 text-base absolute"
        >
          Get Started
        </Animated.Text>
        <Animated.Image
          source={{
            uri: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1713318721/right-arrow_geukx1.png",
          }}
          className="w-6 h-6"
          style={imageAnimatedStyle}
        />
      </AnimatedPressable>
    </View>
  );
}
