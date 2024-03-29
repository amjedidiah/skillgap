import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StatusBar, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppTextHeading from '@/myApp/components/AppTextHeading'
import { ArenaCategoryModalDataList, arenaContestHeadingData } from 'utils/data'
import { Controller, useForm } from 'react-hook-form'
import { validationSchemaArenaCreateContest, validationSchemaArenaCreateContest2} from 'utils/YubValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import {createCreatestAction} from "../../../../redux/slices/userSlice"
import { ArenaCreateContestFormTypes } from '@/myApp/types'
import { useNavigation } from '@react-navigation/native'
import AppTextContent from '@/myApp/components/AppTextContent'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { ArenaCategoryModal } from '@/myApp/components/ArenaComponents'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useMutation } from '@tanstack/react-query'
import { createContestApi } from '@/api/contestApi'
import Toast from 'react-native-toast-message'
import {useDispatch, useSelector} from "react-redux"
import { updateUserBalanceAction } from 'redux/slices/authSlice'


const ArenaCreateContestScreen= () => {
  
  const dispatch = useDispatch()

  const appUserStore = useSelector(data => data?.authReducer?.user)


    const [onlineStatus, setOnlineStatus] = useState<{
        id: number,
        text:string,
        active:boolean
    }[]>(arenaContestHeadingData)



    // hashTags update
    const [hashTagList, setHashTagList] = useState<any[] | []>([])
    const [hashTagListUpate, setHashTagListUpate] = useState<any[]>([])
    const [runUseEffect, setRunUseEffect] = useState<boolean>(false)
    const [hashTagFilterList, setHashTagFilterList] = useState<any[]>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [errorType, setErrorType] = useState<null | string>(null)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [updateHashTag, setUpdateHashTag] = useState<boolean>(false)
    const [isBalanceSufficient, setIsBalanceSufficent] = useState<boolean>(true)
    const [balanceErrorMessage, setBalanceErrorMessage] = useState<string>("")
  
  
  

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


 
console.log("updated hashList",choosedCategory.categoryData.categoryfilterByHashTag)



const handleDeleteHashTag = (index: number) => {
    const newHashTag = hashTagFilterList.filter(i => i.id  !== index)
    console.log("newHashTag",newHashTag)
    choosedCategory.categoryData.categoryfilterByHashTag = newHashTag
    setUpdateHashTag(!updateHashTag)
} 
  // obtaining app state
  const {userEmail: email} = useSelector(data => data?.authReducer?.user)
  // console.log("createContest app state", email)

// spliting the hashTagDataArray into sub arrays with a maximum of 3 entries each




const handleSplitHashTagArrayFunc = () => {
  const arrayForFilter = []
if(choosedCategory.categoryData.categoryfilterByHashTag.length > 0){
    const formatedHashTag: any[] = []
  choosedCategory.categoryData.categoryfilterByHashTag.forEach(item => {
    formatedHashTag.push(`#${item?.text}`)
    arrayForFilter.push(item)
  })
 
  setHashTagFilterList([...arrayForFilter])
  setHashTagListUpate([...formatedHashTag])
}

  const hashTagArray = choosedCategory.categoryData.categoryfilterByHashTag
  if(choosedCategory?.isCategorySet){
     setValue("category", "true")
  }
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
  setHashTagList([...newArray])
  // console.log("this is the hash tag array final", newArray)
}



useEffect(() =>{
  handleSplitHashTagArrayFunc()

},[choosedCategory, updateHashTag])

console.log("my hashTag list", hashTagFilterList)

// console.log("hashTagList", hashTagList)
// console.log("choosedCategory", choosedCategory)
// createContestAp


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
      stake:0,
      termsAndDescription:""
      });
  
      // console.log("hashTagItem", hashTagList)  
    
      const createContestMutation = useMutation({
        mutationKey:["create-contest"],
        mutationFn: createContestApi
      })
    

// check if balance is sufficient


const formOptions = { resolver: yupResolver( translate ? validationSchemaArenaCreateContest2 : validationSchemaArenaCreateContest ) };
     const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
        setError
      } = useForm(formOptions);
    
      
      useEffect(() => {
        if(appUserStore?.balance < form?.stake){
        setBalanceErrorMessage("Insufficient balance")
         setIsBalanceSufficent(false)
        }else{
          setIsBalanceSufficent(true)
          setBalanceErrorMessage("")
        }
        },[form?.stake])

      const onSubmit = async(data: ArenaCreateContestFormTypes) => {
        try{
          if(!isBalanceSufficient){
             return
          }
          const {subCategoryHeadingMajor,subCategoryHeadingMinor,categoryHeading} = choosedCategory?.categoryData
          const { 
            skillGapTag,
             stake,
         termsAndDescription
          } = data
         

   const contest =       {
            isOnline: true,
            email,
          opponentSkillGapTag: skillGapTag ? [skillGapTag] : [],
          category:{
              categoryMain:categoryHeading,
              categoryHeading:subCategoryHeadingMajor,
              categorySub:subCategoryHeadingMinor
          },
          stake,
        hashTags:[...hashTagListUpate],
          termsAndDescription
      }

          setRunUseEffect(true)
          // console.log("this is the final data", contest)
    await createContestMutation.mutateAsync(contest)
        }catch(error){
           console.log(error)
        }
      
      };
    
      



