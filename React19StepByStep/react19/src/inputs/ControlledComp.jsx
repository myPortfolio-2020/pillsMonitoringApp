import React, { useState } from "react";

function ControlledComp() {
  const [nm, setNm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearHandler = () => {
    setEmail("");
    setNm("");
    setPassword("");
  };
  return (
    <>
      <div>ControlledComp</div>
      {/* All inputs are controlling with onChange not by form action */}
      <form action="" method="">
        <div>
          <input
            type="text"
            onChange={(e) => setNm(e.target.value)}
            placeholder="Enter Name"
            value={nm}
          />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            value={email}
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            value={password}
          />
        </div>
        <div>
          name: {nm} - email: {email} - password:{password}
        </div>
        <div>
          <button>Submit</button>
          <button onClick={() => clearHandler}>Clear</button>
        </div>
      </form>
    </>
  );
}

export default ControlledComp;
