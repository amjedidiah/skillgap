import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import React, {useState} from 'react'
import * as Animatable from "react-native-animatable";




import AppModel from "@/myApp/components/AppModel";



const AppSplashScreen = ({}) => {

  const opacity = useState(new Animated.Value(1))[0];
  
  return (
    <View className='h-screen w-screen flex  justify-center items-center bg-sky-600'>
       <View className="items-center">
       <Image
        source={require("../../../../assets/images/splashIcon.png")}
        className="w-[105px] h-[101.25px] relative  rounded-[10px] border-4"
        />
       <View className="relative -top-[30px]  items-start">
       <Text className="text-white text-2xl font-bold font-['Plus Jakarta Sans'] leading-[38px]">
            Skillgap
        </Text>
       </View>
       </View>

        <Animated.View  
        style={{
          opacity: 0
        }}
        className='absolute bottom-[38px]'>
            <Text className="text-white text-sm font-bold font-['Plus Jakarta Sans'] leading-[18px]">
            .....Bank on your skill
            </Text>
        </Animated.View>
     
    </View>
  )
}

export default AppSplashScreen

const styles = StyleSheet.create({})