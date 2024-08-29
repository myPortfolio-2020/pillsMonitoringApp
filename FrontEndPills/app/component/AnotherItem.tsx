import { View, Text, Pressable,StyleSheet } from "react-native";
import React from "react";

const AnotherItem = ({text}:{text:string}) => {
  return (
    <View>
      <Text style={styles.txtBox}>{text}</Text>
      <View className="flex-row">
        <Pressable style={styles.buttonSty}>
          <Text>Edit</Text>
        </Pressable>
        <Pressable style={styles.buttonSty}>
          <Text>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AnotherItem;

const styles = StyleSheet.create({
  buttonSty:{
    backgroundColor:'#a1cff3',
    paddingLeft:24,
    paddingRight:24,
    paddingBottom:6,
    paddingTop:6,
    margin:6,
    borderRadius:4  
  },
  txtBox:{
    borderWidth:1,
    margin:7,
    borderColor:'#c2d8c2',
    padding:14,
    minHeight:40,
    borderRadius:4,
    fontSize:24
  }
})
