import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './About';
import Support from './Support';
import TabsNavigation from '../navigation/TabsNavigation';

const Drawer = createDrawerNavigator();

const PreHome = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="TabsNavigation" component={TabsNavigation} />    
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  )
}

export default PreHome