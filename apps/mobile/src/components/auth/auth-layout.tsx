import { useNavigation } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import NativeSafeAreaView from "@/components/shared/native-safe-area-view";
import { SGBackArrow } from "@/icons";
import { isiOS } from "@/lib/constants";

export default function AuthLayout({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  const navigation = useNavigation();

  return (
    <NativeSafeAreaView>
      <KeyboardAvoidingView
        behavior={isiOS ? "padding" : "height"}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            className="pt-8 px-6"
            contentContainerStyle={{
              flex: 1,
              rowGap: 24,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SGBackArrow />
            </TouchableOpacity>
            <Text
              style={{ fontFamily: "GeneralSans-Semibold" }}
              className="mb-2 text-black-100 text-2xl -tracking-[0.24px]"
            >
              {title}
            </Text>
            <View className="flex-1 gap-0">{children}</View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </NativeSafeAreaView>
  );
}
