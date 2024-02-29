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
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Magic } from "@magic-sdk/react-native-expo";
import { useInternetConnection } from "@magic-sdk/react-native-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
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
import { loginApi } from "@/api/authApi";



const AuthLogin = () => {
  // manage

  const [showModal, setShowModal] = useState(false);
  const [errorType, setErrorType] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState(false);

  // seting up magic
  const magic = new Magic("pk_live_AF0A2FCCABF5C8EF");


  const [form, setForm] = useState<authSignInCompProps>({
    email: "",
  });



  const route = useRoute()
  const receivedData = route.params?.data
  useEffect(() => {
   if(receivedData){
    setShowEmailModal(true)
    setEmail(receivedData)
   }
  }, [receivedData])
  // check internet connection

  const connected = useInternetConnection();

  useEffect(() => {
    if (!connected) {
      console.log("internet is not connected");
      return;
      // Unomount this component and show your "You're offline" screen.
    }
    console.log("internet is connected");
  }, [connected]);

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

  // changePasswordApi




  // yarn add @magic-sdk/react-native-expo
  // yarn add react-native-webview@^11.26.0 # Required Peer Dependency
  // yarn add react-native-safe-area-context # Required Peer Dependency



  useEffect(() => {
    const handleState = async () => {
      console.log("ran useEffect");
      if (isError && update) {
        setShowModal(true);
        setLoading(!loading)
        setErrorType("error");
        const errorMessage = error?.response?.data.message || error?.message;
        setErrorMessage(errorMessage);
        setLoading(false);
        console.log("ran error");
      }
      if (isPending && update) {
        setShowModal(true);
        setErrorType("loading");
        setErrorMessage("");
        console.log("ran loading");
      }
      if (isSuccess && update) {
        dispatch(loginAction(appData?.data));
        setLoading(!loading);
        await AsyncStorage.setItem("userLoginToken", appData?.data?.jwt);
        setTimeout(() => {
          setUpdate(false);
          navigation.navigate("buttonTapNavigation");
        },500);
        setShowModal(true);
        setErrorType("success");
        setErrorMessage("");
        reset();
      }
    };
    handleState();
  }, [isError, isPending, isSuccess]);

  const onSubmit = async (data: { email: string }) => {
    try {
       setLoading(!loading);
      const magicToken = await magic.auth.loginWithEmailOTP({
        email: data?.email,
      });
      console.log(magicToken);
      setUpdate(true);
     
      await loginMutation.mutateAsync({
        magicToken,
      });
    } catch (err) {
      console.log("this is the error", err.message);
    }
  };

console.log("this is showModal:",showModal,"this is erorMessage:",errorMessage, "this is errorType:",errorType,"this is the isError:", isError, "this is the isPending:",isPending,"isSuccess", isSuccess)
 

  // showEmailModal, setShowEmailModal
  return (
    <SafeAreaView className="bg-white flex-1 py-[13px] px-[18px]">
      
      <Modal visible={showModal} transparent={true} animationType="fade">   
    <AlertMessage message={errorMessage} type={errorType} setShowModal = {setShowModal} />
    </Modal>
      {/* Render the Magic iframe! */}
      <magic.Relayer />
      

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
                  className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
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
