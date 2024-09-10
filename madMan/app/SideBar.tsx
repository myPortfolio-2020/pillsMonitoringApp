import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer';
const SideBar: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={styles.bgDrawer}>
      <Text>SideBar</Text>
    </View>
  )
}

export default SideBar

const styles = StyleSheet.create({
    bgDrawer:{
        backgroundColor:'#b1b1b1',
        flex:1
    }
})