import { View, Text } from "react-native";
import { useState } from "react";
import React from "react";
import HomeMain from "./HomeMain";


const Druglogs = () => {
  const [ifData, setIfData] = useState<boolean>(true);
  return (
    <>
    {
      ifData ? <HomeMain/> :'FirstTime Entry'
    }
    </>
  );
};

export default Druglogs;
