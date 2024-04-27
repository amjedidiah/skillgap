import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, { AnimatedRef } from "react-native-reanimated";

import { isiOS } from "../../lib/constants";

type Props = {
  currentIndex: Animated.SharedValue<number>;
  length: number;
  flatListRef: AnimatedRef<
    Animated.FlatList<{
      source: string;
      title: string;
      description: string;
    }>
  >;
};

const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);

export default function OnboardingButton({
  currentIndex,
  length,
  flatListRef,
}: Props) {
  const navigation = useNavigation();
  const onPrev = useCallback(() => {
    if (currentIndex.value === 0) return;

    flatListRef?.current?.scrollToIndex({
      index: currentIndex.value - 1,
    });
  }, [currentIndex.value, flatListRef]);

  const onNext = useCallback(() => {
    if (currentIndex.value === length - 1) {
      navigation.navigate("Auth" as never);
      return;
    }

    flatListRef?.current?.scrollToIndex({
      index: currentIndex.value + 1,
    });
  }, [currentIndex.value, flatListRef, length, navigation]);

  return (
    <View className={`flex-row gap-x-6  ${isiOS ? "mb-4" : ""}`}>
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
        className="bg-white p-3 rounded-full border border-black-100 flex items-center justify-center"
        onPress={onNext}
      >
        <Animated.Image
          source={{
            uri: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1713318721/right-arrow_geukx1.png",
          }}
          className="w-6 h-6"
        />
      </AnimatedPressable>
    </View>
  );
}
