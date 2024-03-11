import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';


import AppTextHeading from '@/myApp/components/AppTextHeading'
import { homeCategoryData, homeContestData, homeLeaderData } from 'utils/data'
import Categories from '@/myApp/components/Categories'
import LeaderComp from '@/myApp/components/LeaderComp'
import ContestantComp from '@/myApp/components/ContestantComp'
import LeaderModalComp from '@/myApp/components/LeaderModalComp';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BackHandler } from 'react-native';




const HomeScreen = () => {

  // removing back naviagtion when pressing the back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Return true to prevent default back navigation
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  const [showModal, setShowModal] = useState(false)
const appUserStore = useSelector(data => data?.authReducer?.user)
const appUserStore2 = useSelector(data => data?.authReducer)
// console.log("this is appState", appUserStore2)
// authReducer": {"user":

const [userData, setUserData] = useState(null)


// seting the state of the application
useEffect(() => {

setUserData(appUserStore)
}, [])



  return (
    <SafeAreaView className='flex-1'>
        {/* add button start */}

        <TouchableOpacity onPress={() =>{
          console.log("pressed")
        }} className="w-12 h-12 px-2.5 py-2 bg-sky-500 rounded-[40px] shadow justify-center items-center absolute bottom-[50px] right-[20px] z-100 ">
        <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>

        {/* add button end */}
      <ScrollView className="px-6 py-4 ">
        {/* header starts */}
          <View className='flex-row items-center space-x-2'>
            <Image
            source={require("../../../../assets/images/skillGapLogo.png")}
            className="w-[24px] h-[24px]"
            />
            <AppTextHeading
            text='Skill Gap'
            classText="text-gray-950 text-base font-bold font-['GeneralSans-Bold'] leading-normal pl-[8px]"
            />

          </View>

          <View className='flex-row items-center  w-full mt-[14px] space-x-2'>

          <View className='items-center rounded-full w-[32px] h-[32px]'>
          <Image
            source={require("../../../../assets/images/userProfile.png")}
            className="w-[32px] h-[32px]"
            resizeMode='contain'
            />
            <View className='absolute bottom-[0px] -right-[3px] w-2.5 h-2.5 bg-emerald-500 rounded-[5px] border border-white z-5'  />
          </View>

          <View className='flex-row items-center'>
          <Text className="text-neutral-400 text-sm font-semibold font-['GeneralSans-Regular'] leading-normal">{userData?.firstName} , </Text>
         <Text className='text-gray-950 text-sm font-semibold font-["GeneralSans-Regular"] leading-normal'>{userData?.lastName} 🤩</Text>
       </View>
       
          </View>

      {/* balance start */}
          <View className="w-full h-[110px] mt-[12px] flex-row justify-center  ">
          <Image
            source={require("../../../../assets/images/WalletPic.png")}
            className="w-full h-[110px] rounded-md"
            />
          <View className='h-full p-[8px] left-0 right-0 absolute flex-row justify-between items-end'>
            <TouchableOpacity activeOpacity={0.8} onPress={() => {
              console.log("withdraw")
            }} className='px-[8px] py-[8px] rounded border border-white justify-center items-center space-x-1 flex-row '>
              <Text className="text-white text-[10px] font-medium font-['General Sans Variable'] leading-none">Withdraw</Text>
              <Image
            source={require("../../../../assets/images/send.png")}
            className="w-2.5 h-2.5 origin-top-left rotate-900 justify-center items-center inline-flex"
            />
            </TouchableOpacity>
          <View className="h-full items-center justify-between">
              <Text className="text-white text-[8px] font-medium font-['GeneralSans-Regular'] leading-non items-center">Wallet Balance</Text>
               
         
            <View  style={{
   alignSelf: 'flex-start'
}} className=' h-[32px]  flex-row mt-2'  >
<Text style={{
  fontFamily:"SpaceGrotesk-Regular"
}} className="text-white  text-[32px] font-bold font-['Space Grotesk'] leading-[32px]">$600</Text>
<Text style={{
  fontFamily:"SpaceGrotesk-Regular"
}} className="text-white  text-[16px] font-bold font-['Space Grotesk'] leading-loose  absolute  -right-[23px] top-[5px]">.24</Text>
</View>

            <Text className="text-white text-[10px] font-medium font-['General Sans Variable'] underline leading-none">
            Transaction History
            </Text>
            </View>
          
            <TouchableOpacity
             onPress={() => {
              console.log("deposit")
            }}
             activeOpacity={0.8} className='px-[8px] py-[8px] rounded justify-center items-center space-x-1 flex-row bg-white '>
              <Text className="text-fuchsia-600 text-[10px] font-medium font-['General Sans Variable'] leading-none"> Deposite</Text>
              <Image
            source={require("../../../../assets/images/received.png")}
            className="w-2.5 h-2.5  justify-center items-center inline-flex"
            />
            </TouchableOpacity>
          </View>
          </View>

{/* balance ends */}
        {/* header end */}

        {/* category start */}

        <View className='mt-4 w-full'>
            <AppTextHeading  text="Trending Categories" classText="text-gray-950 text-[20px] font-medium font-['General Sans Variable']" />


           <View className="mt-2">
           <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={homeCategoryData}
              ItemSeparatorComponent={() => <View
                
                className='w-[15px] h-full'/>}

            renderItem={({item}) => {
            
             return   <Categories
               heading={item?.heading}
               img={item?.img}
               numOfBets={item?.numOfBets}
               numOfUsers={item?.numOfUsers}
              
               />
            }}
            />
           </View>
        </View>
        {/* category ends */}

        {/* leader board starts */}

        <View className='mt-6'>
          <View className="flex-row items-center space-x-2">
            
            <AppTextHeading  text="Leader Board" classText="text-gray-950 text-[20px] font-medium font-['General Sans Variable']" />
            <Text className="text-neutral-400 text-[8px] font-medium font-['GeneralSans-Regular'] leading-[8px] italic ">
              (This Week)
            </Text>
          </View>

          <View className="mt-2">
           <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={homeLeaderData}
              ItemSeparatorComponent={() => <View
                
                className='w-[2px] h-full -z-10'/>}

            renderItem={({item}) => {
            
             return   <LeaderComp
               img={item.img}
               name={item.name}
               amount={item.amount}
               active={item.active}
               showModal = {showModal}
               setShowModal = {setShowModal}
             

               />
            }}
            />
           </View>
          
        </View>

        {/* leader board ends */}
        {/* contestant start */}

        <View className='mt-6 mb-[30px]'>
         
          <AppTextHeading  text="My Contest" classText="text-gray-950 text-[20px] font-medium font-['General Sans Variable']" />

          <View className="mt-2">
         
            {
              homeContestData.map(item => <ContestantComp
                active={item.active}
                cont1Name={item.cont1Name}
               cont2Name={item.cont2Name}
               content1Img={item.content1Im}
               content2Img={item.content2Im}
               heading={item.heading}
               key={item.key}
                 /> )
            }
           </View>
          
        </View>

        {/* contestant ends */}
{
  showModal && <LeaderModalComp setShowModal={setShowModal} showModal = {showModal} />
}
      
     
     </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen