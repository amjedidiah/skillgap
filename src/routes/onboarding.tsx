import { useCallback, useRef } from "react";
import { View, ViewToken } from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import OnboardingButton from "@/components/onboarding/onboarding-button";
import OnboardingLayout from "@/components/onboarding/onboarding-layout";
import OnboardingPagination from "@/components/onboarding/onboarding-pagination";

const pages = [
  {
    source:
      "https://res.cloudinary.com/dv3jszmrc/image/upload/v1713313362/onboarding-1_yc0muk.png",
    title: "Yo Champ!",
    description:
      "Win cash completing bets in your favourite game and sport. Play solo or with your squad",
  },
  {
    source:
      "https://res.cloudinary.com/dv3jszmrc/image/upload/v1713313341/onboarding-3_i7ojj0.png",
    title: "You rock!",
    description:
      "Bet on yourself using your skill in games and sports against the best players in the world/your region",
  },
  {
    source:
      "https://res.cloudinary.com/dv3jszmrc/image/upload/v1713313340/onboarding-2_cmbr7h.png",
    title: "Gain Points!",
    description: "Refer friend to earn unique Skillgap coins and other rewards",
  },
];

type Page = (typeof pages)[number];

export default function Onboarding() {
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<Animated.FlatList<Page>>();

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      flatListIndex.value = viewableItems[0]?.index ?? 0;
    },
    [flatListIndex]
  );

  const scrollHandle = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({ item, index }: { item: Page; index: number }) => (
      <OnboardingLayout {...item} x={x} index={index} />
    ),
    [x]
  );

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        waitForInteraction: true,
        viewAreaCoveragePercentThreshold: 95,
      },
      onViewableItemsChanged,
    },
  ]);

  return (
    <View className="flex-1">
      <Animated.FlatList
        ref={flatListRef}
        onScroll={scrollHandle}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled
        data={pages}
        keyExtractor={(_, index) => index.toString()}
        bounces={false}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <View className="bg-white flex-row justify-between items-center p-8">
        <OnboardingPagination length={pages.length} x={x} />
        <OnboardingButton
          currentIndex={flatListIndex}
          length={pages.length}
          flatListRef={flatListRef}
        />
      </View>
    </View>
  );
}
