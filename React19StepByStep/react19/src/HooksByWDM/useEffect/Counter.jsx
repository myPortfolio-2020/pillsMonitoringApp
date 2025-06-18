import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (delta) => {
    setCounter((prev) => prev + delta);
  };

  useEffect(() => {
    console.log("inside useEffect");
    document.title = counter;
  }, [counter]);

  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={() => updateCounter(1)}>increase</button>
      <button onClick={() => updateCounter(-1)}>increase</button>
    </>
  );
}

export default Counter;
