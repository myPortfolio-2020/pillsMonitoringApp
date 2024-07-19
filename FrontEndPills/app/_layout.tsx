import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "@/navigation/StackNav";

const _layout = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <StackNav />
      </NavigationContainer>
    </>
  );
};

export default _layout;
