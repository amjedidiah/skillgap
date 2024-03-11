import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import PhoneInput from "react-native-phone-input"




const PhoneNumber2 = () => {

    const phoneRef = useRef(null)
    return(
        <View>
            <PhoneInput
                ref={phoneRef}
               
                initialCountry={'us'}
                initialValue="13178675309"
                onChangePhoneNumber={(number) => {
                    const checkValid = phoneRef.current?.isValidNumber(number);
                  console.log(checkValid)
                }}
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />

         
        </View>
    )

}

export default PhoneNumber2