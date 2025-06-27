import React, { useState } from "react";

function UseEffHook1() {
  const [counter, setCounter] = useState(0);
  console.log("counter value:",counter);
  const callOnce = () => {
    console.log("callOnce");
  };
  callOnce();
  return (
    <>
      <div>UseEffHook1</div>
      <button onClick={() => setCounter(1)}>hit {counter}</button>
    </>
  );
}

export default UseEffHook1;
