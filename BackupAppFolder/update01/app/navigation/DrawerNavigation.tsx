import { View, Text, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../screens/About";
import Support from "../screens/Support";
import DrugsLog from "../screens/DrugsLogin";
import images from "@/constants/images";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  console.log('I am Drawer')
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <View className="flex-row">
            <Image source={images.NotificationIcon} className="mr-3" />
            <Image source={images.ProfilePic} className="mr-6" />
          </View>
        ),
      }}
    >
      <Drawer.Screen name="DrugsLog" component={DrugsLog} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
