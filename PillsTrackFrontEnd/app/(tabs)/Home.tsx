import { View, Text, FlatList } from "react-native";
import React from "react";
import { useGetPatientsQuery } from "../redux/slices/api";

const Home = () => {
  const { data } = useGetPatientsQuery();
  // const patients = Array.isArray(data) ? data : [];
  console.log("what comes here", data);
  return (
    <View>
      {/* <Text>Today’s medicine</Text>
      <Text>Patient upcoming Pill Reminder</Text>
      <View>
        <Text>Patient Name: </Text>
        <Text>Drug Name: </Text>
        <Text>Time Remaining: </Text>
        <Text>Status: </Text>
      </View> */}
      <View>
        <Text>JH</Text>
      </View>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>Patient Name: {item.userName}</Text>
            <Text>userCategory: {item.userCategory}</Text>
            <Text>userId: {item.userId}</Text>
          </View>
        )}
        keyExtractor={(item) => item.userId}
      /> */}
      {data?.map((item) => {
        return (
          <View key={item.userId}>
            <Text>Patient Name: {item.userName}</Text>
            <Text>userCategory: {item.userCategory}</Text>
            <Text>userId: {item.userId}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Home;
