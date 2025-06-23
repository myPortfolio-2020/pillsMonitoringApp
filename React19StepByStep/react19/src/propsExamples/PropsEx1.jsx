import React from "react";

function PropsEx1(props) {
  return (
    <>
      <div>PropsEx1 - {props.propOne}</div>
      <button>hit from Child</button>
    </>
  );
}

export default PropsEx1;
