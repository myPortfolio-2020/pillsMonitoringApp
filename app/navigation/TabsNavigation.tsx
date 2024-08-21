import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../(tabs)/Home';
import MyTrack from '../(tabs)/MyTrack';
import Patients from '../(tabs)/Patients';


const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="MyTrack" component={MyTrack} />
        <Tab.Screen name="Patients" component={Patients} />
    </Tab.Navigator>
  )
}

export default TabsNavigation