import { View, Text } from "react-native";
import React from "react";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import OtherStackNav from "./OtherScreen/OtherStackNav";
import FoodApp from "./DanielGSC/FoodApp";
import SolveApp from "./solves/SolveApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CheckStack from "./check/CheckStack";
import Practice from "./drVpin/Practice";
import RootStack from "./drVpin/RootStack";

const _layout = () => {
  return <NavigationContainer independent={true}>
      <Provider store={store}>      
    {/* <AppNavigator /> */}
    {/* <OtherStackNav/> */}
    {/* <FoodApp/> */}
    {/* <SolveApp/> */}
    {/* <CheckStack/> */}
    <RootStack/>
    </Provider>
  </NavigationContainer>;
};

export default _layout;
