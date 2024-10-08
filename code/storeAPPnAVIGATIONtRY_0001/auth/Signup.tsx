import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/StackNavigation'
import FirstTimeAfterLogin from '../components/FirstTimeAfterLogin'

interface SignupProp {
  navigation: NativeStackNavigationProp<RootStackParamList,'Signup'>
}

const Signup = ({navigation}:SignupProp) => {
  const handlerPress = ()=>{
    navigation.navigate('VerificationCode')
  }
  return (
    <View className="flex-1 justify-center items-center ">
      <Text>Signup</Text>
      <TouchableOpacity onPress={handlerPress}>
        <Text>Verification Code</Text>
      </TouchableOpacity>    
    </View>
  )
}

export default Signup