import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ImageSourcePropType } from "react-native"


export type AppTextProp =  {
   text: string,
   classText?: string,
   fontFamily?: string
}


export type AppAuthHeaderProp =  {
   text: string,
   classText?: string
}


export type AppButtonProp =  {
   text: string,
   ButtonTextStyle?: string,
   ButtonViewStyle?:string,
   handleOnpress: (url?: string) => void,
   disabled?: boolean
}

export type AppModalProp =  {
    heading: string,
    text: string,
    compState: number,
    showModal: boolean
 }



type progressType = {
   i: number,
   active:boolean
}


 export type onboardingType = 
   {
      key: number,
      heading:string,
      content:string,
      img: string,
      progressArray:progressType [],
      handleOnboardingFunc: (i:string) => void
  }
 

  export type authSignupCompProps = {
   firstName: string,
   lastName: string,
   email: string,
   region: string,
   phoneNumber: string,
   userName:string
 
 }

 export type UserProfileFormPropTypes = {
  firstName: string;
  lastName: string;
  skillGap: string;
  twitter: string | undefined;
  tikTok: string | undefined;
  facebook: string | undefined;
  youtube: string | undefined;
 }


 export type authResetPasswordCompProps = {
   newPassword: string,
   confirmPassword: string,

 
 }


 export type authSignInCompProps = {
   email: string
 
 }


 export type authOtpProp = {
   otp: string,
   setOtp: React.Dispatch<React.SetStateAction<string>>
 }


 export type homeCategoryPropType = {
   img: ImageSourcePropType,
   numOfBets: number,
   numOfUsers: number,
   heading: string
 } 

 export type homeLeaderPropType = {
   img: ImageSourcePropType,
  name: string,
 amount:number,
 active: boolean,
 showModal: boolean,
 } 

 
 export type homeContestantPropType = {
   content1Img: ImageSourcePropType,
   content2Img: ImageSourcePropType,
  cont1Name: string,
  cont2Name: string,
 heading:string
 active: boolean
 } 


 export type gameModelCompPropType = {
  data: {  img: ImageSourcePropType,
    ballNumber: number,
    activeBetNumber: number
  }[]

} 



 
 export type LeaderModalPropType = {
   img?: ImageSourcePropType,
   name?: string,
   userName?:string,
   dispute?:string,
   contest?:string,
   wins?:string,
   loses?: string,
   showModal:boolean,
   setShowModal: React.Dispatch<React.SetStateAction<boolean>>

 } 



 export type gameComponentPropType = {
  img: ImageSourcePropType,
 name:string,
amount: number,
userName:string,
time:string,
active: boolean,
key?:number
} 


export type WalletTransactionComponentPropType = {
  img: ImageSourcePropType,
  imageDivBgColor: string,
  sendeOrReceiver: string,
  time: string,
  amount: number,
  transactionStatus: string,
  transactionType: string,
  showModal?: string,
  enableModal?: string,
  setShowModal?:React.Dispatch<React.SetStateAction<boolean>>

  
}


export type WalletPaymentModalPropTypes ={
  img: ImageSourcePropType,
  icon: ImageSourcePropType,
  transactionStatus: string,
  transactionType: string,
  transactionNumber:string,
  date: string,
  amount: string,
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  bannerBgColor: string,
  accountName:string,
  accountBank: string,
  accountNumber:string
  }


  export type AppComonHeaderProp = {
    header?: string,
    textStyle?: string,
    divStyle?: string
  }

  export type HeighestStakeListArenaComponentPropTypes = {
      userName:string,
      userImage: ImageSourcePropType,
      logoImage: ImageSourcePropType,
      active: boolean,
      amount: number,
      heading: string

  }



  export type ArenaCategoryModalPropTypes = {
    showModal:boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    ArenaCategoryModalDataList: {content: string, heading: string, img: ImageSourcePropType, key: number}[],
    choosedCategory?: {
      isCategorySet:boolean,
      categoryData: {
        categoryHeading: string,
        subCategoryHeadingMajor:string,
        subCategoryHeadingMinor:string,
        categoryfilterByHashTag:string[] | []
      }
    },
   setChoosedCategory?:React.Dispatch<React.SetStateAction<{
    isCategorySet:boolean,
    categoryData: {
      categoryHeading: string,
      subCategoryHeadingMajor:string,
      subCategoryHeadingMinor:string,
      categoryfilterByHashTag:string[]
    }
  }>>
  }
 export type ArenaCreateContestFormTypes = {   skillGapTag: string,
  stake: string,
  termsAndDescription:string
}

  // wallet transfer proptypes starts

  export type walletTransaferPropTypes= {
    userTag: string,
    amount: string
  }
  export type walletWidthDrawPropTypes= {
    bankName: string,
    accountNumber: string,
    amount: string
  }

  export type WalletTransferSuccessModalCompPropTypes = {
    showPaymentSuccesModal:boolean,
     setShowPaymentSuccesModal: React.Dispatch<React.SetStateAction<boolean>>,
     transactionStatus: "success" | "failed"
  }

   export type WalletPaymentCryptoUstatePropType= {
    walletAddres:string,
    amount: string
   }


  export type WalletTransferPreviewTransactionProptypes = {
    transactionType:"withdraw"|"transfer",
    receiverName?:string,
    amount: string,
    receiverTag?:string
  }
  // wallet transfer proptypes ends
  // Arena proptypes starts
  
  export type ArenaMessageCompPropTypes = {
   img:ImageSourcePropType,
   time:string,
   content:string
  }

