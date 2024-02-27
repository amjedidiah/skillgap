import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type HomeStackNavigatorParamList = {
  onboarding: undefined,
  appSignUp: undefined,
  authResetPassword: undefined,
  authResetPasswordSuccess: undefined,
  loginScreen: undefined,
  signUpScreen:undefined,
  authOtpScreen:undefined,
  authRecoveryScreen:undefined,
  buttonTapNavigation:undefined  
  }

  export type HomeScreenNavigationProps = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  onboarding,
  appSignUp,
  authResetPassword,
  authResetPasswordSuccess,
  loginScreen,
  signUpScreen,
  authOtpScreen,
  authRecoveryScreen,
  buttonTapNavigation>

