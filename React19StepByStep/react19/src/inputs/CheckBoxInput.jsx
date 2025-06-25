// TUTORIAL WAY
// SEE ANOTHER WAY TO DO THE SAME


import React, { useState } from "react";

function CheckBoxInput() {
  const [skills, setSkills] = useState([]);

  const checkBoxHandler = (e) => {
    // console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != e.target.value)]);
    }
  };

  return (
    <>
      <div>CheckBoxInput</div>
      <div>Please mark your skillset</div>
      <div>
        <input type="checkbox" id="js" value="js" onChange={checkBoxHandler} />
        <label htmlFor="js">JS</label>

        <input type="checkbox" id="rn" value="rn" onChange={checkBoxHandler} />
        <label htmlFor="rn">React Native</label>

        <input
          type="checkbox"
          id="des"
          value="des"
          onChange={checkBoxHandler}
        />
        <label htmlFor="des">Designing</label>

        <input
          type="checkbox"
          id="php"
          value="php"
          onChange={checkBoxHandler}
        />
        <label htmlFor="php">PHP</label>
      </div>
      <div>I am skilled in</div>
      {skills.map((item, index) => {
        return (
          <div key={index} className="ovalSh">
            {item}
          </div>
        );
      })}
    </>
  );
}

export default CheckBoxInput;
