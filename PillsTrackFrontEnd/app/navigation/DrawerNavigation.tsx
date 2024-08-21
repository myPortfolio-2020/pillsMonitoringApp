import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import Druglogs from '../screens/Druglogs';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="">
        <Drawer.Screen name="DrugLogs" component={Druglogs} />
        <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation