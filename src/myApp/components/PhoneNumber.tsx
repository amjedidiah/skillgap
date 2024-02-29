import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";


const PhoneNumberScreen: React.FC = ({
    setFormattedValue, setIsPhoneNumberValid, phoneValue, setForm, form, onChange, setPhoneValue
}) => {

  const phoneInput = useRef<PhoneInput>(null);
  return (
    <>
  
      <View className="w-full" >
        <SafeAreaView className="py-12  " >
       
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneValue}
            defaultCode="NG"
            layout="first"
            onChangeText={(text) => {
                setPhoneValue(text);
                const checkValid = phoneInput.current?.isValidNumber(text);
                setIsPhoneNumberValid(checkValid ? checkValid : false);
            
                
            
            }}
            value={phoneValue}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
              setForm({
                ...form, 
                phoneNumber: text
            })
            onChange(text)
            }}

            textContainerStyle={{ 
                 flexDirection: "row",
                //  backgroundColor:"red",
                alignItems:"center",
                // backgroundColor:"red",
                height:"100%",
                 }}
                  codeTextStyle={{ fontSize: 16,  width: 50,
                 
                  lineHeight:16,
                  height:"100%",
                }}
                 textInputStyle={{ fontSize: 16,
                     flex:1,
                     lineHeight:16,
                      }}
            withDarkTheme
          
            
            containerStyle={{
                 borderWidth: 1, borderColor: "#D1D5DB", borderRadius: 30 ,
                 width:"100%",
                 height:52,
                 backgroundColor:"white",
                 flexDirection: "row",
                 alignItems:"center"

            }}
          />
       
        </SafeAreaView>
      </View>
    </>
  );
};

export default PhoneNumberScreen;