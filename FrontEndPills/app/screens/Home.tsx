import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/navigation/StackNav'

interface IHomeProp {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>
}

const Home = ({navigation}:IHomeProp) => {
    const handlerPress = ()=>{
        navigation.navigate('CreateNewPatient')
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

export default Home

const styles = StyleSheet.create({
    createBtn:{
        backgroundColor:'#ddff33',        
        padding:9,
        margin:9
    }
})