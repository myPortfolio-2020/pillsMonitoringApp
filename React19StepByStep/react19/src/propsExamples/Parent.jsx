import React, { useState } from "react";
import PropsEx1 from "./PropsEx1";
import ObjectProp from "./ObjectProp";
import ArrayProp from "./ArrayProp";
import ChildToParaent from "./ChildToParaent";
import ChildrenWrapper from "./ChildrenWrapper";

function Parent() {
  const [propOne, setPropOne] = useState(5);

  const objProp = {
    nm: "JJAAamal",
    sal: 5000,
  };
  const arrayOne = [1, 2, 3, 4, 5];
  const [val, setVal] = useState("sitting in a Parenet Component");
  const clickHnaderOnParent = () => {
    setVal("I am hit from Child");
  };
  return (
    <>
      <div>{propOne}</div>
      <button onClick={() => setPropOne(propOne * 4)}>hit btn</button>
      <PropsEx1 propOne={propOne} />
      <hr />
      <ObjectProp objProp={objProp} />
      <hr />
      <ArrayProp arrayOne={arrayOne} />
      <hr />
      <div>Parent: {val} </div>
      <ChildToParaent clickHnaderOnParent={clickHnaderOnParent} />
      <hr />
      <ChildrenWrapper>
        <div
          style={{ color: "green", border: "5px solid green", padding: "11px" }}
        >
          <div>ChildrenWrapper</div>
        </div>
      </ChildrenWrapper>
    </>
  );
}

export default Parent;
