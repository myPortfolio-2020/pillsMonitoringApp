import React from "react";

function Login() {
  const userObj = {
    nm: "Rabab",
  };
  return (
    <>
      <div>Login-</div>
      <div>{userObj.nm}</div>
    </>
  );
}
export const userkey = "secret";
export default Login;
