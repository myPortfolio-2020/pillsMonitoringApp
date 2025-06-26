import React from "react";

function ReuseableComp({ data }) {
  return (
    <>
      <div className="box">
        <div>{data.id}</div>
        <div>{data.user}</div>
        <div>{data.dept}</div>
      </div>
    </>
  );
}

export default ReuseableComp;
