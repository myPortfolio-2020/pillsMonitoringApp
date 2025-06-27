import React from "react";

function Courses({ courses }) {
  const { shorts, Diploma, Certificate } = courses;
  return (
    <>
      <div>
        <div className="bold">Available Courses</div>
        <div>shorts:{shorts}</div>
        <div>Diploma:{Diploma}</div>
        <div>Certificate:{Certificate}</div>
      </div>
    </>
  );
}

export default Courses;
