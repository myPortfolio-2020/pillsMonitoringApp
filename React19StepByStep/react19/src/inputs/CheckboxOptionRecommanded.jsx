import React, { useState } from "react";

function CheckboxOptionRecommanded() {
  const [skills, setSkills] = useState({
    js: true,
    rn: false,
    des: false,
    php: false,
  });

  const checkBoxHandler = (e) => {
    const { value, checked } = e.target;
    setSkills((prev) => ({ ...prev, [value]: checked }));
  };
  // Dynamic key — whatever the checkbox's value is
  return (
    <>
      <div>CheckBoxInput</div>
      <div>Please mark your skillset</div>
      <div>
        {Object.keys(skills).map((key) => (
          <div key={key}>
            <input
              type="checkbox"
              id={key}
              value={key}
              checked={skills[key]}
              onChange={checkBoxHandler}
            />
            <label htmlFor={key}>{key.toUpperCase()}</label>
          </div>
        ))}
      </div>
      <div>I am skilled in</div>
      {Object.entries(skills)
        .filter(([_, checked]) => checked)
        .map(([skill], index) => (
          <div key={index} className="ovalSh">
            {skill}
          </div>
        ))}
    </>
  );
}

export default CheckboxOptionRecommanded;
