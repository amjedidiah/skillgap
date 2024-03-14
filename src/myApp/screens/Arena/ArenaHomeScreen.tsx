import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppCommonHeader from '@/myApp/components/AppCommonHeader'
import { Ionicons,MaterialIcons  } from '@expo/vector-icons'
import { ArenaCategoryModal, HeighestStakeListArenaComponent } from '@/myApp/components/ArenaComponents'
import { ArenaCategoryModalDataList, HeighestStakeContestData, gameData } from 'utils/data'
import { gameComponentPropType } from '@/myApp/types'
import GameComponent from '@/myApp/components/GameComponent'
import AppTextHeading from '@/myApp/components/AppTextHeading'
import { useNavigation } from '@react-navigation/native'

const ArenaHomeScreen = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

 

  const navigation = useNavigation()
  return (
    <SafeAreaView className='px-[16px] py-[8px] flex-1 bg-neutral-50'>
      {
      showModal && <ArenaCategoryModal showModal={showModal} setShowModal={setShowModal} ArenaCategoryModalDataList = {ArenaCategoryModalDataList}
        />
      }
     {/* header section */}
     <View className='mt-4'>
     <AppCommonHeader header='Arena' />
     </View>
     <View className='flex-row mt-[20px] items-center justify-between w-full ' >
    <TouchableOpacity
    onPress={() =>{
     setShowModal(!showModal);
    }}
    activeOpacity={0.8}
    className="flex-row items-center justify-start px-4 w-[161px] h-10 bg-gray-100 rounded-[10px]
    ">
    <Ionicons name="filter-outline" size={24} color="#6B7280" />
       <Text className="text-neutral-400 text-xs font-medium font-['GeneralSans-Regular'] leading-none ml-2">
        Categories
       </Text>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={() => navigation.navigate("arenaCreateContestScreen")}
    activeOpacity={0.8}
    className="flex-row items-center justify-center space-x-2 w-[161px] h-10 bg-sky-500 rounded-[10px]
    ">
   <MaterialIcons name="add" size={24} color="white" />
       <Text className="text-white text-xs font-medium font-['GeneralSans-Regular'] leading-none">
        Create Skill test
       </Text>
    </TouchableOpacity>
  
     </View>
     {/* header section end */}
     {/* heighest stake content section starts */}
   
     
    <View className='mt-8 mb-4'>
   
      <AppTextHeading  text='Highest Stake Contest' classText='text-[16px]' />
    
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={HeighestStakeContestData}
      renderItem={({item}) => {
      return  <HeighestStakeListArenaComponent
         amount={item.amount}
         heading={item.heading}
         userName={item.userName}
         active={true}
         userImage={item.userImage}
         logoImage={item.logoImage} 
         />
      }}
    
      ItemSeparatorComponent={() => <View className='w-[10px] h-full' />}
      />
    </View>
     {/* heighest stake contest section ends */}
      {/* contestant section starts */}
      <ScrollView className='flex-1 w-full'
      showsVerticalScrollIndicator={false}
      >
       {
       gameData.map((item )=> <GameComponent
       {...item}
       />) 
       }
      </ScrollView>

        {/* contestant section ends */}
    </SafeAreaView>
  )
}

export default ArenaHomeScreen