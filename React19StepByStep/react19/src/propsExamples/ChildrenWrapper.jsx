import React from "react";

function ChildrenWrapper({ children, color }) {
  return (
    <>
      <div style={{ color: color, border: "1px solid #ddd", padding: "11px" }}>
        {children}
      </div>
    </>
  );
}

export default ChildrenWrapper;
