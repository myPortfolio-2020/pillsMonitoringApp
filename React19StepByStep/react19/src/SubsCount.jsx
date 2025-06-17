import React from "react";
import { useState } from "react";

function SubsCount() {
  const [subCount, setSubCount] = useState(0);

  const subsCountFn = () => {
    console.log(subCount);
    return setSubCount(subCount - 1);
  };

  return (
    <>
      <div>SubsCount: {subCount}</div>
      <button onClick={() => subsCountFn()}>Minus</button>
    </>
  );
}

export default SubsCount;
