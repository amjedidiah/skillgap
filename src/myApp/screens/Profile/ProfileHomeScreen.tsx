import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import AppTextHeading from '@/myApp/components/AppTextHeading'
import AppTextContent from '@/myApp/components/AppTextContent'
import { UserProfileHomeSubMenuData1, UserProfileHomeSubMenuData2 } from 'utils/data'
import { DeleteAccountModalComp, PersonaliseSettingModalComp, UserProfileHomeSubMenuComp } from '@/myApp/components/UserProfileComp'



const ProfileHomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [personaliseSettingModal, setPersonaliseSettingModal] = useState<boolean>(false);

  const [translate, setTranslate] = useState(false);
  const [translate2, setTranslate2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const deviceWidth = (Dimensions.get("window").width)/2 - 50
  return (
    <View className='flex-1 bg-neutral-100'>
     <DeleteAccountModalComp showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />

     <PersonaliseSettingModalComp personaliseSettingModal={personaliseSettingModal}
     setPersonaliseSettingModal={setPersonaliseSettingModal}
     />
     
      <ScrollView
      >
        <View className='w-full h-[120px]'>
        <Image
      source={require("../../../../assets/images/arenaContest.png")}
      className='w-full h-full'
      />
        </View>

    <View style={{
        left: deviceWidth,
        top: 80
    }} className='w-[100px] h-[100px]   mx-auto absolute top-[100px] z-30  justify-center items-center '>
        
    <View className='w-3 h-3 rounded-full bg-green-500 absolute right-2 bottom-3' />
    </View>
    <View className=''>
    {/* user profile starts */}
     <View className='bg-white mx-[16px] mt-6 rounded-[20px]  px-[12px]'>
        {/* flag starts */}
     <View className='absolute right-3 top-3'>
       <Image
      source={require("../../../../assets/images/flag.png")}
      className='w-[24px] h-[24px]'
      />
       </View>
       {/* flag ends */}
       <View className='mt-12'>
        <AppTextHeading text='Wisdom Umana' classText='text-[14px] text-center w-full mb-0 pb-0' />
        <AppTextContent  text='@quibacs' classText='text-[14px] text-center w-full leading-[14px]' />
       </View>


      {/* starts */}

     

      {/* ends */}
       <View className='border h-12 mt-4 border-yellow-400 rounded-md flex-row items-center mx-auto  px-3'>
      <Image 
       source={require("../../../../assets/images/profileIcon.png")}
       className='w-[24px] h-[24px]'
      
      />
      <Text className="text-neutral-400 text-base font-normal font-['GeneralSans-Regular'] leading-snug ">200</Text>
      <TouchableOpacity className='pl-2'
      activeOpacity={0.8}
      onPress={() =>{
        console.log("pressed")
      }}
      >
    <Text className="text-neutral-600 text-base font-normal font-['GeneralSans-Regular'] leading-snug ">View Rewards</Text>

  </TouchableOpacity>
        </View>
       <View className='mt-4 flex-row items-center  justify-between w-full '>
        <View className='w-2/10'>
      <Text className={`text-gray-950 text-[12px] font-bold font-['SpaceGrotesk-SemiBold'] leading-loose text-center w-full`}>No. of dispute</Text>
      <Text className={`text-neutral-400 font-normal font-['GeneralSans-Regular'] leading-snug w-full text-center text-[12px]`}>12</Text>
        </View>

        <View className='w-2/10'>
      <Text className={`text-gray-950 text-[12px] font-bold font-['SpaceGrotesk-SemiBold'] leading-loose text-center w-full`}>No. of contest</Text>
      <Text className={`text-neutral-400 font-normal font-['GeneralSans-Regular'] leading-snug w-full text-center text-[12px]`}>12</Text>
        </View>
        <View className='w-2/10'>
      <Text className={`text-gray-950 text-[12px] font-bold font-['SpaceGrotesk-SemiBold'] leading-loose text-center w-full`}>No. of wins</Text>
      <Text className={`text-neutral-400 font-normal font-['GeneralSans-Regular'] leading-snug w-full text-center text-[12px]`}>12</Text>
        </View>
        <View className='w-2/10'>
      <Text className={`text-gray-950 text-[12px] font-bold font-['SpaceGrotesk-SemiBold'] leading-loose text-center w-full`}>No. of losses</Text>
      <Text className={`text-neutral-400 font-normal font-['GeneralSans-Regular'] leading-snug w-full text-center text-[12px]`}>12</Text>
        </View>
      

       </View>

       {/* user bio starts */}
       <View className='mt-4 px-1 py-4 bg-gray-100 mx-auto items-center rounded-lg'>
       <AppTextHeading text='Bio' classText='text-center text-xl' />
      <AppTextContent 
      classText='text-center mt-1 text-[14px]'
      text='I have been particularly impressed by your contributions in the team. Your skills and qualities have been invaluable to the team, and I am grateful for your contributions.'
      />


       </View>
       {/* user bio ends */}

{/* user social links starts */}
       <View className='mt-4 mb-6  mx-auto flex-row items-center space-x-3'>
       <Image
      source={require("../../../../assets/images/youtube.png")}
      className='w-[24px] h-[24px]'
      />
       <Image
      source={require("../../../../assets/images/twitter.png")}
      className='w-[20px] h-[20px]'
      />
       <Image
      source={require("../../../../assets/images/facebook.png")}
      className='w-[24px] h-[24px]'
      />
       <Image
      source={require("../../../../assets/images/instagram.png")}
      className='w-[24px] h-[24px]'
      />
       </View>
       {/* user social link ends */}

     </View>
    {/* user profile starts */}
    {/* switch section starts */}
    <View className='rounded-[20px] bg-white py-4 mt-4 mx-[16px] px-2'>
         {/* first switch starts */}
      <View className='items-start  justify-between flex-row w-full '>
        <View className='flex-1 justify-start'>
          <AppTextHeading text='Open to contest' classText='text-[16px] mb-1 leading-[16px]' />
          <AppTextContent text='This will enable other users know when you are available to take a challenge' classText='text-[12px] leading-[18px] w-full' />
        </View>
        <TouchableOpacity className='h-[20px] w-[24px] bg-green-700 rounded-md flex-row items-center px-[3px] ml-auto' 
      activeOpacity={0.8}
      onPress={() => {
        setTranslate(translate => !translate)
      }}>
        <View className={`w-[10px] h-[10px] bg-white rounded-full transaform ${translate && "translate-x-[8px]"}`} />
      </TouchableOpacity>
        <View>
      
    
        </View>
{/* firtst switch ends*/}
      </View>
      {/* first switch ends */}
      {/* second switch start */}
      <View className='items-start  justify-between flex-row w-full mt-4 '>
        <View className='flex-1 justify-start'>
          <AppTextHeading text='Light or Dark Mode' classText='text-[16px] mb-1 leading-[16px]' />
          <AppTextContent text='Be your own lead, switch any mode that matches your interest.' classText='text-[12px] leading-[18px] w-full' />
        </View>
        <TouchableOpacity className='h-[20px] w-[24px] bg-gray-500 rounded-md flex-row items-center px-[3px] ml-auto' 
      activeOpacity={0.8}
      onPress={() => {
        setTranslate2(translate2 => !translate2)
      }}>
        <View className={`w-[10px] h-[10px] bg-white rounded-full transaform ${translate2 && "translate-x-[8px]"}`} />
      </TouchableOpacity>
        <View>
      
    
        </View>
{/* firtst switch ends*/}
      </View>
      {/* second switch ends */}
    </View>

    {/* switch section ends */}
    {/* submenu starts */}
    <View className='mx-[16px] bg-white  rounded-[30px] mt-4 px-[16px] pb-[16px] '>
{
  UserProfileHomeSubMenuData1.map(item => <UserProfileHomeSubMenuComp 
  content={item.content}
  heading={item.heading}
  icon={item.icon}
  key={item.key}
  setPersonaliseSettingModal={setPersonaliseSettingModal}
  personaliseSettingModal={personaliseSettingModal}
  />)
}
    </View>
    
    {/* submenu ends */}

    {/* logOut start */}
    <View className='mx-[16px] bg-white  rounded-[30px] mt-4 px-[16px] pb-[16px]  mb-4'>
{
  UserProfileHomeSubMenuData2.map(item => <UserProfileHomeSubMenuComp 
  heading={item.heading}
  icon={item.icon}
  imgType={item.imgType}
  key={item.key}
  showDeleteModal={showDeleteModal}
  setShowDeleteModal={setShowDeleteModal}
  
  
  />)
}
    </View>

    {/* logOut ends */}
    </View>
      </ScrollView>
    </View>
  )
}

export default ProfileHomeScreen