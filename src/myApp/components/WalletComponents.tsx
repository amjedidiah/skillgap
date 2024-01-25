import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  WalletPaymentModalPropTypes,
  WalletTransactionComponentPropType,
} from "../types";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppTextHeading from "./AppTextHeading";
import AppTextContent from "./AppTextContent";

export const WalletTransactionComponent = ({
  img,
  sendeOrReceiver,
  imageDivBgColor,
  time,
  transactionType,
  amount,
  transactionStatus,
  bank,
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
