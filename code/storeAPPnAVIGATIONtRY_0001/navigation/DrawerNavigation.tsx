import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../screens/About";
import Support from "../screens/Support";
import PreHome from "../screens/PreHome";
import Svg, { Circle, Rect } from 'react-native-svg';
import DrugsLogin from "../screens/DrugsLogin";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <View className="flex-row">
            <Text className="pr-3">Notification</Text>
            <Text className="pr-3">Profile</Text>
          </View>
        ),
      }}
    >
      <Drawer.Screen name="DrugsLogin" component={DrugsLogin} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
