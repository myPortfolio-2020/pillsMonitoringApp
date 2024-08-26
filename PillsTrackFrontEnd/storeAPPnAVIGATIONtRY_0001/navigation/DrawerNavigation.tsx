import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../screens/About";
import Support from "../screens/Support";
import PreHome from "../screens/PreHome";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <View>
            <Text>Pro</Text>
          </View>
        ),
      }}
    >
      <Drawer.Screen name="DrugsLog" component={PreHome} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
