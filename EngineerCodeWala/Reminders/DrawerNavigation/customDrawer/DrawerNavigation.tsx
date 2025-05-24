import { View, Text, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Policies from "./screens/Policies";
import CustomDrawer from "./screens/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#c3c3c3",
        drawerStyle: { backgroundColor: "#eedd00" },
        drawerActiveTintColor: "green",
        drawerInactiveTintColor: "red",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({ size, color }) => (
            <Image
              source={require("../assets/images/about.png")}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
          drawerLabel: ({ color }) => {
            return (
              <Text style={{ fontSize: 19, color: color }}>About App</Text>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({ size, color }) => (
            <Image
              source={require("../assets/images/help.png")}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Policies"
        component={Policies}
        options={{
          drawerIcon: ({ size, focused }) => (
            <Image
              source={require("../assets/images/policy.png")}
              style={{
                width: size,
                height: size,
                tintColor: focused ? "red" : "blue",
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
