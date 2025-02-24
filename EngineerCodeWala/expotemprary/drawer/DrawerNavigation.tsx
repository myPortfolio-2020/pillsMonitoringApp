import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Policies from "./screens/Policies";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Policies" component={Policies} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
