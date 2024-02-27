import React, {useState} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {SafeAreaView, Text} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { Octicons } from '@expo/vector-icons'; 
import { useEffect } from 'react';
import { authOtpProp } from '../types';

const CELL_COUNT = 6;

const AppTextRecoveryOtp = ({otp, setOtp} : authOtpProp) => {

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  }); 




useEffect(() => {
    const valueArray = value.split("")
    if(valueArray.length == 6){
        setOtp(value)
    }
}, [value])
console.log(otp)
  return (
    <SafeAreaView >
      <View className={`w-12 h-12 justify-center items-center  space-x-8 flex flex-row border-solid  mx-auto `}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={{
            display:"flex",
            flexDirection:"row",
            gap:8,
            justifyContent:"center"
        }}
        renderCell={({index, symbol, isFocused}) => (
          <Text
          className={`w-12 h-12 shadow bg-white rounded-lg items-center justify-center border text-[25px] border-gray-400 ${isFocused && "border border-gray-600" } text-center`}
            key={index}
             style={{
                display:"flex",
                textAlign:"center",
                justifyContent:"center",
                alignItems:"center",
                paddingTop:10
             }}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : <Octicons name="dash" size={30} color="gray" />
            
            )}
          </Text>
        )}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    cell:{
        borderWidth: 1,
        borderStyle:"solid",
        borderWidth:1,
        width:80,
        height:80
    },
    focusCell:{
        borderWidth: 1,
        borderWidthStyle:"solid",
        borderWidth:1,
        width:20,
        height:20
    },
    container: {
        position: 'relative',
        width: 200, // Set the desired width of the Text component
        height: 100, // Set the desired height of the Text component
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
      },
      iconContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -12 }, { translateY: -12 }], // Adjust the values based on the icon size
      },
})
export default AppTextRecoveryOtp;
