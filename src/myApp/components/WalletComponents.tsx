import { View, Text, Modal, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import {
  WalletPaymentCryptoUstatePropType,
  WalletPaymentModalPropTypes,
  WalletTransactionComponentPropType,
  WalletTransferSuccessModalCompPropTypes,
  walletWidthDrawPropTypes,
} from "../types";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppTextHeading from "./AppTextHeading";
import AppTextContent from "./AppTextContent";
import AppButton from "./AppButton";
import { validationSchemaWidthDraw, validationSchemaWidthDrawCrypto  } from "../../../utils/YubValidation"
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

export const WalletTransactionComponent = ({
  img,
  sendeOrReceiver,
  imageDivBgColor,
  time,
  transactionType,
  amount,
  transactionStatus,
  showModal, 
  setShowModal,
  enableModal
}: WalletTransactionComponentPropType) => {
  return (
    <TouchableOpacity 
    onPress={() => {
     enableModal && setShowModal(!showModal)
    }}
    className="flex-row items-center justify-between w-full mt-2 border border-indigo-50 bg-white p-2 rounded-md">
      <View className="flex-row items-start space-x-1">
        <View
          className={`w-10 h-10  bg-rose-50 rounded-[100px] justify-center items-center ${imageDivBgColor}`}
        >
          <Image className={`w-[24px] h-[24px]`} source={img} />
        </View>
        <View className="justify-around h-10">
          <View className="flex-row ">
            <Text className="text-gray-600 text-xs font-medium font-['General Sans Variable'] leading-none">
              To:{" "}
            </Text>
            <Text className="text-gray-950 text-xs font-medium font-['General Sans Variable'] leading-none">
              {sendeOrReceiver}
            </Text>
          </View>
          <Text className="text-gray-600 text-xs font-medium font-['GeneralSans-Regualr'] leading-none">
            Yesterday,{time}
          </Text>
        </View>
      </View>
      <View className="h-10 justify-around w-max item-end ">
        <View className="">
          <Text
            className={`${transactionType == "withdraw" ? "text-red-400 " : transactionType == "deposit" ? "text-lime-600" : "text-sky-500"} text-sm w-full font-medium font-['GeneralSans-Regular'] leading-none text-right `}
          >
            {" "}
            {transactionType == "deposit"
              ? "+$"
              : transactionType == "withdraw"
                ? "-$"
                : "+$"}
            {amount}
          </Text>
        </View>
        <View
          className={`px-2  py-1 
         ${transactionStatus == "Successfull" ? "bg-green-100" : transactionStatus == "Failed" ? "bg-red-100" : "bg-yellow-100"}
             rounded-[20px] justify-center items-start`}
        >
          <Text
            className={` ${transactionStatus == "Successfull" ? "text-lime-600" : transactionStatus == "Failed" ? "text-red-500" : "text-yellow-400"} text-[10px] font-medium font-['General Sans Variable'] leading-[10px]`}
          >
            {transactionStatus}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


export const WalletPaymentModalComp = ({
  amount = "300",
  date = "Nov 17th, 2023 05:04:04",
  img,
  transactionNumber = "uhghwefhfwehfhwehwji",
  transactionStatus = "Successful",
  transactionType = "transfer",
  showModal,
  setShowModal,
  bannerBgColor,
  icon,
  accountBank = "Zenith",
  accountName = "Friday John",
  accountNumber = "123445666",
}: WalletPaymentModalPropTypes) => {
  const navigation = useNavigation();
  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View className="flex-1  justify-end bg-blue-200">
        <View className=" pt-[40px] bg-white px-[16px] rounded-t-[40px] pb-4">
         
          {/* header section starts */}
          <View className="flex-row items-center justify-center ">
            <TouchableOpacity
              onPress={() => {
                console.log("clicked")
                 setShowModal(!showModal)
              }}
              className="absolute left-0 z-10"
            >
              <Entypo name="chevron-thin-left" size={24} color="black" />
            </TouchableOpacity>
            <AppTextHeading
              text="Payment Receipt"
              classText="text-center text-[20px]"
            />
          </View>
          {/* header section ends */}
          {/* banner section */}
          <View className='w-full mt-[27px] className="flex-row items-center'>
            <View
              className={`w-[76px] h-[86px] border-0 ${bannerBgColor ? bannerBgColor : "bg-green-600"}  rounded-sm`}
            >
              <View className="w-[76px] h-[86px] absolute left-[5px] top-[5px]">
                <View className="w-full h-full">
                  <Image
                    source={
                      img
                        ? img
                        : require("../../../assets/images/successFrame.png")
                    }
                    className="w-[76px] h-[86px]"
                  />
                  <View className="w-[24px] h-[24px] absolute -right-[8px] -bottom-[8px]">
                    <Image
                      source={
                        icon
                          ? icon
                          : require("../../../assets/images/successIcon.png")
                      }
                      className="w-[24px] h-[24px]"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="mt-6">
            <AppTextHeading
              classText="text-[20px] text-center font-semibold"
              text={`Transaction ${transactionStatus}`}
            />
            <AppTextContent
              classText="text-center w-8/10  mx-auto"
              text={`${transactionType} of $${amount} to Emmanuel Jackson was ${transactionStatus.toLowerCase()}`}
            />
          </View>
          {/* banner section ends */}
          {/* transaction detail section */}
          <View>
            <AppTextHeading
              text="Transaction Details"
              classText="mt-4 text-[18px]"
            />
            <View className="">
              {/* receipant data */}
              <View className="flex-row items-start justify-between w-full mt-2">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular Variable'] leading-[18px]  ">
                  Recipient Details
                </Text>
                <View className="space-y-1 ">
                  <Text className="text-neutral-400  text-[14px] font-medium font-['General Sans Variable'] leading-[15px]">
                    {accountName}
                  </Text>
                  <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px]">{`${accountBank}|${accountNumber}`}</Text>
                </View>
              </View>
              {/* recipant data end */}
              {/* transaction type start*/}
              <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text className="text-neutral-400 text-[14px] font-medium font-['GeneralSans-Regular'] leading-[18px] ">
                  TransactionType
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium font-['GeneralSans-Regular'] leading-[15px] text-right capitalize">
                  {transactionType}
                </Text>
              </View>
              {/* transaction type ends */}
              {/* transaction Number start*/}
              <View className="flex-row justify-between items-start w-full mt-4 ">
                <Text
                 className="text-neutral-400 text-[14px] font-medium font-['General Sans Variable'] leading-[18px]   ">
                  Transaction Number
                </Text>

                <Text
                
                 className="text-neutral-400  text-[14px] font-medium font-['General Sans Variable'] leading-[15px] text-right">
                  {transactionNumber}
                </Text>
              </View>
              {/* transaction Number ends */}
              {/* transaction date start*/}
              <View className="flex-row justify-between items-start w-full mt-4">
                <Text className="text-neutral-400 text-[14px] font-medium font-['General Sans Variable'] leading-[18px]  ">
                  Transaction Date
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium  font-['GeneralSans-Regular'] leading-[15px] text-right">
                  {date}
                </Text>
              </View>
              {/* transaction date ends */}
              {/* transaction statusstart*/}
              <View className="flex-row justify-between items-start w-full mt-4">
                <Text className="text-neutral-400 text-[14px] font-medium font-['General Sans Variable'] leading-[18px] text-right">
                  Payment Status
                </Text>

                <Text className="text-neutral-400  text-[14px] font-medium text-start font-['General Sans Variable'] leading-[15px]">
                  {transactionStatus}
                </Text>
              </View>
              {/* transaction status ends */}
            </View>
            {/* transaction date start*/}
            <View className="flex-row justify-between items-start w-full mt-4">
                <Text className="text-neutral-400 text-[14px] font-medium font-['General Sans Variable'] leading-[18px] text-right">
                  Amount
                </Text>

                <Text className={`${transactionType === "transfer" ? "text-red-400" :"text-blue-400"}  text-[14px] font-medium text-start font-['GeneralSans-Regular'] leading-[15px]`}>
                {transactionType ===  "transfer" ? "-$" : "+$"}{amount}
                </Text>
              </View>
              {/* transaction date ends */}
          </View>
          {/* ends transaction detail section */}
        </View>
      </View>
    </Modal>
  );
};



export const WalletTransferSuccessModalComp = ({showPaymentSuccesModal, setShowPaymentSuccesModal, transactionStatus}:WalletTransferSuccessModalCompPropTypes) => {
 return <Modal animationType="slide" transparent={true} visible={showPaymentSuccesModal}>
 <View  style={{
   backgroundColor: 'rgba(128, 128, 128, 0.5)', // Red color with 50% opacity
 }}
 className="flex-1 justify-end  bg-neutral-200">
 <View className="rounded-t-3xl  justify-center items-center opacity-100 w-full px-[16px] bg-white">
  <View className="justify-center items-center mt-[32px]">
 {
  transactionStatus === "success" ? <Image 
  className="w-[98px] h-[98px]"
  source={require("../../../assets/images/transactionSuccess.png")}
  /> :  <Image 
  className="w-[98px] h-[98px]"
  source={require("../../../assets/images/transactionFail.png")}
  /> 
 }
  <AppTextHeading text={`${transactionStatus === "success" ? "Congratulations" : "Oops"}`} classText="text-center w-full mt-[18px" />
  <AppTextContent text={`${transactionStatus === "success" ? "Your transaction was successful" : "Your transaction was not successful"}`} classText="text-center w-full" />
  </View>

  <AppButton text='Done' ButtonViewStyle='mt-[31px] bg-sky-500 w-full mb-[12px]' handleOnpress={() => {
     setShowPaymentSuccesModal(false)
    }} />

  </View>

 </View>
  </Modal>
}



export const WalletPaymentCryptoComp = () => {


  const [form, setForm] = useState<WalletPaymentCryptoUstatePropType>({
   walletAddres:"",
    amount: ""
  });

  const navigation =  useNavigation()
  const formOptions = { resolver: yupResolver(validationSchemaWidthDrawCrypto) };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data: string) => {
    console.log(data)

    navigation.navigate("walletTransferPreviewTransactionScreen", {data})
  
  };



  // 
  return <View className=''>
  <View className="w-full h-[62px] bg-indigo-50 rounded-lg border border-sky-500 p-1">
<Text className=" text-sky-500 text-sm font-medium font-['GeneralSans-Regular'] leading-tight">Network:</Text>
<Text className="l text-sky-500 text-sm font-semibold font-['GeneralSans-Regular'] leading-tight">TRON (TRC - 20)</Text>
</View>
<View>
  {/* bank name section starts */}
  <View className="w-full mt-4">
                <View className="items-start space-y-[10px] w-full">
                  <View className="items-start mb-2 flex-row">
                    <Text className="text-black text-sm font-normal font-['Noto Sans'] w-full ">
                      {"Wallet Address"}
                    </Text>
                  </View>
    
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                      bg-white rounded-[30px] shadow border border-gray-300 ">
                        <TextInput
                          onChangeText={(data) => {
                            setForm({
                              ...form, walletAddres: data
                             })
                              onChange(data)
                          }
                           
                          }
                          value={value}
                          placeholder={"Paste Address here"}
                          placeholderTextColor={"gray"}
                          cursorColor={"gray"}
                          className="flex-1 text-gary-900"
                          onBlur={onBlur}
                        />
                      </View>
                    )}
                    name={"walletAddress"}
                  />
    
                  <View className="w-[327px]">
                    {errors.walletAddress && (
                      <Text
                        className="text-red-500
                        font-bold "
                      >
                        {errors.walletAddress.message}
                      </Text>
                    )}
                  </View>
                </View>
   </View>
  
  {/* bank name section ends */}
  
  {/*amount section starts */}
  
  
  <View className="w-full mt-4">
                <View className="items-start space-y-[10px] w-full">
                  <View className="items-start mb-2">
                    <Text className="text-black text-sm font-normal font-['Noto Sans']">
                      {"Amount"}
                    </Text>
                  </View>
    
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                      bg-white rounded-[30px] shadow border border-gray-300 ">
                        <TextInput
                          onChangeText={(data) => {
                            setForm({
                              ...form, amount: data
                             })
                              onChange(data)
                          }
                           
                          }
                          value={value}
                          placeholder={"Minimum of $1"}
                          placeholderTextColor={"gray"}
                          cursorColor={"gray"}
                          className="flex-1 text-gary-900"
                          onBlur={onBlur}
                          keyboardType="numeric"
                        />
                      </View>
                    )}
                    name={"amount"}
                  />
    
                  <View className="w-[327px]">
                    {errors.amount && (
                      <Text
                        className="text-red-500
                        font-bold "
                      >
                        {errors.amount.message}
                      </Text>
                    )}
                  </View>
                </View>
                <View className="flex-row space-x-[2px]">
               
               <Text className={`text-lime-700 text-[10px] font-medium font-['GeneralSans-Regular'] p-[0.8px] bg-lime-200 leading-none italic ${errors.amount && "mt-2"}`}>Fee:</Text>
              
                <Text className="text-gray-950 text-xs font-normal font-['GeneralSans-Regular'] leading-tight">$1.00</Text>
                </View>
   </View>
  
  {/* amount section ends */}
