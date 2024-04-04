import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useRef } from "react";

import Carousel from "react-native-snap-carousel";
import AppTextHeading from "@/myApp/components/AppTextHeading";
import AppTextContent from "@/myApp/components/AppTextContent";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { onboardingArray } from "utils/data";
import { useDispatch } from "react-redux";
import { navigateAuthAction } from "redux/slices/authSlice";

const OnboardingSliderScreen = () => {
  const SLIDER_WIDTH = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  const isCarousel = useRef(null);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const handleSnapToItem = (index) => {
    console.log("this  is the index", index);
    if (index === 3) {
      dispatch(navigateAuthAction());
    }
  };

  const RenderItem = ({ item }) => {
    return (
      <View className={`flex-1 w-full`}>
        <View
          className={`w-full  mb-0 pb-0  mx-auto  justify-center items-center `}
          style={{
            height: (deviceHeight * 3.7) / 5,
          }}
        >
          <Image
            source={item.img}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View
          className={`bg-transparent  absolute  bottom-0 h-screen w-screen  justify-end `}
        >
          <View
            className="rounded-tl-2xl px-2 rounded-tr-2xl bg-white "
            style={{
              height: (deviceHeight * 1.6) / 5 + 10,
            }}
          >
            <View className="  w-full px-[24px] py-[21px] ">
              <View className="gap-x-4 mb-[26px] ">
                <AppTextHeading text={item.heading} />
                <AppTextContent text={item.content} />
              </View>
            </View>

            <View className="flex-row items-center bg-white  justify-between w-full px-8 absolute bottom-4 pb-6">
              <View className="flex-row space-x-2">
                {item.progressArray.map((k) => {
                  if (k.i === item.key) {
                    return (
                      <View
                        key={k.i}
                        className="w-[30px] h-1 bg-gray-950 rounded-lg"
                      />
                    );
                  } else {
                    return (
                      <View
                        key={k.i}
                        className="w-4 h-1 bg-gray-300 rounded-lg"
                      />
                    );
                  }
                })}
              </View>
              <View className="flex-row items-center gap-x-4">
                {item.key === 1 && (
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => {
                        console.log(item.key);
                        isCarousel.current.snapToNext();
                      }}
                      className="border border-gray-950 rounded-full p-2"
                    >
                      <AntDesign name="arrowright" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                )}
                {item.key === 3 && (
                  <View className="flex-row space-x-4">
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => {
                        console.log("from third", item.key);
                        isCarousel.current.snapToPrev();
                      }}
                      className="border border-gray-950 rounded-full p-2"
                    >
                      <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => {
                        console.log("form third", item.key);
                        dispatch(navigateAuthAction());
                      }}
                      className="border border-gray-950 rounded-full p-2"
                    >
                      <AntDesign name="arrowright" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                )}
                {item.key == 2 && (
                  <View className="flex-row space-x-4">
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => {
                        console.log("from second", item.key);
                        isCarousel.current.snapToPrev();
                      }}
                      className="border border-gray-950 rounded-full p-2"
                    >
                      <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => {
                        console.log("from second", item.key);
                        isCarousel.current.snapToNext();
                      }}
                      className="border border-gray-950 rounded-full p-2"
                    >
                      <AntDesign name="arrowright" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View className="flex-1 w-full">
      <Carousel
        ref={isCarousel}
        data={onboardingArray}
        renderItem={RenderItem}
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={deviceHeight}
        itemHeight={deviceHeight}
        itemWidth={SLIDER_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        layout={"stack"}
        layoutCardOffset={18}
        onSnapToItem={handleSnapToItem}
      />
    </View>
  );
};

export default OnboardingSliderScreen;
