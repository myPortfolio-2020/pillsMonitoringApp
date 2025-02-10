import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-around">
        <Link href="/">Home</Link>
        <Link href="/reliability" scroll={true}>
          Reliability
        </Link>
        <Link href="productivity">Productivity</Link>
      </div>
    </>
  );
}

export default Header;
