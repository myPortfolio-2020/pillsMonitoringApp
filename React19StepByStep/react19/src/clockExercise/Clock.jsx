import React from "react";

function Clock({ color }) {
  const timestamp = new Date();
  return (
    <>
      <div>Adjust Clock Colors: {color}</div>
      <div className="clock" style={{ color: color }}>
        {timestamp.toLocaleTimeString()}
      </div>
    </>
  );
}

export default Clock;
