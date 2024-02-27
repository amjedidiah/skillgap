import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppTextHeading from '@/myApp/components/AppTextHeading'
import { ArenaCategoryModalDataList, arenaContestHeadingData, personalSettingHeadingData } from 'utils/data'
import { Controller, useForm } from 'react-hook-form'
import { validationSchemaArenaCreateContest, validationSchemaBlockUser } from 'utils/YubValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { BlockUserModalComp, PersonalSettingBlockUserListComp } from '@/myApp/components/UserProfileComp'
import { ArenaCreateContestFormTypes, BlockUserModalCompPropTypes } from '@/myApp/types'
import { useNavigation } from '@react-navigation/native'
import AppTextContent from '@/myApp/components/AppTextContent'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { ArenaCategoryModal } from '@/myApp/components/ArenaComponents'


const ArenaCreateContestScreen= () => {


    const [onlineStatus, setOnlineStatus] = useState<{
        id: number,
        text:string,
        active:boolean
    }[]>(arenaContestHeadingData)

  // category state
  const [choosedCategory, setChoosedCategory] = useState({
    isCategorySet:false,
    categoryData: {
      categoryHeading: "",
      subCategoryHeadingMajor:"",
      subCategoryHeadingMinor:"",
      categoryfilterByHashTag:[""]
    }
  })

// spliting the hashTagDataArray into sub arrays with a maximum of 3 entries each


const handleSplitHashTagArrayFunc = () => {
  const hashTagArray = choosedCategory.categoryData.categoryfilterByHashTag
  const newArray = []
  while (hashTagArray.length) {
   if(hashTagArray.length == 3 || hashTagArray.length < 3){
            newArray.push([...hashTagArray])
            hashTagArray.splice(0,hashTagArray.length)
   }else{
    const addedArray = hashTagArray.slice(0, 3)
     newArray.push(addedArray)
     hashTagArray.splice(0,3)
   }

  }
  console.log("this is the hash tag array final", newArray)
}



useEffect(() =>{
  handleSplitHashTagArrayFunc()
},[choosedCategory])


  console.log("this is the list of hashTags",  choosedCategory.categoryData.categoryfilterByHashTag)
  console.log("final category from main: " + JSON.stringify(choosedCategory))


 const [translate, setTranslate] = useState(false);

    const handleOnlineStatusfunc = (i:number) => {
        const filterData = onlineStatus.filter(item => {
        if(item.id ===  i){
            item.active = true
            return item
        }else{
            item.active = false
            return item
        }
        })
        setOnlineStatus(filterData)
    
    }
    
    const [form, setForm] = useState<ArenaCreateContestFormTypes>({
      skillGapTag: "",
      stake:"",
      termsAndDescription:""
      });
  
  
    
    
const formOptions = { resolver: yupResolver(  validationSchemaArenaCreateContest) };
     const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm(formOptions);
    
      const onSubmit = (data: string) => {
        console.log(data)
      
      };
    

const navigation = useNavigation()
const [showModal, setShowModal] = useState(false)
  return (
   <SafeAreaView className='px-[16px] py-[12px]  flex-1' 
   >
    <ScrollView  showsVerticalScrollIndicator={false}>
    {
      showModal && <ArenaCategoryModal
      choosedCategory={choosedCategory}
      setChoosedCategory={setChoosedCategory}
      
      showModal={showModal} setShowModal={setShowModal} ArenaCategoryModalDataList = {ArenaCategoryModalDataList}
        />
      }
    {/* header section starts */}
    <View className='w-full flex-row items-center justify-center'>
        <TouchableOpacity
        onPress={() => {
         navigation.goBack()
        }}
        className='absolute left-0'>
        <Image 
      source={require("../../../../assets/images/arrow-left.png")}
      className='w-[24px] h-[24px]'
      />
        </TouchableOpacity>
        <AppTextHeading
        text='Create Contest'
        classText='text-center text-[18px] text-bold'
        />
    </View>
    {/* header section ends */}
    {/*online status starts*/}
   <View className='mt-4  h-12   bg-gray-200 justify-center flex-row items-center rounded-[40px] px-2 w-full '>
   {
  onlineStatus.map(item => <TouchableOpacity
  activeOpacity={0.8}
  onPress={() => {
    handleOnlineStatusfunc(item.id)
    if(item.id === 2){
      navigation.navigate("Profile", {screen:"personalisedSettingScreen"})
      const newData =  onlineStatus.filter(item => {
        if(item.id == 2){
          item.active = false
          return item
        }else{
          item.active = true
          return item
        }
      })
      setOnlineStatus(newData)
    }
  }}
     key={item.id}
    className={`flex-1 flex-row space-x-1 h-[34px]   justify-center items-center   rounded-[40px] ${item.active && "bg-white"}`}>
  <Text className="text-[12px] font-medium font-['Generalans-Regular'] leading-none text-neutral-400 capitalize">{item.text}</Text>
  </TouchableOpacity>)
}


   </View>
    {/*online status ends*/}

      {/* switch section starts */}
      <View className='rounded-[20px] bg-white py-10 mt-4  px-4'>
         {/* first switch starts */}
      <View className='items-start  justify-between flex-row w-full '>
        <View className='flex-1 justify-start'>
          <AppTextHeading text='Open challange' classText='text-[16px] mb-1 leading-[16px]' />
          <AppTextContent text='This will enable you to invite other users to join your contest' classText='text-[12px] leading-[18px] w-full' />
        </View>
        <TouchableOpacity className={`h-[20px] w-[24px] bg-slate-500  rounded-md flex-row items-center px-[3px] ml-auto ${translate && "bg-green-700" }`} 
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

      {/* skillgaptag start */}
      <View className={`w-full mt-4 ${translate && "bg-slate-200 opacity-20"}`}>
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans']">
                  {"Opponent’s skillgap tag"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, skillGapTag: data
                       })
                        onChange(data)
          
                      }}

                      value={value}
                      placeholder={"e.g @skillGap"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900"
                      onBlur={onBlur}
                      keyboardType={"default"}
                      editable={translate ? false : true}
                    />
                  </View>
                )}
                name={"skillGapTag"}
              />

              <View className="w-[327px]">
                {errors.skillGapTag && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.skillGapTag.message}
                  </Text>
                )}
              </View>
            </View>
          </View>
          {/*skillgap tag  end */}
    
    </View>

    {/* switch section ends */}
