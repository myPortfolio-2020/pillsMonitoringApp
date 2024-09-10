import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SideBar from '../SideBar';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props:DrawerContentComponentProps)=><SideBar {...props}/>}>
      <Drawer.Screen name='HomeScreen' component={HomeScreen} />
    </Drawer.Navigator>
  )
}

export default MainScreen