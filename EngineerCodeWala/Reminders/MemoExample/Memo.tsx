import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import ChildA from "./ChildA";

const NewUseCallBack = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>NewUseCallBack</Text>
      <ChildA />
      <Text>{count}</Text>
      <Button title="count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default NewUseCallBack;