export type ContestModalCompPropTypes = {
  showModal:boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

  // Arena proptypes ends


// Notification ptoptypes starts

export type NotificationMessageCompPropTypes= {
 img: ImageSourcePropType,
 heading: string,
 time: string,
 content:string,
 category:string,
 userName:string,
 isContest: boolean
 
}




// Notification ptoptypes ends


// country picker tpes starts

export const CountryCodeList = [
  'AF',
  'AL',
  'DZ',
  'AS',
  'AD',
  'AO',
  'AI',
  'AQ',
  'AG',
  'AR',
  'AM',
  'AW',
  'AU',
  'AT',
  'AZ',
  'BS',
  'BH',
  'BD',
  'BB',
  'BY',
  'BE',
  'BZ',
  'BJ',
  'BM',
  'BT',
  'BO',
  'BA',
  'BW',
  'BV',
  'BR',
  'IO',
  'VG',
  'BN',
  'BG',
  'BF',
  'BI',
  'KH',
  'CM',
  'CA',
  'CV',
  'BQ',
  'KY',
  'CF',
  'TD',
  'CL',
  'CN',
  'CX',
  'CC',
  'CO',
  'KM',
  'CK',
  'CR',
  'HR',
  'CU',
  'CW',
  'CY',
  'CZ',
  'CD',
  'DK',
  'DJ',
  'DM',
  'DO',
  'EC',
  'EG',
  'SV',
  'GQ',
  'ER',
  'EE',
  'SZ',
  'ET',
  'FK',
  'FO',
  'FJ',
  'FI',
  'FR',
  'GF',
  'PF',
  'TF',
  'GA',
  'GM',
  'GE',
  'DE',
  'GH',
  'GI',
  'GR',
  'GL',
  'GD',
  'GP',
  'GU',
  'GT',
  'GG',
  'GN',
  'GW',
  'GY',
  'HT',
  'HM',
  'HN',
  'HU',
  'IS',
  'IN',
  'ID',
  'IR',
  'IQ',
  'IE',
  'IM',
  'IL',
  'IT',
  'CI',
  'JM',
  'JP',
  'JE',
  'JO',
  'KZ',
  'KE',
  'XK',
  'KW',
  'KG',
  'LA',
  'LV',
  'LB',
  'LS',
  'LR',
  'LY',
  'LI',
  'LT',
  'LU',
  'MO',
  'MK',
  'MG',
  'MW',
  'MY',
  'MV',
  'ML',
  'MT',
  'MH',
  'MQ',
  'MR',
  'MU',
  'YT',
  'MX',
  'FM',
  'MD',
  'MC',
  'MN',
  'ME',
  'MS',
  'MA',
  'MZ',
  'MM',
  'NA',
  'NR',
  'NP',
  'NL',
  'NC',
  'NZ',
  'NI',
  'NE',
  'NG',
  'NU',
  'NF',
  'KP',
  'MP',
  'NO',
  'OM',
  'PK',
  'PW',
  'PS',
  'PA',
  'PG',
  'PY',
  'PE',
  'PH',
  'PN',
  'PL',
  'PT',
  'PR',
  'QA',
  'CG',
  'RO',
  'RU',
  'RW',
  'RE',
  'BL',
  'SH',
  'KN',
  'LC',
  'MF',
  'PM',
  'VC',
  'WS',
  'SM',
  'SA',
  'SN',
  'RS',
  'SC',
  'SL',
  'SG',
  'SX',
  'SK',
  'SI',
  'SB',
  'SO',
  'ZA',
  'GS',
  'KR',
  'SS',
  'ES',
  'LK',
  'SD',
  'SR',
  'SJ',
  'SE',
  'CH',
  'SY',
  'ST',
  'TW',
  'TJ',
  'TZ',
  'TH',
  'TL',
  'TG',
  'TK',
  'TO',
  'TT',
  'TN',
  'TR',
  'TM',
  'TC',
  'TV',
  'UG',
  'UA',
  'AE',
  'GB',
  'US',
  'UM',
  'VI',
  'UY',
  'UZ',
  'VU',
  'VA',
  'VE',
  'VN',
  'WF',
  'EH',
  'YE',
  'ZM',
  'ZW',
  'KI',
  'HK',
  'AX',
] as const

export type CountryCode = (typeof CountryCodeList)[number]

export type CallingCode = string

export type CurrencyCode = string

export type TranslationLanguageCodeMap = {
  [key in TranslationLanguageCode]: string
}
export interface Country {
  region: Region
  subregion: Subregion
  currency: CurrencyCode[]
  callingCode: CallingCode[]
  flag: string
  name: TranslationLanguageCodeMap | string
  cca2: CountryCode
}
export const RegionList = [
  'Africa',
  'Americas',
  'Antarctic',
  'Asia',
  'Europe',
  'Oceania',
] as const
export type Region = (typeof RegionList)[number]

export const SubregionList = [
  'Southern Asia',
  'Southern Europe',
  'Northern Africa',
  'Polynesia',
  'Middle Africa',
  'Caribbean',
  'South America',
  'Western Asia',
  'Australia and New Zealand',
  'Western Europe',
  'Eastern Europe',
  'Central America',
  'Western Africa',
  'North America',
  'Southern Africa',
  'Eastern Africa',
  'South-Eastern Asia',
  'Eastern Asia',
  'Northern Europe',
  'Melanesia',
  'Micronesia',
  'Central Asia',
  'Central Europe',
] as const
export type Subregion = (typeof SubregionList)[number]

export const TranslationLanguageCodeList = [
  'common',
  'cym',
  'deu',
  'fra',
  'hrv',
  'ita',
  'jpn',
  'nld',
  'por',
  'rus',
  'spa',
  'svk',
  'fin',
  'zho',
  'isr',
] as const
export type TranslationLanguageCode =
  (typeof TranslationLanguageCodeList)[number]

export enum FlagType {
  FLAT = 'flat',
  EMOJI = 'emoji',
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// type guards
export const isCountryCode = (str: string): str is CountryCode => {
  return CountryCodeList.some((code) => code === str)
}
// country picker types ends



// user profile types starts
export type UserProfileHomeSubMenuPropType = {
icon: ImageSourcePropType,
heading: string,
content?: string,
imgType?:boolean,
showDeleteModal?:boolean,
setShowLogOutModal:React.Dispatch<React.SetStateAction<boolean>>,
setShowDeleteModal:React.Dispatch<React.SetStateAction<boolean>>,
personaliseSettingModal: boolean,
setPersonaliseSettingModal:React.Dispatch<React.SetStateAction<boolean>>
}


export type BlockUserModalCompPropTypes = {
  showBlockUserModal: boolean,
  setShowBLockUserModal:React.Dispatch<React.SetStateAction<boolean>>
} 
// user profile types ends


// arena props


// login prop types

export type emailVerifyModalCompPropTypes = {
  showEmailModal: boolean,
  setShowEmailModal: React.Dispatch<React.SetStateAction<boolean>>,
  email:string
}