import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  
  import { SafeAreaView } from "react-native-safe-area-context";
  
  
  
  
  import { yupResolver } from "@hookform/resolvers/yup";
  import { useForm, Controller } from "react-hook-form";
  
  
  
  import { useNavigation } from "@react-navigation/native";
  import AuthHeader from "@/myApp/components/AuthHeader";
  import { authSignInCompProps } from "@/myApp/types";
  import { validationSchemaSigIn } from "utils/YubValidation";
  import AppButton from "@/myApp/components/AppButton";
import AppTextContent from "@/myApp/components/AppTextContent";
  
  const AuthLogin = () => {
    const [form, setForm] = useState<authSignInCompProps>({
      email: "",
      password: ""
    });

  
  
    const formOptions = { resolver: yupResolver(validationSchemaSigIn) };
  
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm(formOptions);
  
    const onSubmit = (data: string) => {
      console.log("ran in submit")
      navigation.navigate("verifyEmail")
    };
  
    const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  
    const dismissKeyboard = () => {
      Keyboard.dismiss();
    };
  
    const navigation = useNavigation();
  
  
  
  
  
  
    return (
    
        <SafeAreaView className="bg-white flex-1 py-[13px] px-[18px]">
       
          <View className="w-full mt-4 pb-4">
            <AuthHeader />
          </View>
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1
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
                    <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 ">
                      <TextInput
                        onChangeText={(data) => {
                          setForm({
                            ...form, email: data
                           })
                            onChange(data)
                        }
                         
                        }
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
  
  
  {/* region start */}
  
  {/* region ends */}
  
  
  

        {/* password starts */}
            <View className="w-full mt-4 ">
              <View className="items-start space-y-[10px] w-full">
                <View className="items-start mb-2">
                  <Text className="text-black text-sm font-normal font-['Nunito-Regular']">
                    {"Password"}
                  </Text>
                </View>
  
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View className="w-full h-[52px] px-2 text-white  flex-row items-center justify-between space-x-2 
                    bg-white rounded-[30px] shadow border border-gray-300 ">
                      <TextInput
                         onChangeText={(data) => {
                          setForm({
                            ...form, password: data
                           })
                            onChange(data)
                        }
                         
                        }
                        value={value}
                        placeholder={"1234567890"}
                        placeholderTextColor={"gray"}
                        cursorColor={"gray"}
                        className="flex-1 text-gary-900"
                        onBlur={onBlur}
                       
                    
                      />
                    
                    </View>
                  )}
                  name={"password"}
                />
  
                <View className="w-[327px]">
                  {errors.password && (
                    <Text
                      className="text-red-500
                      font-bold "
                    >
                      {errors.password.message}
                    </Text>
                  )}
                </View>
              </View>
            </View>
  
            {/* password ends */}
  
  
          {/* app button start */}
  
          <TouchableOpacity
            activeOpacity={0.5}
              onPress={handleSubmit(onSubmit)}
              className={`w-full px-2.5 py-4 bg-sky-500 rounded-[40px] justify-center items-center mt-4`}
            >
              <Text className="text-center text-white text-sm font-medium font-['GeneralSans-Regular'] leading-normal">
               Log In
              </Text>
            </TouchableOpacity>
  
          {/* APP BUTTON END */}

          {/* recovery password start */}
          <View className="items-center mt-8 w-full ">
             <AppTextContent text="Recover Password" classText="text-sky-500 text-center text-sm leading-tight" />

            <View className="flex-row justify-center">
            <Text className="text-gray-950 text-sm font-medium font-['General Sans Variable'] leading-tight ">Don’t have an account?</Text>
           <TouchableOpacity
           
           onPress={() => {
            navigation.navigate("signupScreen")
           }}>
           <Text className="text-sky-500 text-sm font-medium font-['General Sans '] pl-2 leading-tight">Create an account.</Text>
           </TouchableOpacity>
            </View>
            </View>
          {/* recovery password end */}
          
          </ScrollView>
        </SafeAreaView>
     
    );
  };
  
  const styles = StyleSheet.create({});
  
  export default AuthLogin;
  