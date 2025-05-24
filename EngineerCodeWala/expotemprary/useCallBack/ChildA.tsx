import { View, Text } from "react-native";
import React, { memo } from "react";

// Define props interface
interface ChildAProps {
  Learning: () => void; // Adjust type as needed
}

const ChildA: React.FC<ChildAProps> = ({ Learning }) => {
  console.log("Child A");
  return (
    <View>
      <Text>ChildA</Text>
    </View>
  );
};

export default memo(ChildA);
