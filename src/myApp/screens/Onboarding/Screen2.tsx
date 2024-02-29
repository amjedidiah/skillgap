import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import AppTextContent from "@/myApp/components/AppTextContent";
import AppTextHeading from "@/myApp/components/AppTextHeading";
import { AntDesign } from "@expo/vector-icons";
import { onboardingType } from "@/myApp/types";
import { useNavigation } from "@react-navigation/native";
import { onBoardingScreen2Data } from "utils/data";


const Screen2 = () => {
  

const deviceHeight = Dimensions.get("window").height;
const {img, heading, content} = onBoardingScreen2Data

const navigation = useNavigation()

  return (

 
      <View
        className={`h-screen w-screen`}
      >
        <View className={`w-full bg-white mb-0 pb-0  mx-auto  justify-center items-center`} style={{
          height: deviceHeight * 3.5 / 5 
        }}>
        
          <Image
            source={img}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className={`bg-white rounded-tl-2xl px-2 rounded-tr-2xl justify-around absolute bottom-0  w-full `} 
        style={{
          height: deviceHeight * 1.6 / 5  + 10
        }}
        > 
        <View className=" bg-white  w-full px-[24px] py-[21px] ">
          <View className="gap-x-4 mb-[26px] ">
            <AppTextHeading text={heading} />
            <AppTextContent text={content} />
          </View>
        </View>

        <View className="flex-row items-center bg-white justify-between w-full px-8 mb-8">
          <View className="flex-row space-x-2">
          <View className="w-4 h-1 bg-gray-300 rounded-lg" />
          <View className="w-[30px] h-1 bg-gray-950 rounded-lg" />
          <View className="w-4 h-1 bg-gray-300 rounded-lg" />
           
          </View>
          <View className="flex-row items-center gap-x-4">
          <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => {
              navigation.navigate("onBoardingScreen1")
              }}
              className="border border-gray-950 rounded-full p-2"
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => {
              navigation.navigate("onBoardingScreen3")
              }}
              className="border border-gray-950 rounded-full p-2"
            >
              <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View> 
         </View> 
      
      </View>

  );
};

export default Screen2;
