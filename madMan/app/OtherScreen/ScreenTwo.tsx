import { View, Text } from 'react-native'
import React from 'react'
import Menu from './Menu'

const ScreenTwo = () => {
  return (
    <View style={{backgroundColor:'#bbcc22', width:'100%', height:400}}>
      <Text>ScreenTwo</Text>
      <Text>This is Screen Two</Text>
      <View className="mt-10">
        {/* <Menu /> */}
      </View>
    </View>
  )
}

export default ScreenTwo