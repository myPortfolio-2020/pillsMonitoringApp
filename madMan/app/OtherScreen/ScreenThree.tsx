import { View, Text } from 'react-native'
import React from 'react'
import Menu from './Menu'

const ScreenThree = () => {
  return (
    <View>
      <Text>ScreenThree</Text>
      <Text>This is Screen Two</Text>
      <View className="mt-10">
        {/* <Menu /> */}
      </View>
    </View>
  )
}

export default ScreenThree