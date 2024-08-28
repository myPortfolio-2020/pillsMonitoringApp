import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";
import AnotherItem from "./component/AnotherItem";
import { Provider } from 'react-redux';
import {store} from './redux/store'

const _layout = () => {
  return (
    <Provider store={store}>
    <View className="flex-1">
      <View>
        <Text style={styles.gap20}>Add a new note</Text>
        <TextInput style={styles.inputStyle} />
        <Button title="Add Item" />
      </View>
      <AnotherItem/>
    </View>
    </Provider>

  );
};

export default _layout;

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 3,
    padding: 6,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fdf8f800",
  },
  gap20: {
    marginTop: 60,
    fontSize: 19,
  },
});
