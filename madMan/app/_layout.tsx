import { View, Text } from "react-native";
import React from "react";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import OtherStackNav from "./OtherScreen/OtherStackNav";
import FoodApp from "./DanielGSC/FoodApp";

const _layout = () => {
  return <NavigationContainer independent={true}>
    {/* <AppNavigator /> */}
    {/* <OtherStackNav/> */}
    <FoodApp/>

  </NavigationContainer>;
};

export default _layout;
