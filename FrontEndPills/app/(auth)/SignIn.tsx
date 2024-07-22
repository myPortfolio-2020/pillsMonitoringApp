import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/navigation/StackNav'

interface IHomeProp {
  navigation:StackNavigationProp<RootStackParamList, 'SignIn'>
}

const SignIn = ({navigation}:IHomeProp) => {
  const handlerPress = ()=>{
    navigation.navigate('UserHome')
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Text>SignIn</Text>
      <TouchableOpacity onPress={handlerPress}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn