import { View, Text } from "react-native";
import React from "react";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import OtherStackNav from "./OtherScreen/OtherStackNav";
import FoodApp from "./DanielGSC/FoodApp";
import SolveApp from "./solves/SolveApp";

const _layout = () => {
  return <NavigationContainer independent={true}>
    {/* <AppNavigator /> */}
    {/* <OtherStackNav/> */}
    {/* <FoodApp/> */}
    <SolveApp/>

  </NavigationContainer>;
};

export default _layout;
