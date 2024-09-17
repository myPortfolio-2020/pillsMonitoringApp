import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PThree from './PThree';
import PFour from './PFour';
import PFive from './PFive';
import PDrawer from './PDrawer';

const Tab = createBottomTabNavigator();

const PTwo = () => {

  return (
    <Tab.Navigator screenOptions={{headerShown:false}} >           
       <Tab.Screen name="PThree" component={PThree} />
        <Tab.Screen name="PFour" component={PFour} />
        <Tab.Screen name="PFive" component={PFive} />
    </Tab.Navigator>
  )
}

export default PTwo