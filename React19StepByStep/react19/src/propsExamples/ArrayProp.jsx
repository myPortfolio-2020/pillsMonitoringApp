import React from "react";

function ArrayProp(props) {
  return (
    <>
      <div>Array Props - </div>
      {props.arrayOne.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
}

export default ArrayProp;
