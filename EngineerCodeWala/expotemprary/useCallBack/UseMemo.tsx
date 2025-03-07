import { View, Text, Button } from "react-native";
import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  //   const multiply = () => {
  //     console.log("see result");
  //     return add * 10;
  //   };

  const multiplication = useMemo(() => {
    console.log("deedde");
    return add * 10;
  }, [add]); // only render when add value changes
  return (
    <View className="flex justify-center">
      <View>
        <Text>
          {add} - {multiplication}
        </Text>
        <Button title="add" onPress={() => setAdd(add + 1)} />
      </View>
      <View>
        <Text>{minus}</Text>
        <Button title="minus" onPress={() => setMinus(minus - 1)} />
      </View>
    </View>
  );
};

export default UseMemo;
