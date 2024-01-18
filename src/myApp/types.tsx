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


 export type authSignInCompProps = {
   email: string,
   password: string
 
 }

