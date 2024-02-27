import {  createBottomTabNavigator } from "@react-navigation/bottom-tabs"



import {Image} from "react-native"
import ProfileScreen from "@/myApp/screens/welcome/ProfileScreen"
import HomeNavigation from "./HomeNavigation"
import WalletNavigation from "./WalletNavigation"
import ArenaNavigation from "./ArenaNavigation"
import NotificationNavigation from "./NotificationNavigation"
import ProfileNavigation from "./ProfileNavigation"






const Tab = createBottomTabNavigator()


const ButtonTapNavigation = () => (
    <Tab.Navigator
    initialRouteName="Home"
  screenOptions= {
    {
        headerShown:false,
        tabBarStyle:{
          height:60,
          flexDirection: "row",
          borderTopWidth:0.5,
          borderTopColor:"lightgray",

        },
        tabBarItemStyle:{
            margin:5,
          paddingBottom: 5,
          backgroundColor:"white"
        
        },
        tabBarLabelStyle:{
            fontSize:12,
            width:"100%"
        }

        

      }
  }
     
    >
        <Tab.Screen name="Home" component={HomeNavigation} 
        options={{
            tabBarIcon : ({size, color, focused}) =>   <Image
            source={!focused ? require('../assets/images/home.png') : require('../assets/images/homeActive.png')}
            style={{ width: 24, height: 24 }}
          />
            
        }}
        /> 
        <Tab.Screen name="Arena" component={ArenaNavigation} 
        options={{
            tabBarIcon : ({size, color, focused}) =>   <Image
            source={!focused ? require('../assets/images/global.png') : require('../assets/images/globalActive.png')}
            style={{ width: 24, height: 24 }}
          />
            
        }}
        /> 
        <Tab.Screen name="Notification" component={NotificationNavigation} 
        options={{
            tabBarIcon : ({size, color, focused}) =>   <Image
            source={!focused ? require('../assets/images/notification.png') : require('../assets/images/notificationActive.png')}
            style={{ width: 24, height: 24 }}
          />
        }}
        
        /> 

<Tab.Screen name="Wallet" component={WalletNavigation} 
        options={{
            tabBarIcon : ({size, color, focused}) =>   <Image
            source={!focused ? require('../assets/images/wallet.png') : require('../assets/images/walletActive.png')}
            style={{ width: 24, height: 24 }}
          />
        }}
        
        /> 
         <Tab.Screen name="Profile" component={ProfileNavigation} 
        options={{
           
            tabBarIcon : ({size, color, focused}) =>   <Image
            source={require('../assets/images/userProfile.png')}
            style={{ width: 24, height: 24 }}
          />
        }}
        
        /> 
    </Tab.Navigator>
)


export default ButtonTapNavigation