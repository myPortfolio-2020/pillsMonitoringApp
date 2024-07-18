import { View, Text } from 'react-native'
import React from 'react'
import {Link, Redirect} from 'expo-router'


const SplashScreen = () => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <Link href='/Register'><Text>Go to Reg</Text></Link>     
    </View>
  )
}

export default SplashScreen