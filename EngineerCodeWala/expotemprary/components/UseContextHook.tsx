import { View, Text } from "react-native";
import React, { createContext } from "react";
import ContextHookA from "./ContextHookA";

interface UserContextType {
  nm: string;
  sal: number;
}

export const userContext = createContext<UserContextType | null>(null);

const UseContextHook = () => {
  return (
    <userContext.Provider value={{ nm: "Hamid", sal: 300 }}>
      <ContextHookA />
    </userContext.Provider>
  );
};

export default UseContextHook;
