import { View, Text } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import OnBording from "./(onBoarding)/onBording";


// what is happeningnhere, it comes to index file and redirect to onBoarding

const index = () => {
  return <Redirect href={"/(onBoarding)/OnBording"} />;
};

export default index;
