import React from "react";
import Courses from "./Courses";

function Schools({ info }) {
  return (
    <>
      <div>Schools</div>
      <div className="flex">
        {info.map((item) => {
          const { id, schNm, loc, courses } = item;

          return (
            <div key={id} className="flexBox">
              <div>School Name:{schNm}</div>
              <div>School Location:{loc}</div>
              <Courses courses={courses} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Schools;
