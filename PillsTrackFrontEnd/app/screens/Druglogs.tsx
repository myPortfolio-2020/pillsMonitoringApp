import { View, Text } from "react-native";
import { useState } from "react";
import React from "react";
import HomeMain from "./HomeMain";
import FirstEntry from "./FirstEntry";


const Druglogs = () => {
  const [ifData, setIfData] = useState<boolean>(true);
  return (
    <>
    {
      ifData ? <HomeMain/> :<FirstEntry/>
    }
    </>
  );
};

export default Druglogs;
