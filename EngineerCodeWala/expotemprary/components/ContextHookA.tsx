import { View, Text } from 'react-native'
import React from 'react'
import ContextHookB from './ContextHookB'

const ContextHookA = () => {
  return (
    <View>
        <Text>A</Text>
      <ContextHookB/>
    </View>
  )
}

export default ContextHookA