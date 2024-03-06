import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Magic, RPCError, RPCErrorCode } from "@magic-sdk/react-native-expo";
import { useInternetConnection } from "@magic-sdk/react-native-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

import AuthHeader from "@/myApp/components/AuthHeader";
import { authSignInCompProps } from "@/myApp/types";
import { validationSchemaSigIn } from "utils/YubValidation";
import AppTextContent from "@/myApp/components/AppTextContent";
import AlertMessage from "@/myApp/components/AlertMessage";

import { useDispatch } from "react-redux";
import { loginAction } from "redux/slices/authSlice";
import { loginApi, validateEmail } from "@/api/authApi";
import { SafeAreaView } from "react-native-safe-area-context";



const AuthLogin = () => {
  
// manage

  const [showModal, setShowModal] = useState(false);
  const [errorType, setErrorType] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState(false);
  const [updateEmailMutation, setUpdateEmailMutation] = useState(false);
  
  // seting up magic
  const magic = new Magic("pk_live_AF0A2FCCABF5C8EF");


  const [form, setForm] = useState<authSignInCompProps>({
    email: ""
  });


  // valaidte email mutation

  const validateEmailMutation = useMutation({
    mutationKey:["validate-email"],
    mutationFn: validateEmail
  })


  //destructure propertie from validateEmailMutation 

  const { data:emailMutationData, error: emailMutationErrorMessage, isError: emailMutationError, isPending:emailMutationPending, isSuccess:emailMutationSuccess } = validateEmailMutation


   console.log("email validation", "data", emailMutationData, "error", emailMutationErrorMessage?.response?.data?.message, "isError",emailMutationError, "isPending", emailMutationPending)
  

  const connected = useInternetConnection();


  // creating a redux dispatch

  const dispatch = useDispatch();

  const loginMutation = useMutation({
    mutationKey: ["user-login"],
    mutationFn: loginApi,
  });

  // instanciating the navigation hook
  const navigation = useNavigation();

  const {
    data: appData,
    error,
    isError,
    isPending,
    isSuccess,
    reset,
  } = loginMutation;

  const formOptions = { resolver: yupResolver(validationSchemaSigIn) };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);


  useEffect(() => {
    const handleState = async () => {
      // console.log("ran useEffect");
      if (isError   && update) {
        setShowModal(true);
        setLoading(!loading)
        setErrorType("error");
        const errorMessage = error?.response?.data.message ||  
        setErrorMessage(errorMessage);
      
        // console.log("ran error");
      }
      if (isPending  && update) {
        setShowModal(true);
        setErrorType("loading");
        setErrorMessage("");
        // console.log("ran loading");
      }
      if (isSuccess && update) {
        dispatch(loginAction(appData?.data));
        setLoading(false);
        setShowModal(true);
        setErrorType("success");
        setErrorMessage("");
        // await AsyncStorage.setItem("userLoginToken", appData?.data?.jwt);
        reset();
       setTimeout(() => {
        setShowModal(false);
        dispatch(loginAction(appData))
       }, 500)

      
      
       
      }
    };
    handleState();
  }, [isError, isPending, isSuccess]);

  useEffect(() => {
    const handleEmailValidtion = () => {
      if (emailMutationError   && updateEmailMutation) {
        console.log("ran email muation error");
        setShowModal(true);
        setLoading(false);
        setErrorType("error");
        const errorMessage = emailMutationErrorMessage?.response?.data.message ||  emailMutationErrorMessage?.data
        setErrorMessage(errorMessage);
      
        // console.log("ran error");
      }
      if (emailMutationPending  && updateEmailMutation) {
        console.log("ran email muation pending");
        setShowModal(true);
        setErrorType("loading");
        setErrorMessage("");
        // console.log("ran loading");
      }
      if (emailMutationSuccess && updateEmailMutation) {
       
        setUpdateEmailMutation(false)
        setShowModal(false);
        setErrorType(null)
     
      console.log("email confirmtion from server successful");
      
      }
   
    }
    handleEmailValidtion()

  },[emailMutationPending, emailMutationSuccess, emailMutationError])

  const onSubmit = async (data: { email: string }) => {
    try {
      setLoading(!loading);
       //check if a user has already logged in
     
    // setUpdate(true)
    setUpdateEmailMutation(true)
       await validateEmailMutation.mutateAsync(data)
      


   const magicToken = await magic.auth.loginWithEmailOTP({
        email: data?.email
      });
      if(!magicToken){
            throw new Error("Email validation failed")
      }
    
  
       setUpdate(true);
     
      await loginMutation.mutateAsync({
        magicToken,
      });
    } catch (err) {
    
      setLoading(false);
    
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
  };
}

// console.log("this is showModal:",showModal,"this is erorMessage:",errorMessage, "this is errorType:",errorType,"this is the isError:", isError, "this is the isPending:",isPending,"isSuccess", isSuccess)

console.log("this is emailMutationPending:",emailMutationPending,"this is emailMutationError:",emailMutationError, "this is emailMuttionSuccess:",emailMutationSuccess)
 

  // showEmailModal, setShowEmailModal
  return (
    <SafeAreaView className="bg-white flex-1 py-[13px] px-[18px]">
      
      <Modal visible={showModal} transparent={true} animationType="fade">   
    <AlertMessage message={errorMessage} type={errorType} setShowModal = {setShowModal} />
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
        <View className="flex flex-col gap-y-2 items-start justify-center mt-[30px] mb-[32px]">
          <Text className="text-gray-950 text-2xl font-semibold font-['General Sans-Regular'] leading-loose">
            Log In
          </Text>
        </View>

        {/* email start */}

        <View className="w-full mt-4">
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
                    bg-white rounded-[30px] shadow border border-gray-300"
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

      

    

        {/* app button start */}

        <TouchableOpacity
           disabled={loading}
          activeOpacity={0.5}
          onPress={handleSubmit(onSubmit)}
          className={`w-full px-2.5 py-4 ${loading ? "bg-sky-400" : "bg-sky-500"} rounded-[40px] justify-center items-center mt-4`}
        >
          <Text className="text-center text-white text-sm font-medium font-['GeneralSans-Regular'] leading-normal">
           {
            loading ?  "Loading..." : " Log In"
           }
          </Text>
        </TouchableOpacity>

        {/* APP BUTTON END */}

        {/* create account start */}
        <View className="items-center mt-8 w-full ">
       
        

          <View className="flex-row justify-center">
            <Text className="text-gray-950 text-sm font-medium font-['General Sans Variable'] leading-tight ">
              Don’t have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("signUpScreen");
              }}
            >
              <Text className="text-sky-500 text-sm font-medium font-['General Sans '] pl-2 leading-tight">
                Create an account.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* create account end */}
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({});

export default AuthLogin;
