import { View, Text,Pressable} from 'react-native'
import React from 'react'
import { useGetPatientsQuery } from '@/app/redux/slices/api';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParams } from '../RootStack';

interface IPone {
  navigation:NativeStackNavigationProp<RootStackParams, 'POne'>
}

const POne = ({navigation}:IPone) => {

  const { data } = useGetPatientsQuery();
console.log('this is the query data at POne', data)

const handlerPress = ()=>{
  navigation.navigate('PTwo')
}
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='mb-2'>POne</Text>
      <Pressable onPress={handlerPress}>
        <Text>Go To PTwo</Text>
      </Pressable>      
    </View>
  )
}

export default POne