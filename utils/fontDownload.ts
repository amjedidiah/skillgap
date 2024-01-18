import * as Font from "expo-font"

export const loadFont = async () => {
   await Font.loadAsync({
     
      "GeneralSans-Bold" : require("../assets/fonts/GeneralSans-Bold.otf"),
      "GeneralSans-BoldItalic" : require("../assets/fonts/GeneralSans-BoldItalic.otf"),
    "GeneralSans-Extralight" : require("../assets/fonts/GeneralSans-Extralight.otf"),
    "GeneralSans-Italic" : require("../assets/fonts/GeneralSans-Italic.otf"),
    "GeneralSans-Light" : require("../assets/fonts/GeneralSans-Light.otf"),
    "GeneralSans-LightItalic" : require("../assets/fonts/GeneralSans-LightItalic.otf"),
    "GeneralSans-Medium" : require("../assets/fonts/GeneralSans-Medium.otf"),
    "GeneralSans-MediumItalic" : require("../assets/fonts/GeneralSans-MediumItalic.otf"),
    "GeneralSans-Regular" : require("../assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-Semibold" : require("../assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-SmiboldItalic" : require("../assets/fonts/GeneralSans-SemiboldItalic.otf"),
    "Nunito-Black" : require("../assets/fonts/Nunito-Black.ttf"),
    "Nunito-BlackItalic" : require("../assets/fonts/Nunito-BlackItalic.ttf"),
    "Nunito-Bold" : require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-BoldItalic" : require("../assets/fonts/Nunito-BoldItalic.ttf"),
    "Nunito-ExtraBold" : require("../assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-ExtraBoldItalic" : require("../assets/fonts/Nunito-ExtraBoldItalic.ttf"),
    "Nunito-Italic" : require("../assets/fonts/Nunito-Italic.ttf"),
    "Nunito-Light" : require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-LightItalic" : require("../assets/fonts/Nunito-LightItalic.ttf"),
    "Nunito-Medium" : require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular" : require("../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold" : require("../assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-SemiBoldItalic" : require("../assets/fonts/Nunito-SemiBoldItalic.ttf"),
    "SpaceGrotesk-Bold" : require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
    "SpaceGrotesk-Light" : require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    "SpaceGrotesk-Medium" : require("../assets/fonts/SpaceGrotesk-Medium.ttf"),
    "SpaceGrotesk-Regular" : require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-SemiBold" : require("../assets/fonts/SpaceGrotesk-SemiBold.ttf")
   })
}


