import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Support from '@/app/screens/Support';
import About from '@/app/screens/About';
import PatientsStack from './PatientsStack';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="UserHome" component={UserHome} /> */}
      <Drawer.Screen name="PatientStack" component={PatientsStack} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation