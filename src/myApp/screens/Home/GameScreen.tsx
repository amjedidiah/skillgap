import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, FlatList, Dimensions, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


import GameComponent from '@/myApp/components/GameComponent'
import { filterModalDataByHash, gameData, gameMessageCompData, gameSearchModelResentData, gameSliderData } from 'utils/data'
import { gameComponentPropType } from '@/myApp/types'
import AppTextHeading from '@/myApp/components/AppTextHeading'
import GameModalComp from '@/myApp/components/GameModalComp'
import AppTextContent from '@/myApp/components/AppTextContent'
import AppButton from '@/myApp/components/AppButton'


const GameScreen = () => {
    const navigation = useNavigation()
    const [appData, setAppData] = useState<gameComponentPropType[]>(gameData)
    const [search, setSearch] = useState("")
    const [searchFilter, setSearchFilter] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [showFilterModal, setShowFilterModal] = useState(false)


// set tag width

const tagWidth = (Dimensions.get("window").width - 47) / 4

const filterAppData =() => {
  
    if(search){
        const myFilter = appData.filter(item => {
            if(item.name.toLowerCase().includes(search.toLowerCase()) || item.userName.toLowerCase().includes(search.toLowerCase())){
                return item
            }
        })
        setAppData(myFilter)
    }else{
        setAppData(gameData)
    }
     

}
useEffect(() => {
  
  filterAppData()
}, [search])


const getDeviceWidth = Dimensions.get("window").width 

const calcSliderWidth = (getDeviceWidth - 76 )/2

const modalHeight = (Dimensions.get("window").height * 3 ) / 4

  return (
    <View className='flex-1 w-full'>
        {
            showModal &&   <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            >
    <View className='flex-1 justify-end '>

    <View style={{
      
    }} className='rounded-t-[30px] bg-neutral-50 px-[16px] py-[20px]'>
        <View className="w-full flex-row justify-center items-center bg-neutral-50">
            <TouchableOpacity
          
            onPress={() => {
               setShowModal(!showModal)
            }}
            className="absolute left-0 px-4 ">
            <Ionicons name="chevron-back" size={24} color="black" />

            </TouchableOpacity >
            <Text className="text-gray-950 text-[20px] font-medium font-['GeneralSans-Medium'] leading-[20px]">
                iMessage Game
            </Text>
        </View>

       <GameModalComp  data = {gameMessageCompData} />
    
    </View>
    </View>
          
            </Modal>
           
        }

        {
          showFilterModal &&  
            // search section modal start
          <Modal
            animationType="slide"
            transparent={true}
            visible={showFilterModal}
            >
    <View className='flex-1 justify-end h-screen'>

    <View style={{
      
    }} className='rounded-t-[30px]  bg-white px-[16px] py-[20px]'>
        <View className="w-full flex-row justify-start items-center bg-neutral-50">
            <TouchableOpacity
          
            onPress={() => {
               setShowFilterModal(!showFilterModal)
            }}
            className=" px-4 mb-4">
            <Ionicons name="chevron-back" size={34} color="black" />

            </TouchableOpacity >
        </View>
        

{/* search section for the filter modal */}

<View className='flex-row space-x-1  w-full  px-2 py-1 bg-white rounded-2xl border border-indigo-50   items-center h-[50px]'>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput
         onChangeText={(data) => {
          setSearchFilter(data)
          }
           
          }
          placeholder={"Search"}
          placeholderTextColor={"gray"}
          cursorColor={"gray"}
          className="flex-1 text-gary-900"
          value={searchFilter}
        />
        <TouchableOpacity onPress={() => {
           setSearchFilter("")
        }}
        activeOpacity={0.8}
        >
       <MaterialIcons name="cancel" size={24} color="black" />
        </TouchableOpacity>
        </View>
{/* search section for filter modal end */}
     <View className='mt-4'>
     <AppTextHeading text='Recent'  />
     <View className='flex-row items-center justify-between'>
      {
        gameSearchModelResentData.map(item => <View key={item.key} className='flex-row items-center space-x-1 mt-4'>
         <Image
         source={item.img}
         className='w-[50px] h-[30px]'
         />
         <Text className="text-gray-950 text-sm font-medium font-['GeneralSans-Regular'] leading-[14px]">{item.ballNumber} Ball</Text>
      
        </View>)
      }
     </View>
     <View className='w-full mt-[32px]'>
     <AppTextHeading text='Filter By Hashtag' />
     <AppTextContent text='Choose atleast 2 Hashtags to help your search better' classText='w-full' />
     </View>
     {/* filter by hash start */}
     <View className="flex-row justify-between items-center mt-4">
   {
    filterModalDataByHash[0].map((i,k) =>  
    <View key={i.id}
    style={{
      borderStyle:"dashed",
      borderWidth: 2,
      width: tagWidth,
      borderColor:"#1D9BF0"
  
    }} className='py-1 bg-indigo-50 rounded-2xl    justify-center items-center'>
          <Text  className="text-sky-500 text-[10px] font-medium font-['General Sans Variable'] leading-[18px]" style={{borderStyle:"dotted"}}>{i.hash}</Text>
    </View>)
   }
   
    
     </View>

     <View className="flex-row justify-between items-center mt-4">
   {
    filterModalDataByHash[0].map((i,k) =>  
    <View key={i.id}
    style={{
      borderStyle:"dashed",
      borderWidth: 2,
      width: tagWidth,
      borderColor:"#1D9BF0"
  
    }} className='py-1 bg-indigo-50 rounded-2xl    justify-center items-center'>
          <Text  className="text-sky-500 text-[10px] font-medium font-['General Sans Variable'] leading-[18px]" >{i.hash}</Text>
    </View>)
   }
   
    
     </View>

     <View className="flex-row justify-between items-center mt-4">
   {
    filterModalDataByHash[2].map((i,k) =>  
    <View key={i.id}
    style={{
      borderStyle:"dashed",
      borderWidth: 2,
      width: tagWidth,
      borderColor:"#1D9BF0"
  
    }} className='py-1 bg-indigo-50 rounded-2xl    justify-center items-center'>
          <Text  className="text-sky-500 text-[10px] font-medium font-['General Sans Variable'] leading-[18px]" style={{borderStyle:"dotted"}}>{i.hash}</Text>
    </View>)
   }
   
    
     </View>
    {/* filter by hash emds */}
     <AppButton handleOnpress={() => {
      console.log("apply section clicked")
     }}  text='Apply' ButtonViewStyle='bg-sky-500 mt-[32px]' />
     </View>
    
    </View>
    </View>
          
            </Modal>

            // search section modal end
          }
        <View className="absolute top-[50px] left-[16px] flex-row items-center space-x-[24px] z-10 justify-center">
       <TouchableOpacity onPress={() => {
            navigation.goBack()
       }}>
       <Ionicons name="chevron-back" size={30} color="white" />
       </TouchableOpacity>
            <Text className="text-white text-[20px] font-semibold font-['GeneralSans-Regular'] leading-normal">
            Games
            </Text>
        </View>
      <Image 
      source={require("../../../../assets/images/gamePic.png")}
      className='w-full h-[210.9px]'
      />
  <View className='absolute px-[16px] top-[150px]'>
  <FlatList
  showsHorizontalScrollIndicator={false}
    horizontal={true}
    data={gameSliderData}
    ItemSeparatorComponent={() => <View className='w-[15px]' />}
    renderItem={({item}) => {
        return <View 
        style={{
            width:calcSliderWidth
        }}
        className={`rounded-[20px] overflow-hidden 
        h-[203px] `}>
             <TouchableOpacity  activeOpacity={0.8} onPress={() => {
              setShowModal(!showModal)
             }}>
             <Image
              source={item.img}
              className='w-full h-full'
              resizeMode='cover'
              
              />
             </TouchableOpacity>
        </View>
    }}
    
    />
  </View>
      {/* slider start */}

      {/* slider end */}
      {/* search section starts */}

      <View className="w-full flex-row items-center justify-between px-[16px]  mt-[170px]">
        <View>
         <AppTextHeading classText="text-gray-950 text-[18px] font-medium  leading-normal"  text={"Available Contest"} />
        </View>
        <View className='flex-row space-x-1  w-[200px]  px-2 py-1 bg-white rounded-2xl border border-indigo-50 justify-center items-center'>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput
         onChangeText={(data) => {
                setSearch(data)
          }
           
          }
          placeholder={"Search"}
          placeholderTextColor={"gray"}
          cursorColor={"gray"}
          className="flex-1 text-gary-900"
          value={search}
        />
        <TouchableOpacity onPress={() => {
           setShowFilterModal(!showFilterModal)
        }}>
        <Ionicons name="filter-outline" size={24} color="black" />
        </TouchableOpacity>
        </View>
      </View>

      {/* search section ends */}
      <ScrollView className='flex-1 w-full  px-[16px]'>
       {
       appData.length > 0 ?  appData.map((item : gameComponentPropType )=> <GameComponent
       {...item}
       />) :<View className='h-full w-full items-center justify-center flex-1'>
        <Text className="text-red-400">No Challange Present.</Text>
       </View>
       }
      </ScrollView>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({})