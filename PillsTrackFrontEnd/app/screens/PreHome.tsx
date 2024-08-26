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


const PreHome = () => {
  const [firstTimeLogin, FirstTimeLogin] = useState(true);
  return <>{firstTimeLogin ? <FirstTimeAfterLogin /> : <User />}</>;
};

export default PreHome;
