import React, { useState } from "react";
import One from "./One";

const building = [
  {
    bed: 1,
    door: 1,
    cat: "Studio",
  },
  {
    bed: 2,
    door: 2,
    cat: "small house",
  },
  {
    bed: 3,
    door: 3,
    cat: "Dream house",
  },
];

function Condition() {
  const [condition, setCondition] = useState(building);

  const checkHouses = () => {};

  return (
    <>
      <div>
        <h2>Check Conditions</h2>
        <div>which size you want to have?</div>

        <div>
          <button onClick={() => checkHouses()}>One</button>
          <button onClick={() => checkHouses()}>Two</button>
          <button onClick={() => checkHouses()}>Three</button>
        </div>
      </div>
    </>
  );
}

export default Condition;
