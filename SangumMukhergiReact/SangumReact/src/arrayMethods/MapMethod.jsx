import React, { useState } from "react";
import { personsArray } from "./personsArray";

function MapMethod() {
  const [data, setdata] = useState(personsArray);

  const filterArr = data.filter((item) => item.city === "Islamabad");
  const findCity = data.find((item) => item.city === "Islamabad");

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
    </>
  );
}

export default MapMethod;
