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
                alignItems:"center",
                justifyContent:"center",
                height:"100%",
                paddingVertical: 2
                 }}
                  codeTextStyle={{ fontSize: 16, 
                     width: 50,
                  lineHeight:16,
                  height:"100%",
                  justifyContent:"center",
                  alignItems:"center",
                  paddingVertical: 13,
                  textAlignVertical:"center"
                }}
                 textInputStyle={{ fontSize: 16,
                  lineHeight:16,
                  height:"100%",
                  justifyContent:"center",
                  alignItems:"center",
                   paddingTop: 10,
                  textAlignVertical:"center"
            
                      }}
            withDarkTheme
          
            
            containerStyle={{
                 borderWidth: 1, borderColor: "#D1D5DB", borderRadius: 30 ,
                 width:"100%",
                 height:42,
                 backgroundColor:"white",
                 flexDirection: "row",
                 alignItems:"center",
                 justifyContent: "center",
                 overflow:"hidden",
               
            }}
          />
      </View>
    </>
  );
};

export default PhoneNumberScreen;
