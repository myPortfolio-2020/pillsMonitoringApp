import React, { useState } from "react";

function GetInputFieldValue() {
  const [first, setfirst] = useState();
  const clickHandler = () => {
    setfirst("");
  };
  return (
    <>
      <div>GetInputFieldValue</div>
      <div>This is my field - {first}</div>
      <div>
        <input
          type="text"
          value={first}
          onChange={(e) => setfirst(e.target.value)}
          placeholder="Please enter any value"
        />
      </div>
      <div>
        <button onClick={clickHandler}>Get Input</button>
      </div>
    </>
  );
}

export default GetInputFieldValue;