// console.log("this is the data for hashTag",choosedCategory?.categoryData?.categoryfilterByHashTag)

const navigation = useNavigation()
const [showModal, setShowModal] = useState(false)




const {data, isSuccess, isError, isPending, error} = createContestMutation


useEffect(() => {
  const handleCreateContestApi = () => {
    if (isError   && runUseEffect) {
      setRunUseEffect(false)
  setLoading(false);
  setErrorMessage("");
     setErrorType(null);
      const errorMessage = error?.response?.data.message ||  error?.message
      setLoading(false)
      Toast.show({
        type:"error",
        text1:"Create contest Error",
        text2:errorMessage,
        visibilityTime: 4000,
        position:"top",
        topOffset: StatusBar.currentHeight,
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
    if (isPending  && runUseEffect) {
      setLoading(true);
      setErrorType("loading");
      setErrorMessage("");
     
    }
    if (isSuccess && runUseEffect) {
     console.log("coming from response",data)

     dispatch(updateUserBalanceAction(data?.balance))
     dispatch(createCreatestAction(data))
      setRunUseEffect(false)
      setLoading(false);
      setErrorType(null)
      setChoosedCategory({
        isCategorySet:false,
        categoryData: {
          categoryHeading: "",
          subCategoryHeadingMajor:"",
          subCategoryHeadingMinor:"",
          categoryfilterByHashTag:[""]
        }})
      Toast.show({
        type:"success",
        text1:"Contest created successfully",
        text2:errorMessage,
        visibilityTime: 4000,
        position:"top",
        topOffset: StatusBar.currentHeight,
        text1Style: {
          fontSize: 14,
          fontWeight: 'bold',
          color:"blue"
        },
        text2Style: {
          fontSize: 12,
          fontWeight: 'bold',
          color:"gray"
        },
       
      })
      reset()
      navigation.navigate("Home", {
           screen:"onboarding"
      })
    
    }

  }
  handleCreateContestApi()

},[isError,isPending, isSuccess])

// console.log("data received", data, "isSuccess", isSuccess, "isPending", isPending, "isError",isError, )

  return (
   <SafeAreaView className='px-[16px] py-[12px] ' 
  
   >
    {
      loading && <View className='h-sreen w-screen z-10'
      style={{
        backgroundColor: loading ? "rgba(100, 100, 100,0.1)" : "white",
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0
      }}
      />
    }
    <ScrollView  
    showsVerticalScrollIndicator={false}>
      {/* <Modal visible={loading} transparent={true} animationType="fade">   
    <AlertMessage message={errorMessage} type={errorType} setShowModal = {setLoading} />
    </Modal> */}
    {
      showModal && <ArenaCategoryModal
      choosedCategory={choosedCategory}
      setChoosedCategory={setChoosedCategory}
      
      showModal={showModal} setShowModal={setShowModal} ArenaCategoryModalDataList = {ArenaCategoryModalDataList}
        />
      }
    {/* header section starts */}
    <KeyboardAwareScrollView
    showsVerticalScrollIndicator={false}
    >
    <View className='w-full flex-row items-center justify-center'>
        <TouchableOpacity
        onPress={() => {
         navigation.goBack()
        }}
        className='absolute left-0  z-10 p-2'>
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
  <Text className="text-[12px] font-medium font-['GeneralSans-Regular'] leading-none text-neutral-400 capitalize">{item.text}</Text>
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
                  <View className="w-full h-[42px] px-4 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, skillGapTag: data
                       })
                        onChange(data.trim())
          
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

              {
                !translate && <View className="w-full">
                {errors.skillGapTag && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.skillGapTag.message}
                  </Text>
                )}
              </View>
              }
            </View>
          </View>
          {/*skillgap tag  end */}
    
    </View>

    {/* switch section ends */}
<View>
{
   !choosedCategory.isCategorySet ?  
 <View>
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
   <View className="w-full mt-2">
                {errors.category && (
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {errors.category.message}
                  </Text>
                )}
              </View>
 </View>
      : 
       <View className="rounded-[20px] bg-white py-10 mt-4  px-4">
       <TouchableOpacity activeOpacity={0.4} onPress={() => {
         setShowModal(true)
       }} className="absolute top-2 right-4 p-2">
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
                   className="w-[85px] h-8 rounded-2xl items-center  justify-center bg-purple-100  ">
                    <Text className="text-violet-700 text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">{choosedCategory.categoryData.categoryHeading}</Text>
                  </View>
                  <View className="w-[30px] h-[0px] origin-top-left rotate-[123.66deg] border border-neutral-400"></View>
  
                   <View
                    style={{
                    borderStyle:"dashed",
                    borderWidth: 2,
                    borderColor:"#2A9D0D"
                  
                  }}
                   className="w-[85px] h-8 rounded-2xl items-center  justify-center bg-green-100 px-1">
                    <Text className="text-lime-700 text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px]">{choosedCategory.categoryData.subCategoryHeadingMajor}</Text>
                  </View>
                  <View className="w-[30px] h-[0px] origin-top-left rotate-[123.66deg] border border-neutral-400"></View>
  
                  <View
                  style={{
                    borderStyle:"dashed",
                    borderWidth: 2,
                    borderColor:"#DBBC1C"
                  
                  }}
                   className="w-[85px] h-8 rounded-2xl items-center  justify-center bg-yellow-50 px-1">
                    <Text className="text-yellow-500  text-[10px] font-medium font-['GeneralSans-Regular'] leading-[18px] p-1">{choosedCategory.categoryData.subCategoryHeadingMinor}</Text>
                  </View>
                </View>
                {/* filter list ends */}
                {/* list of selected hashTags starts */}
             {
              hashTagList.length > 0  && 
               <View className="mt-4">
              <AppTextHeading text='Hashtags' classText='text-[16px]'/>
              <View>
                {
                 hashTagList?.map((i, k)=> <View className='flex-row mb-2 justify-around' key={k}>
                  {
                  
                    i.map((item,x) =>  <TouchableOpacity
                    onPress={() => {
                      console.log("ran here")
                       handleDeleteHashTag(item.id)
                     }}
                    key={x}   style={{
                      borderStyle:"dashed",
                      borderWidth: 2,
                      borderColor:"#1D9BF0"
                    }}
                    className="w-[100px] h-[32px] rounded-2xl flex-row items-center  justify-center space-x-[4px] bg-blue-100"> 
                       <Text className="text-blue-500 text-[16px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">#{item?.text}</Text> 
                      
                        <Image
                        source={require("../../../../assets/images/cancel2.png")}
                        className='w-[13.33px] h-[13.33px] p-2'
                        />
                     
                    </TouchableOpacity> 
                    )
                  }

                 </View>

                  )
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
      <View className={`w-full  "bg-slate-200 opacity-20"} `}>
            <View className="items-start space-y-[10px] w-full">
              <View className="items-start mb-4 w-full ">
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
                  <View className="w-full h-[42px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px]  shadow border border-gray-300 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                       setForm({
                        ...form, stake: data
                       })
                        onChange(data.trim())
          
                      }}

                      value={value}
                      placeholder={"e.g $500"}
                      placeholderTextColor={"gray"}
                      cursorColor={"gray"}
                      className="flex-1 text-gary-900 px-4"
                      onBlur={onBlur}
                      keyboardType={"phone-pad"}
                    />
                  </View>
                )}
                name={"stake"}
              />
              
     <View className="items-start w-full flex-row ">
                <Text className="text-neutral-400 text-[11px] font-normal font-['General Sans Variable'] leading-none text-right w-full italic" >
                Balance:{" "}
                <Text className="text-gray-950 text-[11px] font-normal font-['General Sans Variable'] leading-non"  >
                ₦{appUserStore?.balance}
                </Text>
                </Text>
               
              </View>
             {
              isBalanceSufficient ?  
              <View className="w-full">
              {errors.stake && (
                <Text
                  className="text-red-500
                  font-bold "
                >
                  {errors.stake.message}
                </Text>
              )}
            </View> :  <View className="w-full">
              
                  <Text
                    className="text-red-500
                    font-bold "
                  >
                    {balanceErrorMessage}
                  </Text>
           
              </View>
             }
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
                  <View className="w-full h-40 px-3 py-2 text-white  flex-row items-start justify-start space-x-2 
                    bg-white rounded-[20px] shadow border border-gray-300 overflow-hidden 
                  ">
                    <TextInput
                      onChangeText={(data)=> {
                         if(form.termsAndDescription.length <= 250){
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
                      className="flex-1 text-gray-900  h-full items-start"
                      onBlur={onBlur}
                      keyboardType={"default"}
                      multiline
                      textAlignVertical="top"
                      maxLength={250}
                    />
                  </View>
                )}
                name={"termsAndDescription"}
              />

              <View className="w-full ">
               <Text className={`text-right  text-base font-normal font-['GeneralSans-Regular'] leading-snug ${form.termsAndDescription.length == 250 ? "text-red-400" :"text-neutral-400"}`}>
                  {form.termsAndDescription ? form.termsAndDescription.length : 0}/250 characters
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
            {
              loading ? "Loading..." : "Done"
            }
            </Text>
          </TouchableOpacity>
          </KeyboardAwareScrollView>
    {/* done utton ends */}

{/*stake and termsOfDescription ends  */}
    </ScrollView>
   </SafeAreaView>
  )
}

export default ArenaCreateContestScreen