import { View, Text } from 'react-native'
import React from 'react'

interface Props{
    name:string
}

const ResturanantsCard:React.FC<Props>= ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default ResturanantsCard