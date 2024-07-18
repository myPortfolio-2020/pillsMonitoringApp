import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href='/(auth)/SignIn'>Go tot regiister</Link>
    </View>
  )
}

export default index