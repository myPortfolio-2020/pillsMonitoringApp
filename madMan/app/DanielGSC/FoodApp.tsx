import { View, Text } from 'react-native'
import React from 'react'
import Explore from './screens/Explore'
import Resturants from './screens/Resturants'
import Profile from './screens/Profile'

const FoodApp = () => {
  return (
    <View className='flex-1  items-center'>
      <Text className='mb-11 font-semibold text-2xl'>FoodApp</Text>     
      <Text className='mb-1 font-semibold text-lg'>Explore</Text>
      <Text className='mb-1 font-semibold text-lg'>Resturants</Text>
      <Text className='mb-1 font-semibold text-lg'>Profile</Text>
    </View>
  )
}

export default FoodApp