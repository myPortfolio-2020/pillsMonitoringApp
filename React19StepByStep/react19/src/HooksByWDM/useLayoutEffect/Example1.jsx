import React, { useEffect, useLayoutEffect, useState } from "react";

function Example1() {
  const [color, setColor] = useState("grey");

  useEffect(() => {
    console.log("useEffect");
    setColor("red");
  }, []);

  // useLayoutEffect will load first
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    setColor("black"); // load first then load useEffect
  }, []);
  // conclusion
  // do not use it unnecessary 
  // 
  return (
    <>
      <div style={{ backgroundColor: color, padding: "11px" }}>
        <div>This is the useLayoutEffect Example</div>
      </div>
    </>
  );
}

export default Example1;
