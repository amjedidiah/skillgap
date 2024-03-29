import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';


import AppTextHeading from '@/myApp/components/AppTextHeading'
import { homeCategoryData, homeContestData, homeLeaderData } from 'utils/data'
import Categories from '@/myApp/components/Categories'
import LeaderComp from '@/myApp/components/LeaderComp'
import ContestantComp from '@/myApp/components/ContestantComp'
import LeaderModalComp from '@/myApp/components/LeaderModalComp';
import { useSelector, useDispatch } from 'react-redux';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppTextContent from '@/myApp/components/AppTextContent';
import { getAllUserContest } from '@/api/contestApi';
import { getAllContestAction } from 'redux/slices/userSlice';
import Toast from 'react-native-toast-message';
import { useMutation } from '@tanstack/react-query';
import SkeletonLoader from '@/myApp/components/SkeletonLoader';




const HomeScreen = () => {

 const dispatch = useDispatch()

 const [isContestReady, setIsContestReady] = useState(false)
 const [isContestLoading, setIsContestLoading] = useState(false)



const navigation = useNavigation()

const [showModal, setShowModal] = useState(false)
const appUserStore = useSelector(data => data?.authReducer?.user)
const appUserContest = useSelector(data => data?.userReducer?.contest)
  // removing back naviagtion when pressing the back button

// console.log("this is the appDataStore", appUserStore)
// console.log("this are the  contest", appUserContest)
  const getAllContestMutation = useMutation({
    mutationKey:["getAll-contest"],
    mutationFn: getAllUserContest
  })

  const {data,isSuccess, isError, isPending, error} = getAllContestMutation




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

  useEffect(() => {
     if(isSuccess){
     setIsContestLoading(false);
      setIsContestReady(true)
      dispatch(getAllContestAction(data?.allContest))
     }
     if(isError){
      console.log("ran error");
      setIsContestLoading(false)
      const errorMessage = error?.response?.data.message ||  error?.message
      Toast.show({
        type:"error",
        text1:"Sign In Error",
        text2:errorMessage,
        visibilityTime: 4000,
        position:"top",
        topOffset: StatusBar.currentHeight + 16,
        text1Style: {
          fontSize: 14,
          fontWeight: 'bold',
          color:"red"
        },
        text2Style: {
          fontSize: 12,
          fontWeight: 'bold',
          color:"gray"
        },
       
      })
     }
     if(isPending){
      
     setIsContestLoading(true)
     }
  }, [isSuccess, isError, isPending])

  useEffect(() => {
   
    const handleContestFunc = async() => {
  try {

     await getAllContestMutation.mutateAsync({email: appUserStore?.userEmail})
    
  } catch (error) {
    console.log("ran in errror")
    const errorMessage = error?.response?.data?.message ||  error?.message
    Toast.show({
      type:"error",
      text1:"Contest fetch error",
      text2:errorMessage,
      visibilityTime: 4000,
      position:"top",
      topOffset: StatusBar.currentHeight && StatusBar.currentHeight + 16,
      text1Style: {
        fontSize: 14,
        fontWeight: 'bold',
        color:"red"
      },
      text2Style: {
        fontSize: 12,
        fontWeight: 'bold',
        color:"gray"
      },
     
    })
  }
    }
     handleContestFunc()
  },[])
  



// console.log("appUserContest", appUserContest)
const [userData, setUserData] = useState(null)


// seting the state of the application
useEffect(() => {

setUserData(appUserStore)
}, [appUserStore])


  return (
    <SafeAreaView className='flex-1 bg-neutral-100'>
        {/* add button start */}
        <TouchableOpacity 
        activeOpacity={0.9}
        onPress={() =>{
        navigation.navigate("Arena",
        {
          screen: "arenaCreateContestScreen"
         }
        )
        }} className="w-12 h-12 px-2.5 py-2 bg-sky-500 rounded-[40px] shadow justify-center items-center absolute bottom-[50px] right-[20px] z-10 ">
        <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>

        {/* add button end */}
      <ScrollView className="py-4" showsVerticalScrollIndicator={false}>
        {/* header starts */}
          <View className='flex-row items-center space-x-2 px-6 '>
            <Image
            source={require("../../../../assets/images/skillGapLogo.png")}
            className="w-[24px] h-[24px]"
            />
            <AppTextHeading
            text='Skill Gap'
            classText="text-gray-950 text-base font-bold font-['GeneralSans-Bold'] leading-normal pl-[8px]"
            />

          </View>
          <View className="bg-white rounded-md px-6 py-2 my-4">
                  <View className='flex-row items-center  w-full mt-[14px] space-x-2 bg-white'>

                  <View className='items-center rounded-full w-[32px] h-[32px]'>
                
                  <Image
                    source={ appUserStore?.profilePic ? {
                      uri: appUserStore?.profilePic
                    } : require("../../../../assets/images/userProfile.png")}
                    className="w-[32px] h-[32px]"
                    resizeMode='contain'
                    />
                    <View className='absolute bottom-[0px] -right-[3px] w-2.5 h-2.5 bg-emerald-500 rounded-[5px] border border-white z-5'  />
                  </View>

                  <View className='flex-row items-center'>
                  <Text className="text-neutral-400 text-sm font-semibold font-['GeneralSans-Regular'] leading-normal">Howdy, </Text>
                <Text className='text-gray-950 text-sm font-semibold font-["GeneralSans-Regular"] leading-normal'>{userData?.firstName} 🤩</Text>
              </View>
              
                  </View>

              {/* balance start */}
                  <View className="w-full h-[110px] mt-[12px] flex-row justify-center ">
                  <Image
                    source={require("../../../../assets/images/WalletPic2.png")}
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
        }} className="text-white  text-[32px] font-bold font-['Space Grotesk'] leading-[32px]">${userData?.balance ? userData.balance : "00"}</Text>
        <Text style={{
          fontFamily:"SpaceGrotesk-Regular"
        }} className="text-white  text-[16px] font-bold font-['Space Grotesk'] leading-loose  absolute  -right-[22px] top-[5px]">.00</Text>
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
          </View>
{/* balance ends */}
        {/* header end */}

        {/* category start */}

        <View className='mt-4 w-full pl-6 py-2  bg-white'>
            <AppTextHeading  text="Trending Categories" classText="text-gray-950 text-[20px] font-medium font-['General Sans Variable']" />


           <View className="mt-2">
           <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={homeCategoryData}
              ItemSeparatorComponent={() => <View
                className='w-[8.03px] h-full'/>}

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

        <View className='mt-6 pl-6 py-2 bg-white '>
          <View className="flex-row items-center space-x-2">

            <Text
            style={{
              // fontFamily:"SpaceGrotesk-Bold"
            }}
            className="text-gray-950 text-sm font-Bold font-['General Sans Variable']">
            Leader Board
            </Text>
            <Text className="text-neutral-400 text-[10px] font-medium font-['GeneralSans-LightItalic'] leading-[10px] italic">
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
               ranking={item.key}
             

               />
            }}
            />
           </View>
          
        </View>

        {/* leader board ends */}
        {/* contestant start */}

        <View className='mt-6 mb-[30px] px-6 bg-white py-2'>
         
          <AppTextHeading  text="My Contest" classText="text-gray-950 text-[20px] font-medium font-['General Sans Variable']" />


          <View className="mt-2">
            {
              isContestLoading ? <SkeletonLoader /> :  appUserContest.length > 0 ?   appUserContest?.map((item)=> {
                return <ContestantComp
                allItem = {item}
                active={item.isOnline}
                cont1Name={item.userSkillGapTag}
               cont2Name={item.opponentSkillGapTag || null}
               content1Img={item.content1Im}
               content2Img={item.content2Im}
               heading={item.category}
               key={item.id}
               amount={item.stake}
               contestStatus={item.contestStatus}
               contestType = {item.contestType}
               opponentProfilePicAndSkillGapTagArray = {item.opponentProfilePicAndSkillGapTagArray}
                 />
              } ) : <View className="items-center justify-center  h-[200px]">
                  <Text className="text-gray-950 text-[16px] font-medium font-['General Sans Variable'] leading-normal">
                  Ouch!
                  </Text>
                 <AppTextContent text='You don’t have an active contest now 'classText="text-center text-neutral-400 text-sm font-medium font-['General Sans Variable'] leading-norma text-center"  />
                 <View className="flex-row space-x-1">
                  <TouchableOpacity
                
                   onPress={() =>{
                    navigation.navigate("Arena",
                    {
                      screen: "arenaCreateContestScreen"
                     }
                    )
                    }} 
                  >
                    <Text className="text-sky-500 text-sm font-medium font-['General Sans Variable'] leading-normal w-14 text-center">Create</Text>
                  </TouchableOpacity>
                  <Text className=" text-neutral-400 text-sm font-medium font-['General Sans Variable'] leading-norma">or</Text>
                  <TouchableOpacity>
                  <Text className="text-sky-500 text-sm font-medium font-['General Sans Variable'] leading-normal">Join</Text>
                  </TouchableOpacity>
                  <Text className=" text-neutral-400 text-sm font-medium font-['General Sans Variable'] leading-normal w-16 ">contest</Text>
                 </View>

              </View>
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