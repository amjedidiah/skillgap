import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import ButtonTapNavigation from "./ButtomNavigation";
import { HomeStackNavigatorParamList } from "type";
import { useSelector } from "react-redux";
import { View } from "react-native-animatable";
import AuthNavigtion from "./AuthNavigation";
import { Magic } from "@magic-sdk/react-native-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OnboardingNavigtion from "./OnboardingNvigation";




function RouthPage() {

  const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();
  const [isAuthenticated, setIsAunthenticated] = useState(false)
  const [isAppLoaded, setAppLoaded] = useState(false)

  const isloggedIn = useSelector(data => data?.authReducer?.user)


  // chec if user has been previously logged in
  const appLoaded = useSelector(data => data?.authReducer?.isLoaded)

useEffect(() => {
  console.log(isloggedIn)
if(isloggedIn) {
setIsAunthenticated(true)
}else{
  setIsAunthenticated(false)
}
},[isloggedIn]);

useEffect(() => {
  console.log(isloggedIn)
if(appLoaded) {
  setAppLoaded(true)
}else{
  setAppLoaded(false)
}
},[appLoaded]);







const magic = new Magic("pk_live_AF0A2FCCABF5C8EF");
  return <SafeAreaProvider style={{
  flex: 1
 }}>

{/* Render the Magic iframe! */}
<magic.Relayer
/>
     {
      isAuthenticated ? <ButtonTapNavigation /> : appLoaded ? <AuthNavigtion /> :<OnboardingNavigtion />
     }
  </SafeAreaProvider>
  ;

}



export default RouthPage;
