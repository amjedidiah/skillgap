import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

import AuthLayout from "./auth-layout";
import FormField from "../shared/form-field";

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <AuthLayout title="Sign In">
      <View className="flex-1" style={{ rowGap: 16 }}>
        <FormField
          label="Email"
          placeholder="john.doe@example.com"
          autoComplete="email"
          inputMode="email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View className="gap-y-3 mt-6">
          <TouchableOpacity className="bg-twitter-blue rounded-[40px] py-4 px-[10px]">
            <Text
              className="text-center text-white text-sm leading-6 -tracking-[0.14px]"
              style={{ fontFamily: "GeneralSans-Medium" }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center items-center">
            <Text
              className="text-black-100 text-sm leading-5"
              style={{ fontFamily: "GeneralSans-Medium" }}
            >
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp" as never)}
            >
              <Text
                className="text-twitter-blue text-sm leading-5"
                style={{ fontFamily: "GeneralSans-Medium" }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
}
