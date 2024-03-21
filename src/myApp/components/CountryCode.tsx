import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { CountryCode,Country } from '../types'
import CountryPicker from 'react-native-country-picker-modal'

const CountryCodePicker = ({country, setCountry, showCountryPickerModal, setShowCountryPickerModal }) => {
   
    const [countryCode, setCountryCode] = useState<CountryCode>('NG')
  
    const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(false)
    const [withFlag, setWithFlag] = useState<boolean>(true)
    const [withEmoji, setWithEmoji] = useState<boolean>(true)
    const [withFilter, setWithFilter] = useState<boolean>(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false)
    const [withCallingCode, setWithCallingCode] = useState<boolean>(false)
    const onSelect = (country: Country) => {
      setCountryCode(country.cca2)
      setCountry(country)
  
    }
    console.log(country?.callingCode[0])
    return (
      <View>
        <CountryPicker
          {...{
            countryCode,
            withFilter,
            withFlag,
            withCountryNameButton,
            withAlphaFilter,
            withCallingCode,
            withEmoji,
            onSelect
          }}
          visible = {showCountryPickerModal}
          onClose={() => {
            setShowCountryPickerModal(false)
          }}
        
        />
      </View>
  )
}

export default CountryCodePicker