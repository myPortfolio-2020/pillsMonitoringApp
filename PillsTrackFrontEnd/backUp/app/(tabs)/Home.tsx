import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useGetPatientsQuery } from "../redux/slices/api";

const Home = () => {
  const { data } = useGetPatientsQuery();
  // const patients = Array.isArray(data) ? data : [];
  console.log('this is Home Component', data?.length)

  return (
    <View>
      <Text>Today’s medicine</Text>
      <Text>Patient upcoming Pill Reminder</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          const backgroundColor = index % 2 === 0 ? '#d1e2f2' : '#DDEDFC';
          return (
            <View style={[styles.recordBox,{backgroundColor}]}>
              <Text>Patient Name:{item.userName}</Text>
              <Text>userCategory:{item.userCategory}</Text>
              <Text>userId:{item.userId}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.userId}
      />
      {/* {data?.map((item, index) => {
        const backgroundColor = index % 2 === 0 ? '#f9c2ff' : '#6e3b6e';
        return (
          <View key={item.userId} style={{ backgroundColor }}>
            <Text>Patient Name: {item.userName}</Text>
            <Text>userCategory: {item.userCategory}</Text>
            <Text>userId: {item.userId}</Text>
          </View>
        );
      })} */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  recordBox: {
    // backgroundColor: "#B7D7F5",
    padding: 17,
    margin: 5,
    borderRadius: 7,
  },
  redBox: {
    backgroundColor: "#B7D7F5",
  },
  blueBox: {
    backgroundColor: "#ffdd33",
  },
});
