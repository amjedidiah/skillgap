// third part imports starts
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { Magic, RPCError, RPCErrorCode } from "@magic-sdk/react-native-expo";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// third party imports ends

// imports from app starts
import { Country, authSignupCompProps } from "@/myApp/types";
import AuthHeader from "@/myApp/components/AuthHeader";
import CountryCodePicker from "@/myApp/components/CountryCode";
import { Entypo } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { registerApi, validateMagicApi } from "@/api/authApi";
import AlertMessage from "@/myApp/components/AlertMessage";
import { validationSchemaSignUp } from "utils/YubValidation";
import PhoneNumberScreen from "@/myApp/components/PhoneNumber";
import { loginAction } from "redux/slices/authSlice";
import { useDispatch } from "react-redux";
// imports  from app ends

const AuthSignUp = () => {
  // state management
  const [showCountryPickerModal, setShowCountryPickerModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorType, setErrorType] = useState(null);
  const [formData, setFormData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [updateRegister, setUpdateRegister] = useState(false);
  const  [disableButton, setDisableButton] = useState(false)
 
  
  // phoneNumber state
  const [phoneValue, setPhoneValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);


  // state controlling the magicMutation
  const [validateMagicData, setValidateMagicData] = useState(false)

  // initiating a reducer dispatch

  const dispatch = useDispatch()

  // setig the magic
  const magic = new Magic("pk_live_AF0A2FCCABF5C8EF");


  const [country, setCountry] = useState<Country>({
    callingCode: ["234"],
    cca2: "NG",
    currency: ["NGN"],
    flag: "flag-ng",
    name: "Nigeria",
    region: "Africa",
    subregion: "Western Africa",
  });

  // instanciating navigation hook
  const navigation = useNavigation();



  // controling when to display indicating for isPending, isError and success

  // the set update state controls when to set comIsPending state, compIsError state and setCompIsSuccess state
  const [update, setUpdate] = useState(false);

  // response from server
  const registerMutation = useMutation({
    mutationKey: ["user-register"],
    mutationFn: registerApi,
  });
  const { data, error, isError, isPending, isSuccess } = registerMutation;

  const validateMagicMutation = useMutation({
    mutationKey: ["user-magic-validate"],
    mutationFn: validateMagicApi,
  });

  const {
    data: magicData,
    error: magicError,
    isError: magicIsError,
    isPending: magicIsPending,
    isSuccess: magicIsSuccess,
  } = validateMagicMutation;
  //  rect hook form section starts

  const handleRegister = async () => {
   
      const region = JSON.stringify(country);
    console.log("this is the region", {...formData,"region":region,"jwt":magicData?.jwt});
    setUpdate(true)
      await registerMutation.mutateAsync({
        ...formData,
        region,
        jwt: magicData?.jwt
      });
    
  };



  console.log(
    "this are the data from magic api",
    magicData,
    magicError,
    magicIsError,
    magicIsPending,
    magicIsSuccess
  );
  // form state data
  const [form, setForm] = useState<authSignupCompProps>({
    firstName: "",
    lastName: "",
    email: "",
    region: "",
    phoneNumber: "",
    userName: "",
  });

  const formOptions = { resolver: yupResolver(validationSchemaSignUp) };

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm(formOptions);
  // onSubmit function for submiting forms
  const onSubmit = async (data: any) => {
    try {
      if(!isPhoneNumberValid){
        console.log("this is the inner data",data)
        return
      }
       setDisableButton(!disableButton)
       setFormData(data)
      
      // verify email from magic.link

   
     console.log("this is the auth",magic.auth)
       magic.user.logout()
      const magicToken = await magic.auth.loginWithEmailOTP({
        email: data?.email,
      });
     
      setValidateMagicData(!validateMagicData)
      await validateMagicMutation.mutateAsync({
        magicToken,
        validateMagic: true,
      });
    
    } catch (err: any) {
       setDisableButton(!disableButton);
    
      if (err instanceof RPCError) {
        switch (err.code) {
          case RPCErrorCode.MagicLinkFailedVerification:
            Alert.alert("Magic Email Verirfication Error", "Email verification failed")
            break;
          case RPCErrorCode.MagicLinkExpired:
            Alert.alert("Magic Email Verirfication Error", "Email verifiction failed due to expired link")

          break;

          case RPCErrorCode.MagicLinkRateLimited:
            Alert.alert("Magic Email Verirfication Error", "Email verification failed due to rate limit")

          break;
          case RPCErrorCode.UserAlreadyLoggedIn:
            Alert.alert("Magic Email Verirfication Error", "User allredy loggedin")
        }
    } 
  } finally{
  setDisableButton(false)
  };
    
  };

  // useEffect for controlling loading, error, success state of the form
  useEffect(() => {
    if (isError  && update) {
      setShowModal(true);
      setErrorType("error");
      const errorMessage = error?.response?.data.message || error?.message;
    
      setErrorMessage(errorMessage);
      setValidateMagicData(false)
      setUpdate(false)
      setDisableButton(false);
     
    }
    if (isPending  && update) {
      setShowModal(true);
      setErrorType("loading");
      setErrorMessage("");
      console.log("ran loading in second");
    }
    if (isSuccess && update) {
      // dispatch(loginAction(appData?.data));
      setShowModal(true);
      setDisableButton(false)
      setErrorType("success");
      setErrorMessage("");
      setPhoneValue("")

      setTimeout(() => {
        setShowModal(false);
        setUpdate(false);
        setValidateMagicData(false)
        setErrorType(null);
        reset();
        dispatch(loginAction(data))
      
      }, 500);

    }
  }, [
    isError,
    isPending,
    isSuccess,
   
  ]);

  useEffect(() => {
   
    const handleEmailValidtion = () => {
      if (magicIsError   && validateMagicData) {
        console.log("ran email muation error");
        setShowModal(true);
        // setLoading(false);
        setErrorType("error");
        const errorMessage = magicError?.response?.data.message ||  magicError?.data
        setErrorMessage(errorMessage? errorMessage : "Internal server error");
      setDisableButton(false)
      setValidateMagicData(false)
        // console.log("ran error");
      }
      if (magicIsPending  && validateMagicData) {
        console.log("ran email muation pending");
        setShowModal(true);
        setErrorType("loading");
        setErrorMessage("");
        // console.log("ran loading");
      }
      if (magicIsSuccess && validateMagicData) {
        handleRegister();
         
      console.log("email confirmtion from server successful");
      
      }
   
    }
    handleEmailValidtion()

  },[magicIsError, magicIsPending, magicIsSuccess])

  // check when phoneNumber is valid


  // console.log("isPhoneNumberValid:", isPhoneNumberValid, "erros:", errors, "form:", form, "phoneNumber", form.phoneNumber)
  return (
    <SafeAreaView className="bg-white flex-1 py-[13px] px-[18px]">

      <Modal visible={showModal} transparent={true} animationType="fade">
        <AlertMessage
          message={errorMessage}
          type={errorType}
          setShowModal={setShowModal}
        />
      </Modal>
      <View className="w-full mt-4 pb-4">
        <AuthHeader />
      </View>
    
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
          <KeyboardAwareScrollView 
          >
        <View className="flex flex-col gap-y-2 items-start justify-center mt-[30px] mb-[32px]">
          <Text className="text-gray-950 text-2xl font-semibold font-['General Sans Variable'] leading-loose">
            Create Account
          </Text>
        </View>
    
            
        {/* first name start */}
        <View className="w-full mt-4">
          <View className="items-start space-y-[10px] w-full">
            <View className="items-start mb-2">
              <Text className="text-gray-950 text-sm font-normal font-['Noto Sans']">
                {"First Name"}
              </Text>
            </View>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View
                  className="w-full h-[42px] px-2 text-white  flex-row items-center justify-between space-x-2 
                   bg-white rounded-[30px] shadow border border-gray-300 
                 "
                >
                  <TextInput
                    onChangeText={(data) => {
                      setForm({
                        ...form,
                        firstName: data,
                      });
                      onChange(data);
                    }}
                    value={value}
                    placeholder={"Wisdome"}
                    placeholderTextColor={"gray"}
                    cursorColor={"gray"}
                    className="flex-1 text-gary-900"
                    onBlur={onBlur}
                    keyboardType={"default"}
                  />
                </View>
              )}
              name={"firstName"}
            />

            <View className="w-full">
              {errors.firstName && (
                <Text
                  className="text-red-500
                   font-bold "
                >
                  {errors.firstName.message}
                </Text>
              )}
            </View>
          </View>
        </View>
        {/* first name end */}

        {/* last name start */}
        <View className="w-full mt-2">
          <View className="items-start space-y-[10px] w-full">
            <View className="items-start mb-2">
              <Text className="text-black text-sm font-normal font-['Noto Sans']">
                {"Last Name"}
              </Text>
            </View>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View
                  className="w-full h-[42px] px-2 text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300 "
                >
                  <TextInput
                    onChangeText={(data) => {
                      setForm({
                        ...form,
                        lastName: data,
                      });
                      onChange(data);
                    }}
                    value={value}
                    placeholder={"Enter user name"}
                    placeholderTextColor={"gray"}
                    cursorColor={"gray"}
                    className="flex-1 text-gary-900"
                    onBlur={onBlur}
                    keyboardType={"default"}
                  />
                </View>
              )}
              name={"lastName"}
            />

            <View className="w-[327px]">
              {errors.lastName && (
                <Text
                  className="text-red-500
                   font-bold "
                >
                  {errors.lastName.message}
                </Text>
              )}
            </View>
          </View>
        </View>
        {/* last name end */}

        {/* user name start */}
        <View className="w-full mt-2">
          <View className="items-start space-y-[10px] w-full">
            <View className="items-start mb-2">
              <Text className="text-black text-sm font-normal font-['Noto Sans']">
                {"User Name"}
              </Text>
            </View>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View
                  className="w-full h-[42px] px-2 text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300 "
                >
                  <TextInput
                    onChangeText={(data) => {
                      setForm({
                        ...form,
                        userName: data,
                      });
                      onChange(data);
                    }}
                    value={value}
                    placeholder={"Enter user name"}
                    placeholderTextColor={"gray"}
                    cursorColor={"gray"}
                    className="flex-1 text-gary-900"
                    onBlur={onBlur}
                    keyboardType={"default"}
                  />
                </View>
              )}
              name={"userName"}
            />

            <View className="w-[327px]">
              {errors.userName && (
                <Text
                  className="text-red-500
                   font-bold "
                >
                  {errors.userName.message}
                </Text>
              )}
            </View>
          </View>
        </View>
        {/* user name end */}

       
        {/* email start */}

        <View className="w-full mt-2">
          <View className="items-start space-y-[10px] w-full">
            <View className="items-start mb-2">
              <Text className="text-black text-sm font-normal font-['Noto Sans']">
                {"Email"}
              </Text>
            </View>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View
                  className="w-full h-[42px] px-2 text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300 "
                >
                  <TextInput
                    onChangeText={(data) => {
                      setForm({
                        ...form,
                        email: data,
                      });
                      onChange(data);
                    }}
                    value={value}
                    placeholder={"qubicx72@gmail.com"}
                    placeholderTextColor={"gray"}
                    cursorColor={"gray"}
                    className="flex-1 text-gary-900"
                    onBlur={onBlur}
                    keyboardType={"email-address"}
                  />
                </View>
              )}
              name={"email"}
            />

            <View className="w-[327px]">
              {errors.email && (
                <Text
                  className="text-red-500
                   font-bold "
                >
                  {errors.email.message}
                </Text>
              )}
            </View>
          </View>
        </View>

        {/* email end */}

        {/* Region  start*/}

        <View className="w-full mt-2">
          <View className="items-start space-y-[10px] w-full">
            <View className="items-start">
              <Text className="text-black text-sm font-normal font-['Noto Sans']">
                {"Region"}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                setShowCountryPickerModal(true);
              }}
              className="w-full h-[42px] px-2 text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300  "
            >
              <View className="flex-row items-center">
                <CountryCodePicker
                  showCountryPickerModal={showCountryPickerModal}
                  setShowCountryPickerModal={setShowCountryPickerModal}
                  setCountry={setCountry}
                  country={country}
                />
                <Text className="relative -left-1">{country?.name}</Text>
              </View>
              <Entypo name="chevron-thin-down" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Region end */}
      
        {/* phoneNumber start */}

        <View className="w-full mt-4 ">
          <View className="items-start space-y-[10px] w-full">
            <View className="items-start mb-2">
              <Text
              style={{
                fontFamily:"GeneralSans-Regular"
              }}
              className="text-black text-sm font-normal">
                {"Phone Number"}
              </Text>
            </View>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View
                  className="w-full h-[42px] text-white  flex-row items-center justify-between space-x-2 
                 bg-white rounded-[30px] shadow border border-gray-300 bg-red-400  "
                >
                  <PhoneNumberScreen
                    setPhoneValue={setPhoneValue}
                    setFormattedValue={setFormattedValue}
                    setIsPhoneNumberValid={setIsPhoneNumberValid}
                    phoneValue={phoneValue}
                    setForm={setForm}
                    form={form}
                    onChange={onChange}
                  />
                </View>
              )}
              name={"phoneNumber"}
            />

            <View className="w-full">
              
              {errors.phoneNumber ?  
              (
                <Text
                className="text-red-500
                font-bold "
                >
                  {errors.phoneNumber.message}
                </Text>
              ) :  !isPhoneNumberValid && form.phoneNumber ?  <Text
              className="text-red-500
              font-bold"
              >
              Invalid phone number
              </Text> : ""}
            </View>
          </View>
        </View>

             
        {/* phoneNumber ends */}

        {/* app button start */}

        <TouchableOpacity
        disabled={disableButton}
          activeOpacity={0.5}
          onPress={handleSubmit(onSubmit)}
          className={`w-full px-2.5 py-4 bg-sky-500 rounded-[40px] justify-center items-center mt-4 ${disableButton && "bg-sky-300"}`}
        >
          <Text
          style={{
            fontFamily:"GeneralSans-Regular"
          }}
          className="text-center text-white text-sm font-medium  leading-normal">
          {
            disableButton ? "Loading..." : "SignUp"
          }
          </Text>
        </TouchableOpacity>
        </KeyboardAwareScrollView >

        {/* APP BUTTON END */}
      </ScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthSignUp;
