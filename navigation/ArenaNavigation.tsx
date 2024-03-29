import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArenaHomeScreen from "@/myApp/screens/Arena/ArenaHomeScreen";
 import ArenaContestScreen from "@/myApp/screens/Arena/ArenaContestScreen";
import ArenaChatScreen from "@/myApp/screens/Arena/ArenaChatScreen";
import ArenaCreateContestScreen from "@/myApp/screens/Arena/ArenaCreateContest";
import ArenaContestSuccess from "@/myApp/screens/Arena/ArenaContestSuccess";


function ArenaNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="arenaContestScreen"
      screenOptions={{
        animation: "slide_from_left",
      }}
    >
     
      <Stack.Screen
        name="arenaHomeScreen"
        component={ArenaHomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="arenaContestSuccess"
        component={ArenaContestSuccess}
        options={{
          headerShown: false,
        }}
      />
 

      <Stack.Screen
        name="arenaContestScreen"
        component={ArenaContestScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="arenaChatScreen"
        component={ArenaChatScreen}
        options={{
          headerShown: false,
        }}
      />

<Stack.Screen
        name="arenaCreateContestScreen"
        component={ArenaCreateContestScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}

export default ArenaNavigation;
