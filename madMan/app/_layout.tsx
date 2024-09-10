import { View, Text } from "react-native";
import React from "react";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import OtherStackNav from "./OtherScreen/OtherStackNav";

const _layout = () => {
  return <NavigationContainer independent={true}>
    {/* <AppNavigator /> */}
    <OtherStackNav/>
  </NavigationContainer>;
};

export default _layout;
