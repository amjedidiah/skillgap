import { View, Text, FlatList } from 'react-native'
import React from 'react'
import AuthHeader from '@/myApp/components/AuthHeader'
import { SimpleLineIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NotificationMessageComp } from '@/myApp/components/NotificationComp'
import { NotificationMessageData } from 'utils/data'

const NotificationMessageScreen = () => {
  // NotificationMessageData
  const navigation = useNavigation()
  return (
    <SafeAreaView className='flex-1 px-[16px] py-[16px]'>
      <View className='items-center justify-center'>
      <View className='absolute left-0'>
      <SimpleLineIcons name="arrow-left" size={18} color="black" />
      </View>
      <Text className="text-gray-950 text-base font-semibold font-['GeneralSans-Bold'] leading-normal">
      Notifications
      </Text>
      </View>

     <FlatList
     data={NotificationMessageData}
     renderItem ={({item}) => {
      return <NotificationMessageComp isContest={item.isContest} category={item.category} content={item.content} img={item.img} time={item.time} 
      userName={item.userName}  heading={item.heading} />

     }}
     
     />
     
    </SafeAreaView>
  )
}

export default NotificationMessageScreen