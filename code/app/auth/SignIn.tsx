import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/StackNavigation'

interface SignInProp {
  navigation:NativeStackNavigationProp<RootStackParamList, 'SignIn'>
}

const SignIn = ({navigation}:SignInProp) => {

  const handlerOnPress = ()=>{
    navigation.navigate('PreHome')

  }

  return (
    <View className="flex-1 justify-center items-center ">
      <Text>SignIn</Text>
      <TouchableOpacity onPress={handlerOnPress}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn