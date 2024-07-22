import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/navigation/StackNav'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IVerificationProp {
  navigation:StackNavigationProp<RootStackParamList, 'VerificationCode'>
}

const VerificationCode = ({navigation}:IVerificationProp) => {
  const handlerPress = ()=>{
    navigation.navigate('SignIn')
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Text>VerificationCode</Text>
      <TouchableOpacity onPress={handlerPress}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  )
}

export default VerificationCode