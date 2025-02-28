import { View, Text, Image } from "react-native";
import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Products from "./bottomScreens/Products";
import Profile from "./bottomScreens/Profile";
import Serach from "./bottomScreens/Serach";
import CustomTab from "./CustomTab";
import Search from "./bottomScreens/Serach";

const Tab = createBottomTabNavigator();


const BottomNav: React.FC<BottomTabBarProps> = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { height: 80 } }}
      tabBar={(props) => <CustomTab {...props} />}
    >
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../assets/images/about.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../assets/images/about.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../assets/images/about.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
