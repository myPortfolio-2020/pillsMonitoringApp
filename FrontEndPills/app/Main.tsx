import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";
import AnotherItem from "./component/AnotherItem";
import { useGetNotesQuery } from "./redux/slices/api";

const Main = () => {
  const {data} = useGetNotesQuery();
  return (
    <View className="flex-1">
      <View>
        <Text style={styles.gap20}>Add a new note</Text>
        <TextInput style={styles.inputStyle} />
        <Button title="Add Item" />
      </View>
      {data?.map((item) => {
        return <AnotherItem text={item.text} key={item.id} />;
      })}
      
    </View>
  );
};

export default Main;

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
