import React from "react";
import ReuseableComp from "./ReuseableComp";

const data = [
  {
    id: 1,
    user: "Jamal",
    dept: "Finance",
  },
  {
    id: 2,
    user: "Kamal",
    dept: "Healthcare",
  },
  {
    id: 3,
    user: "Namal",
    dept: "IT",
  },
  {
    id: 4,
    user: "Manal",
    dept: "Finance",
  },
];

function Parent() {
  return (
    <>
      <div>Reusable Component</div>
      <div className="boxOuter">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <ReuseableComp data={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Parent;
