import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { TPatientStackParams } from '@/navigation/PatientsStack'

interface IUserHomeProp {
  navigation: StackNavigationProp<TPatientStackParams, 'UserHome'>
}


const UserHome = ({navigation}:IUserHomeProp) => {
  const handlerPress = ()=>{
    navigation.navigate('CreateNewPatient')
    // navigation.push('CreateNewPatient')
  }
  return (   
    <View>
    <TouchableOpacity onPress={handlerPress}>
      <Text style={styles.createBtn}>Create New Patient btn</Text>
    </TouchableOpacity> 
  </View>
  )
}

export default UserHome

const styles = StyleSheet.create({
  createBtn:{
      backgroundColor:'#ddff33',        
      padding:9,
      margin:9
  }
})