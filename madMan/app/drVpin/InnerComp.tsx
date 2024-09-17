import { View, Text } from 'react-native'
import React from 'react'

interface IInner {
    dataVal:string
}

const InnerComp = ({dataVal}:IInner) => {
  return (
    <View>
      <Text>{dataVal}</Text>
    </View>
  )
}

export default InnerComp