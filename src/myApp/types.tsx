import { ImageSourcePropType } from "react-native"


export type AppTextProp =  {
   text: string,
   classText?: string
}


export type AppAuthHeaderProp =  {
   text: string,
   classText?: string
}


export type AppButtonProp =  {
   text: string,
   ButtonTextStyle?: string,
   ButtonViewStyle?:string,
   handleOnpress: (url?: string) => void
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
   password: string
 
 }


 export type authResetPasswordCompProps = {
   newPassword: string,
   confirmPassword: string,

 
 }


 export type authSignInCompProps = {
   email: string,
   password: string
 
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
   setShowModal: React.Dispatch<React.SetStateAction<string>>

 } 


 export type gameComponentPropType = {
  img: ImageSourcePropType,
 name:string,
amount: string,
userName:string,
time:string,
active: boolean
} 

export type WalletTransactionComponentPropType = {
  img: ImageSourcePropType,
  imageDivBgColor: string,
  sendeOrReceiver: string,
  time: string,
  amount: number,
  transactionStatus: string,
  transactionType: string,
  showModal: string,
  setShowModal:React.Dispatch<React.SetStateAction<string>>,

  
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
  setShowModal: React.Dispatch<React.SetStateAction<string>>,
  bannerBgColor: string,

  accountName:string,
  accountBank: string,
  accountNumber:string

  }