</View>

{/* oR section starts */}

<View className="flex-row items-center space-x-1 mt-[16px]">
  <View className="flex-1 h-[1px] bg-gray-300" /> 
    <Text className="text-neutral-400 text-[10px] font-medium font-['General Sans Variable'] leading-none">Or</Text>
    <View  className="flex-1 h-[1px] bg-gray-300"/>
</View>

{/* oR section ends */}
{/* Qr code section start */}

<View className="w-full justify-center items-center mt-4">
  <Image
  source={require("../../../assets/images/qrScanner.png")}
  className="w-6 h-6"
  />
  <AppTextContent text="Scan QR Code" classText="text-sky-500 text-xs  text-center mt-1" />

</View>

{/* Qr code section ends */}

{/* app button section starts */}

  
<TouchableOpacity
              activeOpacity={0.5}
                onPress={handleSubmit(onSubmit)}
                className={`w-full px-2.5 py-4 bg-indigo-100 mt-[40px] rounded-[40px] justify-center items-center`}
              >
                <Text className="text-center text-sm font-medium font-['GeneralSans-Regular'] text-sky-500 leading-normal">
                 Preview
                </Text>
  </TouchableOpacity>
  

{/* app button section ends */}

</View>
}


export const WalletPaymentBankComp = () => {


  const [form, setForm] = useState<walletWidthDrawPropTypes>({
    bankName: "",
    accountNumber:"",
    amount: ""
  });


  const formOptions = { resolver: yupResolver(validationSchemaWidthDraw) };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data: string) => {
    console.log(data)
  
  };



  return <View>
  {/* form section starts */}
  <View className='px-[8px] w-full py-[10px] rounded-xl bg-white'>
  {/* bank name section starts */}
  <View className="w-full mt-4">
                <View className="items-start space-y-[10px] w-full">
                  <View className="items-start mb-2">
                    <Text className="text-black text-sm font-normal font-['Noto Sans']">
                      {"Bank Name"}
                    </Text>
                  </View>
    
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                      bg-white rounded-[30px] shadow border border-gray-300 ">
                        <TextInput
                          onChangeText={(data) => {
                            setForm({
                              ...form, bankName: data
                             })
                              onChange(data)
                          }
                           
                          }
                          value={value}
                          placeholder={"@qubigs"}
                          placeholderTextColor={"gray"}
                          cursorColor={"gray"}
                          className="flex-1 text-gary-900"
                          onBlur={onBlur}
                        />
                      </View>
                    )}
                    name={"bankName"}
                  />
    
                  <View className="w-[327px]">
                    {errors.bankName && (
                      <Text
                        className="text-red-500
                        font-bold "
                      >
                        {errors.bankName.message}
                      </Text>
                    )}
                  </View>
                </View>
   </View>
  
  {/* bank name section ends */}
  
  {/* accout number starts */}
  
  
  <View className="w-full mt-4">
                <View className="items-start space-y-[10px] w-full">
                  <View className="items-start mb-2">
                    <Text className="text-black text-sm font-normal font-['Noto Sans']">
                      {"Account Number"}
                    </Text>
                  </View>
    
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                      bg-white rounded-[30px] shadow border border-gray-300 ">
                        <TextInput
                          onChangeText={(data) => {
                            setForm({
                              ...form, accountNumber: data
                             })
                              onChange(data)
                          }
                           
                          }
                          value={value}
                          placeholder={"@qubigs"}
                          placeholderTextColor={"gray"}
                          cursorColor={"gray"}
                          className="flex-1 text-gary-900"
                          onBlur={onBlur}
                        />
                      </View>
                    )}
                    name={"accountNumber"}
                  />
    
                  <View className="w-[327px]">
                    {errors.accountNumber && (
                      <Text
                        className="text-red-500
                        font-bold "
                      >
                        {errors.accountNumber.message}
                      </Text>
                    )}
                  </View>
                </View>
   </View>
  
  {/* account number ends */}
  
  
  {/* amount section starts */}
  <View className="w-full mt-4 mb-4">
                <View className="items-start space-y-[10px] w-full">
                  <View className="items-start mb-2">
                    <Text className="text-black text-sm font-normal font-['Noto Sans']">
                      {"Amount"}
                    </Text>
                  </View>
    
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                      bg-white rounded-[30px] shadow border border-gray-300 ">
                        <TextInput
                          onChangeText={(data) => {
                            setForm({
                              ...form, amount: data
                             })
                              onChange(data)
                          }
                           
                          }
                          value={value}
                          placeholder={"$500 USDT"}
                          placeholderTextColor={"gray"}
                          cursorColor={"gray"}
                          className="flex-1 text-gary-900"
                          onBlur={onBlur}
                          keyboardType='number-pad'
                        />
                      </View>
                    )}
                    name={"amount"}
                  />
    
                  <View className="w-[327px]">
                    {errors.amount && (
                      <Text
                        className="text-red-500
                        font-bold "
                      >
                        {errors.amount.message}
                      </Text>
                    )}
                  </View>
                </View>
  </View>
  
  {/* usertag section ends */}
  
  </View>
  
  {/* preview button start */}
  
  <TouchableOpacity
              activeOpacity={0.5}
                onPress={handleSubmit(onSubmit)}
                className={`w-full px-2.5 py-4 bg-indigo-100 mt-[40px] rounded-[40px] justify-center items-center`}
              >
                <Text className="text-center text-sm font-medium font-['GeneralSans-Regular'] text-sky-500 leading-normal">
                 Preview
                </Text>
  </TouchableOpacity>

  {/* preview button end */}
  
              {/* form section ends */}
  
  </View> 
}