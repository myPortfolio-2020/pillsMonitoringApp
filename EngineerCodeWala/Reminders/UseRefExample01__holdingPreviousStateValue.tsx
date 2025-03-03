import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useRef, useEffect } from "react";

const UseRefExample = () => {
  const [count, setCount] = useState<number>(0);
  const previousCountRef = useRef<number | null>(null);

  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  return (
    <View>
      <Text>Use of useRef</Text>
      <View>
        <Text>1 - prevent unnecesary rerenders</Text>
        <Text>2 - we can store the previous value of state</Text>
        <Text>3 - we can access DOM elements</Text>
      </View>
      <View>
        <Text>1 - prevent unnecesary rerenders</Text>
        <Text>`Previous Count: ${previousCountRef.current}` </Text>
        <Text>New count: {count}</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>Increase Count</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UseRefExample;
