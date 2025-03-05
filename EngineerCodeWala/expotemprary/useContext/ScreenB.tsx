import { View, Text } from "react-native";
import React, { useContext } from "react";
import ScreenC from "./ScreenC";
import { infoContext } from "./UseContextEx";

const ScreenB = () => {
  const newPlayer = useContext(infoContext);
  return (
    <View>
      <Text>ScreenB</Text>
      <Text>
        This is {newPlayer?.playerNm} - {newPlayer?.songs}
      </Text>
      <ScreenC />
    </View>
  );
};

export default ScreenB;
