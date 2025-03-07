import { View, Text } from "react-native";
import React, { memo } from "react";

const ChildA = () => {
  console.log("Child A");
  return (
    <View>
      <Text>ChildA</Text>
    </View>
  );
};

export default memo(ChildA);
