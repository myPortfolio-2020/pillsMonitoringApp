import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(100);

  const hitCounter = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respnse) => respnse.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    console.log("Rabab");
  }, []); // if we remove [] it will render every time when any state updates

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => hitCounter()}>Hit Counter</button>
      {data.map((ele, index) => {
        return (
          <div className="myList" key={index}>
            <div className="myListCol">{ele.id}</div>
            <div>{ele.name}</div>
          </div>
        );
      })}
    </>
  );
}

export default FetchData;
