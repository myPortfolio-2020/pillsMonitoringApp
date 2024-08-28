import { View, Text, Pressable,StyleSheet } from "react-native";
import React from "react";

const AnotherItem = () => {
  return (
    <View>
      <Text style={styles.txtBox}>Recently Notes Items</Text>
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
    backgroundColor:'#345dfc',
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
    borderColor:'#124512',
    padding:14,
    minHeight:100,
    borderRadius:4 
  }
})
