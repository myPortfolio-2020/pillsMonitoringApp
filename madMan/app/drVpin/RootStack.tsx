import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PTwo from './PractScreen/PTwo';

export type RootStackParams = {
    POne:undefined;
    PTwo:undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = ({navigation}:any) => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="PTwo" component={PTwo} options={{
          headerLeft:()=>{
           return <Pressable onPress={()=>navigation.openDrawer()}>
             <Text className='mr-3'>df</Text>
           </Pressable>
          }
        }} />         
    </Stack.Navigator>
  )
}

export default RootStack