import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from "@/components/auth/get-started";
import SignIn from "@/components/auth/sign-in";
import SignUp from "@/components/auth/sign-up";

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
