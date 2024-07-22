import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.createBtn}>Create New Patient</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    createBtn:{
        backgroundColor:'#ddff33',        
        padding:9
    }
})