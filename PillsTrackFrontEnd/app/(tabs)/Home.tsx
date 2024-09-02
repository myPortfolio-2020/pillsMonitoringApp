import { View, Text } from "react-native";
import React from "react";
import { useGetPatientsQuery } from "../redux/slices/api";

const Home = () => {
  const { data } = useGetPatientsQuery();
  return (
    <View>
      <Text>Today’s medicine</Text>
      <Text>Patient upcoming Pill Reminder</Text>

      <View>
        <Text>Patient Name: </Text>
        <Text>Drug Name: </Text>
        <Text>Time Remaining: </Text>
        <Text>Status: </Text>
      </View>
    </View>
  );
};

export default Home;
