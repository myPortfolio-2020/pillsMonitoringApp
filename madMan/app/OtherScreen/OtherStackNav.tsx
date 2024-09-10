import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";
import ScreenThree from "./ScreenThree";
import ScreenOneDetail from "./ScreenOneDetail";

const Stack = createNativeStackNavigator();
const OtherStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
      <Stack.Screen name="ScreenOneDetail" component={ScreenOneDetail} />
    </Stack.Navigator>
  );
};

export default OtherStackNav;
