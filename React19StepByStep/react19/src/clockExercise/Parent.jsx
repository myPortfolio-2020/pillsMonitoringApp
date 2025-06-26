import React, { useState } from "react";
import Clock from "./Clock";

function Parent() {
  const [color, setColor] = useState();
  return (
    <>
        
      <Clock />
    </>
  );
}

export default Parent;
