import { View, Text } from "react-native";
import React, { useContext } from "react";
import { userContext } from "./UseContextHook";

const ContextHookC = () => {
  const newUser = useContext(userContext);
  return (
    <View>
      <Text>
        I am C and I am Having {newUser?.nm} with salary package -{" "}
        {newUser?.sal}
      </Text>
    </View>
  );
};

export default ContextHookC;
