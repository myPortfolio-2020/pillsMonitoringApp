import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { PatientStackParamList } from '@/navigation/PatientsStack'

interface IUserScreenProp {
  navigation: StackNavigationProp<PatientStackParamList, 'UserScreen'>
}

const UserScreen = ({navigation}:IUserScreenProp) => {
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

export default UserScreen

const styles = StyleSheet.create({
    createBtn:{
        backgroundColor:'#ddff33',        
        padding:9,
        margin:9
    }
})