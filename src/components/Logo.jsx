import React from "react";

function Logo({ width = "100px", height = "100px" }) {
  return (
    <div>
      <img
        className={`${width} ${height}`}
        src="https://i.ibb.co/X8qWbPY/Express-Echo-Logo.png"
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
