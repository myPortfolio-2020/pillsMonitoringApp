import { View, Text } from 'react-native'
import React from 'react'
import {  NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../FoodApp'

type Props = NativeStackScreenProps<RootParamList, 'Resturant'>

const Resturant = ({route}:Props) => {
  return (
    <View>
      <Text>Resturant: {route.params.name}</Text>
    </View>
  )
}

export default Resturant