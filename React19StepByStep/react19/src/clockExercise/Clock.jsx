import React from "react";

function Clock() {
  const timestamp = new Date();
  return (
    <>
      <div>Adjust Clock Colors:</div>
      <div className="clock">{timestamp.toLocaleTimeString()}</div>
    </>
  );
}

export default Clock;
