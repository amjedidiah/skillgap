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


import { validationResetPassword } from "utils/YubValidation";
import AppTextHeading from "@/myApp/components/AppTextHeading";
import { authResetPasswordCompProps } from "@/myApp/types";
  
  const AuthResetPassword = () => {
    const [form, setForm] = useState<authResetPasswordCompProps>({
      newPassword: "",
      confirmPassword: "",
     
    });
  
  
  
    const formOptions = { resolver: yupResolver(validationResetPassword) };
  
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm(formOptions);
  
    const onSubmit = (data: string) => {
      console.log(data)
      navigation.navigate("authResetPasswordSuccess")
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
             <AppTextHeading text="Reset Password" classText="text-gray-950 text-2xl font-semibold font-['GeneralSans-Regular'] leading-loose" />
            </View>
  
        {/* password starts */}
            <View className="w-full mt-4 ">
              <View className="items-start space-y-[10px] w-full">
                <View className="items-start mb-2">
                  <Text className="text-black text-sm font-normal font-['Noto Sans']">
                    {"New Password"}
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
                            ...form, newPassword: data
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
                  name={"newPassword"}
                />
  
                <View className="w-[327px]">
                  {errors.newPassword && (
                    <Text
                      className="text-red-500
                      font-bold "
                    >
                      {errors.newPassword.message}
                    </Text>
                  )}
                </View>
              </View>
            </View>
  
            {/* password ends */}
  
  

 {/* password starts */}
 <View className="w-full mt-4 ">
              <View className="items-start space-y-[10px] w-full">
                <View className="items-start mb-2">
                  <Text className="text-black text-sm font-normal font-['Noto Sans']">
                    {"Confirm Password"}
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
                            ...form, confirmPassword: data
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
                  name={"confirmPassword"}
                />
  
                <View className="w-[327px]">
                  {errors.confirmPassword && (
                    <Text
                      className="text-red-500
                      font-bold "
                    >
                      {errors.confirmPassword.message}
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
               Save Password
              </Text>
            </TouchableOpacity>
  
          {/* APP BUTTON END */}
          
          </ScrollView>
        </SafeAreaView>
     
    );
  };
  
  const styles = StyleSheet.create({});
  
  export default AuthResetPassword;
  