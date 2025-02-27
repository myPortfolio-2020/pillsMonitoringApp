import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Products from './bottomScreens/Products'
import Profile from './bottomScreens/Profile'
import Serach from './bottomScreens/Serach'

const Tab = createBottomTabNavigator()

const BottomNav = () => {
  return (
  <Tab.Navigator>
    <Tab.Screen name='Products' component={Products} options={{}}/>
    <Tab.Screen name='Profile' component={Profile} options={{}}/>
    <Tab.Screen name='Search' component={Serach} options={{}}/>
  </Tab.Navigator>
  )
}

export default BottomNav