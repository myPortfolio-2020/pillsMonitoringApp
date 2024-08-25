import { View, Text } from "react-native";
import React, { useState } from "react";
import FirstTimeAfterLogin from "../components/FirstTimeAfterLogin";
import User from "../components/User";

const PreHome = () => {
  const [isData, setIsData] = useState(false);
  return <>{isData ? <FirstTimeAfterLogin /> : <User />}</>;
};

export default PreHome;
