import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";

const UseRefExample = () => {


    const findFocus = useRef<TextInput | null>(null);



  return (
    <View>
      <Text>Use of useRef</Text>
      <View>
        <Text>1 - prevent unnecesary rerenders</Text>
        <Text>2 - we can store the previous value of state</Text>
        <Text>3 - we can access DOM elements</Text>
      </View>
      <View>
      <Text>2 - we can store the previous value of state</Text>
             
      </View>
      <View>
        <TextInput style={style.inputStyle} ref={findFocus} />
      </View>
      <Button title="Go To Foucus" onPress={()=>{
        findFocus.current?.focus()
      }} />
    </View>
  );
};

export default UseRefExample;

const style = StyleSheet.create({
  inputStyle: {
    borderColor: "#ddcc33",
    borderWidth: 1,
  },
});
