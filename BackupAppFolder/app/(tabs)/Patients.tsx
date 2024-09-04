import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useGetPatientsQuery } from "../redux/slices/api";

const Patients = () => {
  const {data} = useGetPatientsQuery()
  return (
  <FlatList
  data={data}
  renderItem={({item})=>{
    return <View>
      <Text>{item.userName}</Text>
    </View>
  }} />
  )
}

export default Patients