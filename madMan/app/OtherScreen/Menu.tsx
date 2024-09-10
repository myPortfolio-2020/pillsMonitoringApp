import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'


const Menu = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Menu</Text>
      <TouchableOpacity onPress={()=> navigation.push('ScreenOne')}>
        <Text>Screen One</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ScreenTwo')}>
        <Text>Screen Two</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('ScreenThree')}>
        <Text>Screen Three</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu