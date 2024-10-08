import { View, Text,Button } from 'react-native'
import React from 'react'

const Ptwo = ({navigation}:any) => {   
  return (
    <View className="flex-1">
    <View className="flex-1 justify-center items-center">
      <Text>Ptwo</Text>
      <Button title="go to another screen" onPress={()=>navigation.navigate('Pthree')} />
    </View>
  </View>
  )
}

export default Ptwo
