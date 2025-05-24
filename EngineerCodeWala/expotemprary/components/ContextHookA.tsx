import { View, Text } from "react-native";
import React, { useContext } from "react";
import ContextHookB from "./ContextHookB";
import { userContext } from "./UseContextHook";

const ContextHookA = () => {
  const newUser = useContext(userContext);
  if(!newUser){
    return <Text>No user data available</Text>
  }
  return (
    <View>
      <Text>{newUser.nm}</Text>
      <ContextHookB />
    </View>
  );
};

export default ContextHookA;
