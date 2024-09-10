import { View, Text } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Splash";
import MainScreen from "./screens/MainScreen";

export type TRootStackParams = {
  Splash: undefined;
  MainScreen: undefined;
};

const Stack = createNativeStackNavigator<TRootStackParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
