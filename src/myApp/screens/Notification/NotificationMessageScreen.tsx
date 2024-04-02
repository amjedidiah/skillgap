import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthHeader from '@/myApp/components/AuthHeader'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NotificationMessageComp } from '@/myApp/components/NotificationComp'
import { NotificationMessageData } from 'utils/data'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

const NotificationMessageScreen = () => {
  // NotificationMessageData

  const [notifications, setNotifications] = useState<[]>([])
  const navigation = useNavigation()
const notificationArray = useSelector(state => state?.userReducer?.notification)
  const  router = useRoute()
useEffect(() => {
 setNotifications(notificationArray)
},[])
console.log("this is the notification list",notifications)
  return (
    <SafeAreaView className='flex-1 px-[16px] py-[16px]'>
        {/* add button start */}
    
        <TouchableOpacity onPress={() =>{
        navigation.navigate("Arena",
        {
          screen: "arenaCreateContestScreen"
         }
        )
        }} className="w-12 h-12 px-2.5 py-2 bg-sky-500 rounded-[40px] shadow justify-center items-center absolute bottom-[50px] right-[20px] z-10 ">
        <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>

        {/* add button end */}
      <View className='items-center justify-center'>
      <View className='absolute left-0'>
      <SimpleLineIcons name="arrow-left" size={18} color="black" />
      </View>
      <Text className="text-gray-950 text-base font-semibold font-['GeneralSans-Bold'] leading-normal">
      Notifications
      </Text>
      </View>

     {
      notifications ? <FlatList
      data={NotificationMessageData}
      renderItem ={({item}) => {
       return <NotificationMessageComp isContest={item.isContest} category={item.category} content={item.content} img={item.img} time={item.time} 
       userName={item.userName}  heading={item.heading} />
 
      }}
      
      /> : <View><Text>No Notification found</Text></View>
     }
     
    </SafeAreaView>
  )
}

export default NotificationMessageScreen