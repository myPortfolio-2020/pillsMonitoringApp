import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const UserScreen = () => {
    const handlerPress = ()=>{

    }
  return (
     <View>
      <TouchableOpacity onPress={handlerPress}>
        <Text style={styles.createBtn}>Create New Patient btn</Text>
      </TouchableOpacity>
      <View>
        <Text></Text>
      </View>
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