import React, { useState } from "react";

function FetchData() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (delta) => {
    setCounter(counter + delta);
  };
  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={() => updateCounter(1)}>increase</button>
      <button onClick={() => updateCounter(-1)}>increase</button>
    </>
  );
}

export default FetchData;
