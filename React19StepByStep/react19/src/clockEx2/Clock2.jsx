import React from "react";
import SelectOption from "./SelectOption";

function Clock2() {
  return (
    <>
      <div className="boxOuter">
        <div>
          <div>You have selected: color</div>
          <SelectOption />
        </div>

        <div className="clock02">Clock2</div>
      </div>
    </>
  );
}

export default Clock2;
