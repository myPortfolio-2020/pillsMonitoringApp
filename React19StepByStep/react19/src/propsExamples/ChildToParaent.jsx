import React from "react";

function ChildToParaent({ clickHnaderOnParent }) {
  return (
    <>
      <div>ChildToParaent </div>
      <button onClick={() => clickHnaderOnParent()}>
        Change my value from Child
      </button>
    </>
  );
}

export default ChildToParaent;
