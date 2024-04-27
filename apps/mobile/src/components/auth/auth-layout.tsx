import { useNavigation } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { SGBackArrow } from "../../icons";
import { isiOS } from "../../lib/constants";
import NativeSafeAreaView from "../shared/native-safe-area-view";

export default function AuthLayout({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  const navigation = useNavigation();

  return (
    <NativeSafeAreaView>
      <KeyboardAvoidingView className="flex-1">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView
            className="flex-1"
            contentContainerStyle={{
              rowGap: 16,
              paddingVertical: 32,
              paddingHorizontal: 24,
            }}
            extraHeight={isiOS ? 0 : 50}
          >
            <TouchableOpacity onPress={navigation.goBack}>
              <SGBackArrow />
            </TouchableOpacity>
            <Text
              style={{ fontFamily: "GeneralSans-Semibold" }}
              className="mb-2 text-black-100 text-2xl -tracking-[0.24px]"
            >
              {title}
            </Text>
            {children}
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </NativeSafeAreaView>
  );
}
