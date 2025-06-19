import React, { useState } from "react";
import { personsArray } from "./personsArray";

function MapMethod() {
  const [data, setdata] = useState(personsArray);

  const filterArr = data.filter((item) => item.city === "Islamabad");
  const findCity = data.find((item) => item.city === "Islamabad");

  const exampleOfSome = data.some((item) => item.sal > 5000);

  return (
    <>
      <h3>ARRAY METHODS</h3>
      <h3>Map</h3>
      {data.map((person, index) => {
        return (
          <div key={index} className="flex">
            <div>{person.nm}</div>
            <div>{person.city}</div>
            <div>{person.sal}</div>
          </div>
        );
      })}
      <h3>Filter for Islamabad City</h3>
      {filterArr.map((item, index) => {
        return (
          <div key={index} className="flex">
            <div>{item.nm}</div>
            <div>{item.sal}</div>
          </div>
        );
      })}
      <h3>Find - first record</h3>
      <div>
        <div>First Records for Islamabad</div>
        <div>
          {findCity.nm} - {findCity.sal}
        </div>
      </div>
      <h3>Some - gives true and false</h3>
      <div>Is there any salary greater than 5000?</div>
      {exampleOfSome
        ? `yes salaries are greater than 5000`
        : "No"}

        <h3>include</h3>
      
    </>
  );
}

export default MapMethod;
