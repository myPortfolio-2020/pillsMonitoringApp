import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    name:string
}

const ResturanantsCard:React.FC<Props>= ({name}) => {
  return (
    <View>
      <Text style={styles.cardStyle}>{name}</Text>
    </View>
  )
}

export default ResturanantsCard

const styles = StyleSheet.create({
    cardStyle:{
        backgroundColor:'#FFEFD5',
        elevation:3,
        padding:11,
        width:300,
        marginTop:4,
        marginBottom:4,
        borderRadius:7
    }
})