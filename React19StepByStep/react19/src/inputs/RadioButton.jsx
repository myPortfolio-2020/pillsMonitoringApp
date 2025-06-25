import React, { useState } from "react";

export default function RadioButton() {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("Islamabad");

  const radioHandler = (e) => {
    // console.log(e.target.value);
    setGender(e.target.value);
  };

  const selectCityHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div>Select Gender - {gender}</div>
      <div style={{ display: "inline-flex" }}>
        <input
          type="radio"
          id="male"
          value={"male"}
          name="gender"
          onChange={radioHandler}
          checked={gender === "male"} // if you don not write it state will show as male as given in useState but radio will not be selected
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          value={"female"}
          name="gender"
          onChange={radioHandler}
          checked={gender === "female"}
        />
        <label htmlFor="female">Female</label>
      </div>

      <div>with DropDown - city - {city}</div>
      <select onChange={selectCityHandler} defaultValue={"Islamabad"}>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
      </select>
    </>
  );
}
