import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PgOne from "./PgOne";

const Stack = createNativeStackNavigator();
const CheckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PgOne"
        component={PgOne}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CheckStack;
