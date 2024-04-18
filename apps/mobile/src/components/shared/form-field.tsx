import { PropsWithChildren, memo, useState } from "react";
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";

import { SGFieldError } from "@/icons";

const borderStyles: StyleProp<TextStyle> = {
  borderWidth: 1,
  borderStyle: "solid",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 1, // This is required for Android
  backgroundColor: "#FFFFFF",
};

type Props = PropsWithChildren<
  {
    label: string;
    noInput?: boolean;
    error?: string;
  } & Readonly<TextInputProps>
>;

const FormField = ({
  children,
  label,
  noInput = false,
  error,

  placeholderTextColor = "#8f8f8f",
  keyboardType = "default",
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View className="flex gap-[6px]">
      <Text
        style={{ fontFamily: "GeneralSans-Medium" }}
        className="text-gray-700 text-sm"
      >
        {label}
      </Text>
      <View
        className={`flex-row items-center h-auto rounded-[30px] border ${!isFocused && !error ? "border-gray-300" : ""} bg-white`}
        style={[
          borderStyles,
          Boolean(error) && {
            borderColor: "#FDA29B",
            shadowColor: "rgba(16, 24, 40, 0.05)",
          },
          isFocused &&
            !error && {
              borderColor: "#338AF3",
              shadowColor: "#161828",
            },
        ]}
      >
        {noInput && children}
        {!noInput ? (
          <TextInput
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            className="text-primary text-sm leading-4 flex-1 py-[10px] px-[14px] rounded-[30px] h-auto bg-white"
            style={{
              fontFamily: "GeneralSans-Regular",
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
        ) : null}
        {error && (
          <View className="px-2">
            <SGFieldError />
          </View>
        )}
      </View>
      {error && (
        <Text
          className="text-error-500 text-sm leading-5"
          style={{ fontFamily: "GeneralSans-Regular" }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default memo(FormField);
