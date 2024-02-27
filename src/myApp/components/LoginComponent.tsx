import { Modal, Text, TouchableOpacity, View } from "react-native"
import {emailVerifyModalCompPropTypes} from "../types"
import { MaterialIcons } from "@expo/vector-icons"
import LotieLoadingAnimation from "./LOtieLoadingAnimation"



export const EmailVerifyModal = ({showEmailModal, setShowEmailModal, email}: emailVerifyModalCompPropTypes) => {
  return  <Modal visible={showEmailModal} transparent={true} animationType="fade">
        <View className="h-screen w-screen justify-center items-center  " style={{
          backgroundColor:"rgba(0,0,0,0.5)"
        }}>
          <View className="round-md bg-white rounded-md p-4 w-[200px]">
          
          <TouchableOpacity onPress={() => {
            setShowEmailModal(!showEmailModal)
          }} className="absolute right-2 top-2">
          <MaterialIcons name="cancel" size={24} color="black" />
          </TouchableOpacity>
          
          <LotieLoadingAnimation  
          url={"../../../assets/LottieAnimation/LottieEmailSent.json"} 
             />  
          <Text className="mt-8  text-neutral-400 text-base font-normal font-['GeneralSans-Regular'] text-center leading-snug">
          A mail has been sent to your {email} for verification
          </Text>           
          </View>
        </View>
      </Modal>
}