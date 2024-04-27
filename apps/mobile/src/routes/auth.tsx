import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreatePin from "../components/auth/create-pin";
import GetStarted from "../components/auth/get-started";
import Signin from "../components/auth/sign-in";
import SignUp from "../components/auth/sign-up";

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignIn" component={Signin} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CreatePin" component={CreatePin} />
    </Stack.Navigator>
  );
}
