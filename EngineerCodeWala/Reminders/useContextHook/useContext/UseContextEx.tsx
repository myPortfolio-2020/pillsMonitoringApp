import { View, Text } from "react-native";
import React, { createContext } from "react";
import ScreenA from "./ScreenA";

interface Info {
    playerNm: string,
    songs:number
}

export const infoContext = createContext<Info | null>(null);

const UseContextEx = () => {
  return (
    <infoContext.Provider value={{
        playerNm: 'vitals',
        songs:100
    }}>
      <View>
        <Text>UseContextEx</Text>
        <ScreenA />
      </View>
    </infoContext.Provider>
  );
};

export default UseContextEx;
