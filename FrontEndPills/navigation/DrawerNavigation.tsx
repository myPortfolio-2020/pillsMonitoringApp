import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '@/app/screens/About';
import Support from '@/app/screens/Support';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation