import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import PhoneInput, { isValidNumber } from "react-native-phone-number-input";
import * as yup from "yup";

import AuthLayout from "@/components/auth/auth-layout";
import FormField from "@/components/shared/form-field";
import { isAndroid } from "@/lib/constants";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "Nigeria",
  countryCode: "NG",
  phoneNumber: "",
};

const schema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .test(
      "length",
      "First name must be between 2 and 20 characters",
      (value) => value?.length >= 2 && value?.length <= 20
    ),
  lastName: yup
    .string()
    .required("Last name is required")
    .test(
      "length",
      "Last name must be between 2 and 20 characters",
      (value) => value?.length >= 2 && value?.length <= 20
    ),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is requried"),
  country: yup.string().required("Country is required"),
  countryCode: yup.string().required("Country code is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .test("valid", "Please enter a valid phone number", (value) =>
      isValidNumber(value, "NG")
    ),
});

export type FormData = typeof defaultValues;

function SignUp() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const isDisabled = !isDirty || !isValid;
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  const values = watch();
  const countryCode = watch("countryCode");

  console.log(values);

  return (
    <AuthLayout title="Sign Up">
      <View className="flex-1" style={{ rowGap: 16 }}>
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
            <FormField
              label="Country"
              error={errors?.countryCode?.message}
              noInput
            >
              <View className="overflow-hidden flex-1">
                <CountryPicker
                  withFilter
                  withCountryNameButton
                  countryCode={value as any}
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
                defaultCode={countryCode as any}
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

        <View className="gap-3 mt-6">
          <TouchableOpacity
            disabled={isDisabled}
            className={`${isDisabled || isSubmitting ? "opacity-50" : ""} bg-twitter-blue rounded-[40px] py-4 px-[10px]`}
            onPress={onSubmit}
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
      </View>
    </AuthLayout>
  );
}

export default memo(SignUp);
