import { View, Text, Image, ScrollView, Modal, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArenaCategoryModalPropTypes, ArenaMessageCompPropTypes, ContestModalCompPropTypes, HeighestStakeListArenaComponentPropTypes, gameComponentPropType } from '../types'
import AppTextHeading from './AppTextHeading'
import { AntDesign, MaterialIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons'

import AppTextContent from './AppTextContent'
import { filterByHashTagArenaArray, suCategoryArenaComponentData } from 'utils/data'
import AppButton from './AppButton'

export const HeighestStakeListArenaComponent = ({
    userImage, userName, active, amount,heading, logoImage
}: HeighestStakeListArenaComponentPropTypes) => {
 



    return (
    <View className='space-y-1 w-[118px] '>
        <Image
        source={logoImage}
        className='w-[118px] h-[153px] rounded-md'
        />
        <View className='w-[118px] '>
            <Text className="text-gray-950 text-[10px] font-bold font-['GeneralSans-Bold'] leading-[18px]">{heading}</Text>
           <View className='flex-row justify-between items-center w-full'>
           <View className="flex-row space-x-1">
                   <View className='w-[24px] h-[24px]'>
                   <Image
                    source={userImage}
                    className='w-[24px] h-[24px]'
                     />
                     <View className='bg-emerald-500 w-[8px] h-[8px] rounded-full border border-white border[1px] absolute right-0 bottom-[0px]' />
                   </View>
                   <View className='h-[24px] justify-between'>
                   <Text className="text-gray-950 text-[8px] font-medium font-['General Sans Variable'] leading-3">@{userName}</Text>
                  <View className='flex-row'>
                  <Text className="text-gray-950 text-[8px] font-medium font-['General Sans Variable'] leading-[8px]">Stake:$</Text>
                  <Text className="text-gray-950 text-[8px] font-medium font-['General Sans Variable'] leading-[8px]">{amount}</Text>
                  </View>
                   </View>
            </View>
            <View className="w-[30px] h-4 px-1 bg-green-100 rounded-[39px] border border-green-300 justify-center items-center">
            <Text className="text-lime-700 text-[6px] font-medium font-['General Sans Variable'] leading-3">
                {
                    !active ? "Offline" : "Online"
                }
            </Text>
            </View>
           </View>
        </View>

       
   
    </View>
  )
}

export const ArenaContestantComponent = ({active, amount, img, name, time, userName}: gameComponentPropType) => {
    return (
      <View className='w-full flex-row justify-between items-start mt-[18px] '>
          <View className='flex-row space-x-2 items-start'>
              {/* contestant img start */}
           <View className='flex-row'>
              <View className='relative left-[10px] w-[44px] h-[44px] z-10 '>
              <Image
              source={img}
              className='w-full h-full'
              />
              </View>
              <View className="w-[44px] h-[44px]  text-center bg-gray-200 text-base font-normal font-['GeneralSans-Regular'] leading-normal rounded-full justify-center items-center">
              <AntDesign name="question" size={24} color="black" />
              </View>
           </View>
           {/* contestant img end */}
           <View className="">
              <AppTextHeading  text={name} classText="text-gray-950 text-[16px] font-medium font-['General Sans Variable'] leading-[16px]" />
              <View className='flex-row items-center space-x-1'>
                  <Text className="text-neutral-400 text-[12px] font-medium font-['GeneralSans-Regular'] leading-[21px]">{userName}</Text>
                  <Text className="text-neutral-900 text-[12px] font-medium font-['GeneralSans-Regular'] leading-[12px]">vs</Text>
                  <AntDesign name="question" size={15} color="black" />
              </View>
              <View>
  
              </View>
           </View>
           <View className={`px-1 py-0.5 bg-indigo-50 rounded-[39px] border  justify-center border-sky-500 items-center  ml-4 ${active && "border-green-400"}`}>
            <Text className={` text-[6px] font-medium font-['GeneralSans-Regular '] text-sky-500 leading-3 ${active && "text-lime-700" }`}>{active ? "online" : "offline"}</Text>
            </View>
          </View>
          <View>
  <Text className="text-neutral-400 text-[12px] font-medium font-['GeneralSans-Regular'] leading-[12px]">{time} ago</Text>
  <Text className="text-sky-500 text-[15px] font-medium font-['GeneralSans-Medium Variable'] leading-[15px] py-1">${amount}</Text>
  
          </View>
      </View>
    )
}

export const ArenaCategoryModal = ({showModal, setShowModal, ArenaCategoryModalDataList,choosedCategory, setChoosedCategory}: ArenaCategoryModalPropTypes ) => {

 const deviceHeight = Dimensions.get("window").height


const [showSubCategory, setShowSubCategory] = useState(false)
const [subCategoryData, setSubCategoryData] = useState
(suCategoryArenaComponentData)
const [activeSubCateryList, setActiveSubCategoryList] = useState([])


const [showFilterModal, setShowFilterModal] = useState(false)
const [filteredByHashTagData, setFilteredByHashTagData] = useState(filterByHashTagArenaArray)

// Sets of category data start
const [categoryData, setCategoryData] = useState("")// done
const [filterData, setFilterData] = useState([])
const [subCategoryHeading1Data, setSubCategoryHeading1Data] = useState("")
const [subCategoryHeading2Data, setSubCategoryHeading2Data] = useState("")

// Sets of category data end



const handleSubCategoryDataFunc= (i:number) => {
  const newData = subCategoryData.filter( item => {
    if(item.key === i){
      item.active = true
      item.showSubList = true
     
      setActiveSubCategoryList(item.subList)
      return item
    }else{
      item.active = false
      item.showSubList = false
      return item
    }
  })
  setShowSubCategory(newData)
}


const selectFilteredDataFunct = (i: number) => {

  const newData = filteredByHashTagData.filter(item => {
    if(item.id === i){
      item.active ? item.active = false : item.active = true;
    return item
    }else{
        return item
    }
  })
   setFilteredByHashTagData(newData)
}


const clearAllFilteredDataByHashTagData = () =>{
  const newData = filteredByHashTagData.filter(item => {
    item.active = false;
    return item
  })
  setFilteredByHashTagData(newData);
}

useEffect(() => {

  const selectedHashTag = filterByHashTagArenaArray.filter(item => item.active == true);
  setFilterData(selectedHashTag)

},[filteredByHashTagData])



    return <Modal
    animationType="slide" transparent={true} visible={showModal}
    >


      {
        showFilterModal ? 
        <TouchableOpacity 
        activeOpacity={1}
        onPress= {() => {
          setShowModal(false)
        }} 
        style={{
          backgroundColor:"rgba(29,155,240,0.4)"
         }}
        className="h-screen bg-stone-600 justify-end ">
           <View className='px-[16px] pt-[20px] pb-[10px]  w-full bg-white  rounded-t-[30px]  z-10'>
             <View className='items-center justify-center w-full  bg-opacity-100 opacity-100 mt-[10px] mb-8'>
       <TouchableOpacity
       onPress={() => {
      setShowModal(!showModal)
       }}
       className='left-0 absolute z-10'>
       <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
       </TouchableOpacity>
      <AppTextHeading text='Filter' classText='text-center text--[18px]' />
              </View> 
              <View className='mb-8'>
                <AppTextHeading text='Selected Categories' classText='text-[18px]' />
                <AppTextContent text='All result from your selections ranging from main to sub categories' classText='text-[11px] w-full leading-[13px]' />
              </View>

              {/* filter list start */}
              <View className='flex-row justify-between items-center'>
                <View
                style={{
                  borderStyle:"dashed",
                  borderWidth: 2,
                  borderColor:"#6700D6"
                
                }}
                 className="w-[100px] h-8 rounded-2xl items-center  justify-center bg-purple-100">
                  <Text className="text-violet-700 text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px]">{categoryData}</Text>
                </View>
                <View className="w-[33px] h-[0px] origin-top-left rotate-[123.66deg] border border-neutral-400"></View>

                 <View
                style={{
                  borderStyle:"dashed",
                  borderWidth: 2,
                  borderColor:"#2A9D0D"
                
                }}
                 className="w-[100px] h-8 rounded-2xl items-center  justify-center bg-green-100 ">
                  <Text className="text-lime-700 text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px]">{subCategoryHeading1Data}</Text>
                </View>
                <View className="w-[33px] h-[0px] origin-top-left rotate-[123.66deg] border border-neutral-400"></View>

                <View
                style={{
                  borderStyle:"dashed",
                  borderWidth: 2,
                  borderColor:"#DBBC1C"
                
                }}
                 className="w-[100px] h-8 rounded-2xl items-center  justify-center bg-yellow-50  ">
                  <Text className="text-yellow-500  text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px]">{subCategoryHeading2Data}</Text>
                </View>
              </View>
              {/* filter list ends */}

              {/* filter by # tag section starts */}
              <View className='mt-8 mb-8'>
              <View className=''>
                <AppTextHeading text='Filter By Hashtags' classText='text-[18px]' />
                <AppTextContent text='Choose atleast 2 Hashtags to help your search better' classText='text-[11px] w-full leading-[13px]' />
              </View>


              <View className='flex-row justify-between mt-4'>
                {
                  filteredByHashTagData.slice(0,4).map(item => <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={() => {
                      selectFilteredDataFunct(item.id)
                    }}
                    style={{
                    borderStyle:"dotted",
                    borderWidth: 2,
                    borderColor:"gray"
                  
                  }} key={item.id} className={`w-[78px] h-[38px] rounded  justify-center items-center ${item.active && "bg-indigo-50"}`}>
                   <Text  className={`text-neutral-400 text-sm font-semibold font-['GeneralSans-Regular'] leading-[18px] ${item.active && "text-sky-500"}`}> #{item.text}</Text>
                  </TouchableOpacity> )
                }
              </View>

              <View className='flex-row justify-between mt-2'>
                {
                  filteredByHashTagData.slice(4,8).map(item => <TouchableOpacity  onPress={() => {
                    selectFilteredDataFunct(item.id)
                  }} style={{
                    borderStyle:"dotted",
                    borderWidth: 2,
                    borderColor:"gray"
                  
                  }} key={item.id} className={`w-[78px] h-[38px] rounded  justify-center items-center ${item.active && "bg-indigo-50"}`}>

                    
                   <Text  className={`text-neutral-400 text-sm font-semibold font-['GeneralSans-Regular'] leading-[18px] ${item.active && "text-sky-500"}`}> #{item.text}</Text>
                  </TouchableOpacity> )
                }
              </View>
              </View>
             
              <View className='flex-row justify-between items-center'>
                <AppButton text='Clear All'
                handleOnpress={() => {
                  clearAllFilteredDataByHashTagData()
                
                }}
                ButtonViewStyle='w-[119px] bg-white rounded-[32px] border border-sky-500 justify-center items-center'  
                ButtonTextStyle="text-sky-500"
                />
                <AppButton text='Apply' 
               
                
                 handleOnpress={() => {
                  console.log("just pressed now")
              setChoosedCategory({isCategorySet: true, categoryData:{
                categoryHeading: categoryData,
               subCategoryHeadingMajor:subCategoryHeading1Data,
               subCategoryHeadingMinor:subCategoryHeading2Data,
                categoryfilterByHashTag:[...filterData]
                } })
                
                 setShowModal(false)
               
                }}
                ButtonViewStyle='w-[216px] bg-sky-500' />
              </View>

              {/* filter by # tag section ends */}
          </View>
          
           </TouchableOpacity> :  
           showSubCategory ? 
           <TouchableOpacity
           activeOpacity={1}
        onPress= {() => {
          setShowModal(false)
        }} 
          style={{
            backgroundColor:"rgba(29,155,240,0.4)"
           }}
           className="h-screen  justify-end">
        <View className='px-[16px] pt-[20px] pb-[10px]  w-full bg-white  rounded-t-[30px]  z-10'>
        <View className='items-center justify-center w-full  bg-opacity-100 opacity-100 mt-[10px] mb-[20px]'>
       <TouchableOpacity
       onPress={() => {
       activeSubCateryList.length  ? setActiveSubCategoryList([]) : setShowSubCategory(!showSubCategory)
       }}
       className='left-0 absolute z-10'>
       <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
       </TouchableOpacity>
      <AppTextHeading text={"Sub Category"} classText='text-center text-[18px]' />
        </View>
        <ScrollView
        style={{
         maxHeight:(deviceHeight * 3 )/2
        }}
        className='space-y-2'>
          {
            activeSubCateryList.length ?  
            activeSubCateryList
            .map((item) => 
             <TouchableOpacity
            onPress={() => {
              setSubCategoryHeading2Data(item.heading)
             handleSubCategoryDataFunc(item.key)
          
             setShowFilterModal(true)
            }}
            activeOpacity={0.8}
            key={item.key} className='flex-row h-[41.5px]  items-center space-x-2 '>
             <Image
             source={item.img}
             className='w-[61px] h-[41.5px]'
             />
           <View className="flex-1 h-full justify-start space-y-2">
           <AppTextHeading text={item.heading} classText='text-sm'  />
        
           </View>
          

            </TouchableOpacity>
           
            ):
             subCategoryData
            .map((item) => 
             <TouchableOpacity
            onPress={() => {
           
             setSubCategoryHeading1Data(item.heading)
             handleSubCategoryDataFunc(item.key)
            }}
            activeOpacity={0.8}
            key={item.key} className='flex-row h-[41.5px]  items-center space-x-2 '>
             <Image
             source={item.img}
             className='w-[61px] h-[41.5px]'
             />
           <View className="flex-1 h-full justify-start space-y-2">
           <AppTextHeading text={item.heading} classText='text-sm'  />
        
           </View>
          {
           item.active &&   <View 
           className='h-full  justify-center items-center'
           >
             <SimpleLineIcons name="arrow-right" size={16} color="black" />
           </View>
          }

            </TouchableOpacity>
           
            )
          }
        </ScrollView>
      </View>
     </TouchableOpacity> : 
       <TouchableOpacity
       activeOpacity={1}
       onPress={() => {
        setShowModal(false)
       }}
       style={{
        backgroundColor:"rgba(29,155,240,0.4)"
       }}
     className="h-screen justify-end ">
      <View className='px-[16px] pt-[20px] pb-[10px]  w-full bg-white  rounded-t-[30px] z-10'>
        <View className='items-center justify-center w-full  bg-opacity-100 opacity-100 mt-[10px] mb-[20px]'>
       <TouchableOpacity
       onPress={() => {
        // closing the entire modal
          setShowModal(!showModal)
       }}
       className='left-0 absolute z-10'>
       <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
       </TouchableOpacity>
      <AppTextHeading text='Categories' classText='text-center' />
        </View>
        <ScrollView  style={{
         maxHeight: ( deviceHeight * 3) / 4
        }} className='space-y-4'>
          {
            ArenaCategoryModalDataList?.map(item => 
            <TouchableOpacity
            onPress={() => {
               setCategoryData(item.heading)
             setShowSubCategory(!showSubCategory)
            }}
            key={item.key} className='flex-row h-[70px]  items-center space-x-2'>
             <Image
             source={item.img}
             className='w-[108px] h-[70px]'
             />
           <View className="flex-1 h-full justify-start space-y-2">
           <AppTextHeading text={item.heading} classText='text-sm text-[18px]'  />
          <AppTextContent text={item.content} classText='text-[10px] w-full leading-[12px] text-left' />
           </View>
            <TouchableOpacity 
            className='h-full w-[31px] bg-violet-700 justify-center items-center
            rounded-tr-[10px] rounded-br-[10px]'
            >
              <SimpleLineIcons name="arrow-right" size={16} color="white" />
            </TouchableOpacity>

            </TouchableOpacity>)
          }
        </ScrollView>
      </View>

  </TouchableOpacity>
       
        
      }  
      

    </Modal>
}


export const ArenaMessageComp = ({time, img, content}:ArenaMessageCompPropTypes) => {
  
      return <View className=' w-full mt-4'>
       <AppTextContent text={time} classText='text-center  text-[7px] text-neutral-400' />
        <View className='flex-row items-starts space-x-1 items-start'>
         <View className='w-10 h-10 rounded-[100px]'>
         <Image source={img} className='w-full h-full' />
         </View>
          <View className='flex-1 px-1.5 pt-1.5 pb-2 bg-sky-500 rounded-lg justify-end items-center'>
         <Text className="text-white text-[11px] font-normal font-['General Sans Variable'] leading-[15px] text-left w-full">
          {content}
         </Text>
          </View>
        </View>
      </View>
    
  }


export const ContestModalComp = ({showModal, setShowModal}: ContestModalCompPropTypes) => {
   return <Modal
   animationType="slide"
   transparent={true}
   visible={showModal}
   >
 <View className='h-screen items-center justify-center px-[16px]' style={{
  backgroundColor:"rgba(29,155,240,0.2)"
 }}>
 <View className='p-2 rounded-xl  bg-white  h-[300px]'>
 <TouchableOpacity
 activeOpacity={0.8}
 onPress={() => {
 console.log("pressed")
 setShowModal(!showModal)

 }}
 className='absolute top-2 right-2'>
 <Image
  source={require("../../../assets/images/cancel.png")}
    className='w-8 h-8'
  />
 </TouchableOpacity>

<View className='flex-col justify-center items-center '>
<Image
  source={require("../../../assets/images/insufficientBalance.png")}
  className='w-[88px] h-[88px]'
  />

<AppTextHeading text="Ouch!" classText='mt-4 text-center' />

<AppTextContent  text='You don’t have any money in your wallet to join this contest' classText='text-center mt-4' />
</View>

<View className='w-full  flex-row'>
<AppButton text='Deposit Now' ButtonViewStyle='bg-sky-500 w-full mt-4'/>
</View>



    </View>
 </View>

   </Modal>
}

