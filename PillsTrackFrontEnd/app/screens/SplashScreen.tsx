import { View, Text, Pressable, Button } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  const handlePress = ()=>{
    
  }
  return (
    <View>
      <Text>SplashScreen</Text>
      <Pressable onPress={handlePress}>
        <Text>Start</Text>
      </Pressable>
      <Button title='Start' />
    </View>
  )
}

export default SplashScreen