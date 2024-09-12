import { View, Text } from 'react-native'
import React from 'react'
import { useGetPatientsQuery } from '../redux/slices/api';

const PgOne = () => {

  const { data } = useGetPatientsQuery();
  console.log(data)
  return (
    <View>
      <Text>PgOne</Text>
    </View>
  )
}

export default PgOne