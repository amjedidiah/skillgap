import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { memo, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";
import PhoneInput, { isValidNumber } from "react-native-phone-number-input";
import * as yup from "yup";

import AuthLayout from "./auth-layout";
import useSignin from "../../hooks/use-signin";
import { apiSignUp } from "../../lib/api";
import { isAndroid } from "../../lib/constants";
import FormField from "../shared/form-field";
import ShouldRender from "../shared/should-render";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  tag: "",
  country: "Nigeria",
  countryCode: "NG",
  phoneNumber: "",
};

export type ISignupValues = typeof defaultValues;

const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .test(
      "length",
      "First name should be between 2 and 20 characters",
      (value) => value?.length >= 2 && value?.length <= 20
    ),
  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .test(
      "length",
      "Last name should be between 2 and 20 characters",
      (value) => value?.length >= 2 && value?.length <= 20
    ),
  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  tag: yup
    .string()
    .trim()
    .required("A user tag is required")
    .test(
      "length",
      "Your user tag must be between 4 and 41 characters",
      (value) => value?.length >= 4 && value?.length <= 41
    ),
  country: yup.string().trim().required("Country is required"),
  countryCode: yup.string().trim().required("Country code is required"),
  phoneNumber: yup
    .string()
    .trim()
    .required("Phone number is required")
    .test("valid", "Please enter a valid phone number", function (value) {
      const cc = this?.parent.countryCode as CountryCode;
      return isValidNumber(value, cc);
    }),
});

export type FormData = typeof defaultValues;

function SignUp() {
  const signin = useSignin();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting, dirtyFields },
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const isDisabled = !isDirty || !isValid;
  const countryCode = watch("countryCode");
  const firstName = watch("firstName");
  const lastName = watch("lastName");

  const onSubmit = async (data: FormData) => {
    console.log(data);

    try {
      // 1. Magic Auth
      const resp = await signin(data.email);
      console.info("Signed in in successfully");

      // 2. Save Token
      if (!resp?.token) throw new Error("Invalid token");
      await SecureStore.setItemAsync(
        process.env.EXPO_PUBLIC_SECURE_STORE_KEY as string,
        resp.token
      );
      console.info("Token saved");

      // 3. Create Account
      const { data: signupData } = await apiSignUp(data, resp.token);
      console.info(data);
      if (!signupData) throw new Error("Error");

      // 4. Redirect
      navigation.navigate("CreatePin" as never);
    } catch (error) {
      console.error(`An error occurred signing up ${data.email}: `, error);
    }
  };

  useEffect(() => {
    // TODO: Use OpenAI to suggest user tag if `tag` field has not been touched by the user
    if (dirtyFields.tag) return;

    const openaiTag =
      (firstName || lastName) && [firstName, lastName].join(".").toLowerCase();

    setValue("tag", openaiTag);
  }, [dirtyFields.tag, firstName, lastName, setValue]);

  return (
    <AuthLayout title="Sign Up">
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormField
            placeholder="John"
            autoComplete="given-name"
            inputMode="text"
            label="First Name"
            error={errors?.firstName?.message}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormField
            placeholder="Doe"
            autoComplete="family-name"
            inputMode="text"
            label="Last Name"
            error={errors?.lastName?.message}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormField
            placeholder="john.doe@example.com"
            autoComplete="email"
            inputMode="email"
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors?.email?.message}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View className="gap-y-1">
            <FormField
              placeholder="john.doe"
              autoComplete="username"
              inputMode="text"
              label="User tag"
              keyboardType="default"
              autoCapitalize="none"
              error={errors?.tag?.message}
              onChangeText={(value) => onChange(value.toLowerCase())}
              value={value}
            />
            <ShouldRender condition={!errors?.tag?.message}>
              <Text className="text-gray text-xs">
                We'll suggest a user tag for you. Feel free to change it if you
                don't like it.
              </Text>
            </ShouldRender>
          </View>
        )}
        name="tag"
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormField
            label="Country"
            error={errors?.countryCode?.message}
            noInput
          >
            <View className="overflow-hidden flex-1">
              <CountryPicker
                withFilter
                withCountryNameButton
                countryCode={value as CountryCode}
                preferredCountries={["NG"]}
                containerButtonStyle={{
                  minWidth: 500,
                  paddingHorizontal: 14,
                  paddingVertical: isAndroid ? 10 : 0,
                }}
                onSelect={(country) => {
                  setValue("country", country.name.toString());
                  onChange(country.cca2);
                }}
                countryCodes={["NG"]}
              />
            </View>
          </FormField>
        )}
        name="countryCode"
      />
      <Controller
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <FormField
            label="Phone Number"
            error={errors?.phoneNumber?.message}
            noInput
          >
            <PhoneInput
              ref={ref}
              defaultCode={countryCode as CountryCode}
              value={value}
              layout="second"
              onChangeText={onChange}
              containerStyle={{
                flex: 1,
                borderRadius: 30,
              }}
              textContainerStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                backgroundColor: "#FFFFFF",
              }}
              textInputStyle={{
                paddingHorizontal: 14,
                height: "100%",
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                fontFamily: "GeneralSans-Regular",
                color: "#292D32",
                fontSize: 14,
                lineHeight: 16,
              }}
              countryPickerButtonStyle={{
                paddingVertical: 10,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
              }}
            />
          </FormField>
        )}
        name="phoneNumber"
      />

      <View className="gap-y-3 mt-6">
        <TouchableOpacity
          disabled={isDisabled}
          className={`${isDisabled || isSubmitting ? "opacity-50" : ""} bg-twitter-blue rounded-[40px] py-4 px-[10px]`}
          onPress={handleSubmit(onSubmit)}
        >
          {!isSubmitting ? (
            <Text
              className="text-center text-white text-sm leading-6 -tracking-[0.14px]"
              style={{ fontFamily: "GeneralSans-Medium" }}
            >
              Sign up
            </Text>
          ) : (
            <ActivityIndicator color="#1D9BF0" />
          )}
        </TouchableOpacity>
        <View className="flex-row justify-center items-center">
          <Text
            className="text-black-100 text-sm leading-5"
            style={{ fontFamily: "GeneralSans-Medium" }}
          >
            Already have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn" as never)}
          >
            <Text
              className="text-twitter-blue text-sm leading-5"
              style={{ fontFamily: "GeneralSans-Medium" }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthLayout>
  );
}

export default memo(SignUp);
