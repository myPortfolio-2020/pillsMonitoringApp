// import { View, Text } from "react-native";
// import React from "react";
// import UserNavigation from "../navigation/UserNavigation";
// import User from "../components/User";

// const PreHome = () => {
//   return <User />;
// };

// export default PreHome;

import { View, Text } from "react-native";
import React, { useState } from "react";
import FirstTimeAfterLogin from "../components/FirstTimeAfterLogin";
import User from "../components/User";
import TabsNavigation from "../navigation/TabsNavigation";
import UserNavigation from "../navigation/UserNavigation";

const PreHome = () => {
  const [firstTimeLogin, FirstTimeLogin] = useState(false);
  return <>{firstTimeLogin ? <FirstTimeAfterLogin /> : <User />}</>;
};

export default PreHome;
