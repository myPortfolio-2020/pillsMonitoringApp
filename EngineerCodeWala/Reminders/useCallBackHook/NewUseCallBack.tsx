// Used useCallback for Learning
// Prevents unnecessary re-renders of ChildA by memoizing the function.

import { View, Text, Button } from "react-native";
import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";

const NewUseCallBack: React.FC = () => {
  const [count, setCount] = useState(0);

  const Learning = useCallback(() => {
    console.log("Learning call back");
  }, []);
  return (
    <View>
      <Text>NewUseCallBack</Text>
      <ChildA Learning={Learning} />
      <Text>{count}</Text>
      <Button title="count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default NewUseCallBack;
