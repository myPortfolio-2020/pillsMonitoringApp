import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../(tabs)/Home";
import MyTrack from "../(tabs)/MyTrack";
import Patients from "../(tabs)/Patients";
import CreateNewPatient from "../components/CreateNewPatient";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Patients" component={Patients} />
      <Tab.Screen name="MyTrack" component={MyTrack} />
      <Tab.Screen name="CreateNewPatient" component={CreateNewPatient} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
