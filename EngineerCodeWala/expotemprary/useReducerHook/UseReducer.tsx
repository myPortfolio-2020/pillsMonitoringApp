import { View, Text, Button } from "react-native";
import React, { useReducer } from "react";

type stateType = "Increment" | "Decrement";

const intialValue = 0;

const reducer = (state: number, action: stateType) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [val, dispatch] = useReducer(reducer, intialValue);
  return (
    <View>
      <Text>UseReducer - {val}</Text>
      <Button title="Increment" onPress={() => dispatch("Increment")} />
      <Button title="Decrement" onPress={() => dispatch("Decrement")} />
    </View>
  );
};

export default UseReducer;
