import React, { useState } from "react";
import Clock from "./Clock";

function Parent() {
  const [color, setColor] = useState("yellow");
  const colorHandler = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };
  return (
    <>
      <select onChange={colorHandler}>
        <option name="yellow" value="yellow">
          Yellow
        </option>
        <option name="red" value="red">
          red
        </option>
        <option name="green" value="green">
          green
        </option>
      </select>

      <Clock color={color} />
    </>
  );
}

export default Parent;
