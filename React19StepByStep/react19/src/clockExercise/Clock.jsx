import React, { useState, useEffect } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>Adjust Clock Colors: {color}</div>
      <div className="clock" style={{ color: color }}>
        {time.toLocaleTimeString()}
      </div>
    </>
  );
}

export default Clock;
