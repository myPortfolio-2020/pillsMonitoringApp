import React, { useState } from "react";
import Clock from "./Clock";

function Parent() {
  const [color, setColor] = useState("yellow");
  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <select onChange={colorHandler}>
        <option value="yellow">Yellow</option>
        <option value="red">red</option>
        <option value="green">green</option>
      </select>

      <Clock color={color} />
    </>
  );
}

export default Parent;
