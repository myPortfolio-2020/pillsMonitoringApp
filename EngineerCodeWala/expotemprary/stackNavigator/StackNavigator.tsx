import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "@/screens/ScreenA";
import ScreenB from "@/screens/ScreenB";
import Home from "@/screens/Home";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ScreenA"
        component={ScreenA}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
