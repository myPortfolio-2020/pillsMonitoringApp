import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <Link to={"/dashboard/home"} className="p-2">
          Home
        </Link>
        <Link to={"Books"} className="p-2">
          Books
        </Link>
      </div>
    </>
  );
}

export default Header;
