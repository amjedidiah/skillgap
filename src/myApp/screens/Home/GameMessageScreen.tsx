// import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import GameComponent from '@/myApp/components/GameComponent'
// import { gameData, gameSliderData } from 'utils/data'
// import { gameComponentPropType } from '@/myApp/types'
// import AppTextHeading from '@/myApp/components/AppTextHeading'
// import { EvilIcons, Ionicons } from '@expo/vector-icons'
// import { useNavigation } from '@react-navigation/native'

// const GameMessageScreen = () => {
//     const navigation = useNavigation()
//     const [appData, setAppData] = useState<gameComponentPropType[]>(gameData)
//     const [search, setSearch] = useState("")

// const filterAppData =() => {
  
//     if(search){
//         const myFilter = appData.filter(item => {
//             if(item.name.toLowerCase().includes(search.toLowerCase()) || item.userName.toLowerCase().includes(search.toLowerCase())){
//                 return item
//             }
//         })
//         setAppData(myFilter)
//     }else{
//         setAppData(gameData)
//     }
     

// }
// useEffect(() => {
  
//   filterAppData()
// }, [search])


// const getDeviceWidth = Dimensions.get("window").width 

// const calcSliderWidth = (getDeviceWidth - 76 )/2

// console.log("this is the slider width: " + calcSliderWidth, getDeviceWidth)



//   return (
//     <View className='flex-1 w-full'>
//         <View className="absolute top-[50px] left-[16px] flex-row items-center space-x-[24px] z-10 justify-center">
//        <TouchableOpacity onPress={() => {
//             navigation.goBack()
//        }}>
//        <Ionicons name="chevron-back" size={30} color="white" />
//        </TouchableOpacity>
//             <Text className="text-white text-[20px] font-semibold font-['GeneralSans-Regular'] leading-normal">
//             Games
//             </Text>
//         </View>
//       <Image 
//       source={require("../../../../assets/images/gamePic.png")}
//       className='w-full h-[210.9px]'
//       />
//   <View className='absolute px-[16px] top-[150px]'>
//   <FlatList
//   showsHorizontalScrollIndicator={false}
//     horizontal={true}
//     data={gameSliderData}
//     ItemSeparatorComponent={() => <View className='w-[15px]' />}
//     renderItem={({item}) => {
//         return <View 
//         style={{
//             width:calcSliderWidth
//         }}
//         className={`rounded-[20px] overflow-hidden 
//         h-[203px] `}>
//               <Image
//               source={item.img}
//               className='w-full h-full'
//               resizeMode='cover'
              
//               />
//         </View>
//     }}
    
//     />
//   </View>
//       {/* slider start */}

//       {/* slider end */}
//       {/* serach section starts */}

//       <View className="w-full flex-row items-center justify-between px-[16px]  mt-[170px]">
//         <View>
//          <AppTextHeading classText="text-gray-950 text-[18px] font-medium  leading-normal"  text={"Available Contest"} />
//         </View>
//         <View className='flex-row space-x-1  w-[200px]  px-2 py-1 bg-white rounded-2xl border border-indigo-50 justify-center items-center'>
//         <EvilIcons name="search" size={24} color="black" />
//         <TextInput
//          onChangeText={(data) => {
//                 setSearch(data)
//           }
           
//           }
//           placeholder={"Search"}
//           placeholderTextColor={"gray"}
//           cursorColor={"gray"}
//           className="flex-1 text-gary-900"
//           value={search}
//         />
//         <TouchableOpacity onPress={() => {
//             console.log("filter pressed")
//         }}>
//         <Ionicons name="filter-outline" size={24} color="black" />
//         </TouchableOpacity>
//         </View>
//       </View>

//       {/* search section ends */}
//       <ScrollView className='flex-1 w-full  px-[16px]'>
//        {
//         appData.map((item : gameComponentPropType )=> <GameComponent
//             {...item}
//             />)
//        }
//       </ScrollView>
//     </View>
//   )
// }

// export default GameMessageScreen

// const styles = StyleSheet.create({})