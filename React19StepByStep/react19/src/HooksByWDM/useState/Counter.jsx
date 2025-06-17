import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  /* ------------------------------------------ */
  // no need of return keyword
  /* ------------------------------------------ */
  // The setCount function is used to update React state, and while it does return undefined

  //   const addCount = () => {
  //     return setCount(count + 1); // no need of return keyword
  //   };
  //   const subCount = () => {
  //      setCount(count - 1);
  //   };

  const updateCount = (delta) => {
    setCount(count + delta);
  };

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => updateCount(1)}>Add</button>
      <button onClick={() => updateCount(-1)}>Sub</button>
    </>
  );
}

export default Counter;
