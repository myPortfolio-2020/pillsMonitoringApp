import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DOne from './DOne';
import SideBar from '@/app/SideBar';

const Drawer = createDrawerNavigator();
const PDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props)=><SideBar {...props}/>}>
        <Drawer.Screen name="DOne" component={DOne} />       
    </Drawer.Navigator>
  )
}

export default PDrawer