<View>
{
   !choosedCategory.isCategorySet ?  
   <TouchableOpacity
   onPress={() => {
     setChoosedCategory({
       isCategorySet:false,
       categoryData: {
         categoryHeading: "",
         subCategoryHeadingMajor:"",
         subCategoryHeadingMinor:"",
         categoryfilterByHashTag:[""]
       }
     })
   setShowModal(true)
   }}
   activeOpacity={0.8}
   className='rounded-[20px] bg-white py-3 mt-4  px-4 flex-row items-center justify-between'>
     <View className='flex-row items-center space-x-2'>
     <Ionicons name="filter-outline" size={24} color="#6B7280" />
        <Text className="text-neutral-400 text-sm font-medium font-['GeneralSans-Regular'] leading-none">
         Categories
        </Text>
     </View>
     <Entypo name="chevron-thin-down" size={20} color="black" />
 
   </TouchableOpacity>
      :  <View className="rounded-[20px] bg-white py-10 mt-4  px-4">
       <TouchableOpacity activeOpacity={0.4} onPress={() => {
         setShowModal(true)
       }} className="absolute top-4 right-6">
       <Image source={require("../../../../assets/images/edit.png")}
       className='w-4 h-4' />
       </TouchableOpacity>
     <View className='mb-6 '>
                  <AppTextHeading text='Selected Categories' classText='text-[18px]' />
                  <AppTextContent text='All result from your selections ranging from main to sub categories' classText='text-[11px] w-full leading-[13px]' />
                </View>
  
                {/* filter list start */}
                <View className='flex-row justify-between items-center  '>
                  <View
                  style={{
                    borderStyle:"dashed",
                    borderWidth: 2,
                    borderColor:"#6700D6"
                  
                  }}
                   className="w-[80px] h-8 rounded-2xl items-center  justify-center bg-purple-100 ">
                    <Text className="text-violet-700 text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">{choosedCategory.categoryData.categoryHeading}</Text>
                  </View>
                  <View className="w-[30px] h-[0px] origin-top-left rotate-[123.66deg] border border-neutral-400"></View>
  
                   <View
                  style={{
                    borderStyle:"dashed",
                    borderWidth: 2,
                    borderColor:"#2A9D0D"
                  
                  }}
                   className="w-[80px] h-8 rounded-2xl items-center  justify-center bg-green-100 ">
                    <Text className="text-lime-700 text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px]">{choosedCategory.categoryData.subCategoryHeadingMajor}</Text>
                  </View>
                  <View className="w-[30px] h-[0px] origin-top-left rotate-[123.66deg] border border-neutral-400"></View>
  
                  <View
                  style={{
                    borderStyle:"dashed",
                    borderWidth: 2,
                    borderColor:"#DBBC1C"
                  
                  }}
                   className="w-[80px] h-8 rounded-2xl items-center  justify-center bg-yellow-50  ">
                    <Text className="text-yellow-500  text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px]">{choosedCategory.categoryData.subCategoryHeadingMinor}</Text>
                  </View>
                </View>
                {/* filter list ends */}
                {/* list of selected hashTags starts */}
             {
              choosedCategory.categoryData.categoryfilterByHashTag.length &&  <View className="mt-4">
              <AppTextHeading text='Hashtags' classText='text-[16px]'  />
              <View>
                {
                  choosedCategory.categoryData.categoryfilterByHashTag.map(item=> 
                  <TouchableOpacity key={item.id}>
                     <View
                  style={{
                    borderStyle:"dashed",
                    borderWidth: 2,
                    borderColor:"#6700D6"
                  
                  }}
                   className="w-[80px] h-8 rounded-2xl items-center  justify-center bg-purple-100 ">
                    <Text className="text-violet-700 text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">{item.text}</Text>
                  </View>

                  </TouchableOpacity>)
                }
              </View>
              </View>
             }

                {/* list of selected hashTags ends */}
     </View>
   
  
}
</View>
  


   {/* stake and termsOfDescription starts */}
 <View className='rounded-[20px] bg-white py-5 mt-4  px-4'>
      
      {/* stake start */}
      <View className={`w-full  "bg-slate-200 opacity-20"}`}>
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2 w-full ">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans'] w-full">
                  {"Stake"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, stake: data
                       })
                        onChange(data)
          
                      }}

                      value={value}
                      placeholder={"e.g $500"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900"
                      onBlur={onBlur}
                      keyboardType={"phone-pad"}
                    />
                  </View>
                )}
                name={"stake"}
              />

              <View className="w-full">
                {errors.stake && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.stake.message}
                  </Text>
                )}
              </View>
            </View>
          </View>
          {/*stake end */}


           {/* terms and condition start */}
      <View className={`w-full mt-4 "bg-slate-200 opacity-20"}`}>
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-2 w-full ">
                <Text className="text-gray-950 text-sm font-normal font-['Noto Sans'] w-full">
                  {"Terms And Description"}
                </Text>
              </View>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="w-full h-40 px-2 py-2 text-white  flex-row items-start justify-start space-x-2 
                    bg-white rounded-[20px] shadow border border-gray-300 overflow-hidden 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                         if(form.termsAndDescription.length <= 50){
                            setForm({
                                ...form, termsAndDescription: data
                               })
                                onChange(data)
                         }
                     
          
                      }}
                       numberOfLines={10}
                      value={value}
                      placeholder={""}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gray-900 h-39 items-start"
                      onBlur={onBlur}
                      keyboardType={"default"}
                      multiline
                      textAlignVertical="top"
                      maxLength={50}
                    />
                  </View>
                )}
                name={"termsAndDescription"}
              />

              <View className="w-full ">
               <Text className={`text-right  text-base font-normal font-['GeneralSans-Regular'] leading-snug ${form.termsAndDescription.length == 50 ? "text-red-400" :"text-neutral-400"}`}>
                  {form.termsAndDescription ? form.termsAndDescription.length : 0}/50 characters
               </Text>
              </View>
              <View className="w-full">
                {errors.termsAndDescription && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.termsAndDescription.message}
                  </Text>
                )}
              </View>
            </View>
          </View>
          {/*terms and condition ends */}

         
    </View>

     {/* done utton starts */}
     <TouchableOpacity
          activeOpacity={0.5}
            onPress={handleSubmit(onSubmit)}
            className={`w-full px-2.5 py-4 bg-sky-500 rounded-[40px] justify-center items-center mt-8`}
          >
            <Text className="text-center text-white text-sm font-medium font-['GeneralSans-Regular'] leading-normal">
            Done
            </Text>
          </TouchableOpacity>
    {/* done utton ends */}

{/*stake and termsOfDescription ends  */}
    </ScrollView>
   </SafeAreaView>
  )
}

export default ArenaCreateContestScreen