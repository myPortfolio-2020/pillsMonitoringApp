import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/StackNavigation'

interface VerificationCodeProp {
  navigation: NativeStackNavigationProp<RootStackParamList, 'VerificationCode'>
}

const VerificationCode = ({navigation}:VerificationCodeProp) => {
  const handlerOnPress = ()=>{
    navigation.navigate('SignIn')
  }
  return (
    <View className="flex-1 justify-center items-center ">
      <Text>VerificationCode</Text>
      <TouchableOpacity onPress={handlerOnPress}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  )
}

export default VerificationCode