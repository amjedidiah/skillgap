import React, { useEffect, useState } from "react";

import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { transactionHomeData, transactionTypeListData } from "utils/data";
import { WalletPaymentModalComp, WalletTransactionComponent } from "@/myApp/components/WalletComponents";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import AppTextHeading from "@/myApp/components/AppTextHeading";
import { useNavigation } from "@react-navigation/native";

const WalletTransactionScreen = () => {
  const naviagtion = useNavigation();

  const [showModal, setShowModal] = useState(false)

  const navigation = useNavigation()
  //  transactionTypeList is an array of the different types of transactions which are transfer, withdraw and deposit
  const [transactionTypeList, setTransactionTypeList] = useState(transactionTypeListData)

// transactionType show the transaction type in the ui with transfer as the default.
  const [transactionType, setTransactionType] = useState("Transfer")

  // showTransactionData display the data of the current transaction type
  const [showTransactionData, setShowTransactionData] = useState(transactionHomeData)



  // update the transaction list ui when clicked
const handleTransactionListUpdate = (i:number) => {
    const filterData = transactionTypeList.filter(item => {
    if(item.id ===  i){
        item.active = true
        setTransactionType(item.text)
        return item
    }else{
        item.active = false
        return item
    }
    })

    setTransactionTypeList(filterData)

}


// the handleShowTrnsactionFunc is used to dynamially display on the transfer, withdraw or deposit based on the value of the transactionType
const handleShowTransactionFunc = () => {
    
  const newData = transactionHomeData.filter(item => {
       if(item.transactionType.toLowerCase() === transactionType.toLowerCase()){
       console.log(item, transactionType)
        return item
       }
  })
 newData.length > 0 &&  setShowTransactionData(newData)
}



useEffect(() => {
  
  handleShowTransactionFunc()
},[transactionType])
  return (
    <SafeAreaView className="flex-1 bg-white ">
      
      <TouchableOpacity
      activeOpacity={0.4}
      onPress={() =>{

        navigation.navigate("Arena",
        {
          screen: "arenaCreateContestScreen"
         }
        )
        }} className="w-12 h-12 px-2.5 py-2 bg-sky-500 rounded-[40px] shadow justify-center items-center absolute bottom-[50px] right-[20px] z-10 ">
        <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      
      {
        showModal && <WalletPaymentModalComp setShowModal={setShowModal} showModal={showModal} />
      }
      <View className="px-[20px] flex-1 py-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
     
     
        <AppTextHeading text="Transaction History" classText="text-[20px] mt-[16px]" />
        {/* transaction section starts */}
           
  {/* transaction type starts */}
  <View className='w-full flex-row justify-between  mt-4 bg-gray-200 rounded-[40px] px-2 py-2 space-x-2'>
{
  transactionTypeListData.map(item => <TouchableOpacity
  activeOpacity={0.8}
  onPress={() => {
    handleTransactionListUpdate(item.id)
  }}
     key={item.id}
    className={`flex-1 flex-row space-x-1 h-[28px]   justify-center items-center   rounded-[40px] ${item.active && "bg-white"}`}>
  <Text className="text-[10px] font-medium font-['Generalans-Regular'] leading-none text-neutral-400 capitalize">{item.text}</Text>
  </TouchableOpacity>)
}
  


  {/* transaction type ends */}
</View>

        <View className="w-full mt-[32px] flex-row justify-between">
      <View>
           <View className="flex-row items-center space-x-1">
           <Text className="text-gray-950 text-[20px] font-medium font-['GeneralSans-Regular Variable'] leading-none">November </Text>
             <Ionicons name="chevron-down-outline" size={24} color="black" />
           </View>
            <View className="flex-row items-center">
              <Text className="text-neutral-400 text-sm font-medium font-['GeneralSans-Regular'] leading-none">
                In:{" "}
              </Text>
              <Text className="text-gray-950 text-sm font-medium font-['General Sans Variable'] leading-none">
                $800
              </Text>
          
          
             </View>
        </View>
           <View>
        <View>
  <AppTextHeading text="See all"  classText="text-sky-500 text-[16px]" />
   <View className="flex-row items-center">
   <Text className="text-neutral-400 text-sm font-medium font-['GeneralSans-Regular'] leading-none">Out: </Text>
    <Text className="text-gray-950 text-sm font-medium font-['General Sans Variable'] leading-none">$800</Text>
   </View>
  </View>
           </View>
        </View>


        <ScrollView className=" flex-1 mt-4 w-full ">
          {showTransactionData.map((item) => (
            <View key={item.id}>
              <WalletTransactionComponent
                amount={item.amount}
                sendeOrReceiver={item.sendeOReceiver}
                img={item.img}
                time={item.time}
                transactionStatus={item.transactionStatus}
                transactionType={item.transactionType}
                imageDivBgColor={item.imageDivBgColor}
                showModal = {showModal}
                setShowModal = {setShowModal}
                enableModal = {true}
              />
            </View>
          ))}
        </ScrollView>

        {/* transaction section ends */}
      </View>
    </SafeAreaView>
  );
};

export default WalletTransactionScreen